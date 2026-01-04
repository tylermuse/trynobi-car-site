import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { trackScrollPreviewClicked } from "../utils/eventTracker";

export default function ScrollPreview({
  sections = [],
  fadeStartRatio = 0.55,
  fadeEndRatio = 0.15,
  label = "Next up",
  pillOptions = [],
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!sections?.length) {
      setActiveIndex(-1);
      setOpacity(0);
      return;
    }

    const updatePreview = () => {
      const fadeStart = window.innerHeight * fadeStartRatio;
      const fadeEnd = window.innerHeight * fadeEndRatio;
      let targetIndex = -1;
      let targetTop = fadeStart;

      for (let i = 0; i < sections.length; i += 1) {
        const elem = document.getElementById(sections[i].id);
        if (!elem) continue;
        const rect = elem.getBoundingClientRect();
        if (rect.top > fadeEnd) {
          targetIndex = i;
          targetTop = rect.top;
          break;
        }
      }

      if (targetIndex === -1) {
        setActiveIndex(-1);
        setOpacity(0);
        return;
      }

      setActiveIndex(targetIndex);
      const normalized = Math.min(1, Math.max(0, (targetTop - fadeEnd) / (fadeStart - fadeEnd)));
      setOpacity(Math.max(0.35, normalized));
    };

    updatePreview();
    window.addEventListener("scroll", updatePreview, { passive: true });
    window.addEventListener("resize", updatePreview);

    return () => {
      window.removeEventListener("scroll", updatePreview);
      window.removeEventListener("resize", updatePreview);
    };
  }, [sections, fadeStartRatio, fadeEndRatio]);

  const preview = activeIndex >= 0 ? sections[activeIndex] : null;
  const shouldShow = Boolean(preview);

  const scrollToSection = () => {
    if (!preview) return;
    trackScrollPreviewClicked(preview.label);
    const section = document.getElementById(preview.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="scroll-preview fixed left-0 right-0 bottom-4 z-30 flex justify-center px-4 pointer-events-none"
      style={{
        opacity,
        transition: "opacity 0.25s ease, transform 0.25s ease",
        transform: `translateY(${(1 - Math.max(opacity, 0)) * 8}px)`,
        visibility: shouldShow ? "visible" : "hidden",
      }}
      role="presentation"
      aria-hidden={!shouldShow}
    >
      {preview && (
        <div
          className="pointer-events-auto flex flex-col gap-2 rounded-2xl border border-black/10 bg-white/95 px-4 py-2 shadow-lg shadow-black/10 backdrop-blur dark:border-white/10 dark:bg-black/80"
          role="button"
          tabIndex={0}
          onClick={scrollToSection}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              scrollToSection();
            }
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/50 dark:text-white/60 flex-shrink-0">
              {label}
            </span>
            <span className="text-sm font-semibold text-black dark:text-white whitespace-nowrap">
              {preview.label}
            </span>
            <ChevronDown className="h-4 w-4 text-black/60 dark:text-white/70 flex-shrink-0" />
          </div>
          {preview.id === "use-cases" && pillOptions.length >= 2 && (
            <div className="flex gap-1.5 justify-center">
              {pillOptions.slice(0, 2).map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.id}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-2 py-1 text-[11px] font-medium text-black dark:text-white flex-shrink-0"
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-300">
                      <Icon className="h-2.5 w-2.5" />
                    </span>
                    <span className="whitespace-nowrap">{pill.label}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
