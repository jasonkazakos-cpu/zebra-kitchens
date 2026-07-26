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
import { siteConfig } from "@/data/site";
import { productRanges } from "@/data/productRanges";

export const metadata: Metadata = {
  title: "Kitchen Supply in Cheshunt & Hertfordshire",
  description:
    "Kitchen units, doors and accessories supplied across Cheshunt and Hertfordshire, from popular retail ranges to bespoke made-to-order cabinetry. Zebra Kitchens.",
  keywords: [
    "Kitchen Supply Cheshunt",
    "Kitchen Units Hertfordshire",
    "Bespoke Kitchen Cabinets",
    "Made to Order Kitchen Doors",
  ],
};

const SERVICE_LABEL = "Kitchen Supply";

const supplySteps: Step[] = [
  {
    number: "01",
    title: "Confirm Your Design",
    body: "We work from your finished design and layout, or help you finalise one if you haven't already.",
  },
  {
    number: "02",
    title: "Choose Colours & Materials",
    body: "Browse samples in a range of colours, woodgrains and finishes, matt or gloss.",
  },
  {
    number: "03",
    title: "Fixed Supply Quotation",
    body: "A written quote for units, doors and accessories, confirmed before you order anything.",
  },
  {
    number: "04",
    title: "Order & Lead Time Confirmed",
    body: "We place the order and confirm a realistic lead time, whether flat-pack or made-to-order.",
  },
  {
    number: "05",
    title: "Delivery Coordinated With Fitting",
    body: "Delivery is timed around your installation date so units arrive when you need them, not before.",
  },
];

const supplyFaqs: FaqItem[] = [
  {
    question: "Can you supply a kitchen without also fitting it?",
    answer:
      "Yes. We're happy to supply units, doors and accessories only, for you or your own fitter to install.",
  },
  {
    question: "Do you offer bespoke or made-to-order kitchens?",
    answer:
      "Yes. Alongside popular retail ranges, we supply bespoke and made-to-order cabinetry in a wide choice of colours, materials and sizes.",
  },
  {
    question: "Can I get colour and material samples before ordering?",
    answer:
      "Yes. We provide physical samples of door colours and finishes so you can see and feel them in your own kitchen lighting before committing.",
  },
  {
    question: "How do you coordinate delivery with installation?",
    answer:
      "We schedule delivery to arrive shortly before your installation start date, avoiding units sitting in the way for weeks beforehand.",
  },
  {
    question: "What happens if an item arrives damaged or incorrect?",
    answer:
      "We check deliveries against the order and arrange replacements directly with the supplier — you don't have to chase this yourself.",
  },
];

export default function KitchenSupplyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 15%, rgba(14,149,148,0.16), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Kitchen Supply
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl">
              Kitchen Units & Cabinetry, Supplied
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
              From popular retail ranges to bespoke, made-to-order cabinetry —
              sourced and supplied to suit your budget, with delivery
              coordinated around your installation date.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/contact?service=${encodeURIComponent(SERVICE_LABEL)}`} variant="primary">
                Request a Supply Quote
              </Button>
              <Button href={siteConfig.phoneHref} variant="ghost-light">
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>

          <Docket />
        </Container>
      </section>

      <section className="border-y border-line bg-chalk">
        <Container className="py-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Any Style, Any Budget</p>
          <h2 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
            Ranges We Supply
          </h2>
          <p className="mt-2 text-sm text-slate">
            Popular retail-style ranges, rigid pre-built cabinets and bespoke made-to-order kitchens, in colours, woodgrains and gloss or matt finishes.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {["Flat-Pack Ranges", "Rigid Pre-Built Cabinets", "Bespoke Made-To-Order", "Matt & Gloss Finishes", "Woodgrain Finishes", "100+ Colours"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-paper px-4 py-2 font-mono text-sm text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {productRanges.length > 0 && (
        <section className="bg-paper">
          <Container className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Our Ranges"
              title="Kitchens We Supply"
              subtitle="A selection of the ranges, colours and finishes available — ask us about any style you don't see here."
            />
            <div className="mt-12 space-y-16">
              {productRanges.map((product, i) => (
                <div
                  key={product.name}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full rounded-sm object-cover shadow-[0_16px_40px_-16px_rgba(20,20,26,0.35)]"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
                      {product.description}
                    </p>
                    <div className="mt-6">
                      <Button
                        href={`/contact?service=${encodeURIComponent(SERVICE_LABEL)}&range=${encodeURIComponent(product.name)}`}
                        variant="primary"
                      >
                        Ask About This Range
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Kitchens"
            title="Supply Coordinated With Your Fit"
            subtitle="The same careful approach on every order, whatever the size."
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
            title="Our Supply Process"
            subtitle="A clear path from confirmed design to delivery on your doorstep."
          />
          <div className="mt-10">
            <ProcessSteps steps={supplySteps} />
          </div>
        </Container>
      </section>

      <CoverageArea background="paper" serviceSlug="kitchen-supply" />

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Kitchen Supply FAQs" />
          <div className="mt-10">
            <Faq faqs={supplyFaqs} />
          </div>
        </Container>
      </section>

      <RelatedGuides category="kitchen-installation" background="paper" />

      <CtaBand
        title="Ready To Choose Your Kitchen?"
        subtitle="Contact Zebra Kitchens today for a free quotation on kitchen units, doors and accessories."
        buttonLabel="Request a Supply Quote"
        quoteHref={`/contact?service=${encodeURIComponent(SERVICE_LABEL)}`}
      />
    </>
  );
}
