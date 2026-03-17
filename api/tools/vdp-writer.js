const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

function buildPrompt(data) {
  const { year, make, model, trim, mileage, price, features, condition, tone, voice } =
    data;

  const vehicle = [year, make, model, trim].filter(Boolean).join(" ");
  const featureList =
    features && features.length > 0 ? features.join(", ") : "not specified";
  const mileageStr = mileage
    ? `${Number(mileage).toLocaleString()} miles`
    : "mileage not provided";
  const priceStr = price
    ? `$${Number(price).toLocaleString()}`
    : "price not provided";
  const conditionStr = condition || "no condition notes provided";

  const toneGuide = {
    professional:
      "Write in a professional, confident tone. Polished but not stuffy.",
    friendly:
      "Write in a warm, approachable tone. Conversational but credible.",
    luxury:
      "Write in an upscale, refined tone. Emphasize craftsmanship, comfort, and prestige.",
    truck:
      "Write in a rugged, capability-focused tone. Emphasize power, utility, and toughness.",
  };

  return `You are an expert automotive copywriter who writes compelling vehicle descriptions for dealer listings. Your descriptions sell vehicles by highlighting specific features that buyers care about.

RULES:
- Output plain text only. No markdown formatting, no asterisks, no bullet point characters, no bold/italic markers. The output will be pasted directly into dealer listing sites.
- NEVER fabricate features, specs, or details not provided in the input
- Use specific numbers naturally (mileage, price)
- Avoid generic filler like "This vehicle is a great choice for anyone looking for..."
- Lead with the most compelling feature for this vehicle type
- Use automotive language that sounds natural, not jargon-heavy
- ${toneGuide[tone] || toneGuide.professional}${voice ? `\n- DEALERSHIP VOICE: The dealer describes themselves as: "${voice}". Match this voice and personality in your writing style.` : ""}

VEHICLE: ${vehicle}
MILEAGE: ${mileageStr}
PRICE: ${priceStr}
KEY FEATURES: ${featureList}
CONDITION: ${conditionStr}

Generate exactly three descriptions in this format (use these exact tags):

[FULL]
A detailed 150-250 word description for a vehicle listing page. Lead with the most compelling selling point. Mention features naturally. End with a call to action.

[SHORT]
A concise 50-75 word description. Hit the key specs and features. Direct and scannable.

[SOCIAL]
A social media post for Facebook Marketplace or Instagram. Use line breaks and check marks (✓) for features. Keep it punchy. End with a CTA like "DM or call to schedule a test drive."`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const { year, make, model, features, tone, trim, mileage, price, condition, voice } =
    req.body || {};

  if (!year || !make || !model) {
    return res.status(400).json({ error: "Year, make, and model are required" });
  }

  const prompt = buildPrompt({
    year,
    make,
    model,
    trim,
    mileage,
    price,
    features: features || [],
    condition,
    voice,
    tone: tone || "professional",
  });

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        stream: true,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", err);
      return res.status(502).json({ error: "AI generation failed" });
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");
    res.setHeader("Cache-Control", "no-cache");

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6);
        if (data === "[DONE]") continue;

        try {
          const event = JSON.parse(data);
          if (
            event.type === "content_block_delta" &&
            event.delta?.type === "text_delta"
          ) {
            res.write(event.delta.text);
          }
        } catch {
          // skip malformed lines
        }
      }
    }

    res.end();
  } catch (err) {
    console.error("VDP Writer error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
