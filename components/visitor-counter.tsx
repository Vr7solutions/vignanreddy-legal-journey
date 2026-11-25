
"use client";

import { useEffect, useState } from "react";

type Stats = {
  live_visitors: number;
  total_visitors: number;
  today_visitors: number;
};

export default function VisitorCounter() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const updateStats = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!url || !key) return;

        let visitorId = localStorage.getItem("vr-visitor-id");

        if (!visitorId) {
          visitorId = crypto.randomUUID();
          localStorage.setItem("vr-visitor-id", visitorId);
        }

        const response = await fetch(
          `${url}/rest/v1/rpc/track_site_visit`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              apikey: key,
              Authorization: `Bearer ${key}`,
            },
            body: JSON.stringify({
              p_visitor_id: visitorId,
            }),
            cache: "no-store",
          }
        );

        if (!response.ok) throw new Error("Visitor counter failed");

        const data = await response.json();
        if (data?.[0]) setStats(data[0]);
      } catch (error) {
        console.error("Visitor counter error:", error);
      }
    };

    updateStats();
    const interval = setInterval(updateStats, 30000);

    return () => clearInterval(interval);
  }, []);

  const counters = [
    { label: "Live Visitors", value: stats?.live_visitors },
    { label: "Total Visitors", value: stats?.total_visitors },
    { label: "Today's Visitors", value: stats?.today_visitors },
  ];

  return (
    <section className="mx-auto my-8 grid max-w-5xl grid-cols-1 gap-4 px-5 sm:grid-cols-3">
      {counters.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-[#c49a45]/30 bg-white p-5 text-center shadow-sm"
        >
          <p className="text-sm font-medium text-gray-600">
            {item.label}
          </p>
          <p className="mt-2 text-3xl font-bold text-[#17324d]">
            {item.value ?? "—"}
          </p>
        </div>
      ))}
    </section>
  );
}
