import AppShell from "@/components/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const faqs = [
  "How do I watch live matches?",
  "Can I watch highlights of past matches?",
  "How do I redeem gifts and rewards?",
  "What are Game Shows?",
  "How do I join the community discussions?",
  "Is there a mobile app available?",
];

export default function SupportPage() {
  return (
    <AppShell
      title="Customer Service"
      subtitle="Get support and find answers to your questions"
    >
      <Card>
        <Input placeholder="Search for help..." />

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold">Live Chat</div>
            <div className="mt-1 text-xs text-slate-300">
              Chat with our support team in real-time
            </div>
            <Button className="mt-3 w-full" variant="ghost">
              Start Chat →
            </Button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold">Email Support</div>
            <div className="mt-1 text-xs text-slate-300">
              Get help via email within 24 hours
            </div>
            <Button className="mt-3 w-full" variant="ghost">
              Send Email →
            </Button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold">Phone Support</div>
            <div className="mt-1 text-xs text-slate-300">
              Monday–Friday, 9AM–6PM
            </div>
            <Button className="mt-3 w-full" variant="ghost">
              Call Now →
            </Button>
          </div>
        </div>

        <div className="mt-6 text-sm font-semibold">
          Frequently Asked Questions
        </div>
        <div className="mt-3 space-y-2">
          {faqs.map((q) => (
            <details
              key={q}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <summary className="cursor-pointer text-sm">{q}</summary>
              <div className="mt-2 text-xs text-slate-300">
                Answer placeholder (frontend-only).
              </div>
            </details>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5 text-center">
          <div className="text-sm font-semibold">Still need help?</div>
          <div className="mt-1 text-xs text-slate-300">
            Our support team is here to assist you with any questions or issues.
          </div>
          <Button className="mt-3">Contact Support Team</Button>
        </div>
      </Card>
    </AppShell>
  );
}
