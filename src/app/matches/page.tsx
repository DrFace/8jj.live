"use client";

import { useEffect, useState } from "react";
import { httpGet } from "@/lib/api";

export default function ApiTestPage() {
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<any>(null);

  useEffect(() => {
    httpGet("/matches")
      .then(setData)
      .catch((e) =>
        setErr({
          status: e?.response?.status,
          message: e?.message,
          url: e?.config?.url,
        })
      );
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1>API Test</h1>
      <pre>{JSON.stringify({ data, err }, null, 2)}</pre>
    </div>
  );
}
