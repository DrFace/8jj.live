import Link from "next/link";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-app flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <Link href="/" className="text-xs text-slate-300 hover:underline">
          ← Back to Home
        </Link>
        <div className="mt-3 text-lg font-semibold">Create Account</div>
        <div className="text-sm text-slate-300">
          Join the ultimate sports community today
        </div>

        <div className="mt-5 space-y-3">
          <div>
            <div className="text-xs text-slate-300 mb-1">Full Name</div>
            <Input placeholder="John Doe" />
          </div>

          <div>
            <div className="text-xs text-slate-300 mb-1">Email Address</div>
            <Input placeholder="you@example.com" type="email" />
          </div>

          <div>
            <div className="text-xs text-slate-300 mb-1">Password</div>
            <Input placeholder="••••••••" type="password" />
          </div>

          <div>
            <div className="text-xs text-slate-300 mb-1">Confirm Password</div>
            <Input placeholder="••••••••" type="password" />
          </div>

          <Button className="w-full">Create Account</Button>

          <div className="text-xs text-slate-300">
            Already have an account?{" "}
            <Link href="/login" className="text-cyan-200 hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
