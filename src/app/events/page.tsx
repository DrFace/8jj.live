import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { featuredEvents } from "@/lib/mockData";

export default function EventsPage() {
  return (
    <AppShell
      title="Featured Events"
      subtitle="Major events • Prize pools • Join & win rewards"
    >
      <Card>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs text-slate-300">MEGA EVENT</div>
          <div className="mt-1 text-lg font-semibold">
            Super Bowl LVIII: The Ultimate Showdown
          </div>
          <div className="mt-2 text-sm text-slate-300">
            Predict the winner, participate in live polls, and win exclusive
            rewards.
          </div>
          <div className="mt-4 flex gap-2">
            <Button>Join Now</Button>
            <Button variant="ghost">$10,000,000 Prize Pool</Button>
          </div>
        </div>

        <div className="mt-6 text-sm font-semibold">Upcoming Major Events</div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.map((e, idx) => (
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
    </AppShell>
  );
}
