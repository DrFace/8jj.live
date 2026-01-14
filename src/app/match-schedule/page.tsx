import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function MatchSchedulePage() {
  const rows = Array.from({ length: 10 }).map((_, i) => ({
    time: "19:30 IST",
    sport: "Cricket • ICC World Cup",
    match: "India vs South Africa",
  }));

  return (
    <AppShell
      title="Match Schedule"
      subtitle="Today • Tomorrow • Upcoming dates"
    >
      <Card>
        <div className="flex gap-2 overflow-auto pb-2">
          {[
            "Today",
            "Oct 24",
            "Tomorrow",
            "Oct 25",
            "Sat Oct 26",
            "Sun Oct 27",
            "Mon Oct 28",
          ].map((t) => (
            <button
              key={t}
              className="whitespace-nowrap rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {rows.map((r, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="text-xs text-slate-300">{r.time}</div>
                <div className="text-xs text-slate-300">{r.sport}</div>
                <div className="text-sm font-semibold">{r.match}</div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  Remind Me
                </Button>
                <Button variant="ghost" size="sm">
                  Add to Calendar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
