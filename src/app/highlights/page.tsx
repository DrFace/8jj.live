import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const highlights = [
  {
    sport: "Football",
    title: "Top 10 Goals of the Month - October",
    views: "1.2M views",
    duration: "10:24",
  },
  {
    sport: "Basketball",
    title: "Insane Dunk Contest Highlights",
    views: "850K views",
    duration: "05:12",
  },
  {
    sport: "Cricket",
    title: "Last Over Thriller - IND vs AUS",
    views: "2.5M views",
    duration: "08:45",
  },
];

export default function HighlightsPage() {
  return (
    <AppShell
      title="Match Highlights"
      subtitle="Catch up on the best moments you missed"
    >
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Card>
          <div className="text-xs text-slate-300">HIGHLIGHTS • 15:24 mins</div>
          <div className="mt-2 text-lg font-semibold">
            Kohli&apos;s Masterclass: Every Boundary from his 82*
          </div>

          <div className="mt-4 aspect-video rounded-2xl border border-white/10 bg-black/30 flex items-center justify-center">
            <div className="text-sm text-slate-300">
              Video Player Placeholder
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm font-semibold">Up Next</div>
            <Button size="sm" variant="ghost">
              View All
            </Button>
          </div>

          <div className="mt-3 space-y-2">
            {highlights.map((h, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="min-w-0">
                  <div className="text-xs text-slate-300">{h.sport}</div>
                  <div className="truncate text-sm font-medium">{h.title}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-300">{h.views}</div>
                  <Badge>{h.duration}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Shorts</div>
          <div className="mt-3 grid gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="text-sm font-medium">Short clip #{i + 1}</div>
                <div className="text-xs text-slate-300">Recent upload</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
