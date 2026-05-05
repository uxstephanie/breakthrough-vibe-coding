import CTAButton from "@/components/CTAButton";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";

const faqItems: FAQItem[] = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Zero coding experience needed. The whole point of vibe coding is that you describe what you want and AI builds it. You direct the project — the tools do the technical work.",
  },
  {
    question: "What if I'm not technical at all?",
    answer:
      "Even better. You'll be amazed at what you can build. Many of our best students come in with zero technical background. That first 'it works!' moment is the breakthrough.",
  },
  {
    question: "Can I really deploy a real, live app?",
    answer:
      "Yes. By the end of Quick Start you'll have a URL you can share with anyone. It runs on real servers. Your friends can use it. You own it forever.",
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

const whyPoints = [
  {
    title: "It Actually Works",
    body: "Build a real, deployed app in 2 hours. Not a tutorial or simulation. Your app is live on the internet with a URL you can share.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "It Changes Your Mindset",
    body: "Discover you don't need a developer. Learn that ideas can become reality quickly. Realize your potential as a builder.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "It's a Breakthrough",
    body: "From observer to author in one session. From confused to confident. From stuck to shipped. That's what this is designed to deliver.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const quickStartFeatures = [
  "Build your first app",
  "Live deployment",
  "Shareable URL",
  "Mood Tracker project",
  "Lifetime recordings",
  "Student companion guide",
];

const intensiveFeatures = [
  "Everything in Quick Start",
  "Master Claude Code",
  "Build autonomous agents",
  "Supabase integration",
  "Production deployment",
  "Multiple deployed apps",
  "Community access",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-brand-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Breakthrough Vibe Coding
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-navy-900 leading-tight mb-6">
            Your Breakthrough to Building
          </h1>
          <p className="text-xl text-gray-500 font-medium mb-4">
            From stuck to shipped in 2 hours. Master it in 8.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Build your first deployed app without coding. No experience needed.
            You&apos;ll have a live URL before the day ends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/quick-start" size="lg">
              Start with Quick Start — $39.99
            </CTAButton>
            <CTAButton href="/intensive" size="lg" variant="outline">
              Go to Intensive — $67
            </CTAButton>
          </div>

          {/* Social proof bar */}
          <p className="mt-8 text-sm text-gray-400">
            Join 300+ builders who shipped their first app
          </p>
        </div>
      </section>

      {/* ── Why People Take This ─────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Why People Take This
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm"
              >
                <div className="text-brand-500 mb-4">{point.icon}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            The Breakthrough Process
          </h2>
          <p className="text-gray-500 text-center mb-14">
            Two paths. Both get you there.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Quick Start timeline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  2 Hours
                </span>
                <h3 className="font-bold text-navy-900">Quick Start</h3>
              </div>
              <ol className="space-y-4">
                {[
                  ["0:00 – 0:15", "What Is a PRD?"],
                  ["0:15 – 0:35", "Write Your PRD with Claude"],
                  ["0:35 – 1:50", "Build in Lovable"],
                  ["1:50 – 1:58", "Deploy to Internet"],
                  ["1:58 – 2:00", "Celebrate & What's Next"],
                ].map(([time, label], i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-7 h-7 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                      {i < 4 && (
                        <div className="w-px h-6 bg-brand-200 mt-1" />
                      )}
                    </div>
                    <div className="pb-2">
                      <span className="text-xs text-brand-600 font-mono font-semibold">
                        {time}
                      </span>
                      <p className="text-navy-900 font-medium text-sm mt-0.5">
                        {label}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Intensive timeline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  8 Hours
                </span>
                <h3 className="font-bold text-navy-900">Intensive</h3>
              </div>
              <ol className="space-y-4">
                {[
                  ["Day 1", "Planning with Claude"],
                  ["Day 2", "Claude Code Deep Dive"],
                  ["Day 3", "Build Two B2B Apps"],
                  ["Day 4", "Production & Security"],
                ].map(([time, label], i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                      {i < 3 && (
                        <div className="w-px h-6 bg-orange-200 mt-1" />
                      )}
                    </div>
                    <div className="pb-2">
                      <span className="text-xs text-orange-600 font-mono font-semibold">
                        {time}
                      </span>
                      <p className="text-navy-900 font-medium text-sm mt-0.5">
                        {label}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Choose Your Path ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Choose Your Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Start card */}
            <div className="rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2">
                  Quick Start
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-navy-900">
                    $39.99
                  </span>
                  <span className="text-gray-400">/ 2 hours</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Build your first deployed app. No experience needed.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {quickStartFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <CTAButton href="/quick-start" size="lg" className="w-full justify-center">
                Enroll Now — $39.99
              </CTAButton>
            </div>

            {/* Intensive card */}
            <div className="rounded-xl border-2 border-orange-400 p-8 shadow-md flex flex-col relative">
              <div className="absolute -top-3 left-8">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Comprehensive
                </span>
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">
                  Intensive
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-navy-900">$67</span>
                  <span className="text-gray-400">/ 8 hours (4 days)</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Already took Quick Start? Upgrade for just $28 more.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {intensiveFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <CTAButton
                href="/intensive"
                size="lg"
                variant="secondary"
                className="w-full justify-center"
              >
                Enroll in Intensive — $67
              </CTAButton>
              <p className="text-center text-xs text-gray-400 mt-3">
                Quick Start grad?{" "}
                <a href="/intensive#upgrade" className="text-orange-500 font-semibold hover:underline">
                  Upgrade for $28
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            What Graduates Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            Before You Decide...
          </h2>
          <p className="text-gray-500 text-center mb-12">
            The questions most people ask first.
          </p>
          <FAQAccordion items={faqItems} />
          <div className="text-center mt-10">
            <a
              href="/faq"
              className="text-brand-600 font-semibold hover:underline text-sm"
            >
              See all questions &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── Creator ──────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">
            Who&apos;s Teaching This?
          </h2>
          <div className="bg-white rounded-xl border border-gray-100 p-10 shadow-sm">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
              <img
                src="/stephanie_warren_headshot.png"
                alt="Stephanie Warren"
                className="w-full h-full object-cover"
              />
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

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-navy-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Your Breakthrough?
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            No refund policy needed — you&apos;ll know immediately if it&apos;s for you.
            Most people deploy their app before the session ends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/quick-start" size="lg">
              Start Quick Start — $39.99
            </CTAButton>
            <CTAButton href="/intensive" size="lg" variant="outline">
              Explore Intensive
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
