// src/lib/api/client.ts
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { clearAccessToken, getAccessToken } from "@/lib/auth/token";
import { toast } from "@/lib/toast";

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

    // Show toast notification
    toast.error("Session expired", "Please log in again");

    if (onUnauthorized) {
      onUnauthorized({ status, message: "Unauthorized" });
    }
  }
}

/**
 * Global error handler that shows toast messages for API errors
 */
function handleGlobalError(error: AxiosError) {
  const status = error.response?.status;
  const data = error.response?.data as { message?: string; error?: string } | undefined;
  
  // Skip 401 - already handled by handleAuthError
  if (status === 401) return;

  // Extract error message
  const errorMessage = data?.message || data?.error || error.message || "An error occurred";

  // Show different toasts based on status
  if (status === 403) {
    toast.error("Access Denied", "You don't have permission to perform this action");
  } else if (status === 404) {
    toast.error("Not Found", errorMessage);
  } else if (status === 500) {
    toast.error("Server Error", "Something went wrong on our end. Please try again later");
  } else if (status && status >= 400 && status < 500) {
    toast.error("Request Failed", errorMessage);
  } else if (!status) {
    toast.error("Network Error", "Unable to connect to server. Check your internet connection");
  } else {
    toast.error("Error", errorMessage);
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
      handleGlobalError(error);
      return Promise.reject(error);
    }
  );

  return instance;
}

// Singleton client (typical for web apps)
export const apiClient = createApiClient();
