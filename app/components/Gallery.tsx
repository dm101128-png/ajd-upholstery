"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { galleryCategories, type GalleryItem } from "../lib/gallery-items";

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const categories = ["All", ...galleryCategories];
  const [active, setActive] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);
  const openItem = openIndex !== null ? filtered[openIndex] : null;
  const photos = openItem ? (openItem.photos?.length ? openItem.photos : [openItem]) : [];
  const openPhoto = photos[photoIndex];

  function openLightbox(index: number, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setPhotoIndex(0);
    setOpenIndex(index);
  }

  function closeLightbox() {
    setOpenIndex(null);
    lastTriggerRef.current?.focus();
  }

  // Escape closes the lightbox; focus moves to the close button on open.
  useEffect(() => {
    if (!openItem) return;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const photoCount = openItem.photos?.length || 1;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (photoCount > 1 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        setPhotoIndex((index) => (index + direction + photoCount) % photoCount);
      }
      if (event.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button");
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
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
              setPhotoIndex(0);
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
              aria-label={item.photos?.length ? `View ${item.title} photos` : `View larger image: ${item.title}`}
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

      {openItem && openPhoto && (
        <div className="lightbox" ref={dialogRef} role="dialog" aria-modal="true" aria-label={openItem.title} onClick={closeLightbox}>
          <button type="button" className="lightboxClose" aria-label="Close" ref={closeButtonRef} onClick={closeLightbox}>×</button>
          <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
            {openItem.photos?.length ? <h2>{openItem.title}</h2> : null}
            <Image src={openPhoto.src} alt={openPhoto.alt} width={openPhoto.width} height={openPhoto.height} />
            <p>{openPhoto.title}</p>
            {photos.length > 1 && (
              <div className="lightboxControls">
                <button type="button" aria-label="Previous photo" onClick={() => setPhotoIndex((index) => (index - 1 + photos.length) % photos.length)}>← Previous</button>
                <span role="status" aria-live="polite">{photoIndex + 1} / {photos.length}</span>
                <button type="button" aria-label="Next photo" onClick={() => setPhotoIndex((index) => (index + 1) % photos.length)}>Next →</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
