import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'How do I know which treatment is right for me?',
    a: 'Every journey starts with a personalised consultation. Our specialist assesses your skin, discusses your goals, and recommends a treatment plan tailored to you — no generic packages.',
  },
  {
    q: 'Are the treatments safe?',
    a: 'Yes. We use clinically proven, licensed technologies delivered by accredited specialists, with real-time safety monitoring and medical oversight throughout every session.',
  },
  {
    q: 'Is there any downtime?',
    a: 'Most of our treatments are non-surgical with little to no downtime, so you can return to daily activities the same day. Your specialist will advise you on any aftercare.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'This depends on the treatment and your individual goals. Some results appear after a single session, while others build progressively over a course of 2–3 treatments.',
  },
  {
    q: 'Do you offer follow-up care?',
    a: 'Absolutely. Dedicated follow-up appointments and review check-ins are part of every plan, helping keep your results on track safely and naturally.',
  },
  {
    q: 'How do I book a consultation?',
    a: 'You can request a consultation through the site or call our clinic directly. Our team will arrange a convenient time and guide you through the next steps.',
  },
];

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#DCD9C6] py-16 sm:py-24 px-6">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extralight tracking-[0.16em] text-[#24241f] font-avenir uppercase mb-12 sm:mb-16 text-center">
          Frequently Asked Questions
        </h2>

        {/* Fixed-height wrapper: reserves space for the worst-case expansion
            (all headers + the tallest answer), so the outer section height
            stays constant and the footer below never shifts. The answer
            expands in place; only items below shift down within this box. */}
        <div className="h-[820px] md:h-[560px] overflow-hidden">
          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white/70 rounded-xl border border-[#cfccc2] overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer hover:bg-white/90 transition-colors"
                  >
                    <span className="font-mulish text-[14px] sm:text-[15px] font-medium text-[#24342c] pr-4">
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-full border border-[#24342c]/40 flex items-center justify-center flex-shrink-0 text-[#24342c]">
                      <Plus
                        className={`w-3.5 h-3.5 stroke-[1.5] transition-transform duration-300 ease-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                      />
                    </div>
                  </button>

                  {/* Answer expands in place (in-flow), pushing items below it
                      down. The fixed wrapper absorbs the height so the footer
                      never moves. Smooth grid-rows + opacity transition. */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="px-6 pb-5 pt-1 font-mulish-light text-[14px] font-light text-[#5a5a52] leading-relaxed border-t border-[#cfccc2]/60">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
