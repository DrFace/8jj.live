// src/lib/auth/token.ts
export const ACCESS_TOKEN_KEY = "access_token";

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function getCookie(name: string): string | null {
  if (!isBrowser()) return null;

  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (const c of cookies) {
    const [k, ...rest] = c.split("=");
    if (k === name) return decodeURIComponent(rest.join("="));
  }
  return null;
}

function setCookie(name: string, value: string, days = 7) {
  if (!isBrowser()) return;

  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; Expires=${expires}; Path=/; SameSite=Lax`;
}

function deleteCookie(name: string) {
  if (!isBrowser()) return;
  document.cookie = `${name}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax`;
}

export function getAccessToken(): string | null {
  if (!isBrowser()) return null;

  // Prefer localStorage (common for SPAs/public sites); fallback to cookie.
  const ls = window.localStorage.getItem(ACCESS_TOKEN_KEY);
  if (ls && ls.trim().length > 0) return ls;

  const ck = getCookie(ACCESS_TOKEN_KEY);
  return ck && ck.trim().length > 0 ? ck : null;
}

export function setAccessToken(
  token: string,
  options?: { persistCookie?: boolean; cookieDays?: number }
) {
  if (!isBrowser()) return;

  window.localStorage.setItem(ACCESS_TOKEN_KEY, token);

  if (options?.persistCookie) {
    setCookie(ACCESS_TOKEN_KEY, token, options.cookieDays ?? 7);
  }
}

export function clearAccessToken() {
  if (!isBrowser()) return;

  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  deleteCookie(ACCESS_TOKEN_KEY);
}
