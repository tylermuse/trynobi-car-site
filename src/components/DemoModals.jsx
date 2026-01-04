import React from "react";
import Button from "./Button";

export function RequestDemoModal({ open, onClose }) {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    company: "",
    website: "",
    platform: "Shopify",
    message: "",
    botcheck: "", // honeypot
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      // Web3Forms endpoint
      const accessKey = "c7a3fd79-0e4f-47ce-aa30-c141616d21e3";

      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("company", form.company);
      formData.append("website", form.website);
      formData.append("platform", form.platform);
      formData.append("message", form.message);
      formData.append("botcheck", form.botcheck);

      // Optional: Add your email to receive notifications
      // formData.append("from_name", "Nobi Website");
      // formData.append("subject", "New Demo Request from " + (form.company || form.name));

      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Something went wrong.");
      setDone(true);
    } catch (err) {
      setError(err.message || "Failed to submit.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <button className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-label="Close form" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Try it on your site</h2>
          <button
            onClick={onClose}
            className="inline-flex items-center rounded-full bg-black/5 dark:bg-white/10 px-2 py-1 hover:opacity-80"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {!done ? (
          <form onSubmit={submit} className="mt-4 space-y-4">
            {/* honeypot */}
            <input type="text" name="botcheck" value={form.botcheck} onChange={update} className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label className="text-sm block mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={update}
                required
                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                required
                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Company</label>
              <input
                name="company"
                value={form.company}
                onChange={update}
                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Website</label>
              <input
                name="website"
                value={form.website}
                onChange={update}
                placeholder="www.yoursite.com"
                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Platform (optional, for ecom businesses)</label>
              <select
                name="platform"
                value={form.platform}
                onChange={update}
                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none"
              >
                <option>Shopify</option>
                <option>Headless</option>
                <option>Magento</option>
                <option>BigCommerce</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm block mb-1">Anything else?</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={update}
                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none"
                placeholder="Goal, timeline, questions…"
              />
            </div>

            {error && <div className="text-sm text-red-600 dark:text-rose-400">{error}</div>}

            <div className="flex items-center gap-3 pt-2">
              <Button type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Submit"}
              </Button>
              <Button type="button" variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="mt-4">
            <p className="text-black/80 dark:text-white/90">
              Thanks! We've received your request and will reach out shortly.
            </p>
            <div className="mt-4">
              <Button onClick={onClose}>Close</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
