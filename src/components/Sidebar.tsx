"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  Icon?: LucideIcon;
  svgIcon?: string;
  top: number; // absolute top in px
  fontWeight?: "font-normal" | "font-medium";
};

const NAV: NavItem[] = [
  { href: "/", label: "Home", svgIcon: "/images/navbar/home.svg", top: 76 },
  {
    href: "/live/icc-world-cup-final",
    label: "Live",
    svgIcon: "/images/navbar/live.svg",
    top: 126,
  },
  {
    href: "/cricket",
    label: "Cricket",
    svgIcon: "/images/navbar/cricket.svg",
    top: 178,
  },
  {
    href: "/football",
    label: "Football",
    svgIcon: "/images/navbar/football.svg",
    top: 232,
  },
  {
    href: "/basketball",
    label: "Basketball",
    svgIcon: "/images/navbar/basketball.svg",
    top: 285,
  },
  {
    href: "/highlights",
    label: "Highlights",
    svgIcon: "/images/navbar/highlights.svg",
    top: 342,
    fontWeight: "font-medium",
  },
  {
    href: "/news",
    label: "News",
    svgIcon: "/images/navbar/news.svg",
    top: 398,
  },
  {
    href: "/community",
    label: "Community",
    svgIcon: "/images/navbar/community.svg",
    top: 453,
  },
  {
    href: "/schedule",
    label: "Broadcast Schedule",
    svgIcon: "/images/navbar/broadcast schedule.svg",
    top: 507,
  },
  {
    href: "/events",
    label: "Featured Events",
    svgIcon: "/images/navbar/feature events.svg",
    top: 563,
  },
  {
    href: "/shorts",
    label: "Short Video",
    svgIcon: "/images/navbar/shorts.svg",
    top: 617,
  },
  {
    href: "/present",
    label: "Present",
    svgIcon: "/images/navbar/present.svg",
    top: 671,
  },
  {
    href: "/games",
    label: "Games",
    svgIcon: "/images/navbar/games.svg",
    top: 726,
  },
  {
    href: "/match-schedule",
    label: "Match Schedule",
    svgIcon: "/images/navbar/broadcast schedule.svg",
    top: 779,
  },
  {
    href: "/support",
    label: "Customer Service",
    svgIcon: "/images/navbar/contact us.svg",
    top: 836,
  },
];

function isActive(pathname: string, href: string) {
  if (pathname === href) return true;
  if (href.startsWith("/live") && pathname.startsWith("/live")) return true;
  if (href.startsWith("/news") && pathname.startsWith("/news")) return true;
  return false;
}

export default function Sidebar() {
  const pathname = usePathname();

  // ✅ Only shifts the whole nav down, keeping ALL inter-item gaps identical.
  // Increase/decrease this value to control the space below STREAM.
  const NAV_TOP_OFFSET = 32;

  return (
    <div className="w-60 min-h-348.5 relative bg-bg border-r border-border">
      {/* Logo */}
      <img
        className="w-20 h-20 left-3 top-1.5 absolute z-10"
        src="/images/navbar/8jj.png"
        alt="8jj"
        draggable={false}
      />

      {/* SPORT */}
      <div className="w-36 h-10 left-23 top-4.5 absolute z-10">
        <div className="w-28 h-4 absolute text-text text-3xl font-bold font-['Inter'] leading-8">
          SPORT
        </div>
      </div>

      {/* STREAM */}
      <div className="w-40 h-4 left-23 top-13 absolute z-10 text-brand text-3xl font-bold font-['Inter'] leading-8">
        STREAM
      </div>

      {/* Nav */}
      {NAV.map((item) => {
        const active = isActive(pathname, item.href);

        const bg = active ? "bg-brand" : "bg-transparent";
        const fg = active ? "text-text" : "text-muted";

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx("w-52 h-12 left-2.75 absolute rounded-xl", bg, fg)}
            style={{ top: item.top + NAV_TOP_OFFSET }}
          >
            {/* Icon */}
            {item.svgIcon ? (
              <span
                className="w-5 h-5 left-4 top-3.5 absolute select-none pointer-events-none"
                style={{
                  WebkitMaskImage: `url("${encodeURI(item.svgIcon)}")`,
                  maskImage: `url("${encodeURI(item.svgIcon)}")`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  backgroundColor: "currentColor",
                }}
              />
            ) : (
              item.Icon && (
                <item.Icon
                  className="w-5 h-5 left-4 top-3.5 absolute select-none pointer-events-none"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              )
            )}

            {/* Label */}
            <div className="left-12 top-3 absolute h-6">
              <div
                className={clsx(
                  "absolute left-0 top-0.5 text-sm font-['Inter'] leading-6 whitespace-nowrap",
                  item.fontWeight ?? "font-normal",
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
