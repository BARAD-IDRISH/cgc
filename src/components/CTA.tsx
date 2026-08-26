"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 bg-[#FAF6EE] overflow-hidden border-t border-[#A37B3B]/20">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="bg-[#FFFFFF] rounded-2xl p-10 md:p-16 border border-[#A37B3B]/30 relative shadow-xl space-y-8 max-w-4xl mx-auto">
          
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase">
              Establish Your Presence
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F2137] tracking-tight leading-tight">
              Start Your UAE Business Journey Today
            </h2>
            <p className="text-[#475569] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Accelerate your company formation, corporate tax registration, and residency processes with guidance from our legal advisors and tax specialists.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#0F2137] hover:bg-[#A37B3B] transition-all duration-300 rounded-lg shadow-md uppercase gold-glow-hover w-full sm:w-auto"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-[#A37B3B] bg-[#FFFFFF] border border-[#A37B3B] hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-all duration-300 rounded-lg shadow-xs uppercase w-full sm:w-auto"
            >
              <FileText className="w-4 h-4" />
              Explore Solutions
            </Link>
          </div>

          {/* Quick contact list */}
          <div className="pt-8 border-t border-[#F0EBE1] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#475569]">
            <div>
              <span className="text-[#A37B3B] font-bold uppercase tracking-wider block mb-1">Direct Hotline</span>
              <a href="tel:+971527938572" className="hover:text-[#A37B3B] transition-colors font-bold text-[#0F2137]">
                +971 52 793 8572
              </a>
            </div>
            <div>
              <span className="text-[#A37B3B] font-bold uppercase tracking-wider block mb-1">Corporate Email</span>
              <a href="mailto:kaid@charteredgrowth.ae" className="hover:text-[#A37B3B] transition-colors font-bold text-[#0F2137]">
                kaid@charteredgrowth.ae
              </a>
            </div>
            <div>
              <span className="text-[#A37B3B] font-bold uppercase tracking-wider block mb-1">Office Location</span>
              <span className="font-bold text-[#0F2137]">Silicon Oasis, Dubai</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
