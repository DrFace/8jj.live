import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { featuredEvents, latestNews, trendingHighlights } from "@/lib/mockData";
import Link from "next/link";

export default function HomePage() {
  return (
    <AppShell
      title="Home"
      subtitle="Live & Upcoming • Trending Highlights • Latest News"
    >
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Card>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Trending Highlights</div>
            <Link
              href="/highlights"
              className="text-xs text-cyan-200 hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            {trendingHighlights.map((h, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3"
              >
                <div className="min-w-0">
                  <div className="text-xs text-slate-300">{h.time}</div>
                  <div className="truncate text-sm">{h.title}</div>
                </div>
                <div className="text-xs text-slate-300">{h.views}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">
                  LIVE ICC World Cup 2024
                </div>
                <div className="text-xs text-slate-300">
                  India vs Australia • Ahmedabad
                </div>
              </div>
              <Badge className="border-cyan-400/25 bg-cyan-500/15 text-cyan-100">
                LIVE
              </Badge>
            </div>

            <div className="mt-3 flex gap-2">
              <Link href="/live/icc-world-cup-final" className="flex-1">
                <Button className="w-full">Watch Live</Button>
              </Link>
              <Button variant="ghost" className="flex-1">
                Match Info
              </Button>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Latest News</div>
            <Link
              href="/news"
              className="text-xs text-cyan-200 hover:underline"
            >
              Read More
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            {latestNews.map((n, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="text-xs text-slate-300">
                  {n.category} • {n.ago}
                </div>
                <div className="mt-1 text-sm font-medium">{n.title}</div>
                <div className="mt-1 text-xs text-slate-300">{n.excerpt}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Featured Events</div>
          <Link
            href="/events"
            className="text-xs text-cyan-200 hover:underline"
          >
            Read More
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredEvents.slice(0, 4).map((e, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="text-xs text-slate-300">
                Featured • {e.joined} joined
              </div>
              <div className="mt-1 text-sm font-semibold">{e.title}</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm font-semibold">{e.prize}</div>
                <div className="text-xs text-slate-300">{e.days} d</div>
              </div>
              <Button className="mt-3 w-full">Join Event</Button>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Join the Conversation</div>
            <div className="text-xs text-slate-300">
              Connect with millions of sports fans. Discuss live matches, share
              predictions, and celebrate victories.
            </div>
          </div>
          <Link href="/community">
            <Button>Join Community</Button>
          </Link>
        </div>
      </Card>
    </AppShell>
  );
}
