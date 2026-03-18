import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function DemoThankYou() {
  useEffect(() => {
    document.title = "Demo Request Received | Nobi";
  }, []);

  return (
    <div className="font-sans text-slate-900 antialiased min-h-screen flex flex-col">
      {/* Sticky Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <a href="https://trynobi.com">
            <img
              src="https://trynobi.com/media/nobi-logo@2x.png"
              alt="Nobi"
              className="h-7 w-auto"
            />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <motion.div
          className="max-w-lg text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
            <CheckCircle className="w-8 h-8" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-semibold mb-4">
            We got your request
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
            Thanks for reaching out! We'll be in touch within one business day to schedule your demo.
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm text-slate-500 mb-6">
            Want to book a time right now?{" "}
            <a
              href="https://calendly.com/nobi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-500 font-medium hover:text-violet-700 underline underline-offset-2"
            >
              Pick a slot on our calendar
            </a>
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href="https://trynobi.com"
              className="inline-flex items-center justify-center h-12 px-7 rounded-2xl font-semibold bg-black text-white hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Back to Nobi
            </a>
          </motion.div>
        </motion.div>
      </main>

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
