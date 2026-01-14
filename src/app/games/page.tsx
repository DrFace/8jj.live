import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const games = [
  "Gold Miner",
  "Super Car Racing",
  "Pinball",
  "Candy Land",
  "FooFoo Run Jump",
  "Galactic War",
];

export default function GamesPage() {
  return (
    <AppShell
      title="Games"
      subtitle="Play & win big • Fun games and exciting rewards"
    >
      <Card>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-lg font-semibold">8JJ Games</div>
          <div className="text-sm text-slate-300">
            Your ultimate play zone (frontend placeholder)
          </div>
          <Button className="mt-4">Play Now</Button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <div
              key={g}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="text-sm font-semibold">{g}</div>
              <div className="mt-2 text-xs text-slate-300">Join Now</div>
              <Button className="mt-3 w-full">Join Now</Button>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
