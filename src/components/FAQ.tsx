"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What is the difference between UAE Free Zone and Mainland business setups?",
      answer:
        "A Mainland company is registered under the Department of Economy and Tourism (DET) and can trade anywhere within the UAE and internationally. A Free Zone company is registered within a specific economic zone (like IFZA, DTEC, DMCC) and enjoys 100% corporate tax exemptions (subject to conditions) and simplified custom procedures, but generally requires a local distributor or agent to trade directly with the UAE mainland retail market.",
    },
    {
      question: "Does my business need to register for UAE Corporate Tax?",
      answer:
        "Yes, all UAE businesses (Mainland and Free Zones) must register for Corporate Tax with the Federal Tax Authority (FTA). While certain Free Zone companies that qualify as 'Qualifying Free Zone Persons' can benefit from a 0% tax rate on qualifying income, registration and compliance filing remain mandatory for all corporate entities.",
    },
    {
      question: "What is the threshold for mandatory VAT registration in the UAE?",
      answer:
        "Businesses operating in the UAE must register for VAT if their taxable supplies and imports exceed AED 375,000 within the previous 12 months. Voluntary registration is available for businesses exceeding AED 187,500 in supplies or taxable expenses.",
    },
    {
      question: "Can I obtain a Golden Visa through company formation?",
      answer:
        "Yes, setting up a company in the UAE or investing in an existing corporate entity can qualify you for a UAE Residency/Golden Visa, depending on the investment capital, company category, and economic contribution. Our team manages the entire process from license issuance to visa stamping.",
    },
    {
      question: "Are auditing and bookkeeping mandatory for UAE corporate tax compliance?",
      answer:
        "Under the UAE Corporate Tax Law and VAT Law, all registered businesses must maintain clean, auditable financial records, books, and receipts for a minimum of 5 to 7 years. Certain economic zones and Mainland authorities also mandate the submission of annual audited financial statements to renew business licenses.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section style={{ contentVisibility: "auto" }} className="relative py-24 bg-navy-dark overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
            Frequently Asked Questions
          </h4>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Clear Insights on UAE Regulations
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-gold-accent/15 hover:border-gold-accent/35 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer hover:bg-white/5 transition-colors group"
                >
                  <span className="text-sm font-bold text-white pr-4 leading-snug group-hover:text-gold-accent transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-gold-accent/5 border border-gold-accent/20 flex items-center justify-center text-gold-accent shrink-0 group-hover:bg-gold-accent group-hover:text-navy-dark transition-all duration-300 shadow-xs">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-2 text-xs sm:text-sm text-white/60 leading-relaxed font-normal border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
