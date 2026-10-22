"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { businessInfo, navLinks } from "../lib/business-info";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="sitePhoneBar">
        <div className="siteContactInner">
          <a className="sitePhoneLink" href={`tel:+1${businessInfo.phone.replace(/\D/g, "")}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92z" /></svg>
            <span>{businessInfo.phone}</span>
          </a>
          <a className="siteAddressLink" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
            <span>{businessInfo.address}</span>
          </a>
        </div>
      </div>
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
