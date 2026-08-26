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
  Phone,
  MessageCircle,
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
  const phoneUrl = "tel:+971527938572";

  return (
    <div className="relative bg-[#FAF6EE] min-h-screen pb-24 text-[#0F2137]">
      {/* Background glow */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#A37B3B]/5 filter blur-[100px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#A37B3B]/5 filter blur-[100px] pointer-events-none" />

      {/* Hero Banner */}
      <section className="relative py-28 bg-[#FFFDF7] border-b border-[#A37B3B]/20 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A37B3B]/10 border border-[#A37B3B]/30 text-[#A37B3B] text-xs font-bold uppercase tracking-widest"
          >
            Solutions Directory
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0F2137] tracking-tight"
          >
            Comprehensive Advisory Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Explore our complete suite of standalone tax, audit, accounting, compliance, and corporate setup services tailored for UAE businesses.
          </motion.p>
        </div>
      </section>

      {/* Quick Jump Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap items-center justify-center gap-3 py-4 border-b border-[#A37B3B]/20 text-xs">
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#A37B3B]/25 text-[#0F2137] hover:text-[#FFFFFF] hover:bg-[#A37B3B] hover:border-[#A37B3B] transition-all duration-200 uppercase font-bold tracking-wider shadow-xs"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      {/* Services Categories Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {SERVICE_CATEGORIES.map((cat) => {
          const CategoryIcon = ICON_MAP[cat.iconName] || FileCheck;

          return (
            <div key={cat.slug} id={cat.slug} className="scroll-mt-28 space-y-8">
              
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#A37B3B]/25 pb-4 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#A37B3B]/10 border border-[#A37B3B]/25 flex items-center justify-center text-[#A37B3B] shrink-0">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#A37B3B] uppercase tracking-widest">
                      {cat.tagline}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2137] tracking-tight">
                    {cat.name}
                  </h2>
                  <p className="text-[#475569] text-xs sm:text-sm font-normal max-w-2xl">
                    {cat.desc}
                  </p>
                </div>

                <Link
                  href={`/services/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#A37B3B] hover:text-[#0F2137] font-bold uppercase tracking-wider transition-colors shrink-0"
                >
                  View Category Overview
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Sub-Services Cards Grid (Matching Homepage Option 3 Compact Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.itemSlugs.map((itemSlug, idx) => {
                  const service = SERVICES_DATA[itemSlug];
                  if (!service) return null;

                  const ItemIcon = ICON_MAP[service.iconName] || CategoryIcon;
                  const whatsappUrl = `https://wa.me/971527938572?text=${encodeURIComponent(
                    `Hello CGC, I would like to inquire about ${service.title}.`
                  )}`;

                  return (
                    <motion.div
                      key={itemSlug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      className="bg-[#FFFFFF] rounded-xl border-2 border-[#F0EBE1] hover:border-[#A37B3B] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_16px_rgba(15,33,55,0.05)] hover:shadow-[0_12px_28px_rgba(163,123,59,0.16)] hover:-translate-y-1 relative overflow-hidden text-left"
                    >
                      {/* 1. Soft Champagne Silk Header Bar */}
                      <div className="bg-gradient-to-r from-[#F7F3E9] via-[#F3ECE0] to-[#EFE7D5] px-3.5 py-2 flex items-center justify-between border-b border-[#A37B3B]/35">
                        <span className="text-[9.5px] font-bold text-[#0F2137] uppercase tracking-widest flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A37B3B] inline-block animate-pulse" />
                          {cat.name}
                        </span>
                        <div className="w-5 h-5 rounded-md bg-[#A37B3B]/15 border border-[#A37B3B]/40 flex items-center justify-center text-[#A37B3B]">
                          <ItemIcon className="w-3 h-3 text-[#A37B3B]" />
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                        <div>
                          {/* 2. 3D Glass Showcase Container (Compact Size) */}
                          <div className="relative w-20 h-20 sm:w-22 sm:h-22 mx-auto my-1 rounded-xl bg-gradient-to-br from-[#FFFDF7] via-[#FDF9F0] to-[#F5EFE0] border border-[#A37B3B]/35 p-2 shadow-[inset_0_1px_6px_rgba(163,123,59,0.08)] group-hover:shadow-[0_6px_16px_rgba(163,123,59,0.2)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full">
                              <Image
                                src={service.heroImage || cat.image}
                                alt={service.title}
                                fill
                                className="object-contain drop-shadow-[0_4px_10px_rgba(163,123,59,0.2)]"
                              />
                            </div>
                          </div>

                          {/* 3. Service Title & Compact Desc */}
                          <div className="text-center mt-2.5 space-y-1">
                            <h3 className="text-xs sm:text-sm font-serif font-bold text-[#0F2137] leading-snug group-hover:text-[#A37B3B] transition-colors duration-200 min-h-[2.2rem] flex items-center justify-center">
                              {service.title}
                            </h3>
                            <p className="text-[10.5px] text-[#475569] leading-relaxed line-clamp-2 font-normal">
                              {service.shortDesc}
                            </p>
                          </div>

                          {/* 4. Compact Feature Bullets */}
                          <ul className="mt-2.5 pt-2 border-t border-[#F0EBE1] space-y-1 text-[10px] text-[#0F2137]">
                            {service.subServices.slice(0, 3).map((sub, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-[#A37B3B] shrink-0 mt-0.5" />
                                <span className="truncate leading-tight font-medium">{sub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 5. Compact Action Buttons */}
                        <div className="pt-3 mt-2 border-t border-[#F0EBE1] space-y-2">
                          
                          {/* Call & WhatsApp Action Buttons */}
                          <div className="grid grid-cols-2 gap-1.5">
                            {/* Call Button */}
                            <a
                              href={phoneUrl}
                              className="inline-flex items-center justify-center gap-1 py-1.5 px-2 text-[9.5px] font-bold uppercase tracking-wider rounded-md border border-[#A37B3B] text-[#A37B3B] bg-[#FFFFFF] hover:bg-[#A37B3B] hover:text-[#FFFFFF] hover:border-[#A37B3B] transition-all duration-200 shadow-xs"
                            >
                              <Phone className="w-3 h-3 shrink-0" />
                              <span>Call Now</span>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1 py-1.5 px-2 text-[9.5px] font-bold uppercase tracking-wider rounded-md bg-[#25D366] hover:bg-[#1faa53] text-[#FFFFFF] shadow-xs transition-all duration-200"
                            >
                              <MessageCircle className="w-3 h-3 shrink-0" />
                              <span>WhatsApp</span>
                            </a>
                          </div>

                          {/* Read Service Details Button */}
                          <Link
                            href={`/services/${service.slug}`}
                            className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 text-[9.5px] font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#0F2137] hover:bg-[#A37B3B] rounded-md transition-all duration-200 shadow-xs"
                          >
                            <span>Read Service Details</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </Link>

                        </div>
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
        <div className="bg-[#FFFFFF] rounded-2xl p-10 md:p-14 border border-[#A37B3B]/30 text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase">
              Bespoke Advisory
            </h4>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight">
              Need a Custom Advisory Package?
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
              Combine tax structuring, bookkeeping, and residency visa services into a tailored corporate retainership.
            </p>
          </div>

          <div className="pt-4 flex justify-center relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#0F2137] hover:bg-[#A37B3B] transition-all duration-300 rounded-lg shadow-md uppercase gold-glow-hover"
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
