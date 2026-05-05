import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import SessionPicker from "@/components/SessionPicker";
import { quickStartSessions } from "@/lib/sessions";

export const metadata: Metadata = {
  title: "Quick Start — Build Your First App in 2 Hours | Breakthrough Vibe Coding",
  description:
    "Build and deploy a real app in 2 hours. No coding experience needed. $39.99 — live sessions every week.",
};

const outcomes = [
  {
    title: "Learn How AI Builds Apps",
    body: "Understand how Lovable turns your plain-English prompts into real, running code.",
  },
  {
    title: "Build Your First App",
    body: "Deploy a real Mood Tracker application — not a demo, a live app.",
  },
  {
    title: "Ship to Production",
    body: "Get a live URL you can share immediately. Your app runs on real servers.",
  },
  {
    title: "Deploy Without Coding",
    body: "Use Lovable — no HTML, CSS, or JavaScript required. Just describe what you want.",
  },
  {
    title: "Understand Your Potential",
    body: "Realize you can build without hiring developers. The barrier is lower than you think.",
  },
  {
    title: "Keep Your App Forever",
    body: "The app stays live. You own it. You can modify it, share it, or build on it anytime.",
  },
];

const schedule = [
  ["0:00 – 0:15", "What Is a PRD?", "Learn the blueprint before you build"],
  ["0:15 – 0:35", "Write Your PRD with Claude", "Paste a prompt, get a complete PRD"],
  ["0:35 – 1:50", "Build in Lovable", "Live building from your PRD"],
  ["1:50 – 1:58", "Deploy to Internet", "Get your live URL on Vercel"],
  ["1:58 – 2:00", "Celebrate & What's Next", "Ideas for your next app"],
];

const deliverables = [
  "A deployed, live web app with a shareable URL",
  "Full recording of the 2-hour session",
  "Student Companion Guide (PDF)",
  "Visual diagrams explaining how Lovable works",
  "Copy-paste prompts for your next app",
  "Lifetime access to bootcamp materials",
  "Invitation to private community (optional)",
];

const forYouIf = [
  "Want to prove your app idea actually works",
  "Are tired of waiting for developers",
  "Want to build something but don't know where to start",
  "Love learning by doing (not watching lectures)",
  "Want a breakthrough moment this week",
  "Have 2 hours and are ready to ship",
];

const notForYouIf = [
  "Already know how to code (use our Intensive instead)",
  "Want a 12-week bootcamp with job placement",
  "Need a database or complex backend (that's the 8-hour intensive)",
  "Learn best through reading textbooks",
];

const differentiators = [
  {
    title: "Speed",
    lines: [
      "Traditional bootcamps: 8–12 weeks",
      "This bootcamp: 2 hours",
      "You prove your concept now, not months from now.",
    ],
  },
  {
    title: "AI-Powered, Not Code-First",
    lines: [
      "You describe what you want. AI builds it.",
      "Traditional way: 8 weeks to learn syntax.",
      "Our way: 2 hours to deploy a real app.",
    ],
  },
  {
    title: "You Own What You Build",
    lines: [
      "Your app is live forever.",
      "You can modify it anytime.",
      "No demo project that disappears. This is real.",
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Do I need coding experience?",
    answer:
      "No. Zero. This bootcamp teaches you the vibe coding philosophy — you describe what you want and AI builds it.",
  },
  {
    question: "What if I've never built anything before?",
    answer:
      "Even better. You'll be amazed at what you can do. That's the breakthrough moment.",
  },
  {
    question: "Will my app actually work?",
    answer:
      "Yes. It's a real, deployed application running on Vercel servers. You'll have a live URL.",
  },
  {
    question: "Can I keep my app after the bootcamp?",
    answer: "Yes, forever. You own it. You can update it, share it, even sell it.",
  },
  {
    question: "What if I can't make the live session?",
    answer:
      "Recordings are provided. You can watch anytime. You won't get live Q&A, but you get everything else.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "No, because you'll deploy a real app before the session ends. You'll know immediately if it's worth it.",
  },
  {
    question: "What comes after this?",
    answer:
      "We offer an 8-hour Intensive for people who want to go deeper — master Claude Code, build autonomous agents, and more.",
  },
];

const testimonials = [
  {
    quote: "Stephanie is a fantastic teacher — this course is amazing.",
    name: "Amanda S.",
  },
  {
    quote: "I learned so much — I have already launched three apps!",
    name: "Caleb W.",
  },
];

export default function QuickStartPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-brand-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Quick Start Bootcamp
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-navy-900 leading-tight mb-6">
            Build Your First App in 2 Hours
          </h1>
          <p className="text-xl text-gray-500 font-medium mb-4">
            $39.99 &nbsp;·&nbsp; Live Sessions Every Week &nbsp;·&nbsp; No Coding Required
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Build and deploy a real web app using AI — no experience needed.
            You&apos;ll have a live URL before the session ends.
          </p>
          <CTAButton href="#enroll" size="lg">
            Enroll Now — $39.99
          </CTAButton>
          <p className="mt-8 text-sm text-gray-400">
            Join 300+ builders who shipped their first app
          </p>
        </div>
      </section>

      {/* ── What You'll Get ──────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            In These 2 Hours, You Will:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-navy-900 mb-2 text-base">
                  {o.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Mood Tracker ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Here&apos;s What You&apos;ll Build
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            A real, functioning mood tracker that uses AI to provide
            personalized insights. It saves data, shows history, and deploys
            live.
          </p>
          {/* App mockup */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden max-w-sm mx-auto text-left">
            <div className="bg-brand-500 px-5 py-4">
              <p className="text-white font-bold text-lg">Mood Tracker</p>
              <p className="text-brand-100 text-xs mt-0.5">AI-powered insights</p>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  How are you feeling?
                </label>
                <div className="mt-2 rounded-lg border border-gray-200 px-4 py-3 text-gray-400 text-sm bg-gray-50">
                  Tell me how you&apos;re feeling today...
                </div>
              </div>
              <div className="rounded-lg bg-brand-50 border border-brand-100 px-4 py-3">
                <p className="text-xs font-semibold text-brand-600 mb-1">
                  AI Insight
                </p>
                <p className="text-sm text-gray-600">
                  It sounds like you&apos;re in a reflective mood. That&apos;s a
                  great space for creativity...
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Mood History
                </p>
                {[
                  ["Today, 9:41am", "Focused 😊"],
                  ["Yesterday, 8:02pm", "Relaxed 😌"],
                  ["Mon, 7:15pm", "Energized ⚡"],
                ].map(([time, mood]) => (
                  <div
                    key={time}
                    className="flex items-center justify-between py-2 border-t border-gray-100 text-sm"
                  >
                    <span className="text-gray-400 text-xs">{time}</span>
                    <span className="text-gray-700">{mood}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            Real app. Real URL. Live on the internet before the session ends.
          </p>
        </div>
      </section>

      {/* ── Schedule ─────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            How We Spend Your 2 Hours
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Every minute is structured for maximum learning. No fluff. No
            boring lectures. Just building.
          </p>
          <ol className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {schedule.map(([time, title, subtitle], i) => (
              <li
                key={i}
                className="flex items-center gap-5 px-6 py-4 bg-white"
              >
                <span className="font-mono text-xs text-brand-600 w-24 shrink-0">
                  {time}
                </span>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{subtitle}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            You Leave With
          </h2>
          <ul className="space-y-4">
            {deliverables.map((d) => (
              <li key={d} className="flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-brand-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── For / Not For ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Is This Right for You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="font-bold text-navy-900 text-lg mb-6">
                Perfect if you:
              </h3>
              <ul className="space-y-3">
                {forYouIf.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <svg
                      className="w-4 h-4 text-brand-500 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-100 p-8 shadow-sm bg-gray-50">
              <h3 className="font-bold text-navy-900 text-lg mb-6">
                Might not be right if you:
              </h3>
              <ul className="space-y-3">
                {notForYouIf.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-brand-600 font-medium">
                Want more depth?{" "}
                <a
                  href="/intensive"
                  className="underline hover:text-brand-700"
                >
                  Check out our Intensive →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Differentiators ──────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Why This Works (When Other Bootcamps Don&apos;t)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-navy-900 mb-4">{d.title}</h3>
                <ul className="space-y-2">
                  {d.lines.map((line) => (
                    <li key={line} className="text-gray-600 text-sm leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            What People Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Common Questions
          </h2>
          <FAQAccordion items={faqItems} />
          <div className="text-center mt-8">
            <a
              href="mailto:support@breakthrough-vibe-coding.com"
              className="text-brand-600 font-semibold hover:underline text-sm"
            >
              More questions? Email us →
            </a>
          </div>
        </div>
      </section>

      {/* ── Enrollment CTA ───────────────────────────────────── */}
      <section id="enroll" className="py-24 px-4 bg-navy-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Founding Cohort Pricing
          </p>
          <h2 className="text-4xl font-bold mb-4">Your Breakthrough Starts Here</h2>
          <p className="text-gray-400 text-lg mb-2">
            Price increases to $79 after the founding cohort.
          </p>
          <p className="text-gray-400 mb-10">
            2 hours &nbsp;·&nbsp; $39.99 &nbsp;·&nbsp; No coding required
          </p>
          <SessionPicker sessions={quickStartSessions} product="quick-start" buttonLabel="Enroll Now — $39.99" />
          <p className="mt-6 text-gray-500 text-sm">
            Questions?{" "}
            <a
              href="mailto:support@breakthrough-vibe-coding.com"
              className="text-brand-400 hover:underline"
            >
              Email us
            </a>
          </p>
        </div>
      </section>

      {/* ── Upsell to Intensive ───────────────────────────────── */}
      <section className="py-16 px-4 bg-white border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-navy-900 mb-3">
            Ready to Go Deeper?
          </h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            After Quick Start, many people want to master autonomous agents and
            build more complex systems. That&apos;s what our 8-Hour Intensive is for.
          </p>
          <CTAButton href="/intensive" variant="outline">
            Explore Intensive →
          </CTAButton>
        </div>
      </section>
    </>
  );
}
