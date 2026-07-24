import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Docket from "@/components/Docket";
import Button from "@/components/Button";
import ValueProps from "@/components/ValueProps";
import ProcessSteps, { type Step } from "@/components/ProcessSteps";
import Faq, { type FaqItem } from "@/components/Faq";
import CoverageArea from "@/components/CoverageArea";
import CtaBand from "@/components/CtaBand";
import RelatedGuides from "@/components/RelatedGuides";
import Gallery from "@/components/Gallery";
import { siteConfig } from "@/data/site";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Kitchen Design in Cheshunt & Hertfordshire",
  description:
    "Free kitchen design consultations and measured surveys in Cheshunt and Hertfordshire. 2D and 3D layout planning from Zebra Kitchens, with a fixed-price design quote.",
  keywords: [
    "Kitchen Design Cheshunt",
    "Kitchen Designer Hertfordshire",
    "Kitchen Layout Planning",
    "Kitchen Design Consultation",
  ],
};

const SERVICE_LABEL = "Kitchen Design";

const designSteps: Step[] = [
  {
    number: "01",
    title: "Free Design Consultation",
    body: "We talk through how you use your kitchen, what's not working now and what you'd like to change.",
  },
  {
    number: "02",
    title: "Measured Site Survey",
    body: "A visit to measure the space precisely, note doors, windows, services and any structural constraints.",
  },
  {
    number: "03",
    title: "Layout & Design Options",
    body: "A 2D or 3D layout plan showing units, appliances, worktops and lighting, so you can see it before committing.",
  },
  {
    number: "04",
    title: "Fixed Design Quotation",
    body: "A clear, written quote covering the design work, agreed before anything is finalised.",
  },
  {
    number: "05",
    title: "Handover To Supply & Installation",
    body: "Once you're happy with the design, we move straight into supply and installation on the same terms.",
  },
];

const designFaqs: FaqItem[] = [
  {
    question: "Is the initial design consultation really free?",
    answer:
      "Yes. The first consultation and an initial discussion of your space and requirements are free, with no obligation to proceed.",
  },
  {
    question: "Do I need a measured survey before I can order anything?",
    answer:
      "Yes — an accurate measured survey is the foundation of a good kitchen design and helps avoid costly mistakes once units are ordered.",
  },
  {
    question: "Can you design around existing plumbing and electrics?",
    answer:
      "Yes. Where possible we design around existing service positions to keep costs down, but we'll also advise where moving something makes the layout significantly better.",
  },
  {
    question: "Do you design kitchens for any supplier, or just your own range?",
    answer:
      "We design layouts that work with units from Howdens, Wren, Magnet, Wickes, B&Q, DIY Kitchens, Benchmarx and bespoke suppliers, as well as our own supply service.",
  },
  {
    question: "How long does the design process take?",
    answer:
      "A straightforward layout can be turned around within a week of the survey. More detailed or bespoke designs may take longer — we'll confirm a timescale upfront.",
  },
];

export default function KitchenDesignPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 15%, rgba(43,95,173,0.16), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Kitchen Design
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl">
              Kitchen Design Consultations in Hertfordshire
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
              A measured survey and a layout that works for how you actually
              cook and live — planned before anything is ordered, with a
              fixed-price design quote agreed upfront.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/contact?service=${encodeURIComponent(SERVICE_LABEL)}`} variant="primary">
                Book a Design Consultation
              </Button>
              <Button href={siteConfig.phoneHref} variant="ghost-light">
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>

          <Docket />
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Kitchens"
            title="Design Planned Around How You Live"
            subtitle="The same careful approach on every kitchen, whatever the size."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Design Process"
            subtitle="From first conversation to a layout you can see, before anything is ordered."
          />
          <div className="mt-10">
            <ProcessSteps steps={designSteps} />
          </div>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Gallery"
            title="Recent Kitchen Designs"
            subtitle="A selection of layouts and finishes designed and supplied by Zebra Kitchens."
          />
          <div className="mt-10">
            <Gallery images={galleryImages.slice(0, 12)} />
          </div>
        </Container>
      </section>

      <CoverageArea background="paper" serviceSlug="kitchen-design" />

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Kitchen Design FAQs" />
          <div className="mt-10">
            <Faq faqs={designFaqs} />
          </div>
        </Container>
      </section>

      <RelatedGuides category="kitchen-installation" background="paper" />

      <CtaBand
        title="Ready To Design Your Kitchen?"
        subtitle="Book a free design consultation and measured survey with Zebra Kitchens."
        buttonLabel="Book a Design Consultation"
        quoteHref={`/contact?service=${encodeURIComponent(SERVICE_LABEL)}`}
      />
    </>
  );
}
