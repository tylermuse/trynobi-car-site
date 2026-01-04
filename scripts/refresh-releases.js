/**
 * Generate per-day release JSON files in src/content/releases by inspecting git tags in ../code.
 *
 * How it works:
 * - Finds tags with prefixes assistant-, api-, dashboard-.
 * - For each prefix, diffs current tag against the previous tag of the same prefix.
 * - Collects a limited set of changed file paths (and small stats).
 * - Optionally asks OpenAI to summarize the diff into human-friendly bullets.
 *
 * Env:
 *   OPENAI_API_KEY (optional) to enable LLM summarization.
 *   OPENAI_MODEL   (optional, default gpt-4o-mini)
 *
 * Usage:
 *   node scripts/refresh-releases.js
 */

import { execSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(new URL(".", import.meta.url).pathname, "..");
const websiteRoot = path.resolve(projectRoot, "..");
const codeRepo = path.resolve(websiteRoot, "code");
const releasesDir = path.resolve(websiteRoot, "nobi-website/src/content/releases");

const TAG_PREFIXES = ["assistant-", "api-", "dashboard-"];
const DAYS_BACK = 30; // limit lookback window
const MAX_FILES_PER_TAG = 12;
const MAX_BULLETS_PER_DAY = 6;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

function sh(cmd) {
  return execSync(cmd, { cwd: codeRepo, encoding: "utf8" });
}

function getTags() {
  const out = sh(`git for-each-ref 'refs/tags/*' --format='%(creatordate:short) %(refname:strip=2)' --sort=creatordate`);
  const lines = out.trim().split("\n").filter(Boolean);
  return lines
    .map((l) => {
      const [date, tag] = l.split(" ");
      const prefix = TAG_PREFIXES.find((p) => tag.startsWith(p));
      return prefix ? { date, tag, prefix } : null;
    })
    .filter(Boolean);
}

function withinDays(dateStr, days) {
  const d = new Date(dateStr);
  const now = new Date();
  const diffDays = (now - d) / 86400000;
  return diffDays <= days;
}

function collectFileStats(oldRef, newRef) {
  const args = ["diff", `${oldRef}..${newRef}`, "--stat"];
  const res = spawnSync("git", ["-C", codeRepo, ...args], { encoding: "utf8" });
  if (res.status !== 0) return [];
  return res.stdout
    .split("\n")
    .map((line) => line.trim())
    .filter((l) => l.includes("|") && !l.endsWith("files changed") && !l.startsWith("create mode") && !l.startsWith("delete mode"))
    .slice(0, MAX_FILES_PER_TAG)
    .map((l) => {
      const [file, stat] = l.split("|").map((s) => s.trim());
      return `${file} (${stat})`;
    });
}

async function summarizeWithOpenAI(tag, files) {
  if (!OPENAI_API_KEY) return null;
  const prompt = `You are a concise release-notes assistant. Given a deployment tag and changed files, produce 2-3 bullet points (<=18 words each) describing the user- or merchant-facing impact. Avoid code jargon. If impact is unclear, say "Internal maintenance and test coverage.".

Tag: ${tag}
Changed files:
${files.map((f) => "- " + f).join("\n")}
`;

  const body = {
    model: OPENAI_MODEL,
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    max_tokens: 180,
  };

  try {
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(body),
    });
    if (!resp.ok) throw new Error(await resp.text());
    const json = await resp.json();
    const text = json.choices?.[0]?.message?.content || "";
    return text
      .split("\n")
      .map((l) => l.replace(/^[*-]\s*/, "").trim())
      .filter(Boolean)
      .slice(0, 3);
  } catch (err) {
    console.warn("OpenAI summarization failed:", err.message);
    return null;
  }
}

async function main() {
  const tags = getTags().filter((t) => withinDays(t.date, DAYS_BACK));
  if (tags.length === 0) {
    console.log("No tags in range; nothing to do.");
    return;
  }

  const prevByPrefix = {};
  const byDate = {};

  for (const { date, tag, prefix } of tags) {
    const prev = prevByPrefix[prefix];
    const base = prev || `${tag}^`;
    const files = collectFileStats(prev || tag, tag);
    prevByPrefix[prefix] = tag;

    let bullets = files;
    const ai = await summarizeWithOpenAI(tag, files);
    if (ai && ai.length) bullets = ai;

    const line = `${tag}: ${bullets.join("; ")}`;
    byDate[date] = byDate[date] || [];
    byDate[date].push(line);
  }

  fs.mkdirSync(releasesDir, { recursive: true });

  Object.entries(byDate).forEach(([date, lines]) => {
    const highlights = lines.slice(0, MAX_BULLETS_PER_DAY);
    const payload = {
      slug: date,
      title: `${date} deployments`,
      date,
      highlights,
    };
    const file = path.join(releasesDir, `${date}.json`);
    fs.writeFileSync(file, JSON.stringify(payload, null, 2));
    console.log("Wrote", file);
  });

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
