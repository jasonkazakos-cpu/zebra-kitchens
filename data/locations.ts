export type Location = {
  slug: string;
  name: string;
  county: string;
  canonicalUrl: string;
  featuredImage?: string;
  latitude: number;
  longitude: number;
  postcodeDistricts: string[];
  heroText: string;
  intro: string;
  nearbyTowns: string[];
  seoTitle: string;
  seoDescription: string;
  faqs: { question: string; answer: string }[];
};

export const serviceLinks: { label: string; href: string; description: string }[] = [
  { label: "Kitchen Design", href: "/kitchen-design", description: "Free design consultations and measured surveys, turned into a kitchen layout you can see before you commit." },
  { label: "Kitchen Supply", href: "/kitchen-supply", description: "Units, doors and worktops sourced and supplied, from popular ranges to bespoke made-to-order cabinetry." },
  { label: "Kitchen Installation", href: "/kitchen-installation", description: "Full kitchen fitting from strip-out to final fix, including worktops, sinks and appliances." },
  { label: "Worktops", href: "/worktops", description: "Laminate, quartz, granite and solid wood worktops, templated and fitted to a precise finish." },
];

// Factual, per-town data. Descriptive copy (hero text, intro, SEO fields and
// FAQs) is generated below so every area page carries genuine kitchen-focused
// content while staying easy to maintain as new towns are added.
type RawLocation = {
  slug: string;
  name: string;
  county: string;
  latitude: number;
  longitude: number;
  postcodeDistricts: string[];
  nearbyTowns: string[];
};

const rawLocations: RawLocation[] = [
  { slug: "cheshunt", name: "Cheshunt", county: "Hertfordshire", latitude: 51.7017, longitude: -0.0346, postcodeDistricts: ["EN7", "EN8"], nearbyTowns: ["Broxbourne", "Waltham Cross", "Goffs Oak", "Cuffley", "Hoddesdon"] },
  { slug: "broxbourne", name: "Broxbourne", county: "Hertfordshire", latitude: 51.7437, longitude: -0.0195, postcodeDistricts: ["EN10"], nearbyTowns: ["Cheshunt", "Hoddesdon", "Waltham Cross", "Hertford", "Ware"] },
  { slug: "waltham-cross", name: "Waltham Cross", county: "Hertfordshire", latitude: 51.6856, longitude: -0.0333, postcodeDistricts: ["EN8"], nearbyTowns: ["Cheshunt", "Enfield", "Broxbourne", "Goffs Oak", "Cuffley"] },
  { slug: "hoddesdon", name: "Hoddesdon", county: "Hertfordshire", latitude: 51.7615, longitude: -0.0113, postcodeDistricts: ["EN11"], nearbyTowns: ["Broxbourne", "Hertford", "Ware", "Cheshunt", "Harlow"] },
  { slug: "hertford", name: "Hertford", county: "Hertfordshire", latitude: 51.7953, longitude: -0.0780, postcodeDistricts: ["SG13", "SG14"], nearbyTowns: ["Ware", "Hoddesdon", "Broxbourne", "Stevenage", "Potters Bar"] },
  { slug: "ware", name: "Ware", county: "Hertfordshire", latitude: 51.8100, longitude: -0.0321, postcodeDistricts: ["SG12"], nearbyTowns: ["Hertford", "Hoddesdon", "Broxbourne", "Stevenage", "Harlow"] },
  { slug: "potters-bar", name: "Potters Bar", county: "Hertfordshire", latitude: 51.6964, longitude: -0.1773, postcodeDistricts: ["EN6"], nearbyTowns: ["Cuffley", "Enfield", "Hertford", "Cheshunt", "Barnet"] },
  { slug: "cuffley", name: "Cuffley", county: "Hertfordshire", latitude: 51.7149, longitude: -0.1015, postcodeDistricts: ["EN6"], nearbyTowns: ["Cheshunt", "Goffs Oak", "Potters Bar", "Waltham Cross", "Enfield"] },
  { slug: "goffs-oak", name: "Goffs Oak", county: "Hertfordshire", latitude: 51.7117, longitude: -0.0839, postcodeDistricts: ["EN7"], nearbyTowns: ["Cheshunt", "Cuffley", "Waltham Cross", "Broxbourne", "Potters Bar"] },
  { slug: "enfield", name: "Enfield", county: "Middlesex", latitude: 51.6522, longitude: -0.0808, postcodeDistricts: ["EN1", "EN2", "EN3"], nearbyTowns: ["Waltham Cross", "Cheshunt", "Potters Bar", "Cuffley", "Barnet"] },
  { slug: "harlow", name: "Harlow", county: "Essex", latitude: 51.7791, longitude: 0.1200, postcodeDistricts: ["CM17", "CM18", "CM19", "CM20"], nearbyTowns: ["Epping", "Hoddesdon", "Ware", "Broxbourne", "Hertford"] },
  { slug: "epping", name: "Epping", county: "Essex", latitude: 51.6998, longitude: 0.1133, postcodeDistricts: ["CM16"], nearbyTowns: ["Harlow", "Cheshunt", "Waltham Cross", "Hoddesdon", "Broxbourne"] },
  { slug: "stevenage", name: "Stevenage", county: "Hertfordshire", latitude: 51.9019, longitude: -0.2017, postcodeDistricts: ["SG1", "SG2"], nearbyTowns: ["Hertford", "Ware", "Hoddesdon", "Potters Bar", "Harlow"] },
  { slug: "waltham-abbey", name: "Waltham Abbey", county: "Essex", latitude: 51.6859, longitude: -0.0001, postcodeDistricts: ["EN9"], nearbyTowns: ["Cheshunt", "Epping", "Waltham Cross", "Enfield", "Broxbourne"] },
  { slug: "welwyn-garden-city", name: "Welwyn Garden City", county: "Hertfordshire", latitude: 51.8021, longitude: -0.2083, postcodeDistricts: ["AL7", "AL8"], nearbyTowns: ["Hatfield", "Hertford", "Stevenage", "Potters Bar", "Cuffley"] },
  { slug: "st-albans", name: "St Albans", county: "Hertfordshire", latitude: 51.7526, longitude: -0.3360, postcodeDistricts: ["AL1", "AL2", "AL3"], nearbyTowns: ["Hatfield", "Potters Bar", "Welwyn Garden City", "Harpenden", "London Colney"] },
  { slug: "hatfield", name: "Hatfield", county: "Hertfordshire", latitude: 51.7631, longitude: -0.2282, postcodeDistricts: ["AL9", "AL10"], nearbyTowns: ["Welwyn Garden City", "St Albans", "Potters Bar", "Hertford", "Stevenage"] },
  { slug: "bishops-stortford", name: "Bishops Stortford", county: "Hertfordshire", latitude: 51.8724, longitude: 0.1719, postcodeDistricts: ["CM23"], nearbyTowns: ["Harlow", "Hertford", "Ware", "Stevenage", "Saffron Walden"] },
  { slug: "barnet", name: "Barnet", county: "Hertfordshire", latitude: 51.6510, longitude: -0.2003, postcodeDistricts: ["EN4", "EN5"], nearbyTowns: ["Potters Bar", "Enfield", "Waltham Cross", "Cheshunt", "Finchley"] },
];

const introTemplates: ((name: string, county: string, nearby: string) => string)[] = [
  (name, county, nearby) =>
    `Zebra Kitchens designs, supplies and fits kitchens across ${name} and the surrounding ${county} area. From a first measured survey through to the final worktop cut and appliance connection, we handle every stage of the project ourselves — no handing you between a designer, a supplier and a fitter. Homeowners in ${name} and nearby ${nearby} choose us for straightforward planning, honest pricing and a finish that's built to last.`,
  (name, county, nearby) =>
    `${name} is one of the areas we work in regularly, carrying out everything from full kitchen design consultations to worktop templating and final installation. The mix of property types across ${name} and ${county} means we're used to planning kitchens for every kind of layout, from compact galley spaces to larger open-plan extensions. Whether you already have a supplier in mind or want us to design and supply the whole project, we bring the same clear pricing and attention to detail to every job in ${name} and nearby ${nearby}.`,
  (name, county, nearby) =>
    `Homeowners in ${name} come to Zebra Kitchens for a kitchen project that's planned properly from the start — a measured survey, a layout that works for the room, and a fixed, written quote before anything is ordered. We supply and fit kitchens throughout ${name} and the wider ${county} area, and we're just as happy fitting a kitchen you've bought elsewhere as designing and supplying the whole thing ourselves. Nearby ${nearby} are covered on the same terms.`,
  (name, county, nearby) =>
    `From first sketch to final snag check, Zebra Kitchens carries out kitchen design, supply and installation work across ${name}. We know the local housing stock in ${county} well, which means fewer surprises once we're on site — whether that's an older property needing careful scribing to uneven walls, or a newer build ready for a straightforward fit. We also cover ${nearby}, all on the same fixed-price, no-surprises basis.`,
];

function generateLocation(raw: RawLocation, index: number): Location {
  const { slug, name, county, latitude, longitude, postcodeDistricts, nearbyTowns } = raw;
  const nearby = nearbyTowns.slice(0, 4).join(", ");
  const intro = introTemplates[index % introTemplates.length](name, county, nearby);

  return {
    slug,
    name,
    county,
    canonicalUrl: `/areas/${slug}`,
    latitude,
    longitude,
    postcodeDistricts,
    heroText: `Kitchen Design & Installation in ${name}`,
    intro,
    nearbyTowns,
    seoTitle: `Kitchen Design, Supply & Installation in ${name} | Zebra Kitchens`,
    seoDescription: `Zebra Kitchens designs, supplies and fits kitchens in ${name}, ${county}. Free design consultations, worktops and fixed-price installation quotes.`,
    faqs: [
      {
        question: `Do you design and fit kitchens in ${name}?`,
        answer: `Yes — Zebra Kitchens carries out kitchen design, supply and installation work in ${name} regularly. We cover the ${postcodeDistricts.join(", ")} postcode${postcodeDistricts.length > 1 ? "s" : ""} and the surrounding area.`,
      },
      {
        question: `Can you fit a kitchen we've bought ourselves in ${name}?`,
        answer: `Yes. Whether your kitchen is coming from a national retailer or an independent supplier, we're happy to install kitchens purchased elsewhere as well as ones we design and supply ourselves.`,
      },
      {
        question: `Do you template and fit worktops in ${name}?`,
        answer: `Yes. We template, supply and fit worktops in laminate, quartz, granite and solid wood for kitchens across ${name}, including sink and hob cut-outs.`,
      },
      {
        question: `How do I get a kitchen quote in ${name}?`,
        answer: `Contact us by phone or through our contact form and we'll arrange a free design consultation and measured survey, followed by a written, fixed-price quotation with no obligation to proceed.`,
      },
    ],
  };
}

export const locations: Location[] = rawLocations.map(generateLocation);
