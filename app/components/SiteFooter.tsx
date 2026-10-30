import Image from "next/image";
import Link from "next/link";
import { businessInfo, navLinks } from "../lib/business-info";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerTop">
        <Link className="brand footerBrand" href="/" aria-label="AJD Upholstery home">
          <Image className="brandLogo" src="/ajd-logo.jpg" alt="AJD Upholstery" width={44} height={44} />
          <span className="brandWords">AJD Upholstery</span>
        </Link>

        <nav className="footerNav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        {(businessInfo.phone || businessInfo.address) && <div className="footerContact">
          {businessInfo.phone && <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>}
          {businessInfo.address && <span>{businessInfo.address}</span>}
        </div>}
      </div>

      <div className="footerBottom">
        <Link className="footerLogoLink" href="/" aria-label="AJD Upholstery home">
          <Image className="footerLogo" src="/ajd-logo.jpg" alt="AJD Upholstery" width={160} height={160} />
        </Link>
        <small>© {new Date().getFullYear()} AJD Upholstery. All rights reserved.</small>
      </div>
    </footer>
  );
}
