export const galleryCategories = ["Boats", "Classic Cars", "Trucks", "Hotels"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory | null;
  width: number;
  height: number;
}

export const galleryItems: GalleryItem[] = [
  { src: "/our-work/green-squarebody/full-interior.jpg", alt: "Green classic truck with a fully customized brown leather interior", title: "Custom square-body interior", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/driver-cabin.jpg", alt: "Driver-side view of a green classic truck with brown leather seats, dashboard, console, and door panels", title: "Complete leather cabin", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/diamond-stitched-seats.jpg", alt: "Close view of custom brown leather bucket seats with diamond stitching", title: "Diamond-stitched bucket seats", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/door-panel-passenger.jpg", alt: "Custom brown leather passenger door panel with diamond stitching and integrated speaker grille", title: "Hand-finished door panel", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/door-panel-wide.jpg", alt: "Wide view of a custom brown leather door panel, seat, dashboard, and matching carpet", title: "Matching leather door trim", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/center-console.jpg", alt: "Custom brown leather center console and dashboard trim in a green classic truck", title: "Wrapped center console", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/passenger-cabin.jpg", alt: "Passenger-side view of a complete brown leather interior in a green classic truck", title: "Coordinated cabin details", category: "Trucks", width: 1280, height: 960 },
  { src: "/work-interior.png", alt: "Custom two-tone leather bucket seats and dash trim", title: "Custom truck interior", category: "Trucks", width: 1448, height: 1086 },
  { src: "/work-door-panel.png", alt: "Custom stitched leather door panel", title: "Custom truck door panel", category: "Trucks", width: 1448, height: 1086 },
  { src: "/work-vw-restoration.png", alt: "Classic Volkswagen Beetle interior restoration", title: "Classic restoration", category: "Classic Cars", width: 1086, height: 1448 },
  { src: "/shop-fabric-wall.png", alt: "Wall of leather and vinyl rolls in the AJD Upholstery shop", title: "Material selection", category: null, width: 1448, height: 1086 },
  { src: "/shop-bench-work.png", alt: "AJD Upholstery hand-stitching a seat in the shop", title: "In the shop", category: null, width: 1086, height: 1448 },
  { src: "/shop-supply-cabinet.png", alt: "Dyes, adhesives, and finishing supplies in the AJD Upholstery shop", title: "Shop supplies", category: null, width: 1086, height: 1448 },
];
