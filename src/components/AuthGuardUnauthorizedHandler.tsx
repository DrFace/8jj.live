"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setUnauthorizedHandler } from "@/lib/api";

export function AuthGuardUnauthorizedHandler() {
  const router = useRouter();

  useEffect(() => {
    setUnauthorizedHandler(() => {
      // Adjust to your UX: login page, modal, toast, etc.
      router.push("/login");
    });
  }, [router]);

  return null;
}
