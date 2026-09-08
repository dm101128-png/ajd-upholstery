export const galleryCategories = ["Boats", "Trucks", "Hot Rods", "Cars", "Hotels", "Baseball Fields"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryPhoto {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
}

export interface GalleryItem extends GalleryPhoto {
  category: GalleryCategory | null;
  // A project card uses its own cover and opens these detail photos in order.
  photos?: GalleryPhoto[];
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/our-work/bronco/cover.jpg", alt: "Bronze Ford Bronco at sunset", title: "Bronco", category: "Trucks", width: 1280, height: 960,
    photos: [
      { src: "/our-work/bronco/seats.jpg", alt: "Custom tan and black Bronco bucket seats with embroidered headrests and matching rear bench", title: "Custom Bronco seats", width: 1280, height: 960 },
      { src: "/our-work/bronco/embroidery.jpg", alt: "Close-up of the embroidered Bronco logo on a tan seat back", title: "Bronco embroidery detail", width: 1280, height: 960 },
      { src: "/our-work/bronco/complete-seat-set.jpg", alt: "Matching tan and black Bronco front bucket seats and rear bench", title: "Complete Bronco seat set", width: 1280, height: 960 },
    ],
  },
  { src: "/our-work/green-squarebody/full-interior.jpg", alt: "Green classic truck with a fully customized brown leather interior", title: "Custom square-body interior", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/driver-cabin.jpg", alt: "Driver-side view of a green classic truck with brown leather seats, dashboard, console, and door panels", title: "Complete leather cabin", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/diamond-stitched-seats.jpg", alt: "Close view of custom brown leather bucket seats with diamond stitching", title: "Diamond-stitched bucket seats", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/door-panel-passenger.jpg", alt: "Custom brown leather passenger door panel with diamond stitching and integrated speaker grille", title: "Hand-finished door panel", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/door-panel-wide.jpg", alt: "Wide view of a custom brown leather door panel, seat, dashboard, and matching carpet", title: "Matching leather door trim", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/center-console.jpg", alt: "Custom brown leather center console and dashboard trim in a green classic truck", title: "Wrapped center console", category: "Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/passenger-cabin.jpg", alt: "Passenger-side view of a complete brown leather interior in a green classic truck", title: "Coordinated cabin details", category: "Trucks", width: 1280, height: 960 },
  { src: "/work-interior.png", alt: "Custom two-tone leather bucket seats and dash trim", title: "Custom truck interior", category: "Trucks", width: 1448, height: 1086 },
  { src: "/work-door-panel.png", alt: "Custom stitched leather door panel", title: "Custom truck door panel", category: "Trucks", width: 1448, height: 1086 },
  { src: "/work-vw-restoration.png", alt: "Classic Volkswagen Beetle interior restoration", title: "Classic restoration", category: "Cars", width: 1086, height: 1448 },
  { src: "/shop-fabric-wall.png", alt: "Wall of leather and vinyl rolls in the AJD Upholstery shop", title: "Material selection", category: null, width: 1448, height: 1086 },
  { src: "/shop-bench-work.png", alt: "AJD Upholstery hand-stitching a seat in the shop", title: "In the shop", category: null, width: 1086, height: 1448 },
  { src: "/shop-supply-cabinet.png", alt: "Dyes, adhesives, and finishing supplies in the AJD Upholstery shop", title: "Shop supplies", category: null, width: 1086, height: 1448 },
];
