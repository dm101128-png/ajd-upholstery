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

const addedTruckProjects: GalleryItem[] = [
  {
    "src": "/our-work/big-trucks/custom-black-interior/front-and-rear-upholstery.jpg",
    "title": "Custom Black Truck Interior",
    "alt": "Black truck seats with chevron-pattern stitching and a matching upholstered center console",
    "width": 1800,
    "height": 1350,
    "category": "Big Trucks",
    "photos": [
      {
        "src": "/our-work/big-trucks/custom-black-interior/front-and-rear-upholstery.jpg",
        "title": "Coordinated front and rear upholstery",
        "alt": "Black truck seats with chevron-pattern stitching and a matching upholstered center console",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/passenger-cabin.jpg",
        "title": "Passenger cabin overview",
        "alt": "Open passenger door revealing black custom truck seating, dashboard, and center console",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/driver-cabin.jpg",
        "title": "Driver cabin overview",
        "alt": "Open driver door of a truck with black custom upholstery and coordinated door trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/rear-bench-overview.jpg",
        "title": "Rear bench upholstery",
        "alt": "Black truck rear bench with chevron stitching, matching headrests, and contrast seams",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/rear-cushion-profile.jpg",
        "title": "Rear cushion profile",
        "alt": "Side view of the black truck rear bench with patterned seat cushions",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/rear-seat-stitching.jpg",
        "title": "Rear seat stitching",
        "alt": "Close view of chevron-pattern stitching across black truck rear seats",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/rear-cabin-wide.jpg",
        "title": "Rear cabin overview",
        "alt": "Rear truck cabin with black seat backs, patterned bench upholstery, and matching headrests",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/front-seat-profile.jpg",
        "title": "Front seat profile",
        "alt": "Black truck front seats with chevron upholstery panels beside the center console",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/passenger-seat-detail.jpg",
        "title": "Passenger seat detail",
        "alt": "Black front passenger seat with chevron stitching and contrasting perimeter seams",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/front-cabin-wide.jpg",
        "title": "Front cabin details",
        "alt": "Wide view of the black upholstered truck seats, center console, and dashboard",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/rear-door-in-sunlight.jpg",
        "title": "Rear door trim in sunlight",
        "alt": "Black rear truck door panel and upholstered armrest viewed in sunlight",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/rear-door-panel.jpg",
        "title": "Rear door panel",
        "alt": "Black rear truck door panel with an upholstered armrest and lower storage pocket",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/door-insert-and-armrest.jpg",
        "title": "Door insert and armrest",
        "alt": "Black truck door insert with a stitched armrest and textured trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/door-handle-trim.jpg",
        "title": "Door handle trim",
        "alt": "Close view of the truck door handle, dark upholstered insert, and patterned switch trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/driver-door-controls.jpg",
        "title": "Driver door upholstery",
        "alt": "Driver door panel with a dark fabric insert, stitched armrest, and window controls",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/open-rear-door.jpg",
        "title": "Open rear door",
        "alt": "Full view of a black truck rear door panel with its armrest and red reflector",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/passenger-door-panel.jpg",
        "title": "Passenger door panel",
        "alt": "Black passenger door with a dark upholstered insert, stitched armrest, and storage pocket",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/console-and-seat.jpg",
        "title": "Console and seat coordination",
        "alt": "Truck center console and dashboard controls alongside a chevron-stitched black seat",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/center-console.jpg",
        "title": "Upholstered center console",
        "alt": "Black upholstered center console with contrast stitching between the truck front seats",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/dashboard-stitching.jpg",
        "title": "Dashboard stitching detail",
        "alt": "Contrast stitching along the black truck dashboard above the driver air vent",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/steering-wheel-and-dash.jpg",
        "title": "Steering wheel and dash",
        "alt": "Stitched black steering wheel and dashboard trim inside the truck",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/driver-dashboard.jpg",
        "title": "Driver dashboard trim",
        "alt": "Driver-side dashboard and steering wheel with coordinated black surfaces and stitching",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/passenger-dashboard.jpg",
        "title": "Passenger dashboard trim",
        "alt": "Passenger-side view across the truck dashboard, center stack, and console",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/dashboard-overview.jpg",
        "title": "Dashboard overview",
        "alt": "Wide view of the black truck dashboard and center controls",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/rear-headliner.jpg",
        "title": "Rear headliner and seating",
        "alt": "Dark truck headliner above the black rear bench and rear window",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/front-headliner.jpg",
        "title": "Front headliner finish",
        "alt": "Dark textured headliner above the truck front seats",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/roof-trim.jpg",
        "title": "Roof trim and cabin",
        "alt": "View upward through the truck cabin showing the dark headliner and overhead trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/rear-roof-detail.jpg",
        "title": "Rear roof detail",
        "alt": "Dark headliner and roof trim above the truck rear window and headrests",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/rear-console-switch.jpg",
        "title": "Rear console detail",
        "alt": "Close view of a small illuminated switch set into the black rear console panel",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/rear-console-panel.jpg",
        "title": "Rear console panel",
        "alt": "Black rear center console panel between the truck front seat backs",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/custom-black-interior/console-switch-detail.jpg",
        "title": "Console switch close-up",
        "alt": "Close-up of an illuminated switch in the textured black truck console panel",
        "width": 1800,
        "height": 1350
      }
    ]
  },
  {
    "src": "/our-work/big-trucks/ram-custom-interior/driver-cabin.jpg",
    "title": "RAM Custom Interior",
    "alt": "RAM truck interior with orange and black upholstery, custom steering wheel trim, and coordinated dashboard",
    "width": 1800,
    "height": 1350,
    "category": "Big Trucks",
    "photos": [
      {
        "src": "/our-work/big-trucks/ram-custom-interior/driver-cabin.jpg",
        "title": "Custom RAM driver cabin",
        "alt": "RAM truck interior with orange and black upholstery, custom steering wheel trim, and coordinated dashboard",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/passenger-cabin.jpg",
        "title": "Passenger cabin overview",
        "alt": "Orange and black RAM passenger seat beside matching door, dashboard, and carpet details",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/passenger-seat-and-dash.jpg",
        "title": "Passenger seat and dashboard",
        "alt": "RAM passenger cabin with a quilted orange seat insert and orange dashboard panel",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/driver-seat-profile.jpg",
        "title": "Driver seat profile",
        "alt": "Side view of the orange and black RAM driver seat with coordinated lower trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/driver-seat-and-wheel.jpg",
        "title": "Driver seat and steering wheel",
        "alt": "Quilted orange RAM driver seat beside the wrapped steering wheel and matching dash trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/front-cabin-wide.jpg",
        "title": "Front cabin overview",
        "alt": "Wide view of the custom RAM interior with orange seat inserts and black seat bolsters",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/driver-seat-base.jpg",
        "title": "Driver seat base and footwell",
        "alt": "Orange upholstered driver seat base and brown carpet in the RAM footwell",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/passenger-footwell.jpg",
        "title": "Passenger footwell details",
        "alt": "RAM-branded floor mat beside an orange-trimmed passenger seat base",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/passenger-door-panel.jpg",
        "title": "Passenger door panel",
        "alt": "RAM passenger door panel with quilted orange upholstery, matching armrest, and lower trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/passenger-door-detail.jpg",
        "title": "Passenger door upholstery detail",
        "alt": "Close view of quilted orange upholstery and coordinated trim on the RAM passenger door",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/driver-door-panel.jpg",
        "title": "Driver door panel",
        "alt": "Open RAM driver door with quilted orange upholstery and contrasting black trim",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/open-driver-door.jpg",
        "title": "Driver door and cabin",
        "alt": "Exterior view through the open RAM driver door showing coordinated orange and black upholstery",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/ram-dashboard.jpg",
        "title": "Custom RAM dashboard",
        "alt": "Orange dashboard trim with raised RAM lettering beside the truck center console",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/center-stack.jpg",
        "title": "Center stack in sunlight",
        "alt": "RAM center stack with orange trim and a touchscreen viewed in direct sunlight",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/dashboard-in-sunlight.jpg",
        "title": "Dashboard finish in sunlight",
        "alt": "Orange RAM dashboard panel and center stack illuminated by sunlight",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/headliner-and-seats.jpg",
        "title": "Headliner and seat coordination",
        "alt": "Orange RAM headliner above matching orange and black front seat upholstery",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/headliner-and-driver-seat.jpg",
        "title": "Headliner and driver seat",
        "alt": "Low view of the orange RAM headliner, steering wheel, and coordinated driver seat",
        "width": 1800,
        "height": 1350
      },
      {
        "src": "/our-work/big-trucks/ram-custom-interior/truck-exterior.jpg",
        "title": "RAM pickup exterior",
        "alt": "Silver RAM pickup parked outside the upholstery shop",
        "width": 1800,
        "height": 1350
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
  ...addedTruckProjects,
];
