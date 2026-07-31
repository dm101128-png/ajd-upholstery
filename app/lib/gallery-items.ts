export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  { src: "/work-interior.png", alt: "Custom two-tone leather bucket seats and dash trim", title: "Bucket seats", category: "Bucket seats" },
  { src: "/work-door-panel.png", alt: "Custom stitched leather door panel", title: "Door panel", category: "Door panels" },
  { src: "/work-vw-restoration.png", alt: "Classic Volkswagen Beetle interior restoration", title: "Classic restoration", category: "Classic cars" },
  { src: "/shop-fabric-wall.png", alt: "Wall of leather and vinyl rolls in the AJD Upholstery shop", title: "Material selection", category: "Leather upgrades" },
  { src: "/shop-bench-work.png", alt: "AJD Upholstery hand-stitching a seat in the shop", title: "In the shop", category: "Repairs and restorations" },
  { src: "/shop-supply-cabinet.png", alt: "Dyes, adhesives, and finishing supplies in the AJD Upholstery shop", title: "Shop supplies", category: "Repairs and restorations" },
];
