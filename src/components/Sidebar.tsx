"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import type { LucideIcon } from "lucide-react";
import {
  Home,
  Radio,
  Target,
  Goal,
  Bolt,
  Video,
  Newspaper,
  Users,
  Calendar,
  Star,
  PlaySquare,
  Gift,
  Trophy,
  Headphones,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  Icon: LucideIcon;
  top: number; // absolute top in px
  fontWeight?: "font-normal" | "font-medium";
};

const NAV: NavItem[] = [
  { href: "/", label: "Home", Icon: Home, top: 76 },
  { href: "/live/icc-world-cup-final", label: "Live", Icon: Radio, top: 126 },
  { href: "/cricket", label: "Cricket", Icon: Target, top: 178 },
  { href: "/football", label: "Football", Icon: Goal, top: 232 },
  { href: "/basketball", label: "Basketball", Icon: Bolt, top: 285 },
  {
    href: "/highlights",
    label: "Highlights",
    Icon: Video,
    top: 342,
    fontWeight: "font-medium",
  },
  { href: "/news", label: "News", Icon: Newspaper, top: 398 },
  { href: "/community", label: "Community", Icon: Users, top: 453 },
  { href: "/schedule", label: "Broadcast Schedule", Icon: Calendar, top: 507 },
  { href: "/events", label: "Featured Events", Icon: Star, top: 563 },
  { href: "/shorts", label: "Short Video", Icon: PlaySquare, top: 617 },
  { href: "/present", label: "Present", Icon: Gift, top: 671 },
  { href: "/games", label: "Games", Icon: Trophy, top: 726 },
  {
    href: "/match-schedule",
    label: "Match Schedule",
    Icon: Calendar,
    top: 779,
  },
  { href: "/support", label: "Customer Service", Icon: Headphones, top: 836 },
];

function isActive(pathname: string, href: string) {
  if (pathname === href) return true;
  if (href.startsWith("/live") && pathname.startsWith("/live")) return true;
  if (href.startsWith("/news") && pathname.startsWith("/news")) return true;
  return false;
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-60 min-h-348.5 relative bg-bg border-r border-border">
      {/* STREAM */}
      <div className="w-40 h-4 left-27.25 top-12.25 absolute justify-center text-brand text-3xl font-bold font-['Inter'] leading-8">
        STREAM
      </div>

      {/* Logo */}
      <img
        className="w-20 h-20 -left-1 -top-1 absolute"
        src="/images/navbar/8jj.png"
        alt="8jj"
        draggable={false}
      />

      {/* SPORT */}
      <div className="w-36 h-10 left-7.5 top-[27.94px] absolute">
        <div className="w-24 h-7 left-25.5 top-0 absolute">
          <div className="w-28 h-4 left-[-58.82px] top-[1.55px] absolute justify-center text-text text-3xl font-bold font-['Inter'] leading-8">
            SPORT
          </div>
        </div>
      </div>

      {/* Nav */}
      {NAV.map((item) => {
        const active = isActive(pathname, item.href);
        const Icon = item.Icon;

        // tokenized colors:
        // - active: bg-brand + text-text (white)
        // - inactive: transparent + text-muted
        const bg = active ? "bg-brand" : "bg-transparent";
        const fg = active ? "text-text" : "text-muted";

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx("w-52 h-12 left-2.75 absolute rounded-xl", bg, fg)}
            style={{ top: item.top }}
          >
            {/* Icon (matches text color because Lucide uses currentColor) */}
            <Icon
              className="w-5 h-5 left-4 top-3.5 absolute select-none pointer-events-none"
              strokeWidth={2}
              aria-hidden="true"
            />

            {/* Label */}
            <div className="left-12 top-3 absolute h-6">
              <div
                className={clsx(
                  "absolute left-0 top-0.5 justify-center text-sm font-['Inter'] leading-6 whitespace-nowrap",
                  item.fontWeight ?? "font-normal"
                )}
              >
                {item.label}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
