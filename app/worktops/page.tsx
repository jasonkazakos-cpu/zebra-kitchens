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

export const metadata: Metadata = {
  title: "Kitchen Worktops in Cheshunt & Hertfordshire",
  description:
    "Laminate, quartz, granite and solid wood worktops templated, supplied and fitted in Cheshunt and Hertfordshire. Precision sink and hob cut-outs from Zebra Kitchens.",
  keywords: [
    "Kitchen Worktops Cheshunt",
    "Quartz Worktops Hertfordshire",
    "Granite Worktops",
    "Solid Wood Worktops",
  ],
};

const SERVICE_LABEL = "Worktops";

const worktopMaterials = [
  { name: "Laminate", price: "£80–£180 per metre", note: "Best budget option, hundreds of finishes." },
  { name: "Quartz", price: "£400–£700+ per metre", note: "Non-porous, low maintenance, most popular premium choice." },
  { name: "Granite", price: "£350–£650 per metre", note: "Natural stone, unique pattern, needs annual sealing." },
  { name: "Solid Wood", price: "£180–£350 per metre", note: "Warm and characterful, can be sanded and refinished." },
  { name: "Sintered Stone", price: "£600–£900+ per metre", note: "Ultra-hard, heat-proof, virtually zero maintenance." },
];

const worktopSteps: Step[] = [
  {
    number: "01",
    title: "Choose Your Material",
    body: "We talk through laminate, quartz, granite, solid wood and sintered stone options to suit your kitchen and budget.",
  },
  {
    number: "02",
    title: "Templating",
    body: "Once your units are fitted, we template the worktop precisely — the single most important step for a good fit.",
  },
  {
    number: "03",
    title: "Fabrication",
    body: "Your worktop is cut to the template, with sink, hob and upstand cut-outs prepared off-site.",
  },
  {
    number: "04",
    title: "Fitting",
    body: "Worktops are fitted, joints finished and sinks and hobs connected, ready to use.",
  },
];

const worktopFaqs: FaqItem[] = [
  {
    question: "Why do worktops need to be templated after units are fitted?",
    answer:
      "No kitchen wall is perfectly straight, so templating after the units are in place ensures the worktop follows the actual room, not just the drawing.",
  },
  {
    question: "How long does quartz or granite take from template to fitting?",
    answer:
      "Typically 2–3 weeks from templating to fabrication and fitting, depending on the supplier and material chosen.",
  },
  {
    question: "Can you cut worktops for an existing sink and hob?",
    answer:
      "Yes. We take exact measurements from your chosen sink and hob so cut-outs are precise and fittings sit flush.",
  },
  {
    question: "Do you fit worktops we've bought ourselves?",
    answer:
      "Yes. We're happy to template and fit worktops supplied elsewhere, as well as those we supply directly.",
  },
  {
    question: "How do I look after a solid wood or granite worktop?",
    answer:
      "Solid wood needs oiling every 3–6 months and should never be left wet. Granite should be sealed annually. We'll talk you through the right care for whichever material you choose.",
  },
];

export default function WorktopsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 15%, rgba(132,86,168,0.16), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Worktops
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl">
              Worktops Templated & Fitted To A Precise Finish
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
              Laminate, quartz, granite and solid wood — templated after your
              units are fitted, fabricated to size and finished with precise
              sink and hob cut-outs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/contact?service=${encodeURIComponent(SERVICE_LABEL)}`} variant="primary">
                Request a Worktop Quote
              </Button>
              <Button href={siteConfig.phoneHref} variant="ghost-light">
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>

          <Docket />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Guide Prices"
            title="Worktop Materials Compared"
            subtitle="A starting point for budgeting — your fixed quote will reflect your exact worktop run and material."
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-4 font-mono text-xs uppercase tracking-wide text-slate">Material</th>
                  <th className="py-3 pr-4 font-mono text-xs uppercase tracking-wide text-slate">Guide Price</th>
                  <th className="py-3 font-mono text-xs uppercase tracking-wide text-slate">Notes</th>
                </tr>
              </thead>
              <tbody>
                {worktopMaterials.map((m) => (
                  <tr key={m.name} className="border-b border-line">
                    <td className="py-4 pr-4 font-display font-bold uppercase tracking-tight text-ink">{m.name}</td>
                    <td className="py-4 pr-4 font-mono text-accent-dark">{m.price}</td>
                    <td className="py-4 text-slate">{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 rounded-sm border border-line bg-chalk px-5 py-4 text-sm text-slate">
            Prices shown are guide prices only. A fixed quotation will always
            be provided following templating.
          </p>
        </Container>
      </section>

      <section className="bg-chalk">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Worktop Process"
            subtitle="From material choice to a precisely fitted finish."
          />
          <div className="mt-10">
            <ProcessSteps steps={worktopSteps} />
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Zebra Kitchens"
            title="Precision, Every Time"
            subtitle="The same careful approach on every worktop, whatever the material."
          />
          <div className="mt-10">
            <ValueProps />
          </div>
        </Container>
      </section>

      <CoverageArea background="chalk" serviceSlug="worktops" />

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Good To Know" title="Worktop FAQs" />
          <div className="mt-10">
            <Faq faqs={worktopFaqs} />
          </div>
        </Container>
      </section>

      <RelatedGuides category="kitchen-installation" background="chalk" />

      <CtaBand
        title="Ready To Choose Your Worktop?"
        subtitle="Contact Zebra Kitchens today for a free quotation on templating, supply and fitting."
        buttonLabel="Request a Worktop Quote"
        quoteHref={`/contact?service=${encodeURIComponent(SERVICE_LABEL)}`}
      />
    </>
  );
}
