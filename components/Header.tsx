"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import Container from "@/components/Container";
import SwatchStrip from "@/components/SwatchStrip";
import FacebookIcon from "@/components/icons/FacebookIcon";
import { navLinks, siteConfig } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <Container className="flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden min-[1360px]:flex items-center gap-5 ml-6" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-sm uppercase tracking-wide transition-colors ${
                  active ? "text-paper" : "text-paper/70 hover:text-paper"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden min-[1360px]:flex items-center gap-4 shrink-0">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-paper hover:text-paper/70 transition-colors whitespace-nowrap"
          >
            <Phone className="size-4" strokeWidth={1.75} aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-accent-dark px-4 py-2.5 text-sm font-semibold text-paper hover:bg-ink-soft transition-colors whitespace-nowrap"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="min-[1360px]:hidden text-paper p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-7" aria-hidden="true" />
          ) : (
            <Menu className="size-7" aria-hidden="true" />
          )}
        </button>
      </Container>

      <SwatchStrip />

      {open && (
        <div className="min-[1360px]:hidden border-t border-paper/10 bg-ink">
          <Container className="flex flex-col py-4">
            <nav className="flex flex-col" aria-label="Mobile">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`py-3 border-b border-paper/10 font-medium uppercase tracking-wide text-sm ${
                      active ? "text-paper" : "text-paper/70"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 mt-4 text-paper font-semibold"
            >
              <Phone className="size-4" strokeWidth={1.75} aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Zebra Kitchens on Facebook (opens in a new tab)"
              title="Zebra Kitchens on Facebook"
              className="flex items-center gap-2 mt-4 text-paper/80 text-sm font-medium hover:text-paper transition-colors"
            >
              <FacebookIcon className="size-4" />
              Follow us on Facebook
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-sm bg-accent-dark px-5 py-3 text-center text-sm font-semibold text-paper"
            >
              Get a Free Quote
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
