import React, { useState, useEffect, useRef } from "react";
import PageLayout from "../components/PageLayout";
import Button from "../components/Button";
import {
  Car,
  Copy,
  Check,
  Loader2,
  Sparkles,
  ChevronDown,
  Hash,
  X,
} from "lucide-react";

const TONES = [
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "luxury", label: "Luxury" },
  { value: "truck", label: "Truck / Off-Road" },
];

const EXAMPLE_FEATURES = [
  "Leather seats",
  "Third row",
  "Tow package",
  "Sunroof",
  "Backup camera",
  "AWD",
  "Apple CarPlay",
  "Heated seats",
  "Navigation",
  "Blind spot monitoring",
];

function FeatureInput({ features, onChange }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  function addFeature(text) {
    const trimmed = text.trim();
    if (trimmed && !features.includes(trimmed)) {
      onChange([...features, trimmed]);
    }
    setInput("");
  }

  function removeFeature(feature) {
    onChange(features.filter((f) => f !== feature));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addFeature(input);
    }
    if (e.key === "Backspace" && !input && features.length) {
      removeFeature(features[features.length - 1]);
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium mb-1.5 text-black dark:text-white">
        Key Features
      </label>
      <div
        className="flex flex-wrap gap-2 p-3 rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-white/5 min-h-[48px] cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {features.map((f) => (
          <span
            key={f}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/10 text-sm"
          >
            {f}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeFeature(f);
              }}
              className="hover:opacity-70"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => input && addFeature(input)}
          placeholder={features.length === 0 ? "Type and press Enter..." : ""}
          className="flex-1 min-w-[120px] bg-transparent outline-none text-sm placeholder:text-black/40 dark:placeholder:text-white/40"
        />
      </div>
      {features.length === 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {EXAMPLE_FEATURES.slice(0, 6).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => addFeature(f)}
              className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-xs hover:bg-black/10 dark:hover:bg-white/15 transition"
            >
              + {f}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-green-600" /> Copied
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" /> Copy
        </>
      )}
    </button>
  );
}

function OutputTabs({ descriptions }) {
  const [activeTab, setActiveTab] = useState("full");

  const tabs = [
    { id: "full", label: "Full Description" },
    { id: "short", label: "Short Description" },
    { id: "social", label: "Social Media" },
  ];

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
      <div className="flex border-b border-black/10 dark:border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-5">
        <div className="whitespace-pre-wrap text-sm leading-relaxed text-black/80 dark:text-white/80">
          {descriptions[activeTab] || "Generating..."}
        </div>
        {descriptions[activeTab] && (
          <div className="mt-4 flex justify-end">
            <CopyButton text={descriptions[activeTab]} />
          </div>
        )}
      </div>
    </div>
  );
}

function VINLookup({ onResult }) {
  const [vin, setVin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLookup() {
    if (vin.length !== 17) {
      setError("VIN must be exactly 17 characters");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`
      );
      const data = await res.json();
      const results = data.Results || [];
      const get = (id) =>
        results.find((r) => r.VariableId === id)?.Value || "";
      const year = get(29);
      const make = get(26);
      const model = get(28);
      const trim = get(38);
      if (!year || !make || !model) {
        setError("Could not decode this VIN. Try entering details manually.");
        setLoading(false);
        return;
      }
      onResult({ year, make, model, trim });
    } catch {
      setError("VIN lookup failed. Try entering details manually.");
    }
    setLoading(false);
  }

  return (
    <div className="flex gap-2 items-end">
      <div className="flex-1">
        <label className="block text-sm font-medium mb-1.5 text-black dark:text-white">
          Quick Fill: Paste a VIN
        </label>
        <div className="relative">
          <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30 dark:text-white/30" />
          <input
            type="text"
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase().slice(0, 17))}
            placeholder="e.g. 1GNSKCKC5RR..."
            maxLength={17}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-white/5 text-sm outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20 placeholder:text-black/40 dark:placeholder:text-white/40 font-mono"
          />
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
      <button
        type="button"
        onClick={handleLookup}
        disabled={loading || vin.length < 17}
        className="px-4 py-2.5 rounded-xl text-sm font-medium bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 disabled:opacity-40 transition"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Decode"}
      </button>
    </div>
  );
}

const FAQ_ITEMS = [
  {
    q: "Is this vehicle description writer really free?",
    a: "Yes, completely free with no signup required. Generate as many descriptions as you need.",
  },
  {
    q: "Can I use these descriptions on my dealer website?",
    a: "Absolutely. The descriptions are yours to use anywhere — your website, third-party listing sites, social media, print materials.",
  },
  {
    q: "Does this work for any make and model?",
    a: "Yes. Cars, trucks, SUVs, vans, any vehicle type. The AI adapts its writing style based on the vehicle type and tone you select.",
  },
  {
    q: "How is this different from a template?",
    a: "Templates are generic — every listing sounds the same. This tool generates unique copy based on your specific vehicle's features, condition, and selling points.",
  },
];

export default function VDPWriter() {
  const [form, setForm] = useState({
    year: "",
    make: "",
    model: "",
    trim: "",
    mileage: "",
    price: "",
    features: [],
    condition: "",
    tone: "professional",
  });
  const [descriptions, setDescriptions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dailyCount, setDailyCount] = useState(0);
  const outputRef = useRef(null);

  useEffect(() => {
    document.title =
      "Free AI Vehicle Description Writer for Dealers | Nobi";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Generate compelling, SEO-optimized vehicle descriptions in seconds. Paste your vehicle details, get polished listing copy. Free, no signup required."
      );
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("vdp_writer_usage");
    if (stored) {
      const { date, count } = JSON.parse(stored);
      if (date === new Date().toISOString().slice(0, 10)) {
        setDailyCount(count);
      }
    }
  }, []);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleVINResult({ year, make, model, trim }) {
    setForm((prev) => ({ ...prev, year, make, model, trim }));
  }

  async function handleGenerate(e) {
    e.preventDefault();
    if (!form.year || !form.make || !form.model) {
      setError("Year, make, and model are required.");
      return;
    }
    if (dailyCount >= 20) {
      setError("You've reached the daily limit of 20 descriptions. Come back tomorrow!");
      return;
    }

    setLoading(true);
    setError("");
    setDescriptions(null);

    try {
      const res = await fetch("/api/tools/vdp-writer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          mileage: form.mileage ? parseInt(form.mileage.replace(/,/g, ""), 10) : null,
          price: form.price ? parseInt(form.price.replace(/[$,]/g, ""), 10) : null,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to generate descriptions");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        fullText += decoder.decode(value, { stream: true });

        const parsed = parseDescriptions(fullText);
        setDescriptions(parsed);
      }

      const newCount = dailyCount + 1;
      setDailyCount(newCount);
      localStorage.setItem(
        "vdp_writer_usage",
        JSON.stringify({
          date: new Date().toISOString().slice(0, 10),
          count: newCount,
        })
      );

      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  function parseDescriptions(text) {
    const sections = { full: "", short: "", social: "" };
    const fullMatch = text.match(
      /\[FULL\]([\s\S]*?)(?=\[SHORT\]|$)/
    );
    const shortMatch = text.match(
      /\[SHORT\]([\s\S]*?)(?=\[SOCIAL\]|$)/
    );
    const socialMatch = text.match(/\[SOCIAL\]([\s\S]*?)$/);

    if (fullMatch) sections.full = fullMatch[1].trim();
    if (shortMatch) sections.short = shortMatch[1].trim();
    if (socialMatch) sections.social = socialMatch[1].trim();

    if (!fullMatch && !shortMatch && !socialMatch) {
      sections.full = text;
    }

    return sections;
  }

  const inputClass =
    "w-full px-3 py-2.5 rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-white/5 text-sm outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20 placeholder:text-black/40 dark:placeholder:text-white/40";

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-white to-slate-50 dark:from-[#0a0a0a] dark:to-black text-black dark:text-white">
        {/* Hero */}
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-8 sm:pt-20 sm:pb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Free — no signup, no catch
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Write Better Vehicle Descriptions in 10 Seconds
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Paste your vehicle details. Get polished, ready-to-post listing copy
            in three formats. Powered by AI.
          </p>
        </div>

        {/* Tool Form */}
        <div className="mx-auto max-w-2xl px-6 pb-12">
          <form onSubmit={handleGenerate} className="space-y-6">
            {/* VIN Lookup */}
            <div className="p-4 rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-black/[.02] dark:bg-white/[.02]">
              <VINLookup onResult={handleVINResult} />
              <p className="mt-2 text-xs text-black/40 dark:text-white/40 text-center">
                or fill in the details manually below
              </p>
            </div>

            {/* Vehicle Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Year *
                </label>
                <input
                  type="text"
                  value={form.year}
                  onChange={(e) => updateField("year", e.target.value)}
                  placeholder="2023"
                  maxLength={4}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Make *
                </label>
                <input
                  type="text"
                  value={form.make}
                  onChange={(e) => updateField("make", e.target.value)}
                  placeholder="Chevrolet"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Model *
                </label>
                <input
                  type="text"
                  value={form.model}
                  onChange={(e) => updateField("model", e.target.value)}
                  placeholder="Tahoe"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Trim
                </label>
                <input
                  type="text"
                  value={form.trim}
                  onChange={(e) => updateField("trim", e.target.value)}
                  placeholder="LT"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Mileage & Price */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Mileage
                </label>
                <input
                  type="text"
                  value={form.mileage}
                  onChange={(e) => updateField("mileage", e.target.value)}
                  placeholder="28,450"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Price
                </label>
                <input
                  type="text"
                  value={form.price}
                  onChange={(e) => updateField("price", e.target.value)}
                  placeholder="$52,995"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Features */}
            <FeatureInput
              features={form.features}
              onChange={(features) => updateField("features", features)}
            />

            {/* Condition */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Condition Notes
              </label>
              <textarea
                value={form.condition}
                onChange={(e) => updateField("condition", e.target.value)}
                placeholder="e.g. One owner, clean CarFax, dealer serviced"
                rows={2}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Tone */}
            <div>
              <label className="block text-sm font-medium mb-1.5">Tone</label>
              <div className="relative">
                <select
                  value={form.tone}
                  onChange={(e) => updateField("tone", e.target.value)}
                  className={`${inputClass} appearance-none pr-10`}
                >
                  {TONES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30 dark:text-white/30 pointer-events-none" />
              </div>
            </div>

            {/* Submit */}
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate Descriptions
                </>
              )}
            </Button>
          </form>

          {/* Output */}
          {descriptions && (
            <div ref={outputRef} className="mt-10 space-y-4">
              <h2 className="text-lg font-semibold">Your Descriptions</h2>
              <OutputTabs descriptions={descriptions} />
              <p className="text-xs text-center text-black/40 dark:text-white/40">
                Generated by{" "}
                <a href="/" className="underline hover:opacity-80">
                  Nobi
                </a>{" "}
                — the AI shopping assistant for auto dealers.{" "}
                <a href="/" className="underline hover:opacity-80">
                  See what else Nobi can do &rarr;
                </a>
              </p>
            </div>
          )}
        </div>

        {/* SEO Content */}
        <div className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
          <div className="border-t border-black/10 dark:border-white/10 pt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Vehicle Descriptions Matter
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                Most dealers use the same template for every listing — or leave
                descriptions blank entirely. But shoppers spend more time on
                listings with detailed, unique descriptions. VDPs with original
                copy rank better in search results. A good description does
                three things: it highlights the features that matter to real
                buyers, it differentiates your listing from the same vehicle at
                five other dealers, and it gives Google something meaningful to
                index.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                What Makes a Good Vehicle Description
              </h2>
              <ul className="space-y-2 text-black/70 dark:text-white/70">
                <li className="flex gap-2">
                  <span className="text-black dark:text-white">&#8226;</span>
                  Lead with what makes this specific vehicle worth a look — not
                  generic brand copy
                </li>
                <li className="flex gap-2">
                  <span className="text-black dark:text-white">&#8226;</span>
                  Mention the features buyers actually search for: third row,
                  tow package, sunroof, AWD
                </li>
                <li className="flex gap-2">
                  <span className="text-black dark:text-white">&#8226;</span>
                  Include condition and history details — one owner, clean
                  CarFax, low miles
                </li>
                <li className="flex gap-2">
                  <span className="text-black dark:text-white">&#8226;</span>
                  End with a reason to act: price positioning, scarcity, or an
                  invitation to contact
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                How This Tool Works
              </h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                This free AI tool generates vehicle descriptions tailored to
                each listing. Enter the year, make, model, trim, mileage, and
                key features. The AI writes a unique description that highlights
                the selling points a buyer cares about — not generic marketing
                copy, but specific details about this vehicle. You get three
                formats: a full listing description, a short description, and a
                social media post ready for Facebook Marketplace or Instagram.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {FAQ_ITEMS.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-black/10 dark:border-white/10 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium hover:bg-black/[.02] dark:hover:bg-white/[.02] transition">
                      {item.q}
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-black/40 dark:text-white/40" />
                    </summary>
                    <div className="px-4 pb-4 text-sm text-black/60 dark:text-white/60 leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Free AI Vehicle Description Writer",
            description:
              "Generate compelling, SEO-optimized vehicle descriptions in seconds. Free, no signup required.",
            url: "https://trynobi.com/tools/vdp-writer",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "Nobi",
              url: "https://trynobi.com",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </PageLayout>
  );
}
