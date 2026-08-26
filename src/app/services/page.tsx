"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Users2,
  Calculator,
  FileSpreadsheet,
  BookOpenCheck,
  Scale,
  ShieldCheck,
  Globe,
  FileCheck,
} from "lucide-react";
import { SERVICE_CATEGORIES, SERVICES_DATA } from "@/data/servicesData";

const ICON_MAP = {
  FileCheck,
  ShieldCheck,
  Scale,
  FileSpreadsheet,
  Globe,
  Users2,
  Calculator,
  BookOpenCheck,
  Building2,
};

export default function ServicesCatalogPage() {
  return (
    <div className="relative bg-navy-deep min-h-screen pb-24 text-white">
      {/* Background glow */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-accent/5 filter blur-[100px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-accent/5 filter blur-[100px] pointer-events-none" />

      {/* Hero Banner */}
      <section className="relative py-28 bg-navy-dark border-b border-gold-accent/10 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent text-xs font-semibold uppercase tracking-widest"
          >
            Solutions Directory
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight"
          >
            Comprehensive Advisory Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed"
          >
            Explore our standalone tax, audit, accounting, compliance, and corporate setup services tailored for UAE businesses.
          </motion.p>
        </div>
      </section>

      {/* Quick Jump Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap items-center justify-center gap-3 py-4 border-b border-white/10 text-xs">
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="px-4 py-2 rounded-full glass-card border border-white/10 text-white/75 hover:text-gold-accent hover:border-gold-accent/40 transition-colors uppercase font-medium tracking-wider"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      {/* Services Categories Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {SERVICE_CATEGORIES.map((cat, catIdx) => {
          const CategoryIcon = ICON_MAP[cat.iconName] || FileCheck;

          return (
            <div key={cat.slug} id={cat.slug} className="scroll-mt-28 space-y-8">
              
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gold-accent/15 pb-4 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent shrink-0">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-gold-accent uppercase tracking-widest">
                      {cat.tagline}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                    {cat.name}
                  </h2>
                  <p className="text-white/60 text-xs sm:text-sm font-light max-w-2xl">
                    {cat.desc}
                  </p>
                </div>

                <Link
                  href={`/services/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs text-gold-accent hover:text-white font-semibold uppercase tracking-wider transition-colors shrink-0"
                >
                  View Category Overview
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Sub-Services Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.itemSlugs.map((itemSlug) => {
                  const service = SERVICES_DATA[itemSlug];
                  if (!service) return null;

                  const ItemIcon = ICON_MAP[service.iconName] || CategoryIcon;

                  return (
                    <motion.div
                      key={itemSlug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="glass-card rounded-xl p-6 border border-white/10 hover:border-gold-accent/40 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        {/* Icon & Title */}
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-lg bg-gold-accent/5 border border-gold-accent/15 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-navy-dark transition-all duration-300">
                            <ItemIcon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] text-gold-accent font-bold uppercase tracking-wider bg-gold-accent/10 px-2.5 py-1 rounded-full">
                            Standalone Page
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-gold-accent transition-colors duration-200">
                            {service.title}
                          </h3>
                          <p className="text-white/60 text-xs mt-2 leading-relaxed font-light line-clamp-3">
                            {service.shortDesc}
                          </p>
                        </div>

                        {/* Bullet Highlights */}
                        <div className="pt-2">
                          <ul className="space-y-1.5 text-[11px] text-white/70">
                            {service.subServices.slice(0, 3).map((sub, sIdx) => (
                              <li key={sIdx} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                                <span className="truncate">{sub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Link */}
                      <div className="pt-6 mt-6 border-t border-white/5">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center justify-between w-full text-xs text-gold-accent font-semibold tracking-wider uppercase group-hover:text-white transition-colors"
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </section>

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="glass-card rounded-2xl p-10 md:p-14 border border-gold-accent/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
              Bespoke Advisory
            </h4>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Need a Custom Advisory Package?
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Combine tax structuring, bookkeeping, and residency visa services into a tailored corporate retainership.
            </p>
          </div>

          <div className="pt-4 flex justify-center relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-navy-dark bg-gold-accent hover:bg-gold-light transition-all duration-300 rounded-md shadow-lg uppercase gold-glow-hover"
            >
              Consult With Our Experts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
