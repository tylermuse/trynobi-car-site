import React, { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import Button from "./Button";
import { useDemoForm } from "../context/DemoFormContext";
import { trackDemoFormOpened } from "../utils/eventTracker";

const SHOW_PRICING = false;

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { onOpen } = useDemoForm();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Why Nobi", href: "/why-nobi/better-search" },
    { label: "FAQs", href: "/faqs" },
    { label: "Docs", href: "https://docs.nobi.ai", external: true },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleDemoClick = () => {
    trackDemoFormOpened();
    onOpen();
  };

  return (
    <>
      {/* Desktop nav (hidden on mobile) */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-semibold absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => {
          const common = { key: link.href, className: "hover:opacity-80 flex items-center gap-1" };
          return link.external ? (
            <a {...common} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <a {...common} href={link.href}>
              {link.label}
            </a>
          );
        })}
      </nav>

      {/* Right side: Demo button (desktop only) + Mobile menu button */}
      <div className="flex items-center gap-3 ml-auto">
        <Button
          variant="outline"
          className="hidden md:flex bg-white text-black border-black rounded-xl hover:bg-fuchsia-50 hover:border-fuchsia-200"
          onClick={handleDemoClick}
        >
          Try Nobi on your site
        </Button>

        {/* Hamburger menu (visible on mobile) */}
        <button
          className="md:hidden p-2 hover:opacity-80"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu (drawer) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 absolute top-16 left-0 right-0 bg-white dark:bg-black">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold hover:opacity-80 py-2 flex items-center gap-1"
                onClick={closeMobileMenu}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
                {link.external && <ExternalLink className="w-4 h-4" />}
              </a>
            ))}
            <div className="pt-2 border-t border-black/10 dark:border-white/10">
              <Button
                variant="outline"
                className="bg-white text-black border-black hover:bg-black/5"
                onClick={() => {
                  handleDemoClick();
                  closeMobileMenu();
                }}
              >
                Try Nobi on your site
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
