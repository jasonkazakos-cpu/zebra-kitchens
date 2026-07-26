export type GuideCategory = {
  slug: string;
  label: string;
  icon: string;
  description: string;
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: number;
  publishedAt: string;
  sections: { heading: string; body: string }[];
  relatedSlugs?: string[];
  seoTitle?: string;
  seoDescription?: string;
};

export const categories: GuideCategory[] = [
  { slug: "kitchen-installation", label: "Kitchen Installation", icon: "CookingPot", description: "Everything you need to know before fitting a new kitchen, from planning to sign-off." },
  { slug: "costs", label: "Costs & Pricing", icon: "BadgePoundSterling", description: "Transparent breakdowns of typical kitchen design, supply and installation costs." },
];

export const guides: Guide[] = [
  {
    slug: "how-to-plan-a-new-kitchen",
    title: "How to Plan a New Kitchen: A Step-by-Step Guide",
    excerpt: "From measuring up to choosing worktops — a practical guide to planning a kitchen installation without the stress.",
    category: "kitchen-installation",
    readingTime: 7,
    publishedAt: "2025-02-07",
    sections: [
      {
        heading: "Start With a Measured Survey",
        body: "Accurate measurements are the foundation of any kitchen project. Measure the full width and height of each wall, mark the position of doors, windows, radiators, gas and water supplies, and any soil pipes. It's worth doing this twice and having a professional check before ordering anything.",
      },
      {
        heading: "Choose Your Layout First",
        body: "The most common kitchen layouts are galley (two runs of units facing each other), L-shape, U-shape and island. Your layout is determined by the size and shape of the room. Choose this before selecting units — the layout drives everything else.",
      },
      {
        heading: "Setting Your Budget",
        body: "Kitchen costs vary widely. A flatpack kitchen from a retailer like Howdens or Wren fitted by a professional installer typically costs less than a fully bespoke cabinet order. Budget separately for units, worktops, appliances, plumbing, electrics and fitting labour — they're all separate costs.",
      },
      {
        heading: "Order of Work",
        body: "A kitchen installation follows a set sequence: strip out, first fix plumbing and electrics, plastering if needed, unit installation, worktop templating and fitting, second fix plumbing, second fix electrics, appliance installation, tiling, finishing. Skipping or reversing steps causes problems.",
      },
      {
        heading: "Lead Times to Plan For",
        body: "Flatpack kitchens from Howdens or Wickes can often be delivered within a week. Rigid or painted kitchens may take 4–8 weeks. Quartz or granite worktops need templating after units are fitted, then a 2–3 week fabrication lead time. Plan the full sequence before booking your fitter.",
      },
      {
        heading: "What a Kitchen Fitter Does",
        body: "A professional kitchen fitter assembles and installs carcasses, doors and drawers, scribes units to uneven walls, cuts and fits worktops, installs sinks, and connects appliances. They do not carry out gas work (which requires a Gas Safe engineer) or structural electrical work (which requires a qualified electrician).",
      },
    ],
    relatedSlugs: ["how-much-does-kitchen-installation-cost", "howdens-vs-wren-kitchens", "how-to-choose-kitchen-worktops"],
  },
  {
    slug: "how-much-does-kitchen-installation-cost",
    title: "How Much Does Kitchen Installation Cost in Hertfordshire?",
    excerpt: "A transparent guide to kitchen fitting costs in the Cheshunt area — what's included, what isn't, and how to budget accurately.",
    category: "costs",
    readingTime: 6,
    publishedAt: "2025-02-14",
    sections: [
      {
        heading: "What Does Kitchen Fitting Cost?",
        body: "Kitchen installation costs in Hertfordshire vary depending on the size of the kitchen and scope of work. A standard 10-unit kitchen typically costs from £900–£1,400 in labour alone for strip-out and installation. Larger kitchens or those with complex layouts, islands or extensive modifications cost more.",
      },
      {
        heading: "What's Included in a Fitting Quote",
        body: "A fitting quote from Zebra Kitchens includes: strip-out and disposal of the old kitchen, assembly and installation of all base and wall units, worktop cutting and fitting (laminate), sink installation and waste connection, and appliance connections (electric only). Gas connections require a separate Gas Safe engineer.",
      },
      {
        heading: "What's Not Included",
        body: "Kitchen fitting labour does not include: the cost of units, worktops or appliances themselves; plasterwork; tiling; rewiring or consumer unit upgrades; gas work; or structural changes. These are all priced separately.",
      },
      {
        heading: "Worktop Costs",
        body: "Laminate worktops cut and fitted by the fitter are included in most standard fitting quotes. Quartz, granite or solid wood worktops are templated and fabricated by specialist worktop companies — expect to pay separately for template, fabrication and fitting, typically £400–£900+ depending on material and length.",
      },
      {
        heading: "How to Get an Accurate Quote",
        body: "To get an accurate quote, share your kitchen plan (a drawing with dimensions and unit positions), the supplier your units are from, and the worktop material. The fitter can then quote per carcass, per worktop run and for any additional carpentry or modification work.",
      },
    ],
    relatedSlugs: ["how-to-plan-a-new-kitchen", "howdens-vs-wren-kitchens"],
  },
  {
    slug: "howdens-vs-wren-kitchens",
    title: "Howdens vs Wren: Which Kitchen Brand Is Right for You?",
    excerpt: "The two most popular kitchen suppliers in the UK — compared honestly so you can make the right choice for your home and budget.",
    category: "kitchen-installation",
    readingTime: 6,
    publishedAt: "2025-02-21",
    sections: [
      {
        heading: "How They Work",
        body: "Howdens sells trade-only through local depots — you buy through a fitter who has a trade account. Wren sells direct to consumers through showrooms. Both supply flatpack and rigid units in a wide range of styles.",
      },
      {
        heading: "Price Comparison",
        body: "Howdens pricing is trade-only and varies by depot and relationship. Wren's pricing is displayed in showrooms and online with regular promotions. Neither is inherently cheaper — the final price depends on your specific layout and choices. Always price both before committing.",
      },
      {
        heading: "Quality",
        body: "Both Howdens and Wren produce well-made kitchens at their respective price points. Howdens cabinets are generally considered to have a slight edge on carcass quality at the entry level, but Wren offers more door styles and finishes in their showroom range. Both come with warranties.",
      },
      {
        heading: "Lead Times",
        body: "Howdens depots typically hold stock locally, meaning shorter lead times — sometimes 1–2 weeks. Wren kitchens are often made to order, with lead times of 4–8 weeks. If speed is important, Howdens has the advantage.",
      },
      {
        heading: "Design Support",
        body: "Wren offers free in-store design consultations. Howdens design is done through your fitter, who will plan the layout based on your measurements. If you want to see the design in 3D before committing, both offer this — Wren in-store, Howdens through your fitter's software.",
      },
      {
        heading: "Our Recommendation",
        body: "If you're working with a professional fitter and lead time matters, Howdens is a solid choice. If you want to browse a showroom, see samples in person and manage the purchase yourself, Wren gives you more control. We supply and install both — and many other brands.",
      },
    ],
    relatedSlugs: ["how-to-plan-a-new-kitchen", "how-much-does-kitchen-installation-cost"],
  },
  {
    slug: "how-to-choose-kitchen-worktops",
    title: "How to Choose Kitchen Worktops: Materials, Costs and Maintenance",
    excerpt: "Your worktop is one of the hardest-working surfaces in the home. Here's an honest guide to the main materials — laminate, quartz, granite and solid wood — to help you choose well.",
    category: "kitchen-installation",
    readingTime: 6,
    publishedAt: "2025-07-21",
    seoTitle: "How to Choose Kitchen Worktops: Materials & Costs | Zebra Kitchens",
    seoDescription: "Compare kitchen worktop materials — laminate, quartz, granite and wood. Costs, durability and maintenance explained. Advice from Zebra Kitchens, Hertfordshire.",
    sections: [
      {
        heading: "Laminate Worktops: Best Budget Option",
        body: "Laminate worktops are the most affordable option and have improved significantly in quality in recent years. Modern high-pressure laminate (HPL) worktops convincingly replicate the look of stone, concrete and wood at a fraction of the cost. They're easy to clean, resistant to most stains and available in hundreds of finishes. The main drawbacks are that they can be damaged by prolonged exposure to moisture at joints and cut edges, are not heat-proof (always use a trivet), and cannot be sanded or refinished if scratched. Expect to pay £80–£180 per metre for mid-range laminate supply and fit.",
      },
      {
        heading: "Quartz Worktops: The Modern Choice",
        body: "Engineered quartz (brands include Silestone, Caesarstone and Kompas) is the most popular premium worktop material for new kitchens. It is non-porous, highly stain-resistant, available in a consistent range of colours and patterns, and does not require sealing. It is more heat-resistant than laminate but not heat-proof — sudden thermal shock from a very hot pan can crack a quartz surface. Quartz worktops are templated after units are installed, fabricated off-site and then fitted. Supply and installation typically costs £400–£700+ per metre depending on the brand and edge profile chosen.",
      },
      {
        heading: "Granite Worktops: Natural Stone",
        body: "Natural granite has been a premium kitchen worktop material for decades and remains popular for its unique appearance — no two granite slabs are identical. It is extremely hard-wearing and heat-resistant, but is porous and must be sealed annually to prevent staining. The supply process is the same as quartz — template, fabricate, fit — and costs are similar: £350–£650 per metre depending on the origin and pattern of the stone. Granite is heavier than quartz, which occasionally requires reinforcement of cabinet carcasses for longer unsupported runs.",
      },
      {
        heading: "Solid Wood Worktops: Warmth and Character",
        body: "Solid oak, walnut and beech worktops add warmth and character that no synthetic material fully replicates. They can be sanded and refinished if scratched, which extends their life significantly. However, they require regular oiling (typically every 3–6 months for work surfaces in regular use), must never be left wet, and can move or crack if not properly conditioned and maintained. They're best suited to less heavily used sections of a kitchen, or to homeowners who are prepared to carry out proper maintenance. Expect to pay £180–£350 per metre supply and fit.",
      },
      {
        heading: "Sintered Stone: The Premium Alternative",
        body: "Sintered stone surfaces (Dekton, Neolith) are made by compressing natural minerals under extreme heat and pressure. The result is an ultra-hard, heat-proof, UV-stable surface with virtually zero porosity. They require no sealing, are scratch-resistant and can be used inside and out. The main disadvantage is cost — typically £600–£900+ per metre — and the fact that repairs if chipped are almost impossible to do invisibly. For a long-term, low-maintenance kitchen in a high-end renovation, sintered stone is worth serious consideration.",
      },
      {
        heading: "Which Should You Choose?",
        body: "For most kitchens, quartz offers the best balance of looks, durability and maintenance requirements. Laminate is the right choice if budget is the priority. Solid wood suits traditional or country-style kitchens where the natural material is part of the design intent. Granite suits homeowners who want the unique character of natural stone and don't mind annual sealing. Sintered stone suits high-use kitchens where performance is paramount. At Zebra Kitchens, we can advise on worktop choice as part of your kitchen planning and work with all the main worktop suppliers.",
      },
    ],
    relatedSlugs: ["how-to-plan-a-new-kitchen", "how-much-does-kitchen-installation-cost", "howdens-vs-wren-kitchens"],
  },
];
