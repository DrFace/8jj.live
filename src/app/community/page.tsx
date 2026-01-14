import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const posts = [
  {
    name: "Sarah Jenkins",
    ago: "4 hours ago",
    tags: "#Football #Tactics",
    text: "The tactical shift in the second half completely changed the game...",
  },
  {
    name: "Mike Ross",
    ago: "6 hours ago",
    tags: "#Rules #Discussion",
    text: "Unpopular opinion: the new offside rule is improving flow...",
  },
  {
    name: "Rahul Sharma",
    ago: "2 hours ago",
    tags: "#CWC23 #TeamIndia #Cricket",
    text: "What a performance by the bowling unit today! Shami was unplayable...",
  },
];

export default function CommunityPage() {
  return (
    <AppShell title="Community" subtitle="Channels • Discussions • New Post">
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <Card>
          <div className="text-sm font-semibold">Channels</div>
          <div className="mt-3 space-y-2">
            {[
              "General Discussion",
              "Cricket Lounge",
              "Football Fanatics",
              "Match Predictions",
              "Team India",
            ].map((c) => (
              <button
                key={c}
                className="w-full text-left rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <Input placeholder="Search discussions..." />
            <Button className="mt-2 w-full">New Post</Button>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="text-sm font-semibold">Community Guidelines</div>
            <div className="mt-1 text-xs text-slate-300">
              Keep discussions respectful and relevant.
            </div>
            <Button className="mt-3 w-full" variant="ghost">
              Read Rules
            </Button>
          </div>
        </Card>

        <Card>
          <div className="text-sm font-semibold">General</div>
          <div className="mt-4 space-y-3">
            {posts.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-xs text-slate-300">
                  {p.name} • {p.ago}
                </div>
                <div className="mt-2 text-sm">{p.text}</div>
                <div className="mt-2 text-xs text-slate-300">{p.tags}</div>
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
      </div>
    </AppShell>
  );
}
