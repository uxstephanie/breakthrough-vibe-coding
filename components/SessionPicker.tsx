"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Session } from "@/lib/sessions";

type Props = {
  sessions: Session[];
  product: "quick-start" | "intensive" | "upgrade";
  buttonLabel?: string;
};

export default function SessionPicker({ sessions, product, buttonLabel = "Enroll Now" }: Props) {
  const [selected, setSelected] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleEnroll() {
    if (!selected) return;
    setLoading(true);
    setError(null);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product,
        sessionDate:    selected.date,
        sessionDisplay: selected.display,
        sessionTime:    selected.time,
      }),
    });

    if (!res.ok) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    const { url } = await res.json();
    router.push(url);
  }

  const today = new Date().toISOString().slice(0, 10);
  const upcoming = sessions.filter((s) => s.date >= today).slice(0, 6);

  return (
    <div className="w-full flex flex-col gap-4">
      <p className="text-sm font-semibold text-gray-700">
        {product === "quick-start"
          ? "Pick your session date:"
          : "Pick your cohort week (4 days, Mon–Thu):"}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
        {upcoming.map((session) => (
          <button
            key={session.date}
            type="button"
            onClick={() => setSelected(session)}
            className={`text-left px-4 py-3 rounded-lg border transition-all ${
              selected?.date === session.date
                ? "border-brand-500 bg-brand-50 ring-1 ring-brand-500"
                : "border-gray-200 bg-white hover:border-brand-300 hover:bg-brand-50"
            }`}
          >
            <p className={`text-sm font-semibold ${selected?.date === session.date ? "text-brand-700" : "text-gray-800"}`}>
              {session.display}
            </p>
            <p className={`text-xs mt-0.5 ${selected?.date === session.date ? "text-brand-500" : "text-gray-400"}`}>
              {session.time}
            </p>
          </button>
        ))}
        {upcoming.length === 0 && (
          <p className="text-gray-400 text-sm col-span-2">
            No upcoming sessions available.
          </p>
        )}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="button"
        onClick={handleEnroll}
        disabled={!selected || loading}
        className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all ${
          selected && !loading
            ? "bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow-md cursor-pointer"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {loading ? "Redirecting to checkout…" : selected ? `${buttonLabel} — ${selected.display}` : `Select a date to ${buttonLabel.toLowerCase()}`}
      </button>
    </div>
  );
}
