"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileCheck,
  ShieldCheck,
  Scale,
  FileSpreadsheet,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
  Award,
} from "lucide-react";
import { SERVICE_CATEGORIES, SERVICES_DATA } from "@/data/servicesData";

interface SolutionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SolutionsDrawer({ isOpen, onClose }: SolutionsDrawerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when drawer is open & enable ESC key listener
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

  // Icon mapping helper
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "FileCheck":
        return FileCheck;
      case "ShieldCheck":
        return ShieldCheck;
      case "Scale":
        return Scale;
      case "FileSpreadsheet":
        return FileSpreadsheet;
      case "Globe":
      default:
        return Globe;
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Translucent Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{ boxSizing: "border-box", margin: 0, padding: 0 }}
            className="fixed inset-0 top-0 left-0 w-screen h-screen m-0! p-0! z-[1999] bg-black/55 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Full Viewport-Height Split-Panel Drawer Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              boxSizing: "border-box",
              position: "fixed",
              top: 0,
              right: 0,
              left: "auto",
              margin: 0,
              marginRight: 0,
              padding: 0,
              paddingRight: 0,
            }}
            className="fixed top-0! right-0! left-auto! bottom-0! h-screen m-0! mr-0! p-0! pr-0! z-[2000] w-full md:w-[75vw] max-w-[950px] shadow-2xl flex flex-col md:flex-row overflow-hidden bg-[#FAF8F5]"
            role="dialog"
            aria-modal="true"
            aria-label="Solutions Directory Navigation Drawer"
          >
            {/* ========================================================= */}
            {/* LEFT COLUMN PANEL (35% Width): Corporate Navy Dark Accent */}
            {/* ========================================================= */}
            <div className="w-full md:w-[35%] bg-[#0F2137] text-[#FFFFFF] p-5 sm:p-6 flex flex-col justify-between shrink-0 relative overflow-hidden border-r border-[#A37B3B]/30">
              {/* Decorative Subtle Grid overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#A37B3B]/20 filter blur-2xl pointer-events-none" />

              {/* Upper Section: Header Typography */}
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A37B3B]/25 border border-[#A37B3B]/50 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Our Expertise &amp; Advisory</span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FFFFFF] tracking-tight leading-snug">
                  Empowering Business Growth in the UAE
                </h3>

                <p className="text-[11.5px] text-[#CBD5E1] leading-relaxed font-normal">
                  FTA-registered tax agents and corporate advisory specialists delivering end-to-end statutory compliance, corporate tax, bookkeeping, and free zone setups.
                </p>
              </div>

              {/* Middle Section: Direct Advisory Desk (Compact Spacing) */}
              <div className="relative z-10 my-auto py-4 border-t border-b border-[#FFFFFF]/15 space-y-3 text-xs">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                  Direct Advisory Desk
                </span>

                <a
                  href="tel:+971527938572"
                  className="flex items-center gap-3 text-[#FFFFFF] hover:text-[#D4AF37] transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-[9.5px] text-[#94A3B8]">Call Advisory</div>
                    <div className="font-semibold text-xs text-[#FFFFFF]">+971 52 793 8572</div>
                  </div>
                </a>

                <a
                  href="mailto:kaid@charteredgrowth.ae"
                  className="flex items-center gap-3 text-[#FFFFFF] hover:text-[#D4AF37] transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-[9.5px] text-[#94A3B8]">Official Inquiry</div>
                    <div className="font-semibold text-xs text-[#FFFFFF] truncate max-w-[170px]">kaid@charteredgrowth.ae</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-[#FFFFFF]">
                  <div className="w-7 h-7 rounded-lg bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-[9.5px] text-[#94A3B8]">Headquarters</div>
                    <div className="font-semibold text-xs text-[#FFFFFF]">IFZA Park, DSO, Dubai</div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Call To Action Button */}
              <div className="relative z-10 pt-2">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#A37B3B] hover:bg-[#B58B43] transition-all duration-300 rounded-lg shadow-lg uppercase gold-glow-hover"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* ========================================================= */}
            {/* RIGHT COLUMN PANEL (65% Width): Ultra-Light Cream Catalog */}
            {/* ========================================================= */}
            <div className="w-full md:w-[65%] bg-[#FAF8F5] text-[#0F2137] flex flex-col justify-between h-full relative overflow-hidden">
              {/* Drawer Top Header with Pinned Close Button */}
              <div className="px-6 py-3.5 sm:px-8 sm:py-4 border-b border-[#A37B3B]/20 flex items-center justify-between bg-[#FFFDF7] shrink-0 relative">
                <div>
                  <span className="text-[10px] font-bold text-[#A37B3B] uppercase tracking-widest block mb-0.5">
                    Solutions Directory
                  </span>
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F2137]">
                    Explore Advisory Services
                  </h2>
                </div>

                {/* Explicit Pinned Close Button (X) */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-[#0F2137] hover:text-[#A37B3B] hover:bg-[#A37B3B]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#A37B3B]/50 cursor-pointer"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Setup with Compact Spacing */}
              <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6 space-y-6 custom-scrollbar">
                {SERVICE_CATEGORIES.map((cat) => {
                  const IconComponent = getCategoryIcon(cat.iconName);
                  return (
                    <div key={cat.slug} className="space-y-2.5">
                      {/* Main Category Header */}
                      <Link
                        href={`/services/${cat.slug}`}
                        onClick={onClose}
                        className="inline-flex items-center gap-2 group text-xs font-bold text-[#0F2137] hover:text-[#A37B3B] uppercase tracking-wider transition-colors pb-1.5 border-b border-[#A37B3B]/25 w-full justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-[#A37B3B]/15 flex items-center justify-center group-hover:bg-[#A37B3B] transition-colors">
                            <IconComponent className="w-3.5 h-3.5 text-[#A37B3B] group-hover:text-[#FFFFFF] transition-colors" />
                          </div>
                          <span className="text-xs font-bold text-[#0F2137]">{cat.name}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-[#A37B3B] transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>

                      {/* Targeted Sub-Links Grid (Compact Heights) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                        {cat.itemSlugs.map((slug) => {
                          const item = SERVICES_DATA[slug];
                          if (!item) return null;
                          return (
                            <Link
                              key={slug}
                              href={`/services/${slug}`}
                              onClick={onClose}
                              className="py-2.5 px-3 rounded-lg bg-[#FFFDF7] hover:bg-[#FAF6EE] border border-[#A37B3B]/20 hover:border-[#A37B3B]/60 shadow-xs hover:shadow-md transition-all duration-200 group flex flex-col justify-center"
                            >
                              <div className="text-[11.5px] font-bold text-[#0F2137] group-hover:text-[#A37B3B] transition-colors flex items-center justify-between">
                                <span>{item.title.split(" UAE")[0].split(" Services")[0]}</span>
                                <ChevronRight className="w-3 h-3 text-[#A37B3B] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                              </div>
                              <div className="text-[10px] text-[#475569] line-clamp-1 mt-0.5 font-normal leading-normal">
                                {item.tagline}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Drawer Bottom Bar */}
              <div className="px-5 py-3 sm:px-6 sm:py-3.5 bg-[#FFFDF7] border-t border-[#A37B3B]/20 flex items-center justify-between text-[11.5px] shrink-0">
                <span className="text-[#475569] font-medium">
                  Full-Spectrum UAE Free Zone &amp; Mainland Solutions
                </span>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="flex items-center gap-1.5 font-bold text-[#A37B3B] hover:text-[#0F2137] uppercase tracking-wider transition-colors"
                >
                  <span>All Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
