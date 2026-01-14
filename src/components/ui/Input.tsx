import { cn } from "@/lib/utils";

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none",
        "placeholder:text-slate-400 focus:border-cyan-400/30",
        props.className
      )}
    />
  );
}
