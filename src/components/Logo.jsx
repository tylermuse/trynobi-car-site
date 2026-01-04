import React, { useState } from "react";

export default function Logo({ className = "h-8 md:h-9 lg:h-10" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {!failed ? (
        <img
          src="/media/nobi-logo.png"
          srcSet="/media/nobi-logo.png 1x, /media/nobi-logo@2x.png 2x"
          alt="Nobi"
          className="h-full w-auto"
          onError={() => setFailed(true)}
        />
      ) : (
        <svg className="h-full w-auto" viewBox="0 0 120 24" aria-label="Nobi logo">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#lg)" />
          <rect x="28" y="6" width="86" height="12" rx="6" fill="#111827" />
        </svg>
      )}
    </div>
  );
}
