import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { chatMessages } from "@/lib/mockData";

export default function LivePage() {
  return (
    <AppShell
      title="Live Now"
      subtitle="ICC World Cup Final: India vs Australia"
    >
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold">
                ICC World Cup Final: India vs Australia
              </div>
              <div className="text-xs text-slate-300">
                Narendra Modi Stadium, Ahmedabad • Final Match • Live Now
              </div>
            </div>
            <Badge className="border-cyan-400/25 bg-cyan-500/15 text-cyan-100">
              LIVE
            </Badge>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 aspect-video flex items-center justify-center">
            <div className="text-sm text-slate-300">
              Video Player Placeholder
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-xs text-slate-300">IND</div>
              <div className="text-lg font-semibold">245/4</div>
              <div className="text-xs text-slate-300">42.3 overs</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-xs text-slate-300">AUS</div>
              <div className="text-lg font-semibold">Yet to bat</div>
              <div className="text-xs text-slate-300">—</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-xs text-slate-300">Current Run Rate</div>
              <div className="text-lg font-semibold">5.76</div>
              <div className="text-xs text-slate-300">Live</div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button variant="ghost" className="flex-1">
              Like
            </Button>
            <Button variant="ghost" className="flex-1">
              Share
            </Button>
            <Button className="flex-1">Official Partner</Button>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Live Chat</div>
            <Badge>Stump Cam</Badge>
          </div>

          <div className="mt-4 space-y-3">
            {chatMessages.map((m, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="text-xs text-slate-300">
                  {m.name} • {m.ago}
                </div>
                <div className="mt-1 text-sm">{m.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <input
              placeholder="Say something..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-slate-400"
            />
            <Button className="mt-2 w-full">Send</Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
