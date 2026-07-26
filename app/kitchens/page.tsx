import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Kitchens",
  description:
    "Kitchen design, supply, installation and worktops in Cheshunt and Hertfordshire, all backed by written, fixed-price quotes from Zebra Kitchens.",
};

export default function KitchensPage() {
  return (
    <>
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow="What We Do"
            title="Kitchens, Start To Finish"
            subtitle="Four ways we help homeowners across Cheshunt and Hertfordshire get a kitchen they're happy with, all backed by written, fixed-price quotes."
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="full" />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not Sure Where To Start?"
        subtitle="Describe your kitchen project and we'll point you in the right direction, with a free, fixed-price quote."
      />
    </>
  );
}
