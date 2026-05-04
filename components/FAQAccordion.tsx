"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            className="w-full flex items-center justify-between text-left gap-4"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-navy-900 text-base pr-4">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-brand-500 flex-shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === i && (
            <p className="mt-3 text-gray-600 leading-relaxed">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
