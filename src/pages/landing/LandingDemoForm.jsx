import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function LandingDemoForm({ source = "Landing Page" }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    dealership: "",
    botcheck: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("access_key", "c7a3fd79-0e4f-47ce-aa30-c141616d21e3");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("company", form.dealership);
      formData.append("source", source);
      formData.append("botcheck", form.botcheck);
      formData.append("subject", `Demo Request — ${form.dealership || form.name} (${source})`);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok || !data.success)
        throw new Error(data.message || "Something went wrong.");

      navigate("/landing/demo-thank-you");
    } catch (err) {
      setError(err.message || "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-colors";

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.form
        variants={fadeUp}
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_22px_60px_-30px_rgba(15,23,42,0.25)]"
      >
        <h3 className="text-xl font-semibold text-slate-900 mb-1">
          Book a demo
        </h3>
        <p className="text-sm text-slate-500 mb-6">
          See Nobi working with your inventory in 15 minutes.
        </p>

        {/* Honeypot */}
        <input
          type="text"
          name="botcheck"
          value={form.botcheck}
          onChange={update}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="space-y-4">
          <div>
            <label htmlFor="demo-name" className="text-sm font-medium text-slate-700 block mb-1.5">
              Name
            </label>
            <input
              id="demo-name"
              name="name"
              value={form.name}
              onChange={update}
              required
              placeholder="Your name"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="demo-email" className="text-sm font-medium text-slate-700 block mb-1.5">
              Email
            </label>
            <input
              id="demo-email"
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              required
              placeholder="you@dealership.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="demo-dealership" className="text-sm font-medium text-slate-700 block mb-1.5">
              Dealership name
            </label>
            <input
              id="demo-dealership"
              name="dealership"
              value={form.dealership}
              onChange={update}
              placeholder="ABC Motors"
              className={inputClasses}
            />
          </div>
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 h-12 rounded-2xl bg-black text-white font-semibold text-base hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Request a Demo"}
          {!submitting && <ArrowRight className="w-4 h-4" />}
        </button>

        <p className="mt-3 text-xs text-slate-400 text-center">
          Free pilot &middot; No commitment &middot; Live in under 24 hours
        </p>
      </motion.form>
    </motion.div>
  );
}
