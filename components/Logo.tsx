import Link from "next/link";

// Shared zebra brand mark (no wordmark baked in — the "Zebra Kitchens" text
// below is rendered separately). Natural size 874x330 (≈2.65:1) — width/height
// below preserve this aspect ratio so the mark is never stretched or cropped.
// The source art is a neutral-grey zebra with an orange accent swoosh; the
// filter below desaturates and lightens the whole mark to a soft off-white
// grey so it reads cleanly against the dark forest-green header/footer
// background without needing a light backing plate.
const LOGO_IMAGE_SRC = "/zebra-logo.webp";
const LOGO_WIDTH = 874;
const LOGO_HEIGHT = 330;

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const textColor = tone === "light" ? "text-paper" : "text-ink";

  return (
    <Link
      href="/"
      className="group flex items-center gap-4 shrink-0"
      aria-label="Zebra Kitchens home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_IMAGE_SRC}
        alt=""
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="h-8 w-auto object-contain sm:h-10"
        style={{ filter: "grayscale(1) brightness(1.7)" }}
        aria-hidden="true"
      />
      <span
        className={`font-display font-bold uppercase tracking-tight leading-none text-base sm:text-lg ${textColor}`}
      >
        Zebra Kitchens
      </span>
    </Link>
  );
}
