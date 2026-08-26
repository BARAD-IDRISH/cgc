"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, CheckCircle, Award, Users, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-navy-deep">
      
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-dark/70 to-navy-deep pointer-events-none" />

      {/* Floating Glowing Orbs */}
      <div className="absolute top-1/4 left-1/10 w-[350px] h-[350px] rounded-full bg-gold-accent/5 filter blur-[90px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] rounded-full bg-gold-accent/5 filter blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Floating Particle decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-gold-accent/40 rounded-full animate-float" />
        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-gold-accent/30 rounded-full animate-float-slow" style={{ animationDelay: "3s" }} />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-accent/10 border border-gold-accent/25 text-gold-accent"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-widest uppercase">
                Established 2014 &bull; Dubai, UAE
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-white leading-tight">
              Building Businesses. <br />
              <span className="text-gold-gradient font-medium italic">Earning Trust. Delivering Growth.</span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white/70 text-base sm:text-lg font-light leading-relaxed max-w-2xl"
            >
              Chartered Growth Consultants FZCO (CGC) is your trusted partner for Business Setup, Tax Advisory, Audit & Assurance, and Corporate Services across the UAE and international markets.
            </motion.p>

            {/* Impact Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-2 border-y border-white/10 py-4 max-w-xl"
            >
              <div>
                <div className="text-2xl font-serif font-bold text-gold-accent">10+</div>
                <div className="text-[11px] text-white/60 uppercase tracking-wider font-medium">Years Trusted (2014)</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-gold-accent">1,000+</div>
                <div className="text-[11px] text-white/60 uppercase tracking-wider font-medium">Clients Advised</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-gold-accent">25+</div>
                <div className="text-[11px] text-white/60 uppercase tracking-wider font-medium">Sectors Served</div>
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest text-navy-dark bg-gold-accent hover:bg-gold-light transition-all duration-300 rounded-md shadow-lg uppercase gold-glow-hover"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:+971527938572"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest text-white border border-white/20 hover:bg-white/5 transition-all duration-300 rounded-md uppercase"
              >
                <PhoneCall className="w-4 h-4 text-gold-accent" />
                +971 52 793 8572
              </Link>
            </motion.div>

            {/* Regulatory & Licensing badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8 }}
              className="pt-4 flex flex-wrap gap-x-6 gap-y-2 items-center text-xs text-white/50 tracking-wider uppercase font-semibold"
            >
              <span>Mainland Setup</span>
              <span className="w-1.5 h-1.5 bg-gold-accent rounded-full" />
              <span>Free Zone Company (FZCO - IFZA)</span>
              <span className="w-1.5 h-1.5 bg-gold-accent rounded-full" />
              <span>Federal Tax Authority (FTA)</span>
            </motion.div>
          </div>

          {/* Hero Visual (Right 5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background geometric glowing ring */}
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] border border-gold-accent/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] border-dashed border-gold-accent/5 rounded-full animate-[spin_12s_linear_infinite_reverse] pointer-events-none" />

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
                className="object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.18)] rounded-2xl"
              />

              {/* Floating metrics glass card overlay */}
              <motion.div
                initial={{ x: 30, y: 30, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute bottom-6 -left-4 md:-left-8 glass-card rounded-xl p-4 md:p-5 flex items-center gap-4 max-w-[260px]"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-accent/20 border border-gold-accent/30 flex items-center justify-center text-gold-accent font-bold">
                  100%
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Client Commitment</h4>
                  <p className="text-[10px] text-white/60 mt-0.5">Integrity & Quality Guaranteed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

