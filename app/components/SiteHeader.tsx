"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../lib/business-info";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="siteHeaderBar">
        <Link className="brand" href="/" aria-label="AJD Upholstery home">
          <Image className="brandLogo" src="/ajd-logo.jpg" alt="AJD Upholstery" width={48} height={48} priority />
          <span className="brandWords">AJD Upholstery</span>
        </Link>

        <nav className="navLinks" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={link.href === "/quote" ? "navQuote" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="navToggle"
          aria-expanded={open}
          aria-controls="mobileNav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav id="mobileNav" className={`mobileNav${open ? " mobileNavOpen" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
