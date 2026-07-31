import Link from "next/link";
import { businessInfo, navLinks } from "../lib/business-info";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerTop">
        <Link className="brand footerBrand" href="/" aria-label="AJD Upholstery home">
          <img className="brandLogo" src="/ajd-logo.jpg" alt="AJD Upholstery" width={44} height={44} />
          <span className="brandWords">AJD Upholstery</span>
        </Link>

        <nav className="footerNav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="footerContact">
          <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
          {businessInfo.phone ? <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a> : <span className="footerPlaceholder">Phone number coming soon</span>}
          {businessInfo.address ? <span>{businessInfo.address}</span> : <span className="footerPlaceholder">Address coming soon</span>}
        </div>
      </div>

      <div className="footerBottom">
        <small>© {new Date().getFullYear()} AJD Upholstery. All rights reserved.</small>
      </div>
    </footer>
  );
}
