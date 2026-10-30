export interface Service {
  slug: string;
  title: string;
  group: "Seats" | "Interior trim" | "Custom & specialty";
  summary: string;
  details: string;
  options: string[];
}

export const services: Service[] = [
  {
    slug: "seat-upholstery", title: "Seat upholstery", group: "Seats",
    summary: "Refresh worn seat coverings or give your interior a new look with upholstery chosen for your vehicle and how you use it.",
    details: "We discuss the material, color, and stitching before planning the work. The condition of the existing covers and cushioning helps determine whether to address one section, one seat, or a matching set.",
    options: ["Leather, vinyl, suede, and fabric options", "Matching front and rear seating", "Coordinated colors and stitching"],
  },
  {
    slug: "seat-repairs", title: "Seat repairs", group: "Seats",
    summary: "Address torn upholstery, split seams, and worn seat panels with a repair suited to the condition of your seat.",
    details: "A photo of the damage and a wider view of the seat help us assess the next step. We review the surrounding material as well as the damaged area to discuss a practical repair and available matching options.",
    options: ["Torn or worn seat panels", "Split stitching and seams", "Material and color matching options"],
  },
  {
    slug: "custom-seat-designs", title: "Custom seat designs", group: "Seats",
    summary: "Build a seat design around your vehicle, from understated upholstery to contrasting panels and decorative stitching.",
    details: "Bring reference photos or describe the look you have in mind. We work through panel layout, material combinations, and stitching details so the seats fit the rest of the interior.",
    options: ["Two-tone material combinations", "Custom panel layouts", "Decorative stitching details"],
  },
  {
    slug: "foam-repair-seat-rebuilding", title: "Foam repair and seat rebuilding", group: "Seats",
    summary: "Restore the shape of tired seating by addressing the cushioning beneath the upholstery.",
    details: "Sagging cushions and worn bolsters can affect how a seat feels and how its cover fits. We assess the seat and discuss foam repair or rebuilding alongside any needed upholstery work.",
    options: ["Worn cushion assessment", "Seat bolster shaping", "Foam and upholstery coordination"],
  },
  {
    slug: "factory-style-leather-upgrades", title: "Factory-style leather upgrades", group: "Seats",
    summary: "Explore leather upholstery with a clean, coordinated appearance that suits your vehicle’s original interior.",
    details: "We review your vehicle and preferred finish, then discuss available materials and panel details. If you are interested in Katzkin, our dedicated Katzkin page explains that interior option.",
    options: ["Factory-inspired colors and layouts", "Coordinated seat surfaces and trim", "Vehicle-specific material options"],
  },
  {
    slug: "headliners", title: "Headliners", group: "Interior trim",
    summary: "Refresh a sagging, damaged, or worn headliner to bring a cleaner finish to the roof of your cabin.",
    details: "The headliner board, surrounding trim, and any roof openings affect the work involved. Share your vehicle details and photos so we can discuss the condition and suitable replacement materials.",
    options: ["Sagging headliner material", "Color and texture selection", "Coordination with roof trim"],
  },
  {
    slug: "sunroof-shades", title: "Sunroof shades", group: "Interior trim",
    summary: "Address worn or damaged sunroof shade upholstery and coordinate its finish with your headliner.",
    details: "Tell us whether the issue is with the shade material, movement, or both. We need to assess the shade and its condition before confirming the scope of the upholstery work.",
    options: ["Shade fabric assessment", "Matching headliner materials", "Vehicle-specific repair planning"],
  },
  {
    slug: "door-panels", title: "Door panels", group: "Interior trim",
    summary: "Repair worn door trim or create upholstered panels that carry your seat design through the cabin.",
    details: "We discuss the existing panel condition and the areas you want upholstered. Material selection and stitch placement can tie the doors to the seats, console, and other interior trim.",
    options: ["Upholstered door inserts", "Matching colors and textures", "Custom stitching and trim details"],
  },
  {
    slug: "carpet-installation", title: "Carpet installation", group: "Interior trim",
    summary: "Replace worn cabin carpet as part of an interior refresh or a larger restoration.",
    details: "Vehicle shape, seating layout, and the condition beneath the carpet affect installation. We discuss the areas to be covered and available material choices before planning the fit.",
    options: ["Cabin carpet replacement", "Color coordination with seating", "Carpet work during an interior restoration"],
  },
  {
    slug: "steering-wheel-upholstery", title: "Steering wheel upholstery", group: "Interior trim",
    summary: "Refresh the upholstered surface of your steering wheel with materials and stitching that suit your interior.",
    details: "Share the vehicle model and photos of the wheel, including worn areas. Its shape and existing covering help us determine the available upholstery approach.",
    options: ["Worn covering assessment", "Material and thread choices", "Coordination with seats and trim"],
  },
  {
    slug: "center-consoles", title: "Center consoles", group: "Interior trim",
    summary: "Bring the center console into your interior design with coordinated upholstery and finishing details.",
    details: "We review the surfaces you want covered and their condition. From a console lid to a broader custom interior project, the material and stitching can be selected to match the surrounding cabin.",
    options: ["Console lid upholstery", "Matching leather or vinyl trim", "Custom stitching details"],
  },
  {
    slug: "armrests", title: "Armrests", group: "Interior trim",
    summary: "Refresh worn armrest coverings and discuss cushioning needs for these frequently used interior surfaces.",
    details: "Door and seat armrests vary in shape and construction. Photos of the armrest and surrounding upholstery help us discuss the repair scope and matching materials.",
    options: ["Worn or split armrest covers", "Cushion condition assessment", "Matching surrounding upholstery"],
  },
  {
    slug: "custom-stitching", title: "Custom stitching", group: "Custom & specialty",
    summary: "Use stitching to give seats, door panels, and other upholstered surfaces a coordinated custom finish.",
    details: "Thread color, stitch layout, and material choice work together. Bring a reference or discuss your ideas with us so we can plan details appropriate to the upholstery and the vehicle.",
    options: ["Contrast thread colors", "Diamond-stitch patterns", "Coordinated seat and door details"],
  },
  {
    slug: "katzkin-leather-interiors", title: "Katzkin leather interiors", group: "Custom & specialty",
    summary: "Explore Katzkin automotive leather interiors installed by AJD Upholstery.",
    details: "Our Katzkin page covers vehicle-specific fit, material options, and the installation process. Share your vehicle year, make, and model to discuss availability.",
    options: ["Leather color choices", "Stitching and perforation options", "Vehicle-specific fit"],
  },
  {
    slug: "classic-car-interiors", title: "Classic car interiors", group: "Custom & specialty",
    summary: "Restore the character of a classic cabin or introduce custom materials while keeping the vehicle’s style in view.",
    details: "We discuss which original details you want to retain and which surfaces need attention. Seats, door panels, carpet, and roof trim can be planned together or addressed in stages.",
    options: ["Original-inspired upholstery choices", "Coordinated seats and door trim", "Complete or staged interior restoration"],
  },
  {
    slug: "hot-rod-interiors", title: "Hot rod interiors", group: "Custom & specialty",
    summary: "Create an interior that complements your hot rod’s build, from seating to the finishing details.",
    details: "Custom builds need a plan based on the vehicle in front of us. We work through the desired look, existing interior components, and material combinations before defining the upholstery scope.",
    options: ["Custom colors and material combinations", "Seat and door panel designs", "Coordinated console and trim upholstery"],
  },
  {
    slug: "truck-interiors", title: "Truck interiors", group: "Custom & specialty",
    summary: "Repair everyday wear or transform your truck’s seating and interior with coordinated upholstery.",
    details: "From work trucks to classic pickups, we consider how the vehicle is used and the look you want. Share photos and vehicle details to discuss a seat repair, custom trim, or a broader interior project.",
    options: ["Bench and bucket seat upholstery", "Custom door panels and consoles", "Classic pickup interior projects"],
  },
  {
    slug: "commercial-specialty-vehicle-interiors", title: "Commercial and specialty vehicle interiors", group: "Custom & specialty",
    summary: "Discuss upholstery work for commercial and specialty vehicles with materials selected around their use.",
    details: "Tell us about the vehicle, seating layout, and areas that need attention. Photos and a description of day-to-day use help us assess the project and discuss suitable upholstery options.",
    options: ["Worn seating and trim", "Material selection for the intended use", "Project-specific upholstery planning"],
  },
  {
    slug: "full-interior-restoration", title: "Full interior restoration", group: "Custom & specialty",
    summary: "Plan seats, trim, and cabin finishes together for a cohesive interior restoration.",
    details: "We start with the current condition and your goals, whether that means retaining an original look or creating a custom finish. Reviewing the full cabin helps define the work and coordinate materials across each area.",
    options: ["Seats and cushioning", "Door panels, consoles, and armrests", "Carpet and headliner coordination"],
  },
  {
    slug: "custom-automotive-upholstery", title: "Custom automotive upholstery projects", group: "Custom & specialty",
    summary: "Bring your upholstery ideas to AJD and work through a plan tailored to your vehicle.",
    details: "Reference photos, material preferences, and pictures of the current interior are a useful starting point. We discuss the design and areas involved before determining the scope of the project.",
    options: ["Material and color combinations", "Custom interior details", "Coordinated work across multiple surfaces"],
  },
];

export function serviceHref(service: Service) {
  return service.slug === "katzkin-leather-interiors" ? "/katzkin" : `/services/${service.slug}`;
}
