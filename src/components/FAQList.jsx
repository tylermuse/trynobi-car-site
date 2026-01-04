import React from "react";
import { ChevronDown } from "lucide-react";
import FAQ_ITEMS_CONST from "../constants/faqs";

export const FAQ_ITEMS = FAQ_ITEMS_CONST;

/**
 * Shared FAQ accordion.
 * Props:
 * - limit: number | undefined — slice the list
 * - id: string — section id
 * - title/description: optional heading copy
 * - headingAlign: "left" | "center"
 * - groupByCategory: boolean — show grouped lists with category headers
 */
export default function FAQList({
  limit,
  id = "faq",
  title = "You're not the first to ask",
  description,
  headingAlign = "left",
  showBorderTop = false,
  sectionClassName = "",
  padding = "py-20",
  columns = 1,
  items: itemsProp,
  filter,
  groupByCategory = false,
}) {
  const sourceItems = itemsProp || FAQ_ITEMS;
  const filtered = typeof filter === "function" ? sourceItems.filter(filter) : sourceItems;
  const items = typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  const headingAlignClass = headingAlign === "center" ? "text-center" : "";
  const borderClass = showBorderTop ? "border-t border-black/5 dark:border-white/10" : "";
  const listClass =
    columns >= 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-4"
      : "space-y-4";

  const withTargetBlank = (html = "") =>
    html
      .replace(/<a\s+(?![^>]*target=)([^>]*?)>/gi, "<a $1 target=\"_blank\" rel=\"noopener noreferrer\">")
      .replace(/<a([^>]*target=[\"']?_blank[\"']?)(?![^>]*rel=)([^>]*)>/gi, "<a$1 rel=\"noopener noreferrer\"$2>");

  return (
    <section
      id={id}
      className={`scroll-mt-20 ${padding} ${borderClass} ${sectionClassName}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(title || description) && (
          <div className={`${headingAlignClass} mb-10`}>
            {title && (
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-base sm:text-lg text-black/70 dark:text-white/70">
                {description}
              </p>
            )}
          </div>
        )}

        {groupByCategory ? (
          <div className="space-y-10">
            {Object.entries(
              items.reduce((acc, item) => {
                const key = item.category || "Other";
                acc[key] = acc[key] || [];
                acc[key].push(item);
                return acc;
              }, {})
            ).map(([category, group]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-black dark:text-white">{category}</h3>
                <div className={listClass}>
                  {group.map((f) => (
                    <details
                      key={f.q}
                      className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-sm"
                    >
                      <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-5 py-4 font-medium">
                        <span>{f.q}</span>
                        <ChevronDown
                          className="h-5 w-5 text-black/40 dark:text-white/60 transition-transform duration-300 group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>

                      <div className="px-5 pb-5 -mt-1 text-sm text-black/70 dark:text-white/70">
                        {typeof f.a === "string" ? (
                          <p
                            className="leading-relaxed faq-answer"
                            dangerouslySetInnerHTML={{ __html: withTargetBlank(f.a) }}
                          />
                        ) : (
                          f.a
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={listClass}>
            {items.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-sm"
              >
                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-5 py-4 font-medium">
                  <span>{f.q}</span>
                  <ChevronDown
                    className="h-5 w-5 text-black/40 dark:text-white/60 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <div className="px-5 pb-5 -mt-1 text-sm text-black/70 dark:text-white/70">
                  {typeof f.a === "string" ? (
                    <p
                      className="leading-relaxed faq-answer"
                      dangerouslySetInnerHTML={{ __html: withTargetBlank(f.a) }}
                    />
                  ) : (
                    f.a
                  )}
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
