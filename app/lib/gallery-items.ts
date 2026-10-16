export const galleryCategories = ["Cars", "Boats", "Big Trucks", "Roof & Sunroof Repair"] as const;

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
    src: "/our-work/bronco/cover.jpg", alt: "Bronze Ford Bronco at sunset", title: "Bronco", category: "Big Trucks", width: 1280, height: 960,
    photos: [
      { src: "/our-work/bronco/seats.jpg", alt: "Custom tan and black Bronco bucket seats with embroidered headrests and matching rear bench", title: "Custom Bronco seats", width: 1280, height: 960 },
      { src: "/our-work/bronco/embroidery.jpg", alt: "Close-up of the embroidered Bronco logo on a tan seat back", title: "Bronco embroidery detail", width: 1280, height: 960 },
      { src: "/our-work/bronco/complete-seat-set.jpg", alt: "Matching tan and black Bronco front bucket seats and rear bench", title: "Complete Bronco seat set", width: 1280, height: 960 },
    ],
  },
  { src: "/our-work/green-squarebody/full-interior.jpg", alt: "Green classic truck with a fully customized brown leather interior", title: "Custom square-body interior", category: "Big Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/driver-cabin.jpg", alt: "Driver-side view of a green classic truck with brown leather seats, dashboard, console, and door panels", title: "Complete leather cabin", category: "Big Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/diamond-stitched-seats.jpg", alt: "Close view of custom brown leather bucket seats with diamond stitching", title: "Diamond-stitched bucket seats", category: "Big Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/door-panel-passenger.jpg", alt: "Custom brown leather passenger door panel with diamond stitching and integrated speaker grille", title: "Hand-finished door panel", category: "Big Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/door-panel-wide.jpg", alt: "Wide view of a custom brown leather door panel, seat, dashboard, and matching carpet", title: "Matching leather door trim", category: "Big Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/center-console.jpg", alt: "Custom brown leather center console and dashboard trim in a green classic truck", title: "Wrapped center console", category: "Big Trucks", width: 1280, height: 960 },
  { src: "/our-work/green-squarebody/passenger-cabin.jpg", alt: "Passenger-side view of a complete brown leather interior in a green classic truck", title: "Coordinated cabin details", category: "Big Trucks", width: 1280, height: 960 },
  { src: "/work-interior.png", alt: "Custom two-tone leather bucket seats and dash trim", title: "Custom truck interior", category: "Big Trucks", width: 1448, height: 1086 },
  { src: "/work-door-panel.png", alt: "Custom stitched leather door panel", title: "Custom truck door panel", category: "Big Trucks", width: 1448, height: 1086 },
  { src: "/work-vw-restoration.png", alt: "Classic Volkswagen Beetle interior restoration", title: "Classic restoration", category: "Cars", width: 1086, height: 1448 },
  { src: "/shop-fabric-wall.png", alt: "Wall of leather and vinyl rolls in the AJD Upholstery shop", title: "Material selection", category: null, width: 1448, height: 1086 },
  { src: "/shop-bench-work.png", alt: "AJD Upholstery hand-stitching a seat in the shop", title: "In the shop", category: null, width: 1086, height: 1448 },
  { src: "/shop-supply-cabinet.png", alt: "Dyes, adhesives, and finishing supplies in the AJD Upholstery shop", title: "Shop supplies", category: null, width: 1086, height: 1448 },
];

// Keep original photo records intact; group related photos into project buttons.
export const galleryProjects: GalleryItem[] = [
  galleryItems[0],
  {
  "src": "/our-work/big-trucks/c10/cover.jpg",
  "title": "C10",
  "alt": "Green Chevrolet C10 pickup at sunset",
  "category": "Big Trucks",
  "width": 960,
  "height": 472,
  "photos": [
    {
      "src": "/our-work/big-trucks/c10/interior-1.jpg",
      "title": "Passenger door and cabin",
      "alt": "Brown leather passenger door panel with diamond stitching in the green C10",
      "width": 1280,
      "height": 960
    },
    {
      "src": "/our-work/big-trucks/c10/interior-2.jpg",
      "title": "Driver cabin",
      "alt": "C10 driver cabin with brown leather seat, door panel, and steering wheel",
      "width": 1280,
      "height": 960
    },
    {
      "src": "/our-work/big-trucks/c10/interior-3.jpg",
      "title": "Passenger-side interior",
      "alt": "C10 passenger seat and matching brown leather door trim",
      "width": 1280,
      "height": 960
    },
    {
      "src": "/our-work/big-trucks/c10/interior-4.jpg",
      "title": "Custom center console",
      "alt": "Brown leather center console and dashboard in the C10",
      "width": 1280,
      "height": 960
    },
    {
      "src": "/our-work/big-trucks/c10/interior-5.jpg",
      "title": "Driver-side upholstery",
      "alt": "C10 driver seat and matching diamond-stitched door panel",
      "width": 1280,
      "height": 960
    },
    {
      "src": "/our-work/big-trucks/c10/interior-6.jpg",
      "title": "Diamond-stitched seat",
      "alt": "Close-up of the C10 brown leather bucket seat with diamond stitching",
      "width": 1280,
      "height": 960
    },
    {
      "src": "/our-work/big-trucks/c10/interior-7.jpg",
      "title": "Passenger cabin detail",
      "alt": "C10 passenger cabin with leather seat, dashboard, and console",
      "width": 1280,
      "height": 960
    },
    {
      "src": "/our-work/big-trucks/c10/interior-8.jpg",
      "title": "Passenger cabin view",
      "alt": "Another view of the C10 passenger seat and matching interior",
      "width": 1280,
      "height": 960
    }
  ]
},
  { ...galleryItems[10], title: "Volkswagen Beetle" },

  { ...galleryItems[8], title: "Custom Truck Interior", photos: galleryItems.slice(8, 10) },
];
