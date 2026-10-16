"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { galleryCategories, type GalleryItem } from "../lib/gallery-items";

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const categories = galleryCategories;
  const [active, setActive] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered = items.filter((i) => i.category === active);
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
      <div className="galleryCategories" aria-label="Project categories">
        {categories.map((cat, index) => (
          <button key={cat} type="button" aria-pressed={active === cat}
            aria-controls="galleryProjects"
            className={`galleryCategory${active === cat ? " galleryCategoryActive" : ""}`}
            onClick={() => { setActive(cat); setOpenIndex(null); setPhotoIndex(0); }}>
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {index === 0 && <><path d="M5 41v-8l11-3 9-11h15l10 11 9 3v8h-6M11 41H5m18 0h18M18 30h29M25 23l-5 7m12-11v11m8-7 6 7M6 35h5m43 0h4M35 34h5"/><circle cx="17" cy="41" r="6"/><circle cx="47" cy="41" r="6"/><circle cx="17" cy="41" r="2"/><circle cx="47" cy="41" r="2"/></>}
              {index === 1 && <><path d="M8 37h48L46 49H20L8 37Zm14 0V26h21l6 11M29 26V15h10v11M7 54q6-6 12 0t12 0 12 0 12 0"/></>}
              {index === 2 && <><path d="M4 28h24V17h14l7 14h10v11h-6M4 28v14h6m12 0h19M28 28v14M32 21h7l5 10H32V21Zm-28 6h24M33 35h4m18 0h4"/><circle cx="16" cy="42" r="6"/><circle cx="47" cy="42" r="6"/><circle cx="16" cy="42" r="2"/><circle cx="47" cy="42" r="2"/></>}
              {index === 3 && <><path d="M24 5h16c6 0 9 5 9 11v32c0 7-3 11-9 11H24c-6 0-9-4-9-11V16c0-6 3-11 9-11ZM20 17l3 7h18l3-7M20 47l3-6h18l3 6M10 21h5m34 0h5M19 27v11m26-11v11"/><rect x="23" y="28" width="18" height="10" rx="2"/><path d="m28 35 7-4"/></>}
              {index === 4 && <><path d="M7 25 32 13l25 12M12 25v27h40V25M8 52h48M18 38h28v7H18zM22 45v7m20-7v7M17 25h30"/></>}
            </svg>
            <span>{cat}</span><small>Explore projects <span aria-hidden="true">→</span></small>
          </button>
        ))}
      </div>
      <div id="galleryProjects" aria-live="polite">
      {active && <div className="galleryProjectHeading"><h2>{active}</h2><button type="button" onClick={() => setActive(null)}>Back to categories</button></div>}
      {!active && <p className="galleryPrompt">Choose a category to explore our work, then select a project to see its photos.</p>}

      {active && (filtered.length > 0 ? (
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
      ))}
      </div>

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
