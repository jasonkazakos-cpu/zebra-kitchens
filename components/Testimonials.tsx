import { Star } from "lucide-react";
import { siteConfig } from "@/data/site";
import { reviews, type Review } from "@/data/reviews";

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(reviews.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
    },
    reviewBody: t.quote,
    datePublished: t.date,
  })),
};

export default function Testimonials({
  items = reviews,
  limit,
  includeSchema = true,
}: {
  items?: Review[];
  limit?: number;
  includeSchema?: boolean;
}) {
  const shown = limit ? items.slice(0, limit) : items;

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}
      <div className="grid gap-6 sm:grid-cols-3">
        {shown.map((t) => (
          <figure
            key={`${t.name}-${t.date}`}
            className="flex flex-col rounded-sm border border-line bg-paper p-6"
          >
            <div className="flex gap-0.5 text-accent-dark" aria-hidden="true">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4 text-sm">
              <span className="font-display font-bold uppercase tracking-tight text-ink">
                {t.name}
              </span>
              <span className="text-slate"> &middot; {t.area}</span>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-slate">
                {t.service}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
