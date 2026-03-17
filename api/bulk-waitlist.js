export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, source } = req.body || {};

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email required" });
  }

  // TODO: Replace with your email capture service (Loops, ConvertKit, Mailchimp, etc.)
  // For now, log the signup so it's visible in Vercel function logs
  console.log(`[bulk-waitlist] ${email} (source: ${source})`);

  return res.status(200).json({ ok: true });
}
