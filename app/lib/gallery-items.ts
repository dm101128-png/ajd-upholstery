export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

export const galleryItems: GalleryItem[] = [
  { src: "/our-work/green-squarebody/full-interior.jpg", alt: "Green classic truck with a fully customized brown leather interior", title: "Custom square-body interior", category: "Classic cars", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/driver-cabin.jpg", alt: "Driver-side view of a green classic truck with brown leather seats, dashboard, console, and door panels", title: "Complete leather cabin", category: "Classic cars", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/diamond-stitched-seats.jpg", alt: "Close view of custom brown leather bucket seats with diamond stitching", title: "Diamond-stitched bucket seats", category: "Bucket seats", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/door-panel-passenger.jpg", alt: "Custom brown leather passenger door panel with diamond stitching and integrated speaker grille", title: "Hand-finished door panel", category: "Door panels", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/door-panel-wide.jpg", alt: "Wide view of a custom brown leather door panel, seat, dashboard, and matching carpet", title: "Matching leather door trim", category: "Door panels", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/center-console.jpg", alt: "Custom brown leather center console and dashboard trim in a green classic truck", title: "Wrapped center console", category: "Leather upgrades", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/passenger-cabin.jpg", alt: "Passenger-side view of a complete brown leather interior in a green classic truck", title: "Coordinated cabin details", category: "Leather upgrades", width: 1280, height: 960 },
  { src: "/work-interior.png", alt: "Custom two-tone leather bucket seats and dash trim", title: "Bucket seats", category: "Bucket seats", width: 1448, height: 1086 },
  { src: "/work-door-panel.png", alt: "Custom stitched leather door panel", title: "Door panel", category: "Door panels", width: 1448, height: 1086 },
  { src: "/work-vw-restoration.png", alt: "Classic Volkswagen Beetle interior restoration", title: "Classic restoration", category: "Classic cars", width: 1086, height: 1448 },
  { src: "/shop-fabric-wall.png", alt: "Wall of leather and vinyl rolls in the AJD Upholstery shop", title: "Material selection", category: "Leather upgrades", width: 1448, height: 1086 },
  { src: "/shop-bench-work.png", alt: "AJD Upholstery hand-stitching a seat in the shop", title: "In the shop", category: "Repairs and restorations", width: 1086, height: 1448 },
  { src: "/shop-supply-cabinet.png", alt: "Dyes, adhesives, and finishing supplies in the AJD Upholstery shop", title: "Shop supplies", category: "Repairs and restorations", width: 1086, height: 1448 },
];
