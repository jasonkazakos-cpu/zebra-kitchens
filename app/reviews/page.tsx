import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import FacebookIcon from "@/components/icons/FacebookIcon";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read reviews from Zebra Kitchens customers across Cheshunt and Hertfordshire, covering kitchen design, supply, installation and worktops.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow="What Customers Say"
            title="Trusted By Homeowners Locally"
            subtitle="Example reviews — a flavour of the feedback we aim for on every kitchen project."
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <Testimonials />
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="flex flex-col items-center gap-5 py-16 text-center sm:py-20">
          <span className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
            <FacebookIcon className="size-6" />
          </span>
          <h2 className="max-w-xl font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
            Leave Us A Review
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate sm:text-lg">
            If Zebra Kitchens has fitted your kitchen, we'd love to hear how it
            went — reviews help other homeowners choose with confidence.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leave a Google review for Zebra Kitchens (opens in a new tab)"
              className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-ink-soft transition-colors"
            >
              ⭐ Leave a Google Review
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Zebra Kitchens on Facebook (opens in a new tab)"
              title="Zebra Kitchens on Facebook"
              className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-ink transition-colors"
            >
              <FacebookIcon className="size-4" />
              Review Us On Facebook
            </a>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready To Start Your Kitchen Project?"
        subtitle="Tell us what you need and we'll come back to you with a free, fixed-price quote."
      />
    </>
  );
}
