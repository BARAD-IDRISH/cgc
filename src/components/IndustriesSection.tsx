"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  Users2,
  Building2,
  Globe2,
  TrendingUp,
  Landmark,
  ArrowRight
} from "lucide-react";

export default function IndustriesSection() {
  const clientCategories = [
    {
      name: "Entrepreneurs & Startups",
      icon: Rocket,
      desc: "End-to-end guidance for launch, company formation, licensing, and scaling in the UAE.",
    },
    {
      name: "Family Businesses",
      icon: Users2,
      desc: "Succession planning, governance frameworks, and long-term asset protection.",
    },
    {
      name: "SMEs",
      icon: Building2,
      desc: "Operational, financial, bookkeeping, and strategic expansion support.",
    },
    {
      name: "Corporates & Multinationals",
      icon: Globe2,
      desc: "Complex corporate structuring, tax compliance, transfer pricing, and statutory audit.",
    },
    {
      name: "Investors",
      icon: TrendingUp,
      desc: "Market entry feasibility, legal due diligence, and strategic portfolio advice.",
    },
    {
      name: "Family Offices & HNWIs",
      icon: Landmark,
      desc: "Wealth preservation, holding setups, and inheritance planning across jurisdictions.",
    },
  ];

  return (
    <section style={{ contentVisibility: "auto" }} className="relative py-24 bg-[#FFFDF7] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase">
            Who We Work With &bull; 25+ Sectors Served
          </h4>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight leading-tight">
            Tailored Solutions for Every Business Stage
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed">
            From emerging startups to multinational corporations, we deliver practical, sustainable advisory tailored to your unique aspirations.
          </p>
        </div>

        {/* Client Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#FFFFFF] rounded-xl p-8 border-t-4 border-t-[#A37B3B] border-x border-b border-[#A37B3B]/25 hover:border-[#A37B3B] hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(163,123,59,0.16)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Ambient top light reflection */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A37B3B]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#A37B3B]/10 transition-colors" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A37B3B]/25 via-[#A37B3B]/10 to-transparent border border-[#A37B3B]/40 flex items-center justify-center text-[#A37B3B] mb-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(163,123,59,0.35)] transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2137] group-hover:text-[#A37B3B] transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-[#475569] text-xs mt-3 leading-relaxed font-normal">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0EBE1]">
                  <Link
                    href="/industries"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#0F2137] hover:bg-[#A37B3B] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-between shadow-xs"
                  >
                    <span>View Advisory Framework</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Bottom link */}
        <div className="mt-16 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold-accent/25 hover:border-gold-accent text-white hover:text-gold-accent rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-300"
          >
            Learn More About Our Client Solutions & Sectors
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

