"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  SlidersHorizontal,
} from "lucide-react";
import { SERVICE_CATEGORIES, SERVICES_DATA, ServiceDetail } from "@/data/servicesData";
import SectionDivider from "@/components/SectionDivider";

export default function ServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // All individual service items
  const allServicesList = useMemo(() => {
    return Object.values(SERVICES_DATA);
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allServicesList.length };
    SERVICE_CATEGORIES.forEach((cat) => {
      counts[cat.slug] = allServicesList.filter(
        (s) => s.categorySlug === cat.slug
      ).length;
    });
    return counts;
  }, [allServicesList]);

  // Filtered services list
  const filteredServices = useMemo(() => {
    return allServicesList.filter((service) => {
      return selectedCategory === "all" || service.categorySlug === selectedCategory;
    });
  }, [allServicesList, selectedCategory]);

  const phoneUrl = "tel:+971527938572";
  const whatsappUrl =
    "https://wa.me/971527938572?text=Hello%20CGC%2C%20I%20would%20like%20to%20consult%20regarding%20advisory%20services.";

  return (
    <section
      style={{ contentVisibility: "auto" }}
      className="relative py-24 bg-[#FAF6EE] text-[#0F2137] overflow-x-clip border-t border-[#A37B3B]/20"
    >
      {/* Subtle ambient lighting */}
      <div className="hidden md:block absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#A37B3B]/10 filter blur-[100px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#0F2137]/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A37B3B]/15 border border-[#A37B3B]/30 text-[#A37B3B] text-xs font-bold uppercase tracking-widest shadow-xs">
            Complete Solutions Directory
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight leading-tight">
            Our Advisory &amp; Tax Solutions
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm leading-relaxed font-normal max-w-2xl mx-auto">
            Browse our complete catalog of standalone tax advisory, statutory audit, bookkeeping, setup, and compliance solutions across the UAE.
          </p>
        </div>

        {/* Finves Sidebar Filter + Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: FILTER BY CATEGORY */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto space-y-6 bg-[#FFFDF7] p-6 rounded-2xl border-2 border-[#A37B3B]/25 shadow-md">
            
            <div className="flex items-center justify-between border-b border-[#A37B3B]/20 pb-4">
              <div className="flex items-center gap-2 text-[#0F2137]">
                <SlidersHorizontal className="w-4 h-4 text-[#A37B3B]" />
                <h3 className="text-xs font-bold uppercase tracking-widest">
                  Filter By Category
                </h3>
              </div>
              <span className="text-[10px] font-semibold text-[#A37B3B] bg-[#A37B3B]/10 px-2 py-0.5 rounded-full">
                {allServicesList.length} Total
              </span>
            </div>

            {/* Filter Buttons Navigation Stack */}
            <nav className="space-y-2">
              
              {/* All Services Pill */}
              <button
                onClick={() => setSelectedCategory("all")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 text-left ${
                  selectedCategory === "all"
                    ? "bg-[#0F2137] text-[#FFFFFF] shadow-md border border-[#0F2137]"
                    : "bg-[#FFFFFF] text-[#0F2137] hover:bg-[#A37B3B]/10 border border-[#A37B3B]/20"
                }`}
              >
                <span>All Solutions</span>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                    selectedCategory === "all"
                      ? "bg-[#A37B3B] text-[#FFFFFF]"
                      : "bg-[#A37B3B]/15 text-[#A37B3B]"
                  }`}
                >
                  {categoryCounts["all"] || 0}
                </span>
              </button>

              {/* Individual Categories */}
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.slug;
                const count = categoryCounts[cat.slug] || 0;

                return (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs transition-all duration-200 text-left ${
                      isActive
                        ? "bg-[#0F2137] text-[#FFFFFF] font-bold shadow-md border border-[#0F2137]"
                        : "bg-[#FFFFFF] text-[#0F2137] hover:bg-[#A37B3B]/10 font-medium border border-[#A37B3B]/20"
                    }`}
                  >
                    <span className="truncate pr-2">{cat.name}</span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md shrink-0 ${
                        isActive
                          ? "bg-[#A37B3B] text-[#FFFFFF]"
                          : "bg-[#A37B3B]/15 text-[#A37B3B]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Direct Consultation Box */}
            <div className="pt-4 border-t border-[#A37B3B]/20 bg-[#FAF6EE] p-4 rounded-xl space-y-3">
              <h4 className="text-xs font-bold text-[#0F2137] uppercase tracking-wider">
                Need Advisory Assistance?
              </h4>
              <p className="text-[11px] text-[#475569] leading-relaxed">
                Speak directly with an FTA tax agent or business setup advisor.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={phoneUrl}
                  className="flex-1 inline-flex items-center justify-center gap-1 py-2 text-[10px] font-bold uppercase text-[#A37B3B] bg-[#FFFFFF] border border-[#A37B3B] rounded-lg shadow-xs hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-all"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1 py-2 text-[10px] font-bold uppercase text-[#FFFFFF] bg-[#25D366] rounded-lg shadow-xs hover:bg-[#1faa53] transition-all"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </aside>

          {/* RIGHT SIDE: CARD GRID */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Header Status Bar */}
            <div className="flex items-center justify-between bg-[#FFFDF7] p-4 rounded-xl border border-[#A37B3B]/20">
              <div className="text-xs font-bold text-[#0F2137] uppercase tracking-wider">
                Showing <span className="text-[#A37B3B] font-extrabold">{filteredServices.length}</span> Solutions
              </div>
              
              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="text-xs font-semibold text-[#A37B3B] hover:underline"
                >
                  Reset Category Filter
                </button>
              )}
            </div>

            {/* Service Cards Grid */}
            {filteredServices.length === 0 ? (
              <div className="bg-[#FFFDF7] rounded-2xl p-12 text-center border-2 border-dashed border-[#A37B3B]/30 space-y-4">
                <p className="text-sm text-[#475569] font-medium">
                  No advisory services found in this category.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                  }}
                  className="px-4 py-2 bg-[#0F2137] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
                >
                  View All Solutions
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredServices.map((service) => (
                    <motion.div
                      key={service.slug}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#FFFFFF] rounded-2xl overflow-hidden border-2 border-[#A37B3B]/25 hover:border-[#A37B3B] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                    >
                      {/* Top Cover Image Box */}
                      <div className="relative w-full h-48 overflow-hidden bg-[#FAF6EE]">
                        <Image
                          src={service.heroImage || `/images/services/${service.slug}.jpg`}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 350px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Top Capsule Hover Badge */}
                        <div className="absolute inset-0 bg-[#0F2137]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-[#0F2137] text-[11px] font-bold uppercase tracking-wider shadow-lg hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-colors"
                          >
                            <span>Read Details</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#A37B3B]/40 text-[#A37B3B] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                            {service.categoryName}
                          </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <h3 className="text-base font-serif font-bold text-[#0F2137] group-hover:text-[#A37B3B] transition-colors leading-snug line-clamp-2">
                            {service.title}
                          </h3>
                          <p className="text-[#475569] text-[11px] leading-relaxed line-clamp-2 font-normal">
                            {service.shortDesc}
                          </p>
                        </div>

                        {/* Scope Bullet Highlights */}
                        <div className="pt-2 border-t border-[#A37B3B]/15 space-y-1 text-[10.5px] text-[#1F2937]">
                          {service.subServices.slice(0, 2).map((sub, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-[#A37B3B] shrink-0" />
                              <span className="line-clamp-1 font-medium">{sub}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons Row */}
                        <div className="pt-3 border-t border-[#A37B3B]/20 space-y-2">
                          <div className="grid grid-cols-2 gap-1.5">
                            <a
                              href={phoneUrl}
                              className="inline-flex items-center justify-center gap-1 py-1.5 px-2 text-[9.5px] font-bold uppercase tracking-wider rounded-md border border-[#A37B3B] text-[#A37B3B] bg-[#FFFFFF] hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-all"
                            >
                              <Phone className="w-3 h-3 shrink-0" />
                              <span>Call</span>
                            </a>
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1 py-1.5 px-2 text-[9.5px] font-bold uppercase tracking-wider rounded-md bg-[#25D366] hover:bg-[#1faa53] text-[#FFFFFF] transition-all"
                            >
                              <MessageCircle className="w-3 h-3 shrink-0" />
                              <span>WhatsApp</span>
                            </a>
                          </div>

                          <Link
                            href={`/services/${service.slug}`}
                            className="w-full py-2 px-2.5 rounded-lg bg-[#0F2137] hover:bg-[#A37B3B] text-[#FFFFFF] font-bold text-[10px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <span>Read Details</span>
                            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

          </main>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center pt-8 border-t border-[#A37B3B]/20 pb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#0F2137] hover:bg-[#A37B3B] transition-all duration-300 rounded-lg shadow-md uppercase gold-glow-hover"
          >
            <span>Explore Full Solutions Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Curved SVG Divider Transitioning into White Industries Section */}
      <SectionDivider position="bottom" fillColor="#FFFFFF" variant="concave" />
    </section>
  );
}
