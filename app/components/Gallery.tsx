"use client";

import { useMemo, useState } from "react";
import type { GalleryItem } from "../lib/gallery-items";

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [active, setActive] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);
  const openItem = openIndex !== null ? filtered[openIndex] : null;

  return (
    <div>
      <div className="galleryFilters" role="tablist" aria-label="Filter gallery by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            className={`galleryFilter${active === cat ? " galleryFilterActive" : ""}`}
            onClick={() => {
              setActive(cat);
              setOpenIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="galleryGrid">
        {filtered.map((item, index) => (
          <button
            type="button"
            key={item.src}
            className="galleryCard"
            onClick={() => setOpenIndex(index)}
            aria-label={`View larger image: ${item.title}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span className="galleryCaption">{item.title}</span>
          </button>
        ))}
      </div>

      {openItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={openItem.title} onClick={() => setOpenIndex(null)}>
          <button type="button" className="lightboxClose" aria-label="Close" onClick={() => setOpenIndex(null)}>×</button>
          <img src={openItem.src} alt={openItem.alt} onClick={(e) => e.stopPropagation()} />
          <p onClick={(e) => e.stopPropagation()}>{openItem.title}</p>
        </div>
      )}
    </div>
  );
}
