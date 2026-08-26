"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, CheckCircle, Award, Users, Building2, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      
      {/* Real Dubai Skyline Background Image with Warm Ivory Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/editorial/dubai-skyline.png"
          alt="Dubai Financial District Skyline Background"
          fill
          priority
          className="object-cover object-center filter brightness-[0.92]"
        />
        {/* Ivory Silk Gradient Overlay to guarantee high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/92 to-[#FAF6EE]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE] via-transparent to-[#FAF6EE]/70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Established Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/90 border border-[#A37B3B]/40 text-[#A37B3B] shadow-xs"
            >
              <CheckCircle className="w-4 h-4 text-[#A37B3B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#0F2137]">
                Established 2014 &bull; Dubai Silicon Oasis, UAE
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#0F2137] leading-tight">
              Building Businesses. <br />
              <span className="text-[#A37B3B] font-medium italic">Earning Trust. Delivering Growth.</span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[#334155] text-base sm:text-lg font-normal leading-relaxed max-w-2xl"
            >
              Chartered Growth Consultants FZCO (CGC) is your trusted partner for Business Setup, Tax Advisory, Audit &amp; Assurance, and Corporate Services across the UAE and international markets.
            </motion.p>

            {/* Impact Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-2 border-y border-[#A37B3B]/25 py-4 max-w-xl bg-[#FFFFFF]/60 rounded-xl px-4 backdrop-blur-xs border-x border-[#A37B3B]/10"
            >
              <div>
                <div className="text-2xl font-serif font-bold text-[#A37B3B]">10+</div>
                <div className="text-[11px] text-[#0F2137]/80 uppercase tracking-wider font-semibold">Years Trusted (2014)</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-[#A37B3B]">1,000+</div>
                <div className="text-[11px] text-[#0F2137]/80 uppercase tracking-wider font-semibold">Clients Advised</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-[#A37B3B]">25+</div>
                <div className="text-[11px] text-[#0F2137]/80 uppercase tracking-wider font-semibold">Sectors Served</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#0F2137] hover:bg-[#A37B3B] transition-all duration-300 rounded-lg shadow-md uppercase gold-glow-hover"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:+971527938572"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-[#A37B3B] bg-[#FFFFFF] border border-[#A37B3B] hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-all duration-300 rounded-lg shadow-xs uppercase"
              >
                <PhoneCall className="w-4 h-4" />
                <span>+971 52 793 8572</span>
              </Link>
            </motion.div>

            {/* Regulatory & Licensing badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.8 }}
              className="pt-2 flex flex-wrap gap-x-5 gap-y-2 items-center text-xs text-[#0F2137] tracking-wider uppercase font-bold"
            >
              <span>Mainland Setup</span>
              <span className="w-1.5 h-1.5 bg-[#A37B3B] rounded-full" />
              <span>Free Zone Company (FZCO - IFZA)</span>
              <span className="w-1.5 h-1.5 bg-[#A37B3B] rounded-full" />
              <span>Federal Tax Authority (FTA)</span>
            </motion.div>
          </div>

          {/* Real Dubai Office Showcase Frame (Right 5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[460px] rounded-2xl overflow-hidden border-2 border-[#A37B3B]/30 shadow-[0_20px_50px_rgba(163,123,59,0.18)] group"
            >
              {/* Real Editorial Photo of Dubai Advisory Office */}
              <div className="relative w-full h-[360px] md:h-[420px]">
                <Image
                  src="/images/editorial/dubai-office.png"
                  alt="Chartered Growth Consultants FZCO Dubai Headquarters"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A37B3B] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-widest mb-1 shadow-xs">
                      <Building2 className="w-3 h-3" />
                      <span>Dubai Headquarters</span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-white leading-snug">
                      IFZA Business Park, Dubai Silicon Oasis
                    </h3>
                    <p className="text-[11px] text-white/80 font-normal">
                      Managing Partner Oversight &bull; Registered FTA Tax Agents
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Client Commitment Badge */}
              <motion.div
                initial={{ x: 20, y: 20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute top-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#A37B3B]/30 shadow-lg rounded-xl p-3 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#A37B3B]/15 border border-[#A37B3B]/30 flex items-center justify-center text-[#A37B3B] font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#A37B3B]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#0F2137] uppercase tracking-wider">Client Commitment</div>
                  <div className="text-[9.5px] text-[#A37B3B] font-semibold">Integrity &amp; Quality Guaranteed</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
