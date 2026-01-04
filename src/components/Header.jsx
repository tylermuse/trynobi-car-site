import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur bg-white/70 dark:bg-black/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center gap-4 relative">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <Logo className="h-10 md:h-12 lg:h-14" />
        </a>

        {/* Navigation */}
        <Nav />
      </div>
    </header>
  );
}
