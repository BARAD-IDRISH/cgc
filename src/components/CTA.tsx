"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 bg-navy-deep overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold-accent/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="glass-card rounded-3xl p-10 sm:p-16 md:p-20 border border-gold-accent/25 relative shadow-2xl space-y-8 max-w-4xl mx-auto">
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-gold-accent uppercase">
              Establish Your Presence
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Start Your UAE Business Journey Today
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
              Accelerate your company formation, corporate tax registration, and residency processes with guidance from our legal advisors and tax specialists.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-navy-dark bg-gold-accent hover:bg-gold-light transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 uppercase gold-glow-hover w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-gold-accent"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-white border border-white/25 hover:bg-white/10 transition-all duration-300 rounded-lg uppercase w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              <FileText className="w-4 h-4 text-gold-accent" />
              Explore Solutions
            </Link>
          </div>

          {/* Quick contact list */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-white/55">
            <div className="bg-white/80 border border-gold-accent/15 rounded-xl p-4 hover:border-gold-accent/35 transition-all duration-300 text-left sm:text-center">
              <span className="text-gold-accent font-bold uppercase tracking-wider block mb-1">Direct Hotline</span>
              <a href="tel:+971527938572" className="hover:text-gold-accent transition-colors font-bold text-white text-sm">
                +971 52 793 8572
              </a>
            </div>
            <div className="bg-white/80 border border-gold-accent/15 rounded-xl p-4 hover:border-gold-accent/35 transition-all duration-300 text-left sm:text-center">
              <span className="text-gold-accent font-bold uppercase tracking-wider block mb-1">Corporate Email</span>
              <a href="mailto:kaid@charteredgrowth.ae" className="hover:text-gold-accent transition-colors font-bold text-white text-sm">
                kaid@charteredgrowth.ae
              </a>
            </div>
            <div className="bg-white/80 border border-gold-accent/15 rounded-xl p-4 hover:border-gold-accent/35 transition-all duration-300 text-left sm:text-center">
              <span className="text-gold-accent font-bold uppercase tracking-wider block mb-1">Office Location</span>
              <span className="font-bold text-white text-sm">Silicon Oasis, Dubai</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
