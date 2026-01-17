// src/lib/api/client.ts
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { clearAccessToken, getAccessToken } from "@/lib/auth/token";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  // In Next.js, this will show during dev/build if env is missing.
  // Do not throw in runtime if you want partial pages to still render.
  // Throwing is usually preferable to fail fast.
  // eslint-disable-next-line no-console
  console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
}

type UnauthorizedHandler = (reason: {
  status?: number;
  message?: string;
}) => void;

let onUnauthorized: UnauthorizedHandler | null = null;

/**
 * Optional hook for the app to respond to 401s (e.g., redirect to /login, open modal, etc.)
 */
export function setUnauthorizedHandler(handler: UnauthorizedHandler) {
  onUnauthorized = handler;
}

function attachToken(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  const token = getAccessToken();
  if (token) {
    config.headers = config.headers ?? {};
    // Do not overwrite Authorization if caller explicitly set one
    if (!("Authorization" in config.headers)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}

function handleAuthError(error: AxiosError) {
  const status = error.response?.status;

  if (status === 401) {
    // Token is invalid/expired; remove it so the UI can re-auth
    clearAccessToken();

    if (onUnauthorized) {
      onUnauthorized({ status, message: "Unauthorized" });
    }
  }
}

export function createApiClient(): AxiosInstance {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30_000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // Request: attach bearer token
  instance.interceptors.request.use(
    (config) => attachToken(config),
    (error) => Promise.reject(error)
  );

  // Response: handle 401 globally, then rethrow
  instance.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
      handleAuthError(error);
      return Promise.reject(error);
    }
  );

  return instance;
}

// Singleton client (typical for web apps)
export const apiClient = createApiClient();
