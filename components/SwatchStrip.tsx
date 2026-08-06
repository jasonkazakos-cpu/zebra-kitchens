// A quiet single-tone divider (previously a multicolour strip built from
// per-service swatches — with the palette now built around one deep forest
// green, a warm neutral line reads as a considered accent rather than
// competing with it).
export default function SwatchStrip({
  className = "",
  height = "h-px",
}: {
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={`w-full bg-paper/15 ${height} ${className}`}
      role="presentation"
      aria-hidden="true"
    />
  );
}
