"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  Home,
  Radio,
  Trophy,
  Sparkles,
  Newspaper,
  Users,
  CalendarDays,
  Star,
  PlaySquare,
  Gift,
  Gamepad2,
  Headphones,
  ListChecks,
} from "lucide-react";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/live/icc-world-cup-final", label: "Live", icon: Radio },
  { href: "/cricket", label: "Cricket", icon: Trophy },
  { href: "/football", label: "Football", icon: Sparkles },
  { href: "/basketball", label: "Basketball", icon: Sparkles },
  { href: "/highlights", label: "Highlights", icon: PlaySquare },
  { href: "/news", label: "News", icon: Newspaper },
  { href: "/community", label: "Community", icon: Users },
  { href: "/schedule", label: "Broadcast Schedule", icon: CalendarDays },
  { href: "/events", label: "Featured Events", icon: Star },
  { href: "/shorts", label: "Short Video", icon: PlaySquare },
  { href: "/present", label: "Present", icon: Gift },
  { href: "/games", label: "Games", icon: Gamepad2 },
  { href: "/support", label: "Customer Service", icon: Headphones },
  { href: "/match-schedule", label: "Match Schedule", icon: ListChecks },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="glass rounded-2xl p-4 h-full overflow-auto">
      <div className="flex items-center gap-2 px-2 pb-4">
        <div className="h-9 w-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
          <span className="text-cyan-200 font-semibold">S</span>
        </div>
        <div>
          <div className="text-sm font-semibold tracking-wide">SPORT</div>
          <div className="text-xs text-slate-300">STREAM</div>
        </div>
      </div>

      <nav className="space-y-1">
        {nav.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href.startsWith("/live") && pathname.startsWith("/live")) ||
            (item.href.startsWith("/news") && pathname.startsWith("/news"));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
                active
                  ? "bg-cyan-500/15 border border-cyan-400/25"
                  : "hover:bg-white/5"
              )}
            >
              <Icon className="h-4 w-4 text-slate-200" />
              <span className="text-slate-100">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="text-xs text-slate-300">EN</div>
        <div className="mt-2 flex gap-2">
          <Link
            href="/login"
            className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-center text-xs hover:bg-white/15"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="flex-1 rounded-lg bg-cyan-500/25 border border-cyan-400/25 px-3 py-2 text-center text-xs hover:bg-cyan-500/30"
          >
            Sign up
          </Link>
        </div>
      </div>
    </aside>
  );
}
