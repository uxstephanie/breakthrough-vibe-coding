export type Session = {
  date: string;       // ISO: "2026-05-12"
  display: string;    // "Tuesday, May 12"
  time: string;       // "11am – 1pm EST"
  product: "quick-start" | "intensive";
};

function formatDisplay(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

// Quick Start: every Tue (2), Wed (3), Thu (4) from May 12 – Jul 30, 2026
function generateQuickStartSessions(): Session[] {
  const sessions: Session[] = [];
  const start = new Date(2026, 4, 13); // May 13 2026
  const end   = new Date(2026, 6, 30); // Jul 30 2026
  const validDays = new Set([2, 3, 4]); // Tue, Wed, Thu

  const current = new Date(start);
  while (current <= end) {
    if (validDays.has(current.getDay())) {
      const iso = current.toISOString().slice(0, 10);
      sessions.push({
        date: iso,
        display: formatDisplay(iso),
        time: "11am – 1pm EST",
        product: "quick-start",
      });
    }
    current.setDate(current.getDate() + 1);
  }
  return sessions;
}

// Intensive: biweekly Mon–Thu cohorts starting May 18 2026
// Students enroll on the Monday and attend all 4 days (Mon–Thu)
function generateIntensiveSessions(): Session[] {
  const mondays = [
    "2026-05-18",
    "2026-06-01",
    "2026-06-15",
    "2026-06-29",
    "2026-07-13",
    "2026-07-27",
  ];

  return mondays.map((monday) => {
    const [year, month, day] = monday.split("-").map(Number);
    const mon = new Date(year, month - 1, day);
    const thu = new Date(year, month - 1, day + 3);

    const monLabel = mon.toLocaleDateString("en-US", { month: "long", day: "numeric" });
    const thuLabel = thu.toLocaleDateString("en-US", { month: "long", day: "numeric" });

    return {
      date: monday,
      display: `${monLabel} – ${thuLabel}`,
      time: "4pm – 6pm EST, Mon–Thu",
      product: "intensive",
    };
  });
}

export const quickStartSessions = generateQuickStartSessions();
export const intensiveSessions  = generateIntensiveSessions();
