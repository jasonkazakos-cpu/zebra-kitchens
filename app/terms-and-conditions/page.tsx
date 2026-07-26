import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Zebra Kitchens Terms & Conditions covering design consultations, quotations, deposits, supply, installation, worktops and customer responsibilities.",
};

const sections = [
  {
    title: "1. Introduction",
    body: (
      <>
        <p className="mt-3">
          These Terms &amp; Conditions apply to all kitchen design, supply,
          installation and worktop services provided by {siteConfig.name}.
        </p>
        <p className="mt-3">
          By requesting a design consultation or quotation, booking services
          or using this website, you agree to these Terms &amp; Conditions.
        </p>
      </>
    ),
  },
  {
    title: "2. Design Consultations & Measured Surveys",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>An initial design consultation is provided free of charge and without obligation.</li>
        <li>A measured survey is carried out before any kitchen layout is finalised or units ordered.</li>
        <li>Layouts and designs are based on the measurements and information available at the time of survey. Significant changes to the room after the survey (for example, structural work) may require a further survey at additional cost.</li>
        <li>Design drawings and 2D/3D visualisations are a guide to the finished layout and may vary slightly from the completed installation due to on-site conditions.</li>
      </ul>
    ),
  },
  {
    title: "3. Quotations",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>All quotations are valid for 30 days unless otherwise stated.</li>
        <li>Quotations are based on the measured survey, chosen products and information available at the time.</li>
        <li>Additional work requested after a quotation has been accepted may be charged separately.</li>
        <li>Verbal estimates are provided as guidance only and are not binding quotations.</li>
      </ul>
    ),
  },
  {
    title: "4. Pricing",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>Prices displayed on the website are guide prices only unless otherwise stated.</li>
        <li>Final pricing may vary depending on kitchen size, layout complexity, worktop material, site conditions, access and any structural or electrical modifications required.</li>
        <li>A fixed quotation will be provided before design, supply or installation work begins.</li>
      </ul>
    ),
  },
  {
    title: "5. Deposits & Payments",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>A deposit is normally required before kitchen units, doors, appliances or worktops are ordered, to secure manufacturing or supplier lead times.</li>
        <li>Deposits become non-refundable once bespoke or made-to-order items have entered production, or once standard items have been ordered on your behalf.</li>
        <li>Payment terms, including any staged payments linked to delivery or installation milestones, will be agreed in writing before work starts.</li>
        <li>Final payment is due upon completion unless otherwise agreed in writing.</li>
      </ul>
    ),
  },
  {
    title: "6. Product Orders, Bespoke & Made-to-Order Items",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>Bespoke and made-to-order cabinetry is manufactured to the specification confirmed and approved by you before ordering.</li>
        <li>Once a bespoke or made-to-order item has entered production, it generally cannot be cancelled or amended without cost.</li>
        <li>You are responsible for checking and approving final measurements, colours, materials and layout drawings before an order is placed.</li>
      </ul>
    ),
  },
  {
    title: "7. Colour & Material Variations",
    body: (
      <>
        <p className="mt-3">
          Samples and digital images are a close representation of the
          finished product, but natural variation should be expected,
          particularly with:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Natural stone worktops such as granite, where pattern and colour vary between slabs.</li>
          <li>Solid wood doors and worktops, where grain and tone vary between pieces and change slightly over time.</li>
          <li>Screen and print colour representations, which may differ slightly from the physical product.</li>
        </ul>
        <p className="mt-3">
          Where possible, we recommend viewing a physical sample before
          ordering.
        </p>
      </>
    ),
  },
  {
    title: "8. Delivery",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>Delivery lead times quoted are estimates provided by the manufacturer or supplier and are not guaranteed.</li>
        <li>{siteConfig.name} will not be held responsible for delays caused by manufacturer or supplier lead times.</li>
        <li>You are responsible for providing safe, clear access for deliveries, including parking where required.</li>
        <li>Items are checked against the order on arrival where possible; any damage or shortages should be reported promptly.</li>
      </ul>
    ),
  },
  {
    title: "9. Installation",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>Installation is carried out to the agreed design and specification following delivery of units, worktops and appliances.</li>
        <li>Installation timescales depend on kitchen size and complexity and will be confirmed as part of your written quotation.</li>
        <li>Structural, plastering, tiling, gas and rewiring work is not included unless specifically quoted and confirmed in writing.</li>
        <li>Gas appliance connections must be carried out by a Gas Safe registered engineer.</li>
      </ul>
    ),
  },
  {
    title: "10. Worktops",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>Worktops are templated after base units are fitted, to ensure an accurate fit to the finished room.</li>
        <li>Fabrication and fitting lead times following templating vary by material and supplier, and are not guaranteed.</li>
        <li>Sink, hob and appliance cut-outs are cut to the dimensions of the products confirmed at the time of templating. Changing products after templating may incur additional cost.</li>
      </ul>
    ),
  },
  {
    title: "11. Appliances",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>We supply and/or connect domestic kitchen appliances in accordance with manufacturer instructions.</li>
        <li>Electrical connections are tested before handover; gas connections require a separate Gas Safe registered engineer.</li>
        <li>Appliance warranties are provided by the manufacturer and are subject to the manufacturer's own terms and conditions.</li>
      </ul>
    ),
  },
  {
    title: "12. Customer-Supplied Products",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>We are happy to install kitchen units, worktops or appliances supplied by you or a third party.</li>
        <li>Where customer-supplied products are faulty, incomplete, or not as specified, {siteConfig.name} is not responsible for the cost of replacement, though we will advise you promptly if an issue is identified.</li>
        <li>Additional labour required as a result of issues with customer-supplied products may be chargeable.</li>
      </ul>
    ),
  },
  {
    title: "13. Access to the Property",
    body: (
      <>
        <p className="mt-3">Customers are responsible for:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Providing safe, clear access to the property and kitchen area throughout the project.</li>
          <li>Ensuring adequate parking where possible.</li>
          <li>Informing {siteConfig.name} of any known issues affecting the work, including access restrictions.</li>
          <li>Removing valuables, fragile items and existing food or crockery from work areas before installation begins.</li>
        </ul>
      </>
    ),
  },
  {
    title: "14. Delays",
    body: (
      <>
        <p className="mt-3">
          {siteConfig.name} will not be held responsible for delays caused
          by:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Manufacturer or supplier lead times</li>
          <li>Adverse weather</li>
          <li>Material or product shortages</li>
          <li>Access restrictions</li>
          <li>Structural or unforeseen issues discovered once work has started</li>
          <li>Circumstances beyond our reasonable control</li>
        </ul>
      </>
    ),
  },
  {
    title: "15. Cancellations",
    body: (
      <>
        <p className="mt-3">
          Customers should provide as much notice as possible when
          cancelling a design consultation, survey or installation
          appointment.
        </p>
        <p className="mt-3">
          Where deposits have been paid and materials, bespoke cabinetry or
          worktops have already been ordered or entered production,
          reasonable costs may be deducted from any refund due.
        </p>
      </>
    ),
  },
  {
    title: "16. Manufacturer Warranties",
    body: (
      <>
        <p className="mt-3">
          {siteConfig.name} aims to provide high-quality workmanship on
          every design, supply and installation project.
        </p>
        <p className="mt-3">
          Any workmanship guarantees provided will be specified within
          individual quotations or invoices.
        </p>
        <p className="mt-3">
          Manufacturer warranties on units, worktops and appliances remain
          subject to the relevant manufacturer's own terms and conditions,
          and any warranty claims relating to product faults should be
          directed to the manufacturer in the first instance, with our
          assistance where needed.
        </p>
      </>
    ),
  },
  {
    title: "17. Snagging & Remedial Work",
    body: (
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        <li>A final walkthrough is carried out with you on completion to identify any snagging items.</li>
        <li>Snagging items identified at handover, or within a reasonable period afterwards, will be addressed at no additional charge where they result from our workmanship.</li>
        <li>Remedial work required due to matters outside our control — including customer-supplied products, other trades, or damage after handover — is not covered and may be chargeable.</li>
      </ul>
    ),
  },
  {
    title: "18. Website Information",
    body: (
      <>
        <p className="mt-3">
          While {siteConfig.name} makes every effort to ensure information
          is accurate:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Prices may change without notice.</li>
          <li>Product and material information may vary.</li>
          <li>Website content, including gallery images, is provided for general information only.</li>
        </ul>
      </>
    ),
  },
  {
    title: "19. Limitation of Liability",
    body: (
      <>
        <p className="mt-3">To the maximum extent permitted by law:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>{siteConfig.name} shall not be liable for indirect or consequential losses.</li>
          <li>Liability shall not exceed the value of the services provided.</li>
        </ul>
        <p className="mt-3">
          Nothing within these Terms excludes any rights provided under UK
          consumer protection legislation.
        </p>
      </>
    ),
  },
  {
    title: "20. Personal Data & Cookies",
    body: (
      <>
        <p className="mt-3">
          Customer information is handled in accordance with the{" "}
          {siteConfig.name} Privacy Policy, and cookies used on this website
          are described in our Cookie Policy.
        </p>
        <p className="mt-3">
          Please refer to the{" "}
          <Link href="/privacy-policy" className="font-medium text-accent underline-offset-4 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/cookie-policy" className="font-medium text-accent underline-offset-4 hover:underline">
            Cookie Policy
          </Link>{" "}
          pages for further information.
        </p>
      </>
    ),
  },
  {
    title: "21. Governing Law",
    body: (
      <>
        <p className="mt-3">
          These Terms &amp; Conditions are governed by the laws of England
          and Wales.
        </p>
        <p className="mt-3">
          Any disputes shall be subject to the jurisdiction of the courts of
          England and Wales.
        </p>
      </>
    ),
  },
  {
    title: "22. Contact Information",
    body: (
      <p className="mt-3">
        For questions regarding these Terms &amp; Conditions, please contact{" "}
        {siteConfig.name} using the{" "}
        <Link href="/contact" className="font-medium text-accent underline-offset-4 hover:underline">
          website contact page
        </Link>
        .
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow="Legal"
            title="Terms & Conditions"
            subtitle="Last Updated: July 2026"
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-slate sm:text-base">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                  {section.title}
                </h2>
                {section.body}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
