import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl transition font-medium";
  const variants =
    variant === "primary"
      ? "bg-cyan-500/25 border border-cyan-400/25 hover:bg-cyan-500/30 text-slate-50"
      : "bg-white/5 border border-white/10 hover:bg-white/10 text-slate-100";
  const sizes = size === "sm" ? "px-3 py-2 text-xs" : "px-4 py-2 text-sm";
  return <button className={cn(base, variants, sizes, className)} {...props} />;
}
