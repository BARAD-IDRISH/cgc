"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Aurel",
      role: "Managing Director, Solis Technologies FZCO",
      quote:
        "The team at Chartered Growth Consultants made our Dubai setup seamless. From tax residency registration to local licensing, they handled everything. Their understanding of the UAE tax framework is unmatched.",
      stars: 5,
    },
    {
      name: "Fatima Al Mansoor",
      role: "Founder, Al Mansoor Family Office",
      quote:
        "We required restructuring for our family wealth structures. Chartered Growth designed a bespoke holding structure that secured our assets and fully aligned with corporate tax laws. Excellent service.",
      stars: 5,
    },
    {
      name: "Richard Vance",
      role: "CEO, Apex Logistics Group LLC",
      quote:
        "Economic Substance Regulations (ESR) and Corporate Tax laws were complex for our multi-license operation. Their compliance health check was highly detailed. A solid partnership for long-term growth.",
      stars: 5,
    },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="relative py-24 bg-navy-deep overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full bg-gold-accent/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
            Client Testimonials
          </h4>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Trusted by Leaders & Innovators
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-8 md:p-12 relative border border-gold-accent/15 w-full shadow-xl flex flex-col justify-between"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 right-8 text-gold-accent/10">
                <Quote className="w-16 h-16" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-gold-accent">
                {[...Array(reviews[index].stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/80 text-sm md:text-base italic leading-relaxed font-light">
                &ldquo;{reviews[index].quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {reviews[index].name}
                  </h4>
                  <p className="text-xs text-gold-accent mt-0.5 font-medium">
                    {reviews[index].role}
                  </p>
                </div>
                
                {/* Navigation Arrows */}
                <div className="flex items-center gap-3.5">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-gold-accent/20 hover:border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-navy-dark flex items-center justify-center transition-all duration-300"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-gold-accent/20 hover:border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-navy-dark flex items-center justify-center transition-all duration-300"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
