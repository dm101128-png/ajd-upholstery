import Link from "next/link";
import { galleryCategories, categoryHref } from "../lib/gallery-items";

export default function GalleryCategories() {
  return <div className="galleryCategories" aria-label="Project categories">
    {galleryCategories.map(cat => (
      <Link key={cat} className="galleryCategory" href={categoryHref(cat)}>
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {cat === "Custom Seats" && <><rect x="12" y="10" width="40" height="28" rx="6"/><path d="M12 34 7 45v5h50v-5l-5-11M7 45h50M15 50v6m34-6v6M22 16v22m10-22v22m10-22v22"/></>}
              {cat === "Classic Cars" && <><path d="M5 41v-8l11-3 9-11h15l10 11 9 3v8h-6M11 41H5m18 0h18M18 30h29M25 23l-5 7m12-11v11m8-7 6 7M6 35h5m43 0h4M35 34h5"/><circle cx="17" cy="41" r="6"/><circle cx="47" cy="41" r="6"/><circle cx="17" cy="41" r="2"/><circle cx="47" cy="41" r="2"/></>}
              {cat === "Boats" && <><path d="M8 37h48L46 49H20L8 37Zm14 0V26h21l6 11M29 26V15h10v11M7 54q6-6 12 0t12 0 12 0 12 0"/></>}
              {cat === "Big Trucks" && <><path d="M4 28h24V17h14l7 14h10v11h-6M4 28v14h6m12 0h19M28 28v14M32 21h7l5 10H32V21Zm-28 6h24M33 35h4m18 0h4"/><circle cx="16" cy="42" r="6"/><circle cx="47" cy="42" r="6"/><circle cx="16" cy="42" r="2"/><circle cx="47" cy="42" r="2"/></>}
              {cat === "Dugout Pits" && <><path d="M7 25 32 13l25 12M12 25v27h40V25M8 52h48M18 38h28v7H18zM22 45v7m20-7v7M17 25h30"/></>}
            </svg>        <span>{cat}</span><small>Explore projects <span aria-hidden="true">→</span></small>
      </Link>
    ))}
  </div>;
}
