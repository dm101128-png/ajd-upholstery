"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { galleryCategories, type GalleryItem } from "../lib/gallery-items";

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const categories = ["All", ...galleryCategories];
  const [active, setActive] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);
  const openItem = openIndex !== null ? filtered[openIndex] : null;

  function openLightbox(index: number, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setOpenIndex(index);
  }

  function closeLightbox() {
    setOpenIndex(null);
    lastTriggerRef.current?.focus();
  }

  // Escape closes the lightbox; focus moves to the close button on open.
  useEffect(() => {
    if (openItem === null) return;
    closeButtonRef.current?.focus();
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openItem]);

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

      {filtered.length > 0 ? (
        <div className="galleryGrid">
          {filtered.map((item, index) => (
            <button
              type="button"
              key={item.src}
              className="galleryCard"
              onClick={(e) => openLightbox(index, e.currentTarget)}
              aria-label={`View larger image: ${item.title}`}
            >
              <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
              <span className="galleryCaption">{item.title}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="galleryEmpty" role="status">
          <h2>{active} projects coming soon</h2>
          <p>We&rsquo;re preparing photos from this part of our portfolio. Check back soon or contact us to discuss your project.</p>
        </div>
      )}

      {openItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={openItem.title} onClick={closeLightbox}>
          <button type="button" className="lightboxClose" aria-label="Close" ref={closeButtonRef} onClick={closeLightbox}>×</button>
          <Image src={openItem.src} alt={openItem.alt} width={openItem.width} height={openItem.height} onClick={(e) => e.stopPropagation()} />
          <p onClick={(e) => e.stopPropagation()}>{openItem.title}</p>
        </div>
      )}
    </div>
  );
}
