import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SportStream",
  description: "Sports streaming UI (frontend only)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
