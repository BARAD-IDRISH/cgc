"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Users, Award, Building2 } from "lucide-react";

export default function AboutPreview() {
  const highlights = [
    {
      icon: Shield,
      title: "Trusted Governance",
      desc: "Registered Free Zone Company (FZCO - IFZA) aligning strictly with UAE federal regulations and international standards.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Growth",
      desc: "Delivering practical, sustainable, and tailored solutions that enable businesses to scale with confidence.",
    },
    {
      icon: Users,
      title: "Multi-Disciplinary Team",
      desc: "50+ experienced, qualified professionals dedicated to integrity, quality, and client success.",
    },
  ];

  return (
    <section className="relative py-24 bg-navy-deep overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold-accent/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase border-l-2 border-gold-accent pl-3">
              Corporate Overview
            </h4>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              A Decade of Building Businesses & Earning Trust in the UAE.
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Since 2014, Chartered Growth Consultants FZCO (CGC) has partnered with entrepreneurs, family businesses, investors, and corporate organisations to navigate complexity, strengthen governance, and achieve sustainable growth.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Through strategic advisory, tax expertise, financial insight, and long-term partnership, our team of experienced professionals helps businesses establish, operate, and expand across the UAE, GCC, and international markets.
            </p>

            <div className="glass-card rounded-xl p-5 border-l-4 border-l-gold-accent space-y-2">
              <p className="text-white/80 text-xs italic">
                &ldquo;Success is measured not by the number of businesses we advise, but by the number of businesses that continue to trust us.&rdquo;
              </p>
              <p className="text-gold-accent text-xs font-semibold uppercase tracking-wider">
                — Kaid Khojumabhai Barad, Founder & Managing Partner
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-widest text-white border border-gold-accent/30 hover:border-gold-accent bg-navy-dark hover:bg-gold-accent/10 transition-colors duration-300 rounded-md uppercase"
              >
                Read Our Story & Values
                <ArrowRight className="w-4 h-4 text-gold-accent" />
              </Link>
            </div>
          </div>

          {/* Graphical Grid (Right 6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Background glowing frame */}
            <div className="absolute -inset-4 border border-gold-accent/5 rounded-2xl pointer-events-none" />

            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-xl p-6 space-y-4 sm:col-span-2 border-l-4 border-l-gold-accent"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Full Integrated Advisory & Compliance</h3>
              <p className="text-white/60 text-xs leading-relaxed">
                From company formation in mainland & free zones, investor/employee visa processing, to corporate tax, statutory audit, and strategic financial advisory.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-xl p-6 space-y-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Tax Expertise</h3>
              <p className="text-white/60 text-xs leading-relaxed font-light">
                Comprehensive Corporate Tax, VAT, TRC certificates, and Transfer Pricing compliance.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-xl p-6 space-y-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">1,000+ Clients</h3>
              <p className="text-white/60 text-xs leading-relaxed font-light">
                Empowering startups, SMEs, family offices, and multinational enterprises since 2014.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

