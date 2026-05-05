import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import SessionPicker from "@/components/SessionPicker";
import { intensiveSessions } from "@/lib/sessions";

export const metadata: Metadata = {
  title: "Intensive — Master AI-Directed Building in 8 Hours | Breakthrough Vibe Coding",
  description:
    "Master Claude Code, build autonomous agents, and deploy production apps. $67 — or upgrade from Quick Start for just $28 more.",
};

const outcomes = [
  {
    title: "Master Claude Code",
    body: "Understand the most powerful AI development tool available today.",
  },
  {
    title: "Build Autonomous Agents",
    body: "Create AI systems that complete tasks without human input.",
  },
  {
    title: "Use MCP Servers",
    body: "Connect external APIs and services to extend what Claude can do.",
  },
  {
    title: "Deploy to Production",
    body: "Ship real systems using Vercel and Supabase.",
  },
  {
    title: "Database Integration",
    body: "Store data that persists across sessions using Supabase.",
  },
  {
    title: "Build Reusable Skills",
    body: "Create custom tools Claude can use across projects.",
  },
  {
    title: "Implement Webhooks",
    body: "React to events and build event-driven systems.",
  },
  {
    title: "Ship Multiple Apps",
    body: "You'll deploy more than one real application by the end.",
  },
];

const curriculum = [
  {
    day: "Day 1",
    title: "Claude Code & Your AI Dev Team",
    items: [
      "What is Claude Code and how it differs from Lovable",
      "Building a multi-agent architecture",
      "Creating agents with distinct roles",
      "Code generation at scale",
      "Live coding: Build your first Claude Code project",
    ],
  },
  {
    day: "Day 2",
    title: "MCP Servers & Custom Tools",
    items: [
      "What are Model Context Protocol servers",
      "Exposing custom tools to Claude",
      "Connecting to external APIs",
      "Building your first MCP integration",
      "Live coding: Create a custom tool",
    ],
  },
  {
    day: "Day 3",
    title: "Autonomous Execution & Databases",
    items: [
      "Making agents work without human intervention",
      "Loop control and break conditions",
      "Supabase integration for data persistence",
      "Building state management",
      "Live coding: Autonomous agent that completes tasks end-to-end",
    ],
  },
  {
    day: "Day 4",
    title: "Production Deployment & Security",
    items: [
      "Deploying with Vercel (advanced)",
      "Environment variables and secret management",
      "API key protection and .env best practices",
      "Supabase Row Level Security (RLS)",
      "Monitoring, debugging, and error handling",
    ],
  },
];

const projects = [
  {
    title: "App 01: Lead Magnet (30 min)",
    bullets: [
      "Beautiful landing page with your offer",
      "Email capture saved to Supabase database",
      "Thank-you page on submission",
      "Customized for YOUR business in minutes",
    ],
  },
  {
    title: "App 02: Lead Scoring Tool (80 min)",
    bullets: [
      "4 custom scoring factors with your own weights",
      "Real-time Hot / Warm / Cold score (0–100)",
      "3 autonomous agents run automatically on submit",
      "Saves leads to Supabase + sends email alerts",
    ],
  },
  {
    title: "Both Deployed Live",
    bullets: [
      "Push to GitHub, import to Vercel",
      "Two live URLs you can share immediately",
      "Data flowing into Supabase in real time",
      "You own and operate both apps after class",
    ],
  },
];

const forYouIf = [
  "Completed Quick Start and want to go deeper",
  "Are technical and want to understand Claude's full capabilities",
  "Want to build complex applications — agents, databases, APIs",
  "Plan to use AI development professionally",
  "Are a founder or CTO wanting hands-on implementation expertise",
  "Work in product or strategy and need technical understanding",
];

const deliverables = [
  "2 deployed, production-ready applications",
  "Full recordings of all 8 hours",
  "Comprehensive Documentation (50+ pages)",
  "10 SOPs for building with Claude",
  "Code templates and prompts ready to reuse",
  "Lifetime access to materials (always updated)",
  "Private Slack community (ongoing support)",
  "Monthly office hours for graduates",
  "Early access to new bootcamp tiers",
];

const comparisonRows: [string, string, string][] = [
  ["Duration", "2 hours", "8 hours (4 days)"],
  ["Price", "$39.99", "$67"],
  ["Focus", "Lovable & UI", "Claude Code & Agents"],
  ["Apps Built", "1 (Mood Tracker)", "2"],
  ["Database", "Browser storage", "Supabase"],
  ["Deployment", "Vercel (basic)", "Vercel + advanced"],
  ["Agents", "Understand concept", "Build autonomous agents"],
  ["APIs", "Learn about them", "Build & integrate them"],
  ["Best For", "Quick prototype", "Professional apps"],
];

const faqItems: FAQItem[] = [
  {
    question: "Do I need to complete Quick Start first?",
    answer:
      "Not required, but highly recommended. Quick Start gives you the foundation and confidence to get the most out of the Intensive.",
  },
  {
    question: "Is this hands-on coding?",
    answer:
      "Yes, but you don't write code from scratch. You describe what you want, Claude builds it, you refine it. Different from traditional programming — same results.",
  },
  {
    question: "Will I understand the code Claude generates?",
    answer:
      "You'll understand what's happening conceptually. You'll recognize the patterns. Deep code knowledge isn't required.",
  },
  {
    question: "Can I use this professionally?",
    answer:
      "Absolutely. Many graduates use these techniques in their jobs or build businesses around them.",
  },
  {
    question: "Can I really build complex systems?",
    answer:
      "Yes. Claude is powerful. You can build dashboards, autonomous agents, integrations, and more. Limitations exist, but they're minor.",
  },
  {
    question: "Do you provide job placement?",
    answer:
      "No, but the skills you learn are highly marketable. You leave with portfolio-worthy projects.",
  },
  {
    question: "What if I want to go even deeper?",
    answer:
      "We're planning advanced tiers (Expert Track, etc.). Intensive graduates get early access.",
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

export default function IntensivePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-20 px-4 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">
            8-Hour Intensive Workshop
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Master AI-Directed Building in 8 Hours
          </h1>
          <p className="text-xl text-gray-400 font-medium mb-4">
            $67 &nbsp;·&nbsp; 4 Days × 2 Hours (or One Full Day) &nbsp;·&nbsp; Go Deep
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn Claude Code, build autonomous agents, and deploy
            production-ready apps. Already took Quick Start? Upgrade for just
            $28 more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="#enroll" size="lg">
              Enroll Now — $67
            </CTAButton>
            <CTAButton href="#upgrade" size="lg" variant="outline">
              Upgrade from Quick Start — $28
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── What You'll Master ───────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            In These 8 Hours, You Will:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-sm mb-3">
                  {i + 1}
                </div>
                <h3 className="font-bold text-navy-900 mb-2 text-sm">
                  {o.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum ───────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            What We Cover (Day by Day)
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Four focused sessions. Each one builds on the last.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.map((day, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm"
              >
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                  {day.day}
                </span>
                <h3 className="font-bold text-navy-900 text-lg mt-1 mb-5">
                  {day.title}
                </h3>
                <ul className="space-y-2">
                  {day.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-orange-400 shrink-0 mt-0.5"
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            You&apos;ll Deploy Multiple Real Apps
          </h2>
          <p className="text-gray-500 text-center mb-12">
            These aren&apos;t demos. They&apos;re real applications solving real problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-navy-900 mb-4">{p.title}</h3>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-brand-400 mt-0.5 shrink-0">&#8226;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            This Intensive is Right for You If You:
          </h2>
          <ul className="space-y-4">
            {forYouIf.map((item) => (
              <li key={item} className="flex items-start gap-4">
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
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            Quick Start vs Intensive
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Quick Start is your entry point. Intensive is your mastery.
          </p>
          <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-500">
                    Feature
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-brand-600">
                    Quick Start
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-orange-600">
                    Intensive
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, qs, intensive], i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-600 font-medium">
                      {feature}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {qs}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-800 font-medium">
                      {intensive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            You Leave With
          </h2>
          <ul className="space-y-4">
            {deliverables.map((d) => (
              <li key={d} className="flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
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

      {/* ── Instructor ───────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">
            Who&apos;s Teaching This?
          </h2>
          <div className="bg-white rounded-xl border border-gray-100 p-10 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-brand-100 mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-brand-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-1">
              Stephanie Warren
            </h3>
            <p className="text-brand-600 font-medium text-sm mb-5">
              Founder, Breakthrough Vibe Coding
            </p>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              Stephanie has over 15 years as a leader of UX teams. An early
              adopter of AI, she spent the last year training UX staff on how to
              use AI — not to make AI slop, but to do critical thinking and
              expand their horizons. She is excited to share everything she has
              learned with you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            What Intensive Graduates Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Your Questions Answered
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

      {/* ── Upgrade Box ──────────────────────────────────────── */}
      <section id="upgrade" className="py-20 px-4 bg-orange-50 border-t border-orange-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Completed Quick Start? You Get a Discount
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Quick Start graduates pay just $28 to join the Intensive — that&apos;s
            $39 off the regular price. Your upgrade code was included in your
            Quick Start confirmation email.
          </p>
          <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm">
            <ol className="text-left space-y-4">
              {[
                "Find your upgrade code in your Quick Start confirmation email",
                "Pick a cohort week below and click Enroll Now",
                "Enter your code at Stripe checkout — price drops to $28",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-gray-400">
              Can&apos;t find your code?{" "}
              <a href="mailto:support@breakthrough-vibe-coding.com" className="text-orange-500 font-semibold hover:underline">
                Email us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section id="enroll" className="py-24 px-4 bg-navy-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Founding Cohort Pricing
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Ready to Master AI Development?
          </h2>
          <p className="text-gray-400 text-lg mb-2">
            Founding cohort pricing. Next tier will be $197.
          </p>
          <p className="text-gray-400 mb-10">
            8 hours &nbsp;·&nbsp; $67 &nbsp;·&nbsp; Mon–Thu, 4pm–6pm EST &nbsp;·&nbsp; Multiple apps deployed
          </p>
          <SessionPicker sessions={intensiveSessions} product="intensive" buttonLabel="Enroll Now — $67" />
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
    </>
  );
}
