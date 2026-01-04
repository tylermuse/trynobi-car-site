import React from "react";
import PageLayout from "../components/PageLayout";

const Privacy = () => (
  <PageLayout>
    <main className="prose prose-lg mx-auto px-4 py-8">
    {/* Page Heading and Intro */}
    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
    <p className="text-sm text-gray-500 mb-8">
      Effective October&nbsp;1,&nbsp;2025. This Privacy Policy explains how Nobi
      collects, uses, and shares information.  If you have questions, email{" "}
      <a href="mailto:privacy@nobi.ai" className="text-blue-600 underline">
        privacy@nobi.ai
      </a>.
    </p>

    {/* Who We Are */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
      <p className="mb-4">
        Locusive, Inc. d/b/a Nobi (“Nobi”, “we”, “us”, or “our”) provides
        conversational product‑search and related services for commerce brands
        (the “Service”).
      </p>
    </section>

    {/* Information We Collect */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Account & Contact Data</strong> — name, email, role, company
          and similar details when you request a demo, start a trial or contact
          us.
        </li>
        <li>
          <strong>Commerce & Usage Data</strong> — queries, clicks, viewed
          items, conversation logs, device/browser info, IP address, timestamps
          and interactions with our widgets or APIs.
        </li>
        <li>
          <strong>Technical Data</strong> — cookies, pixel tags, SDKs, error
          logs, performance metrics and diagnostics that keep the Service
          reliable and secure.
        </li>
        <li>
          <strong>Customer Content</strong> — catalogue data or end‑user inputs
          that our brand customers send to Nobi to power the Service.
        </li>
      </ul>
    </section>

    {/* How We Use Information */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">How We Use Information</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Provide, operate and improve the Service;</li>
        <li>
          Personalize results and measure performance (e.g., click‑through rate,
          average order value, conversion);
        </li>
        <li>Detect, prevent and investigate security incidents and abuse;</li>
        <li>Respond to inquiries and provide support;</li>
        <li>Comply with legal obligations.</li>
      </ul>
    </section>

    {/* Legal Bases */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">Legal Bases (EEA/UK)</h2>
      <p className="mb-4">
        Where GDPR applies, we rely on one or more of the following:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Performance of a contract</strong> with you;
        </li>
        <li>
          <strong>Legitimate interests</strong> (e.g. improving the Service and
          ensuring security);
        </li>
        <li>
          <strong>Consent</strong> (where required);
        </li>
        <li>
          <strong>Compliance with legal obligations</strong>.
        </li>
      </ul>
    </section>

    {/* How We Share Information */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">How We Share Information</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Vendors & Sub‑processors</strong> — cloud hosting, analytics,
          error reporting, communications, model providers and support tools
          under contractual safeguards.
        </li>
        <li>
          <strong>Partners & Integrations</strong> — when you connect third‑party
          services (e.g., commerce platforms), we share data as needed to make
          the integration work.
        </li>
        <li>
          <strong>Business & Safety</strong> — to comply with law and protect
          rights, safety and the Service.
        </li>
        <li>
          <strong>Business Transfers</strong> — in connection with a merger,
          acquisition or asset sale.
        </li>
      </ul>
    </section>

    <p className="mt-8">
      For additional details or to exercise your rights, please contact us at{" "}
      <a href="mailto:privacy@nobi.ai" className="text-blue-600 underline">
        privacy@nobi.ai
      </a>.
    </p>
    </main>
  </PageLayout>
);

export default Privacy;
