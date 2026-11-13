"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { type GalleryPhoto } from "../lib/gallery-items";

export default function Gallery({ items }: { items: GalleryPhoto[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const openPhoto = openIndex !== null ? items[openIndex] : null;

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
    if (openIndex === null) return;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const photoCount = items.length;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (photoCount > 1 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        setOpenIndex((index) => ((index ?? 0) + direction + photoCount) % photoCount);
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
  }, [openIndex, items.length]);

  return (
    <div>
        <div className="galleryGrid">
          {items.map((item, index) => (
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
      {openPhoto && (
        <div className="lightbox" ref={dialogRef} role="dialog" aria-modal="true" aria-label={openPhoto.title} onClick={closeLightbox}>
          <button type="button" className="lightboxClose" aria-label="Close" ref={closeButtonRef} onClick={closeLightbox}>×</button>
          <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
            <Image src={openPhoto.src} alt={openPhoto.alt} width={openPhoto.width} height={openPhoto.height} />
            <p>{openPhoto.title}</p>
            {items.length > 1 && (
              <div className="lightboxControls">
                <button type="button" aria-label="Previous photo" onClick={() => setOpenIndex((index) => ((index ?? 0) - 1 + items.length) % items.length)}>← Previous</button>
                <span role="status" aria-live="polite">{(openIndex ?? 0) + 1} / {items.length}</span>
                <button type="button" aria-label="Next photo" onClick={() => setOpenIndex((index) => ((index ?? 0) + 1) % items.length)}>Next →</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
