import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const displayFont = localFont({
  src: "../assets/fonts/BigShoulders-Variable.ttf",
  variable: "--font-display-raw",
  weight: "100 900",
  display: "swap",
});

const bodyFont = localFont({
  src: "../assets/fonts/WorkSans-Variable.ttf",
  variable: "--font-body-raw",
  weight: "100 900",
  display: "swap",
});

const monoFont = localFont({
  src: [
    { path: "../assets/fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/IBMPlexMono-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-mono-raw",
  display: "swap",
});

// TODO: confirm the real production domain for Zebra Kitchens and update
// metadataBase, the sitemap base URL and robots.ts to match.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.zebrakitchens.co.uk"),
  title: {
    default: "Zebra Kitchens | Kitchen Design, Supply & Installation in Cheshunt & Hertfordshire",
    template: "%s | Zebra Kitchens",
  },
  description:
    "Zebra Kitchens designs, supplies and fits kitchens across Cheshunt and Hertfordshire, with fixed, written pricing on every project.",
  keywords: [
    "kitchen design Cheshunt",
    "kitchen installation Hertfordshire",
    "kitchen supply Cheshunt",
    "kitchen worktops Hertfordshire",
    "Zebra Kitchens",
  ],
  openGraph: {
    type: "website",
    siteName: "Zebra Kitchens",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  themeColor: "#1f2328",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent-dark focus:px-4 focus:py-2 focus:text-paper focus:font-semibold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
