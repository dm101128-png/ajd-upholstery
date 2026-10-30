export const galleryCategories = ["Cars", "Classic Cars", "Boats", "Big Trucks", "Roof & Sunroof Repair", "Dugout Pits"] as const;

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

const addedGalleryProjects: GalleryItem[] = [
  {
    "src": "/our-work/classic-cars/rolls-royce/front-exterior.jpg",
    "title": "Classic Rolls-Royce",
    "alt": "Front view of a silver classic Rolls-Royce with its doors open outside the upholstery shop",
    "width": 1800,
    "height": 1350,
    "category": "Classic Cars",
    "photos": [
      {
        "src": "/our-work/classic-cars/rolls-royce/driver-cabin.jpg",
        "title": "Driver-side interior",
        "alt": "Open driver door of a classic Rolls-Royce with white seat upholstery, tan trim, and wood accents",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/embroidered-front-seats.jpg",
        "title": "Embroidered front seats",
        "alt": "White Rolls-Royce front seats with embroidered RR emblems and diamond-stitched upper panels",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/seat-stitching.jpg",
        "title": "Seat stitching detail",
        "alt": "Close view of white Rolls-Royce seat backs with diamond stitching and embroidered emblems",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/front-and-rear-seating.jpg",
        "title": "Coordinated front and rear seating",
        "alt": "White front seat upholstery and matching rear bench inside the Rolls-Royce",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/front-seat-profile.jpg",
        "title": "Front seat profile",
        "alt": "Side view of the white Rolls-Royce front seats beside the steering wheel",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/front-seat-wide.jpg",
        "title": "Front seat upholstery",
        "alt": "Wide view of white Rolls-Royce front seat cushions, pleated panels, and diamond-stitched seat backs",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/dashboard-and-console.jpg",
        "title": "Dashboard and center console",
        "alt": "Tan dashboard trim, wood accents, and a matching center console in the Rolls-Royce",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/steering-wheel-and-dash.jpg",
        "title": "Steering wheel and dash",
        "alt": "Rolls-Royce steering wheel and dashboard beside the white front passenger seat and door trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/driver-seat-and-console.jpg",
        "title": "Driver seat and console",
        "alt": "White driver seat cushion beside the Rolls-Royce steering wheel and tan-trimmed center console",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/headliner-and-roof-trim.jpg",
        "title": "Headliner and roof trim",
        "alt": "Light headliner and tan roof trim above the classic Rolls-Royce dashboard",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/footwell-and-lower-dash.jpg",
        "title": "Footwell and lower dash",
        "alt": "Brown carpet and tan lower dashboard trim in the Rolls-Royce driver footwell",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/rear-door-and-cabin.jpg",
        "title": "Rear door and cabin",
        "alt": "Open rear Rolls-Royce door with white and tan upholstery and wood trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/rear-cabin.jpg",
        "title": "Rear cabin details",
        "alt": "White front seat backs and matching rear door upholstery in the Rolls-Royce cabin",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/rear-bench.jpg",
        "title": "Diamond-stitched rear bench",
        "alt": "White Rolls-Royce rear bench with diamond-stitched upper panels and pleated cushions",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/rear-seat-and-trim.jpg",
        "title": "Rear seat and trim",
        "alt": "Rear passenger view of white Rolls-Royce seating and coordinated white and tan door trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/rear-door-profile.jpg",
        "title": "Rear door upholstery",
        "alt": "Profile of an open Rolls-Royce rear door with white upholstery, tan armrest, and wood accents",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/rear-cabin-wide.jpg",
        "title": "Rear cabin overview",
        "alt": "Wide view through the open rear door of the Rolls-Royce showing the white seats and door panel",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/front-exterior.jpg",
        "title": "Classic Rolls-Royce exterior",
        "alt": "Front view of a silver classic Rolls-Royce with its doors open outside the upholstery shop",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/classic-cars/rolls-royce/front-grille.jpg",
        "title": "Rolls-Royce grille",
        "alt": "Low front view of the classic Rolls-Royce grille, headlights, and open doors",
        "width": 1800,
        "height": 1350
      }
    ]
  },
  {
    "src": "/our-work/boats/gray-black-boat/side-panel-upholstery.jpg",
    "title": "Gray & Black Boat Upholstery",
    "alt": "Gray and black upholstered side panels fitted inside a white boat during restoration",
    "width": 1800,
    "height": 1350,
    "category": "Boats",
    "photos": [
      {
        "src": "/our-work/boats/gray-black-boat/side-panel-upholstery.jpg",
        "title": "New side panel upholstery",
        "alt": "Gray and black upholstered side panels fitted inside a white boat during restoration",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/boats/gray-black-boat/cockpit-trim.jpg",
        "title": "Cockpit trim installation",
        "alt": "New gray and black boat cockpit trim fitted around the helm during upholstery work",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/boats/gray-black-boat/bow-trim.jpg",
        "title": "Bow trim installation",
        "alt": "Black and gray upholstered bow trim installed around the boat seating area with cushions removed",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/boats/gray-black-boat/stripped-cockpit.jpg",
        "title": "Cockpit preparation",
        "alt": "Boat cockpit with seating and upholstery removed in preparation for interior work",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/boats/gray-black-boat/bow-preparation.jpg",
        "title": "Bow preparation",
        "alt": "White boat bow seating area with cushions and side upholstery removed",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/boats/gray-black-boat/stern-work-in-progress.jpg",
        "title": "Stern work in progress",
        "alt": "Upholstery work in progress around the exposed stern seating area of a white boat",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/boats/gray-black-boat/removed-upholstery.jpg",
        "title": "Removed panels and cushions",
        "alt": "Boat upholstery panels and cushions removed and arranged on the workshop floor",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/boats/gray-black-boat/new-cushion-cover.jpg",
        "title": "New cushion cover",
        "alt": "New gray and black boat cushion cover on an upholstery workbench",
        "width": 1350,
        "height": 1800
      },
      {
        "src": "/our-work/boats/gray-black-boat/covers-at-sewing-station.jpg",
        "title": "Covers at the sewing station",
        "alt": "Gray and black boat upholstery covers on a workbench beside an industrial sewing machine",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/boats/gray-black-boat/coordinated-cover-set.jpg",
        "title": "Coordinated cover set",
        "alt": "Coordinated gray and black boat upholstery pieces arranged in the workshop",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/boats/gray-black-boat/panels-ready-for-fitting.jpg",
        "title": "Panels ready for fitting",
        "alt": "New boat upholstery covers and a long black side panel arranged on the workshop floor",
        "width": 1350,
        "height": 1800
      }
    ]
  }
];

// Keep original photo records intact; group related photos into project buttons.
export const galleryProjects: GalleryItem[] = [
  ...addedGalleryProjects,
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
  { ...galleryItems[10], title: "Volkswagen Beetle", category: "Classic Cars", photos: [galleryItems[10]] },

  { ...galleryItems[8], title: "Custom Truck Interior", photos: galleryItems.slice(8, 10) },
  {
  "src": "/our-work/boats/xt-boat/cover.jpg",
  "title": "XT Boat",
  "alt": "Blue and white XT boat with orange and blue upholstery beside a lakeside dock",
  "category": "Boats",
  "width": 1024,
  "height": 1280,
  "photos": [
    {
      "src": "/our-work/boats/xt-boat/workshop-overview.jpg",
      "title": "XT boat and custom upholstery in the workshop",
      "alt": "XT boat on its trailer with blue, orange, and white upholstered seats arranged in the workshop",
      "width": 1536,
      "height": 2048
    },
    {
      "src": "/our-work/boats/xt-boat/cockpit-seating.jpg",
      "title": "Custom cockpit seating",
      "alt": "XT boat cockpit with white, orange, and blue diamond-stitched seats and blue carpet",
      "width": 2880,
      "height": 3840
    },
    {
      "src": "/our-work/boats/xt-boat/rear-seating.jpg",
      "title": "Rear seating and upholstery",
      "alt": "XT boat rear seating with matching white, orange, and blue upholstery in the workshop",
      "width": 2880,
      "height": 3840
    }
  ]
},
];
