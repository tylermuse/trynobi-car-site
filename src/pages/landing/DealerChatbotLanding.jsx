import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Activity,
  Lock,
  Clock,
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

export default function DealerChatbotLanding() {
  useEffect(() => {
    document.title = "Dealership Website Chatbot That Sells Cars | Nobi";
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
            Not Your Average Chatbot
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight [text-wrap:balance]">
            The Dealership{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Chatbot
            </span>{" "}
            That Actually Searches Your Inventory
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-5 text-[clamp(1.05rem,2.5vw,1.25rem)] text-slate-600 max-w-[40rem] mx-auto leading-relaxed">
            Most dealership chatbots collect names and phone numbers. Nobi helps shoppers find the right car on your lot using conversation, then converts them into real leads.
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
            Industry Validation
          </p>
          <div className="inline-block rounded-xl border border-slate-200 bg-white shadow-sm px-6 py-4 max-w-[42rem] text-[0.9375rem] text-slate-600 leading-relaxed">
            BCG and OpenAI project that{" "}
            <strong className="text-slate-800">40M+ car purchases per year will be influenced by AI by 2030</strong>, with early-adopting dealers seeing up to a{" "}
            <strong className="text-slate-800">20% topline boost</strong>.
          </div>
        </div>
      </div>

      {/* Before / After */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">
              See the difference in one conversation
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-base text-slate-600 max-w-[38rem] mx-auto mt-3">
              Traditional chatbots hit shoppers with a lead form. Nobi actually helps them find the right car first.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Before */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white shadow-[0_18px_46px_-24px_rgba(15,23,42,0.3)] overflow-hidden">
              <div className="px-5 py-3 flex items-center gap-2 border-b bg-red-50 border-red-200">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="text-sm font-semibold text-red-900">Traditional dealership chatbot</span>
              </div>
              <div className="p-4">
                <div className="flex flex-col gap-2.5 min-h-[220px]">
                  <div className="max-w-[85%] self-start bg-red-50 border border-red-200 text-red-900 rounded-2xl rounded-bl-sm px-4 py-3 text-[0.9375rem] leading-normal">
                    Hi! Welcome to ABC Motors. How can I help you today?
                  </div>
                  <div className="max-w-[85%] self-end bg-slate-600 text-white rounded-2xl rounded-br-sm px-4 py-3 text-[0.9375rem] leading-normal">
                    I'm looking for an SUV under $35K with third-row seating
                  </div>
                  <div className="max-w-[85%] self-start bg-red-50 border border-red-200 text-red-900 rounded-2xl rounded-bl-sm px-4 py-3 text-[0.9375rem] leading-normal">
                    Great! Let me connect you with a sales representative. Can I get your name and phone number?
                  </div>
                </div>
                <p className="mt-3 text-[0.8125rem] text-slate-500 text-center">
                  Shopper asked about inventory &rarr; <span className="font-semibold text-red-600">got a lead form</span>
                </p>
              </div>
            </motion.div>

            {/* After */}
            <motion.div variants={fadeUp} custom={1} className="rounded-2xl border border-slate-200 bg-white shadow-[0_18px_46px_-24px_rgba(15,23,42,0.3)] overflow-hidden">
              <div className="px-5 py-3 flex items-center gap-2 border-b bg-emerald-50 border-emerald-200">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm font-semibold text-emerald-900">Nobi AI</span>
              </div>
              <div className="p-4">
                <div className="flex flex-col gap-2.5 min-h-[220px]">
                  <div className="max-w-[85%] self-start bg-slate-100 text-slate-800 border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 text-[0.9375rem] leading-normal">
                    Hi! I can help you search our inventory. What are you looking for?
                  </div>
                  <div className="max-w-[85%] self-end bg-black text-white rounded-2xl rounded-br-sm px-4 py-3 text-[0.9375rem] leading-normal">
                    I'm looking for an SUV under $35K with third-row seating
                  </div>
                  <div className="max-w-[85%] self-start bg-slate-100 text-slate-800 border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 text-[0.9375rem] leading-normal">
                    I found <strong className="text-violet-500">4 SUVs</strong> with third-row seating under $35K:
                    <br /><br />
                    <strong className="text-violet-500">2024 Hyundai Palisade SEL</strong> — $33,450
                    <br />
                    <strong className="text-violet-500">2023 Kia Telluride LX</strong> — $31,900
                    <br />
                    <strong className="text-violet-500">2024 Chevy Traverse LT</strong> — $34,200
                    <br /><br />
                    Want details on any of these?
                  </div>
                </div>
                <p className="mt-3 text-[0.8125rem] text-slate-500 text-center">
                  Shopper asked about inventory &rarr; <span className="font-semibold text-emerald-600">got real answers</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="overflow-x-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.table variants={fadeUp} className="w-full border-collapse rounded-xl overflow-hidden border border-slate-200 mt-8">
              <thead>
                <tr>
                  <th className="bg-slate-900 text-white px-5 py-3.5 text-left text-sm font-bold">Feature</th>
                  <th className="bg-slate-900 text-white px-5 py-3.5 text-left text-sm font-bold">Traditional Chatbot</th>
                  <th className="bg-purple-900 text-white px-5 py-3.5 text-left text-sm font-bold">Nobi AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Searches live inventory", "✗", "✓"],
                  ["Understands natural language", "✗ Script-based", "✓ Full AI"],
                  ['Answers "show me SUVs under $30K"', "✗ Can't do this", "✓ Instant results"],
                  ["Helps shoppers find the right car", "✗", "✓"],
                  ["Increases VDP views", "✗", "✓"],
                  ["Setup time", "Days to weeks", "Under 24 hours"],
                  ["Requires scripting/training", "✗ Extensive", "✓ None"],
                ].map(([feature, trad, nobi], i) => (
                  <tr key={feature} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="px-5 py-3 text-sm font-semibold text-slate-800 border-b border-slate-100">
                      {feature}
                    </td>
                    <td className="px-5 py-3 text-sm text-slate-600 border-b border-slate-100">
                      {trad.startsWith("✗") ? (
                        <>
                          <span className="text-red-600 font-bold text-lg">✗</span>
                          {trad.length > 1 ? ` ${trad.slice(2)}` : ""}
                        </>
                      ) : (
                        trad
                      )}
                    </td>
                    <td className="px-5 py-3 text-sm text-slate-600 border-b border-slate-100 bg-violet-500/[0.04]">
                      {nobi.startsWith("✓") ? (
                        <>
                          <span className="text-green-600 font-bold text-lg">✓</span>
                          {nobi.length > 1 ? ` ${nobi.slice(2)}` : ""}
                        </>
                      ) : (
                        nobi
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </motion.table>
          </motion.div>
        </div>
      </section>

      {/* Capabilities (dark) */}
      <section className="bg-gradient-to-b from-[#17122f] via-[#1c1540] to-[#17122f] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">
              A chatbot built for car shoppers
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <MessageSquare className="w-5 h-5" />,
                title: "Conversational search",
                desc: '"I need a truck for towing under $40K" returns real matches from your lot instantly. No dropdowns, no filters.',
              },
              {
                icon: <Activity className="w-5 h-5" />,
                title: "Drives VDP engagement",
                desc: "When the chatbot surfaces the right vehicles, shoppers click through to VDPs at a much higher rate than browse-and-filter.",
              },
              {
                icon: <Lock className="w-5 h-5" />,
                title: "Quality leads",
                desc: "Shoppers who find a vehicle they like are far more motivated when they submit a lead. Better quality, better close rates.",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: "24/7 without staff",
                desc: "Nobi works nights, weekends, and holidays. Your best shoppers don't always browse during business hours.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{card.desc}</p>
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
              The AI shift is already here
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: "40M+", label: "Car purchases influenced by AI per year by 2030", color: "purple" },
              { num: "20%", label: "Topline boost for early-adopting dealers", color: "blue" },
              { num: "72%", label: "Of shoppers leave dealer sites without engaging", color: "purple" },
              { num: "<24h", label: "From signup to live on your website", color: "blue" },
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

      {/* How it works */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">
              Live in minutes, not months
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: 1, title: "Connect your inventory", desc: "We plug into your existing DMS or inventory feed. No migration needed." },
              { step: 2, title: "Add one script tag", desc: "Your web provider drops a single line of code. No redesign required." },
              { step: 3, title: "Watch it work", desc: "Shoppers start chatting with your inventory immediately. More VDP views, more leads." },
            ].map((s, i) => (
              <motion.div key={s.step} variants={fadeUp} custom={i}>
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white text-lg font-bold shadow-[0_4px_12px_rgba(139,92,246,0.35)] mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-gradient-to-b from-[#17122f] to-[#1c1540] px-6 py-20 text-center text-white">
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold mb-4">
          Upgrade your dealership chatbot
        </h2>
        <p className="text-base text-slate-300 max-w-lg mx-auto mb-8">
          See the difference between a lead-capture bot and an AI that actually helps shoppers find cars on your lot.
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
