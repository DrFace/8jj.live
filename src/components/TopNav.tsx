"use client";

import Link from "next/link";
import { clsx } from "clsx";

export default function TopNav({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-4">
      <header
        className={clsx(
          "relative w-full h-20",
          "bg-[linear-gradient(0deg,rgba(3.65,112.15,162.43,0.20)_0%,rgba(3.65,112.15,162.43,0.20)_100%),linear-gradient(90deg,rgba(51,195,234,0.90)_78%,rgba(11.63,21.90,86.04,0.90)_100%)]",
          "border-b border-white/5",
        )}
      >
        {/* Left banner image (Figma: 932 x 52) */}
        <img
          src="/images/topnav/8jj.gif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
          draggable={false}
        />

        {/* Right controls */}
        <div className="absolute right-6 top-2.25 h-9 flex items-center gap-4">
          {/* Search */}
          <button
            type="button"
            className="w-9 h-9 grid place-items-center"
            aria-label="Search"
          >
            <img
              src="/images/topnav/Frame-1.svg"
              alt=""
              className="w-5 h-5 pointer-events-none select-none"
              draggable={false}
            />
          </button>

          {/* Language */}
          <button
            type="button"
            className="h-9 flex items-center gap-2"
            aria-label="Language"
          >
            <img
              src="/images/topnav/Frame-2.svg"
              alt=""
              className="w-4 h-4 pointer-events-none select-none"
              draggable={false}
            />
            <span className="text-text text-[11.9px] font-medium font-['Inter'] leading-5">
              EN
            </span>
          </button>

          {/* Notifications */}
          <button
            type="button"
            className="relative w-9 h-9 grid place-items-center"
            aria-label="Notifications"
          >
            <img
              src="/images/topnav/Frame-3.svg"
              alt=""
              className="w-5 h-5 pointer-events-none select-none"
              draggable={false}
            />
            <span className="absolute right-1.5 top-1.5 w-2 h-2 rounded-full bg-red-500 border border-bg" />
          </button>

          {/* Login */}
          <Link
            href="/login"
            className={clsx(
              "h-8.5 px-3 rounded-xl inline-flex items-center gap-2",
              "bg-[#1A2342]",
              "outline outline-white/10",
            )}
          >
            <img
              src="/images/topnav/Frame.svg"
              alt=""
              className="w-4 h-4 pointer-events-none select-none"
              draggable={false}
            />
            <span className="text-text text-[11.9px] font-semibold font-['Inter'] leading-5">
              Login
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
}
