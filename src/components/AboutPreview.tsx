"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Users, Award, Building2, CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative py-24 bg-[#FFFDF7] overflow-hidden border-t border-[#A37B3B]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#A37B3B]/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content & Founder Signature Spotlight (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A37B3B] border-l-2 border-[#A37B3B] pl-3">
                Corporate Overview &amp; Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight leading-tight">
                A Decade of Building Businesses &amp; Earning Trust in the UAE.
              </h2>
            </div>

            <p className="text-[#475569] text-sm leading-relaxed font-normal">
              Since 2014, Chartered Growth Consultants FZCO (CGC) has partnered with entrepreneurs, family businesses, investors, and corporate organisations to navigate complexity, strengthen governance, and achieve sustainable growth.
            </p>
            
            <p className="text-[#475569] text-sm leading-relaxed font-normal">
              Through strategic advisory, tax expertise, financial insight, and long-term partnership, our team of experienced professionals helps businesses establish, operate, and expand across the UAE, GCC, and international markets.
            </p>

            {/* Real Founder / Leadership Spotlight Box with Portrait */}
            <div className="bg-[#FAF6EE] rounded-2xl p-6 border border-[#A37B3B]/30 shadow-md flex flex-col sm:flex-row items-center gap-5">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-[#A37B3B] shrink-0 shadow-sm">
                <Image
                  src="/images/editorial/managing-partner.png"
                  alt="Kaid Khojumabhai Barad"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <p className="text-[#0F2137] text-xs italic font-medium leading-relaxed">
                  &ldquo;Success is measured not by the volume of entities we advise, but by the enduring trust and financial clarity we deliver to every client partner.&rdquo;
                </p>
                <div className="pt-1">
                  <p className="text-[#0F2137] text-xs font-bold uppercase tracking-wider">
                    Kaid Khojumabhai Barad
                  </p>
                  <p className="text-[#A37B3B] text-[11px] font-semibold">
                    Founder &amp; Managing Partner &bull; Senior Tax Advisor
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#0F2137] hover:bg-[#A37B3B] transition-colors duration-300 rounded-lg uppercase shadow-sm"
              >
                <span>Read Our Story &amp; Leadership Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Real Editorial Image Grid (Right 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Large Editorial Showcase Image */}
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#A37B3B]/30 shadow-lg group">
              <Image
                src="/images/editorial/executive-meeting.png"
                alt="CGC Executive Advisory Meeting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A37B3B] bg-[#0F2137]/80 px-2.5 py-1 rounded-full border border-[#A37B3B]/40">
                    Bespoke Financial Advisory
                  </span>
                  <h3 className="text-base font-serif font-bold text-white">
                    Direct Partner Consultation &amp; Strategic Oversight
                  </h3>
                </div>
              </div>
            </div>

            {/* Bottom 2 Feature Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#FFFFFF] rounded-xl p-5 border border-[#A37B3B]/25 shadow-xs space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#A37B3B]/10 border border-[#A37B3B]/25 flex items-center justify-center text-[#A37B3B]">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#0F2137] uppercase tracking-wider">
                  Mainland &amp; Free Zone Setup
                </h4>
                <p className="text-[#475569] text-[11.5px] leading-relaxed font-normal">
                  End-to-end corporate structuring, commercial licensing, and bank account opening in DIFC, ADGM, IFZA, and mainland Dubai.
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-xl p-5 border border-[#A37B3B]/25 shadow-xs space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#A37B3B]/10 border border-[#A37B3B]/25 flex items-center justify-center text-[#A37B3B]">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#0F2137] uppercase tracking-wider">
                  Corporate Tax &amp; Audit
                </h4>
                <p className="text-[#475569] text-[11.5px] leading-relaxed font-normal">
                  Certified FTA Tax Agents managing Corporate Tax returns, 0% Free Zone structuring, and statutory IFRS financial audits.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
