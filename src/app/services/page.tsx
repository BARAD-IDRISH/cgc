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
  FileCheck,
  ShieldCheck,
  Scale,
  FileSpreadsheet,
  Globe,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";
import { SERVICE_CATEGORIES, SERVICES_DATA, ServiceDetail } from "@/data/servicesData";

export default function ServicesCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // All individual service items (excluding category duplicates if any, or filtering cleanly)
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
    "https://wa.me/971527938572?text=Hello%20CGC%2C%20I%20would%20like%20to%20inquire%20about%20your%20advisory%20services.";

  return (
    <div className="relative bg-[#FAF6EE] min-h-screen pb-24 text-[#0F2137]">
      
      {/* Hero Banner */}
      <section className="relative py-24 bg-[#FFFDF7] border-b border-[#A37B3B]/20 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#A37B3B]/5 filter blur-[100px] pointer-events-none" />

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
            Explore Corporate Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Browse our complete catalog of standalone tax advisory, statutory audit, bookkeeping, setup, and compliance solutions across the UAE.
          </motion.p>
        </div>
      </section>

      {/* Main Filter & Card Grid Container (Finves ThemeForest Inspired Sidebar Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
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

            {/* Service Cards Grid (Matching Finves ThemeForest Layout) */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      {/* Top Cover Image Box with Hover Overlay */}
                      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#FAF6EE]">
                        <Image
                          src={service.heroImage || "/images/vat-3d.png"}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Top Capsule Hover Badge */}
                        <div className="absolute inset-0 bg-[#0F2137]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] text-[#0F2137] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-colors"
                          >
                            <span>Read Case &amp; Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* Top Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#A37B3B]/40 text-[#A37B3B] text-[10.5px] font-bold uppercase tracking-wider shadow-xs">
                            {service.categoryName}
                          </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="text-lg font-serif font-bold text-[#0F2137] group-hover:text-[#A37B3B] transition-colors leading-snug line-clamp-2">
                            {service.title}
                          </h3>
                          <p className="text-[#475569] text-xs leading-relaxed line-clamp-3 font-normal">
                            {service.shortDesc}
                          </p>
                        </div>

                        {/* Bottom Meta Row (Finves Theme style) */}
                        <div className="pt-4 border-t border-[#A37B3B]/20 flex items-center justify-between">
                          <span className="text-[10.5px] font-bold text-[#0F2137]/80 uppercase tracking-wider">
                            UAE Regulatory Compliant
                          </span>

                          <Link
                            href={`/services/${service.slug}`}
                            className="w-9 h-9 rounded-full bg-[#A37B3B]/10 border border-[#A37B3B]/30 flex items-center justify-center text-[#A37B3B] group-hover:bg-[#A37B3B] group-hover:text-[#FFFFFF] transition-all duration-300 shadow-xs"
                          >
                            <ArrowRight className="w-4 h-4" />
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
      </div>

    </div>
  );
}
