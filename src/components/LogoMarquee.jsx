import React from "react";
import Marquee from "react-fast-marquee";

/**
 * Reusable scrolling logo strip with consistent sizing + spacing.
 * Keeps grayscale + hover reveal just like the homepage.
 */
export default function LogoMarquee({
  logos = [],
  label = "",
  className = "",
  speed = 40,
  gradient = false,
  gradientWidth = 0,
  pauseOnHover = true,
  border = false,
  rounded = true,
  paddingY = "py-4",
  itemClassName = "",
  duplicate = true,
}) {
  if (!logos.length) return null;

  const items = duplicate ? [...logos, ...logos] : logos;

  return (
    <div className={[className, border || rounded ? "overflow-hidden" : ""].filter(Boolean).join(" ")}>
      {label && (
        <span className="text-xs uppercase tracking-[0.3em] text-black/50 dark:text-white/60 block mb-3">
          {label}
        </span>
      )}
      <div
        className={[
          "overflow-hidden",
          paddingY,
          border ? "border border-black/10 dark:border-white/10" : "",
          rounded ? "rounded-lg" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Marquee
          speed={speed}
          gradient={gradient}
          gradientWidth={gradientWidth}
          pauseOnHover={pauseOnHover}
        >
          {items.map((logo, idx) => (
            <img
              key={`${logo.alt}-${idx}`}
              src={logo.src}
              alt={logo.alt}
              className={[
                "h-5 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition mx-4",
                itemClassName,
              ]
                .filter(Boolean)
                .join(" ")}
              loading="lazy"
              decoding="async"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
