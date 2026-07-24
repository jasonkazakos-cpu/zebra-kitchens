export type Service = {
  slug: string;
  title: string;
  icon: string; // lucide-react icon name, mapped in components/icon-map.tsx
  swatch: string; // hex colour for the paint-swatch tag
  teaser: string; // short one-liner for compact cards
  description: string; // longer copy for the kitchens overview page
  href?: string; // optional dedicated page, falls back to /contact
  // Fields used by service+location dynamic pages
  locationSlug?: string; // override slug used in /[service]/[location] routing
  tagline?: string;
  bullets?: string[];
};

export const services: Service[] = [
  {
    slug: "kitchen-design",
    title: "Kitchen Design",
    icon: "PencilRuler",
    swatch: "#2B5FAD",
    teaser: "A measured survey and a layout that actually works for how you cook and live.",
    description: "Our kitchen design service starts with a measured survey of your space, then turns your ideas into a practical layout — units, appliances, worktops and lighting planned before anything is ordered.",
    href: "/kitchen-design",
    tagline: "Free design consultations and measured surveys, turned into a kitchen plan you can see before you commit.",
    bullets: ["Free initial design consultation", "Measured site survey", "2D and 3D layout planning", "Appliance and lighting planning", "Colour and material guidance", "Fixed-price design quotations"],
  },
  {
    slug: "kitchen-supply",
    title: "Kitchen Supply",
    icon: "Truck",
    swatch: "#0E9594",
    teaser: "Units, doors and fittings sourced and delivered, from budget to bespoke.",
    description: "We supply complete kitchens to suit your budget and style, from popular retail ranges to bespoke and made-to-order cabinetry, with delivery coordinated around your installation date.",
    href: "/kitchen-supply",
    tagline: "Kitchen units, doors and accessories sourced and supplied, ready for installation.",
    bullets: ["Wide range of styles and finishes", "Bespoke and made-to-order options", "Colour and material samples", "Delivery coordinated with your fitter", "Customer-supplied kitchens welcome", "Fixed, written pricing"],
  },
  {
    slug: "kitchen-installation",
    title: "Kitchen Installation",
    icon: "Wrench",
    swatch: "#F2660B",
    teaser: "Full kitchen fits, from carcasses and worktops to the final tap.",
    description: "We fit complete kitchens from start to finish, including units, worktops, sinks, taps and integrated appliances, working to a fixed price agreed before we begin.",
    href: "/kitchen-installation",
    tagline: "Professional kitchen fitting from strip-out to final fix.",
    bullets: ["Full strip-out and disposal", "Unit and worktop installation", "Sink and waste connection", "Appliance installation", "Works with all major suppliers", "Fixed-price quotations"],
  },
  {
    slug: "worktops",
    title: "Worktops",
    icon: "PanelRight",
    swatch: "#8456A8",
    teaser: "Laminate, quartz, granite and solid wood — templated, fabricated and fitted.",
    description: "We template, supply and fit worktops in laminate, quartz, granite and solid wood, matched to your kitchen design and cut precisely for sinks, hobs and upstands.",
    href: "/worktops",
    tagline: "Worktops templated and fitted in laminate, quartz, granite and solid wood.",
    bullets: ["Laminate, quartz, granite and solid wood", "Precision templating after units are fitted", "Sink and hob cut-outs", "Upstands and splashbacks", "Seamless joints where possible", "Aftercare and maintenance advice"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
