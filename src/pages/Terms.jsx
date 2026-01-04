// src/pages/Terms.jsx
import React from "react";
import PageLayout from "../components/PageLayout";

const LEGAL_NAME = "Locusive, Inc. d/b/a Nobi";
const SHORT_NAME = "Nobi";
const EFFECTIVE = "October 1, 2025";
const CONTACT = "legal@nobi.ai";

export default function Terms() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-white to-slate-50 dark:from-[#0a0a0a] dark:to-black text-black dark:text-white py-16">
        <div className="mx-auto max-w-3xl px-6">
        <header className="mb-10">
          <p className="text-sm font-semibold text-fuchsia-600">Legal</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Terms of Service</h1>
          <p className="mt-2 text-sm text-black/60 dark:text-white/60">
            Effective {EFFECTIVE}. If you have questions, email{" "}
            <a className="underline" href={`mailto:${CONTACT}`}>{CONTACT}</a>.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-10 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5">
          <div className="text-sm font-medium mb-2">Contents</div>
          <ol className="list-decimal list-inside space-y-1 text-sm text-black/70 dark:text-white/70">
            <li><a href="#agreement" className="underline">Agreement to Terms</a></li>
            <li><a href="#eligibility" className="underline">Eligibility & Accounts</a></li>
            <li><a href="#license" className="underline">License & Acceptable Use</a></li>
            <li><a href="#customer-data" className="underline">Customer Content & Data</a></li>
            <li><a href="#fees" className="underline">Fees, Trials & Taxes</a></li>
            <li><a href="#confidentiality" className="underline">Confidentiality</a></li>
            <li><a href="#ip" className="underline">Intellectual Property</a></li>
            <li><a href="#feedback" className="underline">Feedback</a></li>
            <li><a href="#thirdparty" className="underline">Third-Party Services</a></li>
            <li><a href="#termination" className="underline">Term & Termination</a></li>
            <li><a href="#disclaimers" className="underline">Disclaimers</a></li>
            <li><a href="#limitation" className="underline">Limitation of Liability</a></li>
            <li><a href="#indemnity" className="underline">Indemnification</a></li>
            <li><a href="#governing" className="underline">Governing Law; Disputes</a></li>
            <li><a href="#changes" className="underline">Changes to the Service or Terms</a></li>
            <li><a href="#misc" className="underline">Miscellaneous</a></li>
          </ol>
        </nav>

        <section id="agreement" className="prose prose-slate dark:prose-invert max-w-none">
          <h2>1) Agreement to Terms</h2>
          <p>
            These Terms of Service (the “<strong>Terms</strong>”) govern your access to and use of
            {` `}{SHORT_NAME}’s websites, products, and services (collectively, the “<strong>Service</strong>”).
            By accessing or using the Service, you agree to be bound by these Terms. If you are
            entering into these Terms on behalf of a company, you represent that you have authority
            to bind that company; “you” refers to that entity.
          </p>
          <p>
            The Service is provided by {LEGAL_NAME} (“<strong>{SHORT_NAME}</strong>,” “we,” “us,” or “our”). The
            Privacy Policy describes how we handle personal data and is incorporated into these Terms.
          </p>

          <h2 id="eligibility">2) Eligibility & Accounts</h2>
          <p>
            You must be at least 18 years old to use the Service. You are responsible for maintaining
            the confidentiality of your account credentials and for all activities under your account.
            You agree to promptly notify us of any unauthorized use.
          </p>

          <h2 id="license">3) License & Acceptable Use</h2>
          <p>
            Subject to these Terms, {SHORT_NAME} grants you a limited, non-exclusive, non-transferable,
            revocable license to access and use the Service during your subscription term.
          </p>
          <p className="font-medium">You agree not to:</p>
          <ul>
            <li>Reverse engineer, decompile, or attempt to extract source code or models;</li>
            <li>Use the Service to infringe, violate, or misappropriate any third-party rights;</li>
            <li>Upload malicious code or circumvent security features;</li>
            <li>Use the Service to develop competing products or benchmark without our consent;</li>
            <li>Process Prohibited Content (e.g., illegal content) or violate applicable law.</li>
          </ul>

          <h2 id="customer-data">4) Customer Content & Data</h2>
          <p>
            You retain all rights to content and data you submit to the Service (“<strong>Customer
            Content</strong>”). You grant {SHORT_NAME} a worldwide, non-exclusive, royalty-free license to host,
            process, transmit, and display Customer Content solely to provide and improve the Service
            and as otherwise permitted by our Privacy Policy or by you in writing.
          </p>
          <p>
            You represent and warrant that you have all necessary rights in Customer Content and that
            your use of the Service and Customer Content does not violate law or third-party rights.
          </p>

          <h2 id="fees">5) Fees, Trials & Taxes</h2>
          <p>
            If you purchase a subscription, you agree to pay the fees described at checkout or in an
            Order. Unless stated otherwise, fees are non-refundable and do not include taxes, which
            you are responsible for paying. We may offer free trials; at the end of a trial, continued
            use may convert to a paid subscription unless cancelled on time.
          </p>

          <h2 id="confidentiality">6) Confidentiality</h2>
          <p>
            “<strong>Confidential Information</strong>” means non-public information disclosed by one party
            (“Discloser”) to the other (“Recipient”), designated as confidential or that should
            reasonably be understood as confidential. Recipient will use Confidential Information only
            to exercise rights and perform obligations under these Terms, and protect it with
            reasonable care.
          </p>

          <h2 id="ip">7) Intellectual Property</h2>
          <p>
            {SHORT_NAME} and its licensors own all right, title, and interest in and to the Service,
            including software, models, algorithms, documentation, and logos. Except for the limited
            license above, no rights are granted to you by implication or otherwise.
          </p>

          <h2 id="feedback">8) Feedback</h2>
          <p>
            You may provide suggestions or ideas about the Service (“<strong>Feedback</strong>”). You grant
            {` `}{SHORT_NAME} a perpetual, irrevocable, royalty-free license to use the Feedback without
            restriction or compensation.
          </p>

          <h2 id="thirdparty">9) Third-Party Services</h2>
          <p>
            The Service may interoperate with third-party products or services (e.g., commerce
            platforms, analytics, model providers). Your use of third-party services is governed by
            their terms, not ours.
          </p>

          <h2 id="termination">10) Term & Termination</h2>
          <p>
            These Terms remain in effect while you use the Service. Either party may terminate for
            material breach if the breach is not cured within 30 days of written notice. Upon
            termination, your right to access the Service ends. Sections that by their nature should
            survive (e.g., confidentiality, IP, disclaimers, limitations) will survive.
          </p>

          <h2 id="disclaimers">11) Disclaimers</h2>
          <p>
            THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY
            LAW, {SHORT_NAME} DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES
            ARISING OUT OF COURSE OF DEALING OR USAGE.
          </p>

          <h2 id="limitation">12) Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, COVER, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
            REVENUE, DATA, OR GOODWILL. {SHORT_NAME}’S TOTAL LIABILITY FOR ALL CLAIMS IN THE AGGREGATE
            WILL NOT EXCEED THE AMOUNTS PAID BY YOU TO {SHORT_NAME} FOR THE SERVICE IN THE 12 MONTHS
            IMMEDIATELY PRECEDING THE CLAIM.
          </p>

          <h2 id="indemnity">13) Indemnification</h2>
          <p>
            You will defend, indemnify, and hold harmless {SHORT_NAME} from and against any claims,
            damages, liabilities, and expenses arising from your use of the Service, Customer
            Content, or violation of these Terms.
          </p>

          <h2 id="governing">14) Governing Law; Disputes</h2>
          <p>
            These Terms are governed by the laws of the State of Delaware, without regard to its
            conflicts of law rules. The exclusive jurisdiction and venue for any action relating to
            these Terms or the Service will be the state and federal courts located in Wilmington,
            Delaware. EACH PARTY WAIVES ANY RIGHT TO A JURY TRIAL.
          </p>

          <h2 id="changes">15) Changes to the Service or Terms</h2>
          <p>
            We may update the Service and these Terms from time to time. If changes are material, we
            will provide reasonable notice (e.g., by posting to our site). Continued use after the
            effective date constitutes acceptance of the updated Terms.
          </p>

          <h2 id="misc">16) Miscellaneous</h2>
          <p>
            You may not assign these Terms without our prior written consent; we may assign to an
            affiliate or in connection with a merger, acquisition, or sale of assets. If any provision
            is unenforceable, it will be modified to enforceable scope; the remainder stays in effect.
            These Terms (and any Order) are the entire agreement between the parties regarding the
            Service and supersede any prior or contemporaneous agreements.
          </p>

          <hr />
          <p className="text-sm text-black/60 dark:text-white/60">
            Contact: <a className="underline" href={`mailto:${CONTACT}`}>{CONTACT}</a>
          </p>
        </section>
        </div>
      </div>
    </PageLayout>
  );
}
