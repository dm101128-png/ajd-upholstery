"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  "Selling Leather Without Blowing the Budget",
  "What Is Katzkin?",
  "Who Installs It — and How Fast",
  "What It Costs — and What's Covered",
  "A Real 2026 Ford F-150 Example",
  "A Note on Pricing",
  "2026 Ford F-150 — Starting MSRP by Trim",
  "Two Ways to Get the Customer Into Leather",
  "Why This Works for the Dealership",
  "Sources",
];

export default function KatzkinPresentation() {
  const [current, setCurrent] = useState(0);
  const last = slides.length - 1;

  const previous = useCallback(() => {
    setCurrent((slide) => Math.max(0, slide - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((slide) => Math.min(last, slide + 1));
  }, [last]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, previous]);

  const slideNumber = String(current + 1).padStart(2, "0");

  return (
    <div className="presentationViewer" aria-label="Katzkin presentation viewer">
      <div className="presentationStage">
        <Image
          key={slideNumber}
          className="presentationSlide"
          src={`/katzkin-presentation/slide-${slideNumber}.png`}
          alt={`Slide ${current + 1} of ${slides.length}: ${slides[current]}`}
          width={1600}
          height={900}
          priority={current === 0}
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 92vw, 1120px"
        />
      </div>

      <div className="presentationToolbar">
        <button type="button" onClick={previous} disabled={current === 0} aria-label="Previous slide">
          <span aria-hidden="true">←</span> Previous
        </button>
        <p aria-live="polite" aria-atomic="true">
          Slide <strong>{current + 1}</strong> of {slides.length}
        </p>
        <button type="button" onClick={next} disabled={current === last} aria-label="Next slide">
          Next <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className="presentationHint">Use the buttons or your keyboard’s left and right arrow keys.</p>
    </div>
  );
}
