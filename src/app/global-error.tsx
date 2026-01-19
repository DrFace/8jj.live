"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // You can later send this to logging service (Sentry, etc.)
  console.error("Global error:", error);

  return (
    <html>
      <body className="min-h-screen bg-[#070B14] text-white flex items-center justify-center p-6">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
          <h1 className="text-xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-sm text-white/70">
            An unexpected error occurred. Please try again.
          </p>

          <button
            onClick={reset}
            className="mt-5 w-full rounded-xl bg-[#2D6BFF] px-4 py-3 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}