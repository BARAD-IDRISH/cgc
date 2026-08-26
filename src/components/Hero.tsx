"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, CheckCircle, Award, Users, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-[#FFFDF7] to-[#F5EFE0]">
      
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Floating Glowing Orbs */}
      <div className="hidden md:block absolute top-1/4 left-1/10 w-[350px] h-[350px] rounded-full bg-[#A37B3B]/5 filter blur-[90px] animate-pulse-glow" />
      <div className="hidden md:block absolute bottom-1/4 right-1/10 w-[450px] h-[450px] rounded-full bg-[#A37B3B]/5 filter blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Floating Particle decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-[#A37B3B]/30 rounded-full animate-float" />
        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-[#0F2137]/15 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-[#A37B3B]/20 rounded-full animate-float-slow" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A37B3B]/10 border border-[#A37B3B]/30 text-[#A37B3B]"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Established 2014 &bull; Dubai, UAE
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#0F2137] leading-tight">
              Building Businesses. <br />
              <span className="text-gold-gradient font-medium italic">Earning Trust. Delivering Growth.</span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[#334155] text-base sm:text-lg font-normal leading-relaxed max-w-2xl"
            >
              Chartered Growth Consultants FZCO (CGC) is your trusted partner for Business Setup, Tax Advisory, Audit & Assurance, and Corporate Services across the UAE and international markets.
            </motion.p>

            {/* Impact Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-2 border-y border-[#A37B3B]/20 py-4 max-w-xl"
            >
              <div>
                <div className="text-2xl font-serif font-bold text-[#A37B3B]">10+</div>
                <div className="text-[11px] text-[#0F2137]/70 uppercase tracking-wider font-semibold">Years Trusted (2014)</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-[#A37B3B]">1,000+</div>
                <div className="text-[11px] text-[#0F2137]/70 uppercase tracking-wider font-semibold">Clients Advised</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-[#A37B3B]">25+</div>
                <div className="text-[11px] text-[#0F2137]/70 uppercase tracking-wider font-semibold">Sectors Served</div>
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
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:+971527938572"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-[#A37B3B] bg-[#FFFFFF] border border-[#A37B3B] hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-all duration-300 rounded-lg shadow-sm uppercase"
              >
                <PhoneCall className="w-4 h-4" />
                +971 52 793 8572
              </Link>
            </motion.div>

            {/* Regulatory & Licensing badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.8 }}
              className="pt-4 flex flex-wrap gap-x-6 gap-y-2 items-center text-xs text-[#475569] tracking-wider uppercase font-bold"
            >
              <span>Mainland Setup</span>
              <span className="w-1.5 h-1.5 bg-[#A37B3B] rounded-full" />
              <span>Free Zone Company (FZCO - IFZA)</span>
              <span className="w-1.5 h-1.5 bg-[#A37B3B] rounded-full" />
              <span>Federal Tax Authority (FTA)</span>
            </motion.div>
          </div>

          {/* Hero Visual (Right 5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background geometric glowing ring */}
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] border border-[#A37B3B]/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] border-dashed border-[#A37B3B]/15 rounded-full animate-[spin_12s_linear_infinite_reverse] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[480px] h-[400px] md:h-[480px] z-10 animate-float-slow"
            >
              {/* Premium 3D Rendered Image */}
              <Image
                src="/images/hero-3d.png"
                alt="Chartered Growth Consultants FZCO Dubai"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                className="object-contain drop-shadow-[0_20px_50px_rgba(163,123,59,0.22)] rounded-2xl"
              />

              {/* Floating metrics glass card overlay */}
              <motion.div
                initial={{ x: 30, y: 30, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute bottom-6 -left-4 md:-left-8 bg-[#FFFFFF]/95 border border-[#A37B3B]/30 shadow-xl rounded-xl p-4 md:p-5 flex items-center gap-4 max-w-[260px]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#A37B3B]/15 border border-[#A37B3B]/30 flex items-center justify-center text-[#A37B3B] font-bold">
                  100%
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F2137] uppercase">Client Commitment</h4>
                  <p className="text-[10px] text-[#475569] mt-0.5 font-medium">Integrity & Quality Guaranteed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

