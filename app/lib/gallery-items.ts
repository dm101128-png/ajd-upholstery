export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

export const galleryItems: GalleryItem[] = [
  { src: "/work-interior.png", alt: "Custom two-tone leather bucket seats and dash trim", title: "Bucket seats", category: "Bucket seats", width: 1448, height: 1086 },
  { src: "/work-door-panel.png", alt: "Custom stitched leather door panel", title: "Door panel", category: "Door panels", width: 1448, height: 1086 },
  { src: "/work-vw-restoration.png", alt: "Classic Volkswagen Beetle interior restoration", title: "Classic restoration", category: "Classic cars", width: 1086, height: 1448 },
  { src: "/shop-fabric-wall.png", alt: "Wall of leather and vinyl rolls in the AJD Upholstery shop", title: "Material selection", category: "Leather upgrades", width: 1448, height: 1086 },
  { src: "/shop-bench-work.png", alt: "AJD Upholstery hand-stitching a seat in the shop", title: "In the shop", category: "Repairs and restorations", width: 1086, height: 1448 },
  { src: "/shop-supply-cabinet.png", alt: "Dyes, adhesives, and finishing supplies in the AJD Upholstery shop", title: "Shop supplies", category: "Repairs and restorations", width: 1086, height: 1448 },
];
