import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're In! | Breakthrough Vibe Coding",
  description: "Your enrollment is confirmed. Here's everything you need to get started.",
};

type Props = {
  searchParams: Promise<{ product?: string; session?: string; time?: string }>;
};

const productLabels: Record<string, string> = {
  "quick-start": "Quick Start Bootcamp",
  intensive:     "8-Hour Intensive",
  upgrade:       "Intensive Upgrade",
};

export default async function ThankYouPage({ searchParams }: Props) {
  const params = await searchParams;
  const product = params.product ?? "quick-start";
  const session = params.session ?? "";
  const time    = params.time ?? "";
  const label   = productLabels[product] ?? "Workshop";

  return (
    <main className="min-h-screen bg-brand-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full text-center">

        {/* Check icon */}
        <div className="w-20 h-20 rounded-full bg-brand-500 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">
          Enrollment Confirmed
        </p>
        <h1 className="text-4xl font-bold text-navy-900 mb-4">
          You&apos;re in!
        </h1>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Get ready for your breakthrough. Here&apos;s everything you need to know.
        </p>

        {/* Session details card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-left mb-8">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
            Your Session Details
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Workshop</p>
                <p className="text-navy-900 font-semibold">{label}</p>
              </div>
            </div>

            {session && (
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Date</p>
                  <p className="text-navy-900 font-semibold">{session}</p>
                </div>
              </div>
            )}

            {time && (
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Time</p>
                  <p className="text-navy-900 font-semibold">{time}</p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Confirmation</p>
                <p className="text-navy-900 font-semibold">Check your email for your receipt and Zoom link</p>
              </div>
            </div>
          </div>
        </div>

        {/* What's next */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-left mb-8">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
            Before Your Session
          </h2>
          <ol className="space-y-3">
            {(product === "intensive"
              ? [
                  "Install VS Code — code.visualstudio.com",
                  "Install Claude Code — follow the link in your confirmation email",
                  "Create a free GitHub account at github.com",
                  "Create a free Supabase account at supabase.com",
                  "Show up ready to build — no coding experience needed",
                ]
              : [
                  "Create a free Lovable account at lovable.dev",
                  "Create a free GitHub account at github.com",
                  "Show up ready to build — no coding experience needed",
                ]
            ).map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <p className="text-gray-500 text-sm mb-6">
          Questions?{" "}
          <a href="mailto:support@breakthrough-vibe-coding.com" className="text-brand-600 font-semibold hover:underline">
            Email us
          </a>
        </p>

        <Link href="/" className="text-gray-400 text-sm hover:text-gray-600 transition-colors">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
