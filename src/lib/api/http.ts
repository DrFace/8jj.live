// src/lib/api/http.ts
import type { AxiosRequestConfig } from "axios";
import { apiClient } from "./client";

export async function httpGet<T>(url: string, config?: AxiosRequestConfig) {
  const res = await apiClient.get<T>(url, config);
  return res.data;
}

export async function httpPost<T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig
) {
  const res = await apiClient.post<T>(url, body, config);
  return res.data;
}

export async function httpPut<T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig
) {
  const res = await apiClient.put<T>(url, body, config);
  return res.data;
}

export async function httpPatch<T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig
) {
  const res = await apiClient.patch<T>(url, body, config);
  return res.data;
}

export async function httpDelete<T>(url: string, config?: AxiosRequestConfig) {
  const res = await apiClient.delete<T>(url, config);
  return res.data;
}
