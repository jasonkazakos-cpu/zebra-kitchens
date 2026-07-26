import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Kitchen Gallery",
  description:
    "Browse real kitchen designs and installations completed by Zebra Kitchens across Cheshunt and Hertfordshire.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow="Gallery"
            title="Kitchens We've Designed & Fitted"
            subtitle="Real kitchen transformations completed by Zebra Kitchens across Cheshunt and Hertfordshire. Click any photo to enlarge."
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <Gallery images={galleryImages} />
        </Container>
      </section>

      <CtaBand
        title="Want A Kitchen Like This?"
        subtitle="Tell us about your project and we'll come back to you with a free, fixed-price quote."
      />
    </>
  );
}
