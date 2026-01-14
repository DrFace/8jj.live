"use client";

import { Search, Bell, UserCircle2 } from "lucide-react";
import Link from "next/link";

export default function TopBar({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <header className="glass rounded-2xl px-4 py-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-semibold">
            {title ?? "Digital Dream Utopia"}
          </div>
          {subtitle ? (
            <div className="text-sm text-slate-300">{subtitle}</div>
          ) : null}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <Search className="h-4 w-4 text-slate-300" />
            <input
              placeholder="Search…"
              className="w-48 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <button className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10">
            <Bell className="h-4 w-4 text-slate-200" />
          </button>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
          >
            <UserCircle2 className="h-4 w-4 text-slate-200" />
            <span className="text-sm">Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
