// Central review data — used by the Testimonials component (homepage) and
// the /reviews page. Placeholder reviews — replace with real customer
// testimonials once available.
export type Review = {
  quote: string;
  name: string;
  area: string;
  service: string;
  rating: number;
  date: string;
};

export const reviews: Review[] = [
  {
    quote:
      "Fitted our new kitchen from start to finish. Tidy, punctual and the quote didn't change once the job was under way.",
    name: "David R.",
    area: "Waltham Cross",
    service: "Kitchen Installation",
    rating: 5,
    date: "2024-10-15",
  },
  {
    quote:
      "The design consultation was really thorough — they measured everything twice and the layout they came back with worked far better than what we'd sketched ourselves.",
    name: "Amara O.",
    area: "Cheshunt",
    service: "Kitchen Design",
    rating: 5,
    date: "2025-02-03",
  },
  {
    quote:
      "We supplied our own kitchen from a retailer and Zebra Kitchens still took it on without any fuss, coordinating delivery around the fit perfectly.",
    name: "Michael T.",
    area: "Broxbourne",
    service: "Kitchen Supply",
    rating: 5,
    date: "2025-03-21",
  },
  {
    quote:
      "Quartz worktops templated and fitted with barely a visible joint. Really impressed with the precision of the cut-outs around the sink and hob.",
    name: "Sarah M.",
    area: "Cuffley",
    service: "Worktops",
    rating: 5,
    date: "2025-05-09",
  },
  {
    quote:
      "Professional from the first visit to the final snagging check. Everything was priced upfront and there were no surprises on the invoice.",
    name: "Priya K.",
    area: "Hoddesdon",
    service: "Kitchen Installation",
    rating: 5,
    date: "2025-06-18",
  },
];
