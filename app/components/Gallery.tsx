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
              {index === 0 && <><path d="M10 40V29l7-12h29l8 12v11M10 29h44M18 29l4-12m20 0 5 12M10 35h8m28 0h8M18 40h28"/><circle cx="18" cy="43" r="5"/><circle cx="46" cy="43" r="5"/></>}
              {index === 1 && <><path d="M8 37h48L46 49H20L8 37Zm14 0V26h21l6 11M29 26V15h10v11M7 54q6-6 12 0t12 0 12 0 12 0"/></>}
              {index === 2 && <><path d="M5 15h32v29H5V15Zm32 11h13l9 11v7H37M43 26v11h16"/><circle cx="16" cy="46" r="5"/><circle cx="47" cy="46" r="5"/></>}
              {index === 3 && <><path d="M9 47V29l9-12h28l9 12v18M9 29h46M22 17l-3 12m23-12 3 12M23 35h18v11H23zM32 6v6m-8-4 3 4m13-4-3 4"/></>}
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
