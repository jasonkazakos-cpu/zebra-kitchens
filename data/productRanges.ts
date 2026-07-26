// Kitchen ranges/products shown on the Kitchen Supply page, each with an
// image and a description alongside it. Add one entry per product — image
// path should point to a file in public/images/kitchen-design/ (or wherever
// the photo is placed).
export type ProductRange = {
  name: string;
  image: string;
  alt: string;
  description: string;
};

export const productRanges: ProductRange[] = [
  {
    name: "Cambridge — Indigo",
    image: "/images/kitchen-design/cambridge-indigo-kitchen.webp",
    alt: "Cambridge indigo shaker kitchen with glazed display cabinets and central island",
    description:
      "A traditional shaker-style range finished in deep indigo blue, with glazed display cabinets, open shelving and a large central island — built for kitchens that double as a place to gather.",
  },
];
