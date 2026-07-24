// Central place for business details used across the site.
export const siteConfig = {
  name: "Zebra Kitchens",
  motto: "Black & White Prices. Lots of Colours.",
  // TODO: confirm real contact details, socials and review links for Zebra Kitchens
  phoneDisplay: "07872 121425",
  phoneHref: "tel:+447872121425",
  email: "info@zebrakitchens.co.uk",
  facebookUrl: "https://www.facebook.com/ZebraKitchensUK/",
  facebookReviewsUrl: "https://www.facebook.com/ZebraKitchensUK/reviews",
  googleReviewUrl: "https://www.google.com/",
  googleReadReviewsUrl: "https://www.google.com/",
  // TODO: confirm real opening hours
  hours: [
    { days: "Monday – Friday", time: "8:00am – 6:00pm" },
    { days: "Saturday", time: "9:00am – 1:00pm" },
    { days: "Sunday", time: "Closed" },
  ],
  yearsTrading: 28,
  yearsAsZebra: 7,
  baseTown: "Cheshunt",
  county: "Hertfordshire",
  areas: [
    "Cheshunt",
    "Broxbourne",
    "Hoddesdon",
    "Waltham Cross",
    "Cuffley",
    "Goffs Oak",
    "Enfield",
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/kitchens", label: "Kitchens" },
  { href: "/kitchen-design", label: "Kitchen Design" },
  { href: "/kitchen-supply", label: "Kitchen Supply" },
  { href: "/kitchen-installation", label: "Kitchen Installation" },
  { href: "/worktops", label: "Worktops" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];
