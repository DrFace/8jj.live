"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { toast } from "@/lib/toast";
import { httpPost } from "@/lib/api/http";
import { setAccessToken } from "@/lib/auth/token";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!email || !password) {
      toast.error("Missing fields", "Please enter both email and password");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Invalid email", "Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Make API call
      const response = await httpPost<{ token: string; user: { name: string } }>(
        "/auth/login",
        { email, password }
      );

      // Save token
      setAccessToken(response.token);

      // Show success toast
      toast.success("Welcome back!", `Logged in as ${response.user.name}`);

      // Redirect to home
      router.push("/");
    } catch (error) {
      // Error toast is handled by global API interceptor
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <div>
            <div className="text-xs text-slate-300 mb-1">Email Address</div>
            <Input
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-300 mb-1">Password</div>
              <button
                type="button"
                className="text-xs text-cyan-200 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <Input
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="text-xs text-slate-300">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-cyan-200 hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
