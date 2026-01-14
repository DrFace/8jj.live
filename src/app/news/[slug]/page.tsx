// src/app/news/[slug]/page.tsx
import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export default function NewsDetail() {
  return (
    <AppShell
      title="Match Analysis: Tactical Breakdown"
      subtitle="Category: Cricket • Published: Today, 6:30 PM"
    >
      <Card>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">
            Historic Victory: Young Squad Seals Thrilling Series Win
          </div>
          <Badge>5 min read</Badge>
        </div>

        <div className="mt-4 space-y-3 text-sm text-slate-200 leading-relaxed">
          <p>
            In a memorable night of cricket, a young and determined squad
            delivered a stunning performance to clinch a dramatic series
            victory, defeating their opponents in a closely contested final
            match.
          </p>
          <p>
            Chasing a challenging target under pressure, the batting lineup
            showed composure. The turning point came in the final overs, where a
            young all-rounder played a fearless knock.
          </p>
          <p>
            Earlier, the bowling unit restricted the opposition to a chaseable
            total. The captain praised teamwork and confidence, calling the win
            a key milestone ahead of upcoming fixtures.
          </p>
        </div>

        <div className="mt-6">
          <div className="text-sm font-semibold">Related News</div>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {[
              "Manchester City eyeing new striker",
              "Verstappen secures pole position",
              "Mahomes discusses injury recovery",
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="text-sm font-medium">{t}</div>
                <div className="text-xs text-slate-300">Trending</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Link href="/news" className="text-xs text-cyan-200 hover:underline">
            ← Back to News
          </Link>
        </div>
      </Card>
    </AppShell>
  );
}
