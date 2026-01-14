import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const schedule = [
  { league: "Premier League", a: "Liverpool", time: "20:00", b: "Chelsea" },
  { league: "NBA", a: "Celtics", time: "22:30", b: "Heat" },
  { league: "NFL", a: "Chiefs", time: "18:30", b: "Bills" },
  { league: "Serie A", a: "Juventus", time: "19:45", b: "AC Milan" },
];

export default function SchedulePage() {
  return (
    <AppShell
      title="Broadcast Schedule"
      subtitle="Don’t miss any of the action"
    >
      <Card>
        <div className="flex gap-2">
          <Button size="sm">Today</Button>
          <Button size="sm" variant="ghost">
            Tomorrow
          </Button>
          <Button size="sm" variant="ghost">
            This Week
          </Button>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {schedule.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="text-xs text-slate-300">
                {s.league} <Badge>Today</Badge>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <div className="font-semibold">{s.a}</div>
                <div className="text-slate-300">{s.time}</div>
                <div className="font-semibold">{s.b}</div>
              </div>
              <Button className="mt-3 w-full" variant="ghost">
                Remind
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
