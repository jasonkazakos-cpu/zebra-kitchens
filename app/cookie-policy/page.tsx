import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Read the Zebra Kitchens Cookie Policy to understand what cookies our website uses and how to control them.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            tone="light"
            eyebrow="Legal"
            title="Cookie Policy"
            subtitle="Last Updated: July 2026"
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-slate sm:text-base">

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                What Are Cookies?
              </h2>
              <p className="mt-3">
                Cookies are small text files placed on your device when you
                visit a website. They help the website function correctly,
                remember your preferences and, where used, understand how
                visitors use the site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Who We Are
              </h2>
              <p className="mt-3">
                This Cookie Policy applies to the {siteConfig.name} website.
                For any cookie-related enquiries, please contact us via the{" "}
                <Link href="/contact" className="font-medium text-accent-dark underline-offset-4 hover:underline">
                  Contact page
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Cookies We Use
              </h2>
              <p className="mt-3">Our website may use the following types of cookie:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>
                  <strong>Strictly necessary cookies</strong> — required for
                  the website to function, such as remembering your progress
                  through our quote request form. These cannot be switched
                  off.
                </li>
                <li>
                  <strong>Analytics cookies</strong> — help us understand how
                  visitors use the site, so we can improve performance and
                  content. Information collected is anonymised.
                </li>
                <li>
                  <strong>Preference cookies</strong> — remember choices you
                  make on the site, such as dismissing a notice, so you don't
                  have to repeat them on every visit.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Third-Party Cookies
              </h2>
              <p className="mt-3">
                Some pages on our site link out to or embed content from
                third-party services, including our contact and quote request
                form provider, Facebook and Google. These third parties may
                set their own cookies when you interact with their content.
                We do not control these cookies — please refer to the
                relevant third party's own cookie or privacy policy for
                details.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Managing Cookies
              </h2>
              <p className="mt-3">
                Most web browsers allow you to control cookies through their
                settings, including blocking or deleting cookies already
                stored on your device. Restricting cookies may affect the
                functionality of this and other websites you visit. For
                guidance on managing cookies in your browser, visit your
                browser's help pages.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                Changes To This Policy
              </h2>
              <p className="mt-3">
                We may update this Cookie Policy from time to time to reflect
                changes to the cookies we use or for other operational,
                legal or regulatory reasons. Any updates will be published on
                this page.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                More Information
              </h2>
              <p className="mt-3">
                For more on how we handle personal data generally, see our{" "}
                <Link href="/privacy-policy" className="font-medium text-accent-dark underline-offset-4 hover:underline">
                  Privacy Policy
                </Link>
                . If you have any questions about this Cookie Policy, please
                contact {siteConfig.name} through the{" "}
                <Link href="/contact" className="font-medium text-accent-dark underline-offset-4 hover:underline">
                  website contact form
                </Link>
                .
              </p>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
