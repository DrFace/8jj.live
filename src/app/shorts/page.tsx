import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const shorts = [
  { title: "Incredible Last Minute Goal!", views: "1.2M views", dur: "0:45" },
  { title: "F1 Pit Stop Record Broken", views: "1.2M views", dur: "0:45" },
  { title: "Curry 3-Pointer from Downtown", views: "1.2M views", dur: "0:45" },
  {
    title: "Insane Cricket Catch at Boundary",
    views: "1.2M views",
    dur: "0:45",
  },
];

export default function ShortsPage() {
  return (
    <AppShell
      title="Short Video"
      subtitle="Quick clips • Like • Comment • Share"
    >
      <Card>
        <div className="space-y-3">
          {shorts.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{s.title}</div>
                <div className="text-xs text-slate-300">
                  {s.views} • {s.dur}
                </div>
              </div>
              <div className="mt-3 aspect-[21/6] rounded-xl border border-white/10 bg-black/30 flex items-center justify-center">
                <div className="text-xs text-slate-300">
                  Short Player Placeholder
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="ghost">
                  Like
                </Button>
                <Button size="sm" variant="ghost">
                  Comment
                </Button>
                <Button size="sm" variant="ghost">
                  Share
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
