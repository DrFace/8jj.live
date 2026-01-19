"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type ToastType = "success" | "error" | "info";

type Toast = {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
};

type ToastContextValue = {
  toast: (t: Omit<Toast, "id">) => void;
  success: (message: string, title?: string) => void;
  error: (message: string, title?: string) => void;
  info: (message: string, title?: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((t: Omit<Toast, "id">) => {
    const id = crypto.randomUUID();
    const newToast: Toast = { id, ...t };
    setToasts((prev) => [newToast, ...prev]);

    // Auto-close after 3.5s
    window.setTimeout(() => remove(id), 3500);
  }, [remove]);

  const value = useMemo<ToastContextValue>(() => ({
    toast,
    success: (message, title) => toast({ type: "success", message, title }),
    error: (message, title) => toast({ type: "error", message, title }),
    info: (message, title) => toast({ type: "info", message, title }),
  }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Toast UI Layer */}
      <div className="fixed right-4 top-4 z-[9999] flex w-[320px] flex-col gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="rounded-2xl border border-white/10 bg-[#0B1220] p-4 shadow-lg"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">
                  {t.title ?? (t.type === "success" ? "Success" : t.type === "error" ? "Error" : "Info")}
                </div>
                <div className="mt-1 text-xs text-white/70">{t.message}</div>
              </div>

              <button
                onClick={() => remove(t.id)}
                className="text-xs text-white/50 hover:text-white"
                aria-label="Close toast"
              >
                ✕
              </button>
            </div>

            {/* Type indicator */}
            <div
              className={[
                "mt-3 h-1 w-full rounded-full",
                t.type === "success" ? "bg-emerald-500/70" : "",
                t.type === "error" ? "bg-red-500/70" : "",
                t.type === "info" ? "bg-sky-500/70" : "",
              ].join(" ")}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}