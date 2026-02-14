import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Do athletes need prior training experience?',
    answer: 'Not at all. We work with athletes at all levels, from beginners to experienced competitors. Every athlete is assessed and placed in training that matches their current development stage.'
  },
  {
    question: 'What ages do you train?',
    answer: 'The Lab works with youth athletes ages 7–16, focusing on age-appropriate strength, speed, coordination, and movement development.'
  },
  {
    question: 'Is strength training safe for kids?',
    answer: 'Yes — when done correctly. Our program emphasizes proper technique, controlled progressions, and movement quality to build strength safely and effectively.'
  },
  {
    question: 'How often should my athlete train each week?',
    answer: 'Most athletes see the best results training 2–3 times per week, depending on their sport schedule and development goals.'
  },
  {
    question: 'What should my athlete bring to their first session?',
    answer: "Athletes should bring athletic clothes, water, and a positive attitude. We'll handle the rest."
  },
  {
    question: 'Do you offer a first evaluation session?',
    answer: 'Yes. Every athlete begins with an evaluation session so we can assess movement, strength, and coordination and place them in the right development path.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xs md:text-sm font-bold text-amber-600 uppercase tracking-wider mb-2 md:mb-3">
            FAQ
          </h2>
          <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-2 md:mb-4">
            Questions About Training at&nbsp;The&nbsp;Lab?
          </h3>
          <p className="text-sm md:text-base text-slate-600">
            Everything parents and athletes need to know to get started with confidence.
          </p>
        </div>

        <div className="space-y-2 md:space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl md:rounded-2xl border border-slate-200 overflow-hidden hover:border-amber-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-4 md:px-8 py-4 md:py-5 flex items-center justify-between text-left"
              >
                <span className="font-bold text-slate-900 text-sm md:text-base pr-4 md:pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 text-amber-600 flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 md:px-8 pb-4 md:pb-5 text-slate-600 text-xs md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}