import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Zap,
  SlidersHorizontal,
  Sparkles,
  Check,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

function CTAButton({ size = "lg", children, className = "" }) {
  const sizes = {
    md: "h-11 px-5 text-[15px]",
    lg: "h-12 px-7 text-base",
    xl: "h-14 px-8 text-lg",
  };
  return (
    <a
      href="mailto:tyler@trynobi.com?subject=Demo%20Request"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all bg-black text-white shadow-sm hover:opacity-90 active:scale-[0.98] ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}

function StickyBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="https://trynobi.com">
          <img
            src="https://trynobi.com/media/nobi-logo@2x.png"
            alt="Nobi"
            className="h-7 w-auto"
          />
        </a>
        <CTAButton size="md">Book a Demo</CTAButton>
      </div>
    </header>
  );
}

export default function AutoAIAssistantLanding() {
  useEffect(() => {
    document.title = "AI Assistant for Auto Dealerships | Nobi";
  }, []);

  return (
    <div className="font-sans text-slate-900 antialiased">
      <StickyBar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 text-center">
        <div className="absolute -left-40 -top-32 w-96 h-96 bg-fuchsia-400/25 blur-[64px]" aria-hidden="true" />
        <div className="absolute -right-36 top-10 w-[28rem] h-[28rem] bg-indigo-300/25 blur-[64px]" aria-hidden="true" />
        <motion.div
          className="relative max-w-[52rem] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} custom={0} className="text-[0.8125rem] font-semibold tracking-[0.2em] uppercase text-purple-500 mb-4">
            Purpose-Built for Auto Retail
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight [text-wrap:balance]">
            The{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
              AI Assistant
            </span>{" "}
            That Helps Your Shoppers Find Cars
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-5 text-[clamp(1.05rem,2.5vw,1.25rem)] text-slate-600 max-w-[40rem] mx-auto leading-relaxed">
            Nobi is an AI-powered shopping assistant built specifically for auto dealerships. It sits on your website and helps shoppers search your live inventory through natural conversation.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CTAButton size="lg">Book a Demo</CTAButton>
            <span className="text-sm text-slate-500">Free pilot &middot; Live in under 24 hours</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <div className="border-t border-slate-200/60 bg-slate-50/50 px-6 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[0.8125rem] font-semibold text-slate-400 uppercase tracking-widest mb-3">
            The Market Is Moving
          </p>
          <div className="inline-block rounded-xl border border-slate-200 bg-white shadow-sm px-6 py-4 max-w-[42rem] text-[0.9375rem] text-slate-600 leading-relaxed">
            BCG and OpenAI project that{" "}
            <strong className="text-slate-800">40M+ car purchases per year will be influenced by AI by 2030</strong>. Dealers who move early could see up to a{" "}
            <strong className="text-slate-800">20% topline boost</strong>.
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">
              Generic AI doesn't understand your business
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-base text-slate-600 max-w-[38rem] mx-auto mt-3">
              Your dealership isn't an e-commerce store. You need AI built for how car shoppers actually talk and think.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                scenario: "Shopper says:",
                title: '"I need something safe for my teenager"',
                desc: "Nobi understands this means high safety ratings, reasonable price, and reliability. It searches your inventory and surfaces matches like a Civic, Corolla, or Mazda3.",
              },
              {
                scenario: "Shopper says:",
                title: '"What trucks can tow my boat?"',
                desc: "Nobi knows towing capacity matters here. It filters your truck inventory by tow rating and returns options with the specs that answer the actual question.",
              },
              {
                scenario: "Shopper says:",
                title: '"Show me something under $400/month"',
                desc: "Shoppers think in monthly payments, not MSRP. Nobi works with how real buyers think about affordability and surfaces vehicles in the right range.",
              },
              {
                scenario: "Shopper says:",
                title: '"I want a red SUV with leather seats"',
                desc: "Color, interior, body style, and features all in one sentence. Nobi parses it all and searches your live inventory for exact matches.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 pl-7 shadow-[0_14px_36px_-20px_rgba(15,23,42,0.25)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-fuchsia-500 to-violet-500" />
                <p className="text-[0.8125rem] font-semibold text-violet-500 mb-1">{card.scenario}</p>
                <h3 className="text-[1.0625rem] font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Chat */}
      <section className="pb-16">
        <div className="max-w-[42rem] mx-auto px-6">
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white shadow-[0_22px_60px_-30px_rgba(15,23,42,0.35)] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="text-sm font-semibold text-slate-700">Nobi AI Assistant</span>
            </div>
            <div className="px-4 py-5 flex flex-col gap-3">
              <div className="max-w-[85%] self-end bg-black text-white rounded-2xl rounded-br-sm px-4 py-3 text-[0.9375rem] leading-normal">
                I'm looking for a fuel-efficient sedan for my commute, preferably under 20K miles and under $25,000
              </div>
              <div className="max-w-[85%] self-start bg-slate-100 text-slate-800 border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 text-[0.9375rem] leading-normal">
                Here are <strong className="text-violet-500">5 sedans</strong> on the lot that match your criteria:
                <br /><br />
                <strong className="text-violet-500">2023 Honda Civic EX</strong> — $23,900 | 33/42 MPG | 14,200 mi
                <br />
                <strong className="text-violet-500">2023 Toyota Camry LE</strong> — $24,500 | 28/39 MPG | 11,800 mi
                <br />
                <strong className="text-violet-500">2024 Hyundai Elantra SEL</strong> — $22,700 | 31/41 MPG | 8,400 mi
                <br />
                <strong className="text-violet-500">2023 Mazda3 Select</strong> — $23,200 | 28/36 MPG | 16,100 mi
                <br />
                <strong className="text-violet-500">2022 Kia K5 LXS</strong> — $21,400 | 29/38 MPG | 19,800 mi
                <br /><br />
                The Elantra has the lowest mileage and the Civic gets the best highway MPG. Want me to narrow it down?
              </div>
              <div className="max-w-[85%] self-end bg-black text-white rounded-2xl rounded-br-sm px-4 py-3 text-[0.9375rem] leading-normal">
                Which ones have Apple CarPlay and a sunroof?
              </div>
            </div>
            <div className="border-t border-slate-200 px-4 py-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                <span className="text-sm text-slate-400">Ask anything about our inventory...</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why auto-specific AI (dark) */}
      <section className="bg-gradient-to-b from-[#17122f] via-[#1c1540] to-[#17122f] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">
              Why auto-specific AI converts more
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-base text-slate-300 max-w-[38rem] mx-auto mt-3">
              Three ways Nobi turns website visitors into showroom traffic.
            </motion.p>
          </motion.div>
          <motion.div
            className="max-w-3xl mx-auto space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Search className="w-6 h-6" />,
                title: "Understands how car shoppers think",
                desc: '"Family SUV with good gas mileage" maps to Palisade, Telluride, and Traverse on the first try. Nobi closes the language gap between how shoppers describe what they need and how your inventory is structured.',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Every search leads somewhere",
                desc: "Even when there's no exact match, Nobi always surfaces relevant alternatives. No more dead-end filter results that make shoppers bounce to your competitor's site.",
              },
              {
                icon: <SlidersHorizontal className="w-6 h-6" />,
                title: "Conversational filtering replaces dropdown fatigue",
                desc: 'Shoppers type "trucks, 4WD, under $35K, low miles" and Nobi applies the filters instantly. No clicking through make, model, year, price, mileage, body style, and drivetrain dropdowns.',
              },
            ].map((block, i) => (
              <motion.div key={block.title} variants={fadeUp} custom={i} className="grid grid-cols-[auto_1fr] gap-5 items-start">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/10 text-fuchsia-300 flex-shrink-0">
                  {block.icon}
                </div>
                <div>
                  <h3 className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-semibold mb-2">{block.title}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">{block.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">
              AI in auto retail is accelerating
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: "40M+", label: "Car purchases influenced by AI annually by 2030", color: "purple" },
              { num: "20%", label: "Topline boost for dealers who adopt AI early", color: "blue" },
              { num: "72%", label: "Of car shoppers visit dealer sites but leave without engaging", color: "purple" },
              { num: "0", label: "Dead-end searches with Nobi", color: "blue" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                custom={i}
                className={`relative overflow-hidden rounded-xl text-white text-center p-6 shadow-[0_18px_42px_-24px_rgba(64,41,153,0.45)] ${
                  m.color === "purple"
                    ? "border border-[#4c3ab8] bg-gradient-to-br from-[#4a47a8] via-[#6b52d9] to-[#7f4ff0]"
                    : "border border-[#3f6bff] bg-gradient-to-br from-[#3fb7ff] via-[#4f7dff] to-[#6b52d9]"
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.16),transparent_40%)]" />
                <div className="relative text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
                  {m.num}
                </div>
                <div className="relative mt-1 text-[0.8125rem] font-medium text-white/85">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gradient-to-br from-purple-900 to-violet-700 px-6 py-14 text-center text-white">
        <blockquote className="text-lg font-medium italic max-w-[44rem] mx-auto mb-4 leading-relaxed">
          "AI will become the best car sales advisor... the dealers who adopt AI-driven tools early will gain an outsized share of the market."
        </blockquote>
        <cite className="text-sm text-violet-300 not-italic">
          BCG x OpenAI, "Will AI Become Your Best Car Sales Advisor?" (2025)
        </cite>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">
              From demo to live in under 24 hours
            </motion.h2>
          </motion.div>
          <motion.div
            className="max-w-[37.5rem] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: 1, time: "15 minutes", title: "See a live demo", desc: "We walk you through Nobi using a real dealership inventory so you can see exactly how it works for shoppers." },
              { step: 2, time: "Same day", title: "Connect your inventory", desc: "We plug into your existing DMS or inventory feed. No data migration, no disruption to your current systems." },
              { step: 3, time: "Under 24 hours", title: "Go live with one script tag", desc: "Your web provider adds a single line of code. No redesign, no new platform. Nobi goes live and shoppers start searching." },
              { step: 4, time: "Ongoing", title: "Watch engagement climb", desc: "Track VDP views, lead submissions, and shopper interactions. See the impact of AI search on your website performance." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                custom={i}
                className={`flex gap-5 relative ${i < 3 ? "pb-8" : ""}`}
              >
                {i < 3 && (
                  <div className="absolute left-[1.3125rem] top-11 bottom-0 w-0.5 bg-slate-200" />
                )}
                <div className="w-11 h-11 min-w-[2.75rem] bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white text-base font-extrabold rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.35)]">
                  {item.step}
                </div>
                <div>
                  <p className="text-xs font-semibold text-violet-500 mb-1">{item.time}</p>
                  <h3 className="text-[1.0625rem] font-bold text-slate-900 mb-0.5">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-gradient-to-b from-[#17122f] to-[#1c1540] px-6 py-20 text-center text-white">
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold mb-4">
          See AI working on your website
        </h2>
        <p className="text-base text-slate-300 max-w-lg mx-auto mb-8">
          Book a 15-minute demo. We'll show you how Nobi's AI assistant works with your real inventory on your actual site.
        </p>
        <CTAButton size="xl">Book a Demo</CTAButton>
        <p className="mt-5 text-sm text-slate-500">
          Or reach out directly:{" "}
          <a href="mailto:tyler@trynobi.com" className="text-violet-400">
            tyler@trynobi.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#17122f] border-t border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.8125rem] text-slate-500">
          <span>&copy; 2026 Nobi AI, Inc.</span>
          <div className="flex gap-4">
            <a href="https://trynobi.com/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="https://trynobi.com/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="https://trynobi.com" className="text-violet-400 hover:text-white transition-colors">trynobi.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
