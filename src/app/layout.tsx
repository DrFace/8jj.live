import "./globals.css";
import type { Metadata } from "next";
import { AuthGuardUnauthorizedHandler } from "@/components/AuthGuardUnauthorizedHandler";
import type { ReactNode } from "react";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "SportStream",
  description: "Sports streaming UI (frontend only)",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthGuardUnauthorizedHandler />
        {children}
        <Toaster position="top-right" richColors theme="dark" />
      </body>
    </html>
  );

}
