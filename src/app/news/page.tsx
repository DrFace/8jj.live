// src/app/news/page.tsx
import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

const stories = [
  {
    slug: "historic-victory-young-squad",
    title:
      "Historic Victory: Underdogs Claim the Championship Title in Thrilling Finale",
    excerpt:
      "In a match remembered for decades, the team defied all odds to secure their first-ever major trophy.",
    category: "Breaking Story",
  },
  {
    slug: "tactical-breakdown-derby",
    title: "Match Analysis: Tactical Breakdown of the Derby",
    excerpt: "Expert analysis bringing you closer to the action.",
    category: "Basketball",
  },
  {
    slug: "transfer-window-top-moves",
    title: "Transfer Window Updates: Top 5 Moves to Watch",
    excerpt: "Key moves and rumors in the market.",
    category: "Cricket",
  },
];

export default function NewsPage() {
  return (
    <AppShell
      title="Latest News"
      subtitle="Breaking news, analysis, and exclusive interviews"
    >
      <Card>
        <div className="grid gap-4 lg:grid-cols-3">
          {stories.map((s) => (
            <Link
              key={s.slug}
              href={`/news/${s.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
            >
              <div className="text-xs text-slate-300">{s.category}</div>
              <div className="mt-2 text-sm font-semibold">{s.title}</div>
              <div className="mt-2 text-xs text-slate-300">{s.excerpt}</div>
              <Button className="mt-4" size="sm">
                Read Full Story
              </Button>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Button variant="ghost">Load More News</Button>
        </div>
      </Card>
    </AppShell>
  );
}
