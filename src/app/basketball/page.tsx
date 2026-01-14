import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { sportGrid } from "@/lib/mockData";

export default function SportPage() {
  const sportName = "Cricket"; // change per file
  const items = sportGrid(sportName);

  return (
    <AppShell
      title={sportName}
      subtitle="Watch live matches, highlights and follow your favorite teams"
    >
      <Card>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold">All Leagues</div>
          <div className="flex gap-2">
            <Button size="sm">Live</Button>
            <Button size="sm" variant="ghost">
              Upcoming
            </Button>
            <Button size="sm" variant="ghost">
              Highlights
            </Button>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((m, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-300">{m.league}</div>
                <Badge
                  className={
                    m.status === "LIVE"
                      ? "border-cyan-400/25 bg-cyan-500/15 text-cyan-100"
                      : ""
                  }
                >
                  {m.status}
                </Badge>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="text-xs text-slate-300">Team A</div>
                  <div className="mt-1 font-semibold">{m.a}</div>
                  <div className="mt-1 text-xs text-slate-300">Score</div>
                  <div className="text-lg font-semibold">{m.aScore}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="text-xs text-slate-300">Team B</div>
                  <div className="mt-1 font-semibold">{m.b}</div>
                  <div className="mt-1 text-xs text-slate-300">Score</div>
                  <div className="text-lg font-semibold">{m.bScore}</div>
                </div>
              </div>

              <Button className="mt-3 w-full">
                {m.status === "LIVE" ? "Watch" : "Remind"}
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
