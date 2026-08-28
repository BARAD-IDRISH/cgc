"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ShieldCheck, Building2, ChevronRight, Sparkles } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // WhatsApp URLs assigned directly to respective team leads
  const kaidTeamUrl =
    "https://wa.me/971527938572?text=Hello%20Kaid%2C%20I%20would%20like%20to%20inquire%20about%20VAT%20Solutions%20or%20Corporate%20%26%20Compliance%20services.";
  const tejasTeamUrl =
    "https://wa.me/971509915344?text=Hello%20Tejasbhai%2C%20I%20would%20like%20to%20inquire%20about%20Corporate%20Tax%2C%20Excise%20Tax%2C%20or%20Accounting%20%26%20Audit%20services.";

  // Handle click outside & ESC keypress to close the routing panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-[30px] right-[30px] z-[2500] flex flex-col items-end pointer-events-auto"
    >
      {/* ------------------------------------------------------------- */}
      {/* MULTI-AGENT ROUTING POP-UP PANEL */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.94 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="mb-3.5 w-[300px] sm:w-[320px] bg-[#FFFDF7] border border-[#A37B3B]/30 rounded-[20px] shadow-2xl overflow-hidden flex flex-col origin-bottom-right"
            role="dialog"
            aria-label="Connect with our Experts WhatsApp Routing Panel"
          >
            {/* Panel Top Corporate Header */}
            <div className="bg-[#0F2137] text-[#FFFFFF] p-4 flex items-center justify-between border-b border-[#A37B3B]/25 relative overflow-hidden">
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  {/* Live Status Indicator */}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#0F2137]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#FFFFFF] uppercase tracking-wider flex items-center gap-1.5">
                    <span>Connect with Consultants</span>
                  </h4>
                  <p className="text-[10.5px] text-[#25D366] font-medium flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span>Typically replies in minutes</span>
                  </p>
                </div>
              </div>

              {/* Close Button (X) */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-[#CBD5E1] hover:text-[#FFFFFF] hover:bg-[#FFFFFF]/10 transition-colors focus:outline-none cursor-pointer relative z-10"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Subtle Decorative Gradient Accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#A37B3B]/20 blur-xl pointer-events-none" />
            </div>

            {/* Department Routing Action Buttons */}
            <div className="p-3.5 space-y-2.5 bg-[#FAF8F5]">
              <span className="text-[9.5px] font-bold uppercase tracking-widest text-[#A37B3B] px-1 block">
                Select Department:
              </span>

              {/* TEAM 1 BUTTON: VAT & Corporate/Compliance */}
              <a
                href={kaidTeamUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl bg-[#FFFDF7] hover:bg-[#FAF6EE] border border-[#A37B3B]/20 hover:border-[#25D366]/60 shadow-xs hover:shadow-md transition-all duration-200 group flex items-center gap-3 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0F2137] text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-[#FFFFFF] transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-[#0F2137] group-hover:text-[#A37B3B] transition-colors flex items-center justify-between">
                    <span className="truncate">+971 52 793 8572</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#25D366] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </div>
                  <p className="text-[10px] text-[#475569] font-normal truncate mt-0.5">
                    VAT &amp; Corporate / Compliance Solutions
                  </p>
                </div>
              </a>

              {/* TEAM 2 BUTTON: Corporate Tax, Excise & ESR, Accounting & Audit */}
              <a
                href={tejasTeamUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl bg-[#FFFDF7] hover:bg-[#FAF6EE] border border-[#A37B3B]/20 hover:border-[#25D366]/60 shadow-xs hover:shadow-md transition-all duration-200 group flex items-center gap-3 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0F2137] text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-[#FFFFFF] transition-colors">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-[#0F2137] group-hover:text-[#A37B3B] transition-colors flex items-center justify-between">
                    <span className="truncate">+971 50 991 5344</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#25D366] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </div>
                  <p className="text-[10px] text-[#475569] font-normal truncate mt-0.5">
                    Corporate Tax, Excise, ESR &amp; Audit
                  </p>
                </div>
              </a>
            </div>

            {/* Panel Bottom Footer */}
            <div className="px-4 py-2.5 bg-[#FFFDF7] border-t border-[#A37B3B]/15 flex items-center justify-between text-[10px] text-[#64748B]">
              <span className="flex items-center gap-1 font-medium">
                <Sparkles className="w-3 h-3 text-[#A37B3B]" />
                Official Advisory Desk
              </span>
              <span className="font-semibold text-[#0F2137]">Chartered Growth</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------- */}
      {/* MAIN FLOATING ACTION TRIGGER BUTTON */}
      {/* ------------------------------------------------------------- */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp Multi-Agent Advisory Routing Widget"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-[#FFFFFF] rounded-full shadow-2xl hover:bg-[#1ebd59] transition-colors duration-300 focus:outline-none cursor-pointer group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        {/* Pulse Ring effect when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        )}

        {/* Hover Tooltip when closed */}
        {!isOpen && (
          <div className="absolute right-16 bg-[#0F2137] text-[#FFFFFF] text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl border border-[#A37B3B]/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span>Connect with Advisory</span>
          </div>
        )}

        {/* Dynamic Icon Toggle: X when open, WhatsApp MessageCircle when closed */}
        {isOpen ? (
          <X className="w-6 h-6 text-[#FFFFFF]" />
        ) : (
          <MessageCircle className="w-7 h-7 text-[#FFFFFF]" />
        )}
      </motion.button>
    </div>
  );
}
