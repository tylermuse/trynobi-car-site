import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  HelpCircle,
  Clock,
  ShoppingBag,
  Code,
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

export default function DealerAIChatLanding() {
  useEffect(() => {
    document.title = "AI Chat for Dealership Websites | Nobi";
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
            AI Shopping Assistant for Dealerships
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight [text-wrap:balance]">
            Give Your Shoppers{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
              AI Chat
            </span>{" "}
            That Actually Sells Cars
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-5 text-[clamp(1.05rem,2.5vw,1.25rem)] text-slate-600 max-w-[38rem] mx-auto leading-relaxed">
            Shoppers don't want to click through 15 dropdown filters. They want to describe what they need and see results instantly. Nobi makes that happen, powered by your live inventory.
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

      {/* What shoppers want */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">
              What your shoppers actually want
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-base text-slate-600 max-w-[38rem] mx-auto mt-3">
              The dealership website experience hasn't kept up with how people shop for everything else online.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <MessageSquare className="w-5 h-5" />,
                color: "bg-pink-100 text-fuchsia-600",
                title: "They want to ask, not filter",
                desc: 'Shoppers want to say "SUV under $35K with third-row seating" and get results, not click through make, model, year, price, and body style dropdowns.',
              },
              {
                icon: <HelpCircle className="w-5 h-5" />,
                color: "bg-violet-100 text-violet-600",
                title: "They want answers, not spec sheets",
                desc: '"Can this tow my boat?" "What\'s the gas mileage?" "Does it have Apple CarPlay?" They want real answers, not to dig through feature lists on a VDP.',
              },
              {
                icon: <Clock className="w-5 h-5" />,
                color: "bg-indigo-100 text-indigo-600",
                title: "They want it now",
                desc: "No waiting for a BDC rep to call back. No browsing 10 pages of inventory. Just instant, conversational help that gets them to the right car faster.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_36px_-20px_rgba(15,23,42,0.25)]"
              >
                <div className={`inline-flex items-center justify-center h-10 w-10 rounded-xl mb-4 ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conversation Demo */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.15]">
                Like ChatGPT, but for{" "}
                <span className="bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
                  your inventory
                </span>
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                Nobi uses your live inventory feed to answer shoppers' questions in real time. No scripting, no training. It works out of the box the moment you connect your DMS.
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {[
                  "Understands complex, natural-language vehicle queries",
                  "Searches your live inventory in real time",
                  "Answers follow-up questions about features, specs, and availability",
                  "Connects to your DMS automatically",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="rounded-2xl border border-slate-200 bg-white shadow-[0_22px_60px_-30px_rgba(15,23,42,0.35)] overflow-hidden max-w-md mx-auto lg:mx-0"
            >
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm font-semibold text-slate-700">Nobi AI Assistant</span>
              </div>
              <div className="px-4 py-5 flex flex-col gap-3 min-h-[340px]">
                <div className="max-w-[85%] self-end bg-black text-white rounded-2xl rounded-br-sm px-4 py-3 text-[0.9375rem] leading-normal">
                  I need a family SUV under $35,000 with third-row seating and good gas mileage
                </div>
                <div className="max-w-[85%] self-start bg-slate-100 text-slate-800 border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 text-[0.9375rem] leading-normal">
                  I found <strong className="text-violet-500">4 SUVs</strong> on the lot that match your criteria:
                  <br /><br />
                  <strong className="text-violet-500">2024 Hyundai Palisade SEL</strong> — $33,450 | 21/28 MPG | 12,400 mi
                  <br />
                  <strong className="text-violet-500">2023 Kia Telluride LX</strong> — $31,900 | 20/26 MPG | 18,200 mi
                  <br />
                  <strong className="text-violet-500">2024 Chevrolet Traverse LT</strong> — $34,200 | 21/27 MPG | 8,900 mi
                  <br /><br />
                  The Traverse has the lowest mileage. Want me to narrow these down further?
                </div>
                <div className="max-w-[85%] self-end bg-black text-white rounded-2xl rounded-br-sm px-4 py-3 text-[0.9375rem] leading-normal">
                  Which one has the best safety ratings?
                </div>
              </div>
              <div className="border-t border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <Sparkles className="w-4 h-4 text-fuchsia-400" />
                  <span className="text-sm text-slate-400">Ask anything about our inventory...</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities (dark) */}
      <section className="bg-gradient-to-b from-[#17122f] via-[#1c1540] to-[#17122f] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">
              Everything your shoppers need, in one assistant
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
                title: "Conversational inventory search",
                desc: "Shoppers describe what they need in their own words and get matching vehicles from your lot instantly.",
              },
              {
                icon: <HelpCircle className="w-5 h-5" />,
                title: "Vehicle Q&A",
                desc: "Answers towing capacity, fuel economy, feature, and availability questions using your actual inventory data.",
              },
              {
                icon: <ShoppingBag className="w-5 h-5" />,
                title: "More VDP views, more leads",
                desc: "When shoppers find the right car faster, they click through to VDPs and submit leads at a much higher rate.",
              },
              {
                icon: <Code className="w-5 h-5" />,
                title: "One script tag to go live",
                desc: "Works with any website provider. Your team adds one line of code and Nobi is live in under 24 hours.",
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
              The numbers speak for themselves
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

      {/* BCG Quote */}
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
              {
                step: 1,
                title: "Connect your inventory",
                desc: "We plug into your existing DMS or inventory feed. No migration, no disruption to your current setup.",
              },
              {
                step: 2,
                title: "Add one script tag",
                desc: "Your web provider drops a single line of code onto your site. No redesign, no new platform to learn.",
              },
              {
                step: 3,
                title: "Shoppers start chatting",
                desc: "The AI assistant goes live. Shoppers search your inventory conversationally and you see more VDP views and leads.",
              },
            ].map((s, i) => (
              <motion.div key={s.step} variants={fadeUp} custom={i}>
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white text-lg font-bold shadow-[0_4px_12px_rgba(139,92,246,0.35)] mb-4">
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
          See Nobi on your website
        </h2>
        <p className="text-base text-slate-300 max-w-lg mx-auto mb-8">
          Book a 15-minute demo and we'll show you exactly how AI chat works with your inventory, on your site.
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
