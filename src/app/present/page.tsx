import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function PresentPage() {
  return (
    <AppShell
      title="Point shop"
      subtitle="Redeem loyalty points for exclusive merchandise and VIP tickets"
    >
      <Card>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold">Community Guidelines</div>
            <div className="mt-2 text-xs text-slate-300">
              Keep discussions respectful and relevant. Read our full rules
              before posting.
            </div>
            <Button className="mt-4 w-full" variant="ghost">
              Explore now
            </Button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold">WIN SPORTS MEMORABILIA!</div>
            <div className="mt-2 text-xs text-slate-300">
              Authentic, MVP prizes (frontend placeholder)
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {["Premium Jersey", "Signed Ball", "VIP Ticket", "Team Cap"].map(
                (i, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-black/20 p-3"
                  >
                    <div className="text-sm font-medium">{i}</div>
                    <div className="mt-1 text-xs text-slate-300">
                      Redeem with points
                    </div>
                    <Button className="mt-3 w-full" size="sm">
                      Redeem
                    </Button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Card>
    </AppShell>
  );
}
