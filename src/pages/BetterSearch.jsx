import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import Button from "../components/Button";
import DemoCTAButton from "../components/DemoCTAButton";
import { VideoModal } from "../components/VideoModal";
import { Play, ArrowRight } from "lucide-react";
import { useDemoForm } from "../context/DemoFormContext";
import Marquee from "react-fast-marquee";
import FAQList from "../components/FAQList.jsx";
import FAQ_ITEMS from "../constants/faqs";

const CUSTOMER_LOGOS = [
  { alt: "UNTUCKit", src: "/media/logos/untuckit.svg" },
  { alt: "Lucchese", src: "/media/logos/lucchese.svg" },
  { alt: "Faherty", src: "/media/logos/faherty.svg" },
  { alt: "TOOLUP", src: "/media/logos/toolup.svg" },
  { alt: "Kilte", src: "/media/logos/kilte.svg" },
  { alt: "Alps and Meters", src: "/media/logos/alps_meters.png" },
];

export default function BetterSearch() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { onOpen: openDemoForm } = useDemoForm();

  useEffect(() => {
    document.title = "Semantic Search that Converts | Nobi";
  }, []);

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-white via-white to-slate-50 text-black min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute -left-32 -top-24 w-80 h-80 bg-purple-200/50 blur-3xl" aria-hidden />
          <div className="absolute right-[-120px] top-16 w-96 h-96 bg-blue-200/50 blur-3xl" aria-hidden />

          <div className="relative mx-auto max-w-6xl xl:max-w-7xl px-6 pb-14 pt-16 sm:pt-20 lg:pt-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
              <div className="space-y-6">
                <p className="text-sm font-semibold tracking-[0.2em] text-purple-600 uppercase">
                  Semantic search for better results
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-slate-900 text-balance">
                  More accurate results, zero dead ends
                </h1>
                <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                  Natural-language, typo-tolerant semantic search that ranks SKUs by purchase intent—proven conversion lift in days, verified by A/B tests.
                </p>

                <DemoCTAButton className="h-12 rounded-full bg-black text-white hover:opacity-90 shadow-sm px-6 w-full sm:w-auto" />
              </div>

              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-200/70 via-white to-blue-200/70 rounded-[34px] blur-3xl opacity-90" aria-hidden />

                <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-[0_28px_80px_-30px_rgba(15,23,42,0.45)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_50%_85%,rgba(236,72,153,0.12),transparent_40%)]" aria-hidden />
                  <div className="relative aspect-[16/9]">
                    <iframe
                      className="absolute inset-0 h-full w-full rounded-2xl"
                      src="https://www.youtube.com/embed/RKqGC3CVZd0?rel=0&modestbranding=1"
                      title="Nobi semantic search demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="border-t border-slate-200/70 bg-gradient-to-b from-slate-50 to-white pb-20 pt-16">
          <div className="mx-auto max-w-6xl xl:max-w-7xl px-6 space-y-4">
            <p className="text-center text-base text-black/60 tracking-[0.04em]">
              Trusted by ecommerce teams who are serious about search & discovery
            </p>
            <div className="marquee-container">
              <div className="bg-white rounded-xl border border-[#d6d6d6] shadow-[0_8px_22px_-18px_rgba(15,23,42,0.45)] overflow-hidden py-5 px-2">
                <Marquee speed={36} gradient={false} pauseOnHover>
                  {[...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS].map((logo, idx) => (
                    <img
                      key={`${logo.alt}-${idx}`}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-5 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition mx-4"
                      loading="lazy"
                    />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </section>

        {/* Key metrics */}
        <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16">
          <div className="mx-auto max-w-6xl xl:max-w-7xl px-6">
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  stat: "Up to 30%",
                  label: "Lift in conversion rate (A/B proven)",
                  palette: "blue",
                },
                {
                  stat: "35.3%",
                  label: "Lift in add-to-cart rate",
                  palette: "purple",
                },
                {
                  stat: "55.8%",
                  label: "Lift in average order value",
                  palette: "blue",
                },
                {
                  stat: "6%",
                  label: "Lift in product views",
                  palette: "purple",
                },
              ].map((item, idx) => (
                <div
                  key={item.stat}
                  className={`relative overflow-hidden rounded-xl border text-white shadow-[0_18px_42px_-24px_rgba(64,41,153,0.45)] ${
                    item.palette === "blue"
                      ? "border-[#3f6bff] bg-gradient-to-br from-[#3fb7ff] via-[#4f7dff] to-[#6b52d9]"
                      : "border-[#4c3ab8] bg-gradient-to-br from-[#4a47a8] via-[#6b52d9] to-[#7f4ff0]"
                  }`}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.16),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_36%)]" aria-hidden />
                  <div className="relative px-5 sm:px-6 py-6 sm:py-7 flex flex-col gap-2 text-center">
                    <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-sm">{item.stat}</div>
                    <div className="text-xs sm:text-sm font-medium leading-relaxed text-white/85">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placements / surfaces */}
        <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16">
          <div className="mx-auto max-w-6xl xl:max-w-7xl px-6 space-y-5 sm:space-y-8">
            <div className="text-center space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-600 font-semibold">
                Put Nobi wherever shoppers need answers
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
                Drop-in placements and APIs for every touchpoint
              </h2>
              <p className="text-base text-slate-600">
                Bring semantic search into your header, PDPs, collections, and campaigns—fast to launch, easy to measure.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Show more relevant search results",
                  body: "Swap in the Dual Mode bar or AI toggle so shoppers choose native or semantic without leaving the page.",
                  type: "search",
                },
                {
                  title: "Answer product questions instantly",
                  body: "Nobi's assistant not only searches your catalog, it also uses it to answer product-specific questions on PDPs.",
                  type: "pdp",
                },
                {
                  title: "Guide stalled browsers",
                  body: "Fix zero-results and suggest next clicks with intent-based prompts right in collections and search pages.",
                  type: "collections",
                },
                {
                  title: "Filter large collections conversationally",
                  body: "Let shoppers say “show trail runners, waterproof, under $150” and apply filters instantly without dropdown fatigue.",
                  type: "collections-assist",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center bg-white rounded-2xl border border-slate-200 shadow-[0_18px_46px_-32px_rgba(15,23,42,0.35)] p-5 sm:p-6"
                >
                  <div className="w-full sm:w-1/2">
                    <VisualMock type={card.type} />
                  </div>
                  <div className="w-full sm:w-1/2 space-y-3 text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits with alternating visuals */}
        <section className="bg-gradient-to-b from-[#17122f] via-[#1c1540] to-[#17122f] py-20 text-white">
          <div className="mx-auto max-w-6xl xl:max-w-7xl px-6 space-y-10 sm:space-y-14">
            <div className="text-left md:text-center space-y-3 max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300 font-semibold">
                Built for ecommerce search teams
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                How Nobi removes friction across the funnel
              </h2>
              <p className="text-base text-slate-300">
                Intent understanding, conversational filtering, and drop-in deployment so shoppers find the right product on the first try.
              </p>
            </div>

            {[
              {
                title: "Understands what shoppers mean, not just the keywords they type",
                body: "Semantic + RAG ranking closes the language gap—“breathable gym shirt” maps to ventilated performance tops on the first try, cutting zero-result pages.",
                imageType: "intent",
                cta: {
                  label: "Why semantic search is better",
                  href: "http://localhost:5173/blog/semantic-search-vs-keyword-search",
                },
              },
              {
                title: "Conversational filters instead of endless dropdowns",
                body: "Shoppers narrow results by just saying “trail running, waterproof, under $150,” and Nobi applies the filters instantly—no dropdown fatigue, fewer bounces.",
                imageType: "filters",
              },
              {
                title: "Drop-in everywhere in minutes",
                body: "Toggle on AI in the header, add an Ask AI bar to collections, or launch via JS API—ships with your existing search and requires only a couple of tags.",
                imageType: "install",
              },
            ].map((item, idx) => {
              const reverse = idx % 2 === 1;
              return (
                <div
                  key={item.title}
                  className={`grid md:grid-cols-2 gap-8 sm:gap-10 items-center ${reverse ? "md:[&>*:first-child]:order-last" : ""} pb-14 sm:pb-24`}
                >
                  <div className="space-y-4 text-left md:text-left">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed">{item.body}</p>
                    {item.cta && (
                      <div className="pt-2">
                        <a
                          href={item.cta.href}
                          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
                        >
                          {item.cta.label}
                        </a>
                      </div>
                    )}
                  </div>
                  <BenefitVisual type={item.imageType} />
                </div>
              );
            })}

            <div className="flex justify-center">
              <a
                href="https://docs.nobi.ai/components/search-bar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#17122f] px-5 py-3 text-sm font-semibold shadow-[0_10px_32px_-24px_rgba(255,255,255,0.6)] hover:bg-white/90 border border-white/20"
              >
                Explore the search docs
              </a>
            </div>
          </div>
        </section>

        {/* Lucchese case study */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-white py-20">
          <div className="mx-auto max-w-6xl xl:max-w-7xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1">
                Case study
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-slate-900">
                How Lucchese enhanced engagement and hit 33x ROI with Nobi AI search
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Lucchese set a 2025 mandate to “Make it Smart.” Traffic and speed were up, but conversions were down. Keyword search forced constant copy edits and still missed what shoppers meant. Nobi replaced guesswork with semantic + RAG search, lifting conversion and revenue within weeks.
              </p>

              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { label: "Conversion lift", value: "21%" },
                  { label: "Incremental revenue (90 days)", value: "$148k" },
                  { label: "ROI", value: "33x" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.35)]"
                  >
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
                    <div className="text-2xl font-semibold text-slate-900 mt-1">{stat.value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">What Nobi changed</h3>
                <ul className="space-y-2 text-base text-slate-600 list-disc list-inside">
                  <li>Always-show-results: even “Terlingua” surfaced relevant boots instead of zero results.</li>
                  <li>Better rankings with RAG: “Olive” brought Dante Olive Chocolate to row two, no “load more.”</li>
                  <li>Semantic rescue: “card holder” mapped to wallets and cases, saving the sale.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Key takeaways</h4>
                <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                  <li>Defaulting to relevant alternatives beats zero-results pages.</li>
                  <li>RAG-driven ranking surfaces the “right” SKU faster, reducing drop-off.</li>
                  <li>Conversational search plus quick add-to-cart accelerates throughput to purchase.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_22px_60px_-30px_rgba(15,23,42,0.4)] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.12),transparent_42%)]" />
                <div className="relative p-6 sm:p-8 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="/media/logos/lucchese.svg"
                      alt="Lucchese"
                      className="h-7 w-auto object-contain"
                    />
                    <span className="text-sm text-slate-500">Founded 1883 · “Make it Smart” initiative</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Before: keyword search shows 0 results",
                        src: "https://storage.googleapis.com/nobi-public/docs_and_marketing_websites/features/better-search/terlingua-no-results.png",
                      },
                      {
                        title: "After Nobi AI: relevant boots surfaced from “terlingua”",
                        src: "https://storage.googleapis.com/nobi-public/docs_and_marketing_websites/features/better-search/terlingua-nobi.png",
                      },
                    ].map((shot) => (
                      <figure
                        key={shot.src}
                        className="relative rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-[0_12px_34px_-28px_rgba(15,23,42,0.35)]"
                      >
                        <div className="relative aspect-[4/3] bg-white">
                          <img
                            src={shot.src}
                            alt={shot.title}
                            className="absolute inset-0 w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="px-4 py-3 text-sm font-semibold text-slate-800 text-center">
                          {shot.title}
                        </figcaption>
                      </figure>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src="/media/lourdes.png"
                      alt="Lourdes headshot"
                      className="h-12 w-12 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Lourdes — “Make it Smart” lead, Lucchese</p>
                      <p className="text-xs text-slate-600">
                          “If you want to learn and be inspired, you should implement a tool like Nobi. We've seen great incremental results... but the biggest reason a brand should implement this is that you have the opportunity to apply more information towards optimizing
                          campaigns and your broader brand and e-comm goals.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search-focused FAQs */}
        <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16 border-t border-slate-200/70">
          <div className="mx-auto max-w-6xl xl:max-w-7xl px-6">
            <FAQList
              id="search-faqs"
              title="FAQs about Nobi search"
              headingAlign="center"
              sectionClassName="px-0"
              padding="py-0"
              columns={2}
              items={FAQ_ITEMS.filter((item) => item.topics?.includes("search"))}
            />
          </div>
        </section>

        <VideoModal
          open={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          youtube="https://www.youtube.com/watch?v=RKqGC3CVZd0"
        />

        {/* Closing CTA */}
        <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16">
          <div className="mx-auto max-w-5xl px-6 text-center space-y-5">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
                Ready to see more search-driven conversions?
              </h2>
              <p className="text-base text-slate-600">
                Launch Nobi alongside your current search and measure the lift—no credit card required.
              </p>
            </div>
            <div className="flex justify-center">
              <DemoCTAButton className="h-12 rounded-full bg-black text-white hover:opacity-90 shadow-sm px-6 w-full sm:w-auto" />
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

function VisualMock({ type }) {
  const base =
    "w-full h-40 sm:h-44 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.35)] overflow-hidden";

  if (type === "search") {
    return (
      <div className={base + " p-1"}>
        <img
          src="https://storage.googleapis.com/nobi-public/docs_and_marketing_websites/features/better-search/mobile-search.png"
          alt="Nobi search experience"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  if (type === "pdp") {
    return (
      <div className={base + " p-4 flex flex-col gap-2"}>
        <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-2">
          <div className="flex justify-end">
            <div className="rounded-lg border border-slate-300 bg-white text-[11px] text-slate-700 px-3 py-2 max-w-[85%]">
              “Is it true to size?”
            </div>
          </div>
          <div className="flex justify-start">
            <div className="rounded-lg border border-slate-200 bg-slate-50 text-slate-800 text-xs px-3 py-2 max-w-[85%]">
              Yes—customers note it fits true. If you are between sizes, size up for a relaxed fit.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "collections") {
    return (
      <div className={base + " p-4 flex flex-col gap-3 items-center justify-center text-center"}>
        <div className="w-full max-w-xs rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-inner">
          runing shoe
        </div>
        <div className="text-lg font-semibold text-slate-900">⛔ No results found</div>
      </div>
    );
  }

  if (type === "collections-assist") {
    return (
      <div className={base + " p-3 flex flex-col gap-3"}>
        <div className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] text-slate-600 shadow-inner flex items-center gap-2">
          <span className="inline-flex h-4 w-4 items-center justify-center text-slate-500">✨</span>
          “Show red dresses under $200”
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { src: "/media/prod-1.png", name: "Red Floral Midi", price: "$178" },
            { src: "/media/prod-2.png", name: "Sleeveless A-line", price: "$148" },
            { src: "/media/prod-3.png", name: "Silk Slip Dress", price: "$192" },
            { src: "/media/prod-4.png", name: "Wrap Dress", price: "$168" },
          ].map((item) => (
            <div key={item.src} className="rounded-lg border border-slate-200 bg-white p-2 space-y-2 shadow-[0_6px_18px_-12px_rgba(15,23,42,0.25)]">
              <div className="h-20 rounded-md overflow-hidden bg-slate-100">
                <img src={item.src} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="text-[12px] font-semibold text-slate-900 truncate">{item.name}</div>
              <div className="text-[11px] text-slate-600">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={base + " p-4 flex flex-col gap-3"}>
      <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700 space-y-2">
        <div className="font-semibold text-slate-800">Open Nobi via JS API</div>
        <div className="rounded bg-slate-900 text-white font-mono text-[11px] px-3 py-2">
          {`<button onClick="Nobi.open()">Ask Nobi</button>`}
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">
            Email CTA
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">
            Promo banner
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">
            In-app menu
          </span>
        </div>
      </div>
    </div>
  );
}

function BenefitVisual({ type }) {
  const shell =
    "relative w-full h-52 sm:h-56 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] overflow-hidden p-4";

  if (type === "intent") {
    return (
      <div className={shell}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.12),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_40%)]" />
        <div className="relative space-y-3 text-sm text-slate-800">
          <div className="flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 w-fit text-[12px]">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            AI mode
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
            <div className="text-xs text-slate-500 mb-1">Shopper query</div>
            <div className="font-semibold text-slate-900">
              “Breathable gym shirt that works for HIIT”
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Ventilated tee", "Mesh panel top", "Lightweight tank"].map((label) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-white p-2">
                <div className="h-20 rounded-md bg-gradient-to-br from-indigo-100 to-blue-100 mb-2" />
                <div className="text-[11px] font-semibold text-slate-800">{label}</div>
                <div className="text-[11px] text-slate-500">Relevant · In stock</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "filters") {
    return (
      <div className={shell}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_45%),radial-gradient(circle_at_75%_15%,rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="relative space-y-3 text-sm text-slate-800">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500 mb-1">Conversation</div>
            <p className="font-semibold text-slate-900">
              “Trail running shoes, waterproof, under $150.”
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Trail", "Waterproof", "Under $150", "Neutral"].map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-slate-900 text-white px-3 py-1 shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-md border border-slate-200 p-2">
                <div className="h-14 rounded bg-gradient-to-br from-slate-100 to-white mb-2" />
                <div className="h-3 rounded bg-slate-200 w-2/3 mb-1" />
                <div className="h-3 rounded bg-slate-100 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={shell}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.12),transparent_40%)]" />
      <div className="relative space-y-3 text-sm text-slate-800">
        <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-2">
          <div className="text-xs font-semibold text-slate-800">Install in minutes</div>
          <div className="rounded bg-slate-900 text-white font-mono text-[11px] px-3 py-2 overflow-x-auto">
            {`<script src="https://assistant-script.nobi.ai/nobi.bundle.js"></script>\n<nobi-search-bar default-mode="site" show-mode-toggle="true"></nobi-search-bar>`}
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {["Header", "Collections", "Nav item", "CTA button"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-600 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
