"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Users2,
  Calculator,
  FileSpreadsheet,
  BookOpenCheck,
  Scale,
  ShieldCheck,
  Globe,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import { SERVICE_CATEGORIES, SERVICES_DATA, ServiceDetail } from "@/data/servicesData";

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

export default function ServicesOverview() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories = activeCategory === "all"
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter((cat) => cat.slug === activeCategory);

  return (
    <section style={{ contentVisibility: "auto" }} className="relative py-20 bg-[#FAF9F6] text-[#0F2137] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="hidden md:block absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#A37B3B]/10 filter blur-[100px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#0F2137]/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A37B3B]/15 border border-[#A37B3B]/30 text-[#A37B3B] text-[11px] font-bold uppercase tracking-widest shadow-xs">
            Complete Solutions Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight leading-tight">
            Our Advisory & Tax Services
          </h2>
          <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed font-normal max-w-2xl mx-auto">
            Explore every specialized service offered by our chartered consultants in the UAE.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-[#E5E7EB] pb-5">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-[#0F2137] text-[#FFFFFF] shadow-md"
                : "bg-[#FFFFFF] text-[#4B5563] hover:text-[#A37B3B] border border-[#E5E7EB] shadow-xs"
            }`}
          >
            All Services
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.slug
                  ? "bg-[#0F2137] text-[#FFFFFF] shadow-md"
                  : "bg-[#FFFFFF] text-[#4B5563] hover:text-[#A37B3B] border border-[#E5E7EB] shadow-xs"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grouped Service Category Sections */}
        <div className="space-y-16">
          {filteredCategories.map((cat) => {
            const CategoryIcon = ICON_MAP[cat.iconName] || FileCheck;

            return (
              <div key={cat.slug} id={cat.slug} className="space-y-6 scroll-mt-28">
                
                {/* Main Heading for Category */}
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#A37B3B]/30 pb-3 gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#0F2137] flex items-center justify-center text-[#A37B3B] shrink-0 shadow-sm">
                        <CategoryIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-[#A37B3B] uppercase tracking-widest">
                        {cat.tagline}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F2137] tracking-tight">
                      {cat.name}
                    </h3>
                  </div>

                  <Link
                    href={`/services/${cat.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] text-[#A37B3B] hover:text-[#0F2137] font-bold uppercase tracking-wider transition-colors shrink-0"
                  >
                    <span>View Category Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Sub-Services AI Icon Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.itemSlugs.map((itemSlug, idx) => {
                    const service: ServiceDetail | undefined = SERVICES_DATA[itemSlug];
                    if (!service) return null;

                    const ItemIcon = ICON_MAP[service.iconName] || CategoryIcon;
                    const phoneUrl = "tel:+971527938572";
                    const whatsappUrl = `https://wa.me/971527938572?text=${encodeURIComponent(
                      `Hi, I am interested in consulting about ${service.title} in the UAE.`
                    )}`;

                    return (
                      <motion.div
                        key={service.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.35, delay: idx * 0.04 }}
                        className="bg-[#FFFFFF] rounded-2xl p-5 border-2 border-[#F0EBE1] hover:border-[#A37B3B] transition-all duration-300 flex flex-col justify-between group shadow-[0_6px_20px_rgba(15,33,55,0.06)] hover:shadow-[0_14px_32px_rgba(163,123,59,0.18)] hover:-translate-y-1 relative overflow-hidden text-center sm:text-left"
                      >
                        <div>
                          {/* Top Badge & AI 3D Icon Badge Showcase */}
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-[#A37B3B]/10 border border-[#A37B3B]/25 text-[#A37B3B] text-[9px] font-bold uppercase tracking-wider">
                              {cat.name}
                            </span>
                            <div className="w-6 h-6 rounded-md bg-[#0F2137]/5 flex items-center justify-center text-[#A37B3B]">
                              <ItemIcon className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          {/* 3D AI Icon Container (Inspired by Reference Style) */}
                          <div className="relative w-28 h-28 mx-auto my-3 rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FDF9F0] to-[#F5EFE0] border border-[#A37B3B]/30 p-3 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full">
                              <Image
                                src={cat.image}
                                alt={service.title}
                                fill
                                className="object-contain drop-shadow-[0_6px_14px_rgba(163,123,59,0.3)] transform group-hover:rotate-2 transition-transform duration-300"
                              />
                            </div>
                          </div>

                          {/* Sub-service Title */}
                          <h4 className="text-base font-serif font-bold text-[#0F2137] group-hover:text-[#A37B3B] transition-colors leading-snug mb-2 text-center">
                            {service.title}
                          </h4>

                          {/* Short Description */}
                          <p className="text-[#4B5563] text-[11px] leading-relaxed font-normal mb-3 line-clamp-2 text-center">
                            {service.shortDesc}
                          </p>

                          {/* Sub-service Scope Highlights */}
                          <div className="pt-2.5 border-t border-[#F3F4F6] my-2 space-y-1.5 text-[11px] text-[#1F2937] font-normal">
                            {service.subServices.slice(0, 3).map((sub, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-1.5 justify-center sm:justify-start">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#A37B3B] shrink-0 mt-0.5" />
                                <span className="line-clamp-1 text-[#1F2937] font-medium">{sub}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Card Bottom Actions: Two Compact Buttons (Call & WhatsApp) + Page Link */}
                        <div className="pt-3 mt-2 border-t border-[#F3F4F6] space-y-2">
                          
                          {/* Calling Button & WhatsApp Button */}
                          <div className="grid grid-cols-2 gap-2">
                            {/* Call Button */}
                            <a
                              href={phoneUrl}
                              className="inline-flex items-center justify-center gap-1 py-2 px-2 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-[#A37B3B] text-[#A37B3B] bg-[#FFFFFF] hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-all duration-200 shadow-xs"
                            >
                              <Phone className="w-3 h-3 shrink-0" />
                              <span>Call Now</span>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1 py-2 px-2 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-[#25D366] hover:bg-[#1faa53] text-[#FFFFFF] shadow-sm hover:shadow-md transition-all duration-200"
                            >
                              <MessageCircle className="w-3 h-3 shrink-0" />
                              <span>WhatsApp</span>
                            </a>
                          </div>

                          {/* Direct Service Page Link */}
                          <Link
                            href={`/services/${service.slug}`}
                            className="flex items-center justify-center gap-1 text-[11px] text-[#0F2137] hover:text-[#A37B3B] font-bold tracking-wider uppercase transition-colors pt-1 w-full text-center"
                          >
                            <span>Read Details</span>
                            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                          </Link>

                        </div>

                      </motion.div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Divider Line & CTA Button */}
        <div className="mt-20 pt-10 border-t-2 border-[#E5E7EB] text-center space-y-4">
          <p className="text-[#4B5563] text-sm sm:text-base font-medium">
            Looking for a tailored corporate package or specific tax advisory?
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0F2137] hover:bg-[#A37B3B] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <span className="text-[#FFFFFF] group-hover:text-[#0F2137] transition-colors">Speak to Our Consultants</span>
              <ArrowRight className="w-4 h-4 text-[#FFFFFF] group-hover:text-[#0F2137] transition-colors transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
