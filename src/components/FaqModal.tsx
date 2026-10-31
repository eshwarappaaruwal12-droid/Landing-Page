import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How is Drift different from standard to-do or calendar apps?',
    answer:
      'Traditional apps rely on urgency, harsh red badges, and complex tagging hierarchies that often trigger overwhelm and paralysis. Drift is intentionally low-stimulus: it shows you only what matters right now, dissolves guilt around undone items, and helps your nervous system settle into natural momentum.',
  },
  {
    question: 'What makes Drift specifically friendly for ADHD minds?',
    answer:
      'Drift is crafted around executive function needs: zero setup friction, automatic brain-dump sorting, flexible time perception without punishing alarms, and a visual interface that softens distractions rather than competing for dopamine.',
  },
  {
    question: 'Does Drift integrate with Google Calendar or other platforms?',
    answer:
      'Yes. Drift can mirror your existing commitments quietly in the background, filtering out calendar clutter so you always have a pristine, calm view of open daylight without stressful notification pileups.',
  },
  {
    question: 'Is there a free tier?',
    answer:
      'Yes! Drift offers a full-featured free tier designed to give you daily peace of mind without hidden traps, paywalls on core calming features, or annoying advertising.',
  },
];

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in-down"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF4ED] text-[#321C04] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D9C4AA]/40 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#D9C4AA]/30 hover:bg-[#D9C4AA]/50 flex items-center justify-center text-[#321C04] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 shrink-0">
          <Logo size={32} fill="#321C04" />
          <div>
            <h3 className="font-semibold text-lg tracking-tight">Questions & Answers</h3>
            <p className="text-xs text-[#321C04]/60">Everything you might wonder about Drift</p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="overflow-y-auto pr-2 space-y-3 flex-1">
          {FAQS.map((faq, index) => {
            const isOpenItem = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white/80 rounded-2xl border border-[#D9C4AA]/40 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpenItem ? null : index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm md:text-base font-medium text-[#321C04]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#321C04]/60 transition-transform duration-200 shrink-0 ${
                      isOpenItem ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpenItem && (
                  <div className="px-5 pb-4 text-xs md:text-sm text-[#321C04]/75 leading-relaxed border-t border-[#D9C4AA]/20 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-[#D9C4AA]/30 flex items-center justify-between text-xs text-[#321C04]/60 shrink-0">
          <span>Need more guidance?</span>
          <a
            href="mailto:support@driftplanner.app"
            className="text-[#321C04] font-medium hover:underline"
          >
            hello@driftplanner.app
          </a>
        </div>
      </div>
    </div>
  );
};
