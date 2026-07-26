import {
  Wrench,
  PencilRuler,
  Truck,
  PanelRight,
  type LucideProps,
} from "lucide-react";

export const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Wrench,
  PencilRuler,
  Truck,
  PanelRight,
};

export function ServiceIcon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Icon = iconMap[name] ?? Wrench;
  return <Icon className={className} style={style} strokeWidth={1.75} aria-hidden="true" />;
}
