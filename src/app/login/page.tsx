import Link from "next/link";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-app flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <Link href="/" className="text-xs text-slate-300 hover:underline">
          ← Back to Home
        </Link>
        <div className="mt-3 text-lg font-semibold">Welcome Back</div>
        <div className="text-sm text-slate-300">
          Sign in to access your personalized sports feed
        </div>

        <div className="mt-5 space-y-3">
          <div>
            <div className="text-xs text-slate-300 mb-1">Email Address</div>
            <Input placeholder="you@example.com" type="email" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-300 mb-1">Password</div>
              <button className="text-xs text-cyan-200 hover:underline">
                Forgot password?
              </button>
            </div>
            <Input placeholder="••••••••" type="password" />
          </div>

          <Button className="w-full">Sign In</Button>

          <div className="text-xs text-slate-300">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-cyan-200 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
