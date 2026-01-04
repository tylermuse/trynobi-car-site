import React, { useEffect, useMemo } from "react";
import PageLayout from "../components/PageLayout";
import { releaseNotes } from "../content/utils/releaseLoader";

export default function ReleaseNotes() {
  useEffect(() => {
    document.title = "Release Notes | Nobi: a conversational site assistant to help you grow";
  }, []);

  const itemListLd = useMemo(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://nobi.ai";
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: releaseNotes.map((note, index) => ({
        "@type": "CreativeWork",
        name: note.title,
        position: index + 1,
        url: `${origin}/release-notes#${note.slug}`,
        datePublished: note.date,
      })),
    };
  }, []);

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-white to-slate-50 dark:from-[#0a0a0a] dark:to-black text-black dark:text-white">
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-10 sm:pt-20 sm:pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Release notes</h1>
          <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70">
            Quick snapshots of what changed and why it matters.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-16 space-y-6">
          {releaseNotes.length === 0 && (
            <div className="rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-white/60 dark:bg-white/5 p-6 sm:p-7">
              <p className="text-base sm:text-lg text-black/70 dark:text-white/70">
                No release notes yet. Add a JSON file in <code>src/content/releases</code> with <code>slug</code>, <code>title</code>, <code>date</code>, and <code>highlights</code>.
              </p>
            </div>
          )}

          {releaseNotes.map((note) => {
            const formattedDate = new Date(`${note.date}T00:00:00`).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            return (
              <section
                key={note.slug}
                id={note.slug}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur shadow-sm p-6 sm:p-7"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <div className="text-sm text-black/60 dark:text-white/60">{formattedDate}</div>
                    <h2 className="text-lg sm:text-xl font-semibold tracking-tight">{note.title}</h2>
                  </div>

                  <a
                    href={`#${note.slug}`}
                    className="text-sm text-fuchsia-700 dark:text-fuchsia-300 hover:opacity-80 font-semibold"
                    aria-label={`Permalink for ${note.title}`}
                  >
                    #
                  </a>
                </div>

                {note.highlights?.length ? (
                  <ul className="mt-5 list-disc list-outside pl-5 space-y-2 text-base text-black/80 dark:text-white/80">
                    {note.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            );
          })}
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      </div>
    </PageLayout>
  );
}
