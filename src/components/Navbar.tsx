"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  FileCheck,
  ArrowRight,
  ShieldCheck,
  Scale,
  Globe,
  FileSpreadsheet,
  PhoneCall
} from "lucide-react";
import SolutionsDrawer from "@/components/SolutionsDrawer";

const serviceCategories = [
  {
    category: "VAT Solutions",
    icon: FileCheck,
    href: "/services/vat-services",
    items: [
      { name: "VAT Registration", href: "/services/vat-registration" },
      { name: "VAT De-Registration", href: "/services/vat-deregistration" },
      { name: "VAT Return Filing", href: "/services/vat-return-filing" },
      { name: "VAT Audit & Refund", href: "/services/vat-audit-refund" },
      { name: "VAT Amendment", href: "/services/vat-amendment" },
    ],
  },
  {
    category: "Corporate Tax",
    icon: ShieldCheck,
    href: "/services/corporate-tax",
    items: [
      { name: "CT Registration", href: "/services/corporate-tax-registration" },
      { name: "CT Filing", href: "/services/corporate-tax-filing" },
      { name: "CT Implementation", href: "/services/corporate-tax-implementation" },
      { name: "CT Advisory & Free Zone", href: "/services/corporate-tax-advisory" },
      { name: "Transfer Pricing", href: "/services/transfer-pricing" },
    ],
  },
  {
    category: "Excise & ESR",
    icon: Scale,
    href: "/services/excise-esr",
    items: [
      { name: "Excise Registration & Returns", href: "/services/excise-tax-registration" },
      { name: "ESR Notification", href: "/services/esr-notification" },
      { name: "ESR Reporting & Audit", href: "/services/esr-compliance" },
    ],
  },
  {
    category: "Accounting & Audit",
    icon: FileSpreadsheet,
    href: "/services/accounting-audit",
    items: [
      { name: "Bookkeeping & Accounting", href: "/services/bookkeeping-accounting" },
      { name: "Outsourced CFO", href: "/services/outsourced-cfo" },
      { name: "Internal & External Audit", href: "/services/internal-external-audit" },
      { name: "Inventory & Backlog Audit", href: "/services/inventory-backlog-audit" },
    ],
  },
  {
    category: "More Solutions",
    icon: Globe,
    href: "/services/corporate-compliance",
    items: [
      { name: "Business Setup & Licensing", href: "/services/business-setup" },
      { name: "GoAML Registration", href: "/services/goaml-registration" },
      { name: "Tax Residency Cert (TRC)", href: "/services/tax-residency-certificate" },
      { name: "Customs Registration", href: "/services/customs-registration" },
      { name: "Company Liquidation", href: "/services/company-liquidation" },
      { name: "Visa & PRO Services", href: "/services/visa-pro-services" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and drawer when page changes
  useEffect(() => {
    setIsOpen(false);
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <header
      className={`floating-capsule-dock ${isScrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: isScrolled ? "12px" : "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "92%",
        maxWidth: "1240px",
        zIndex: 50,
        borderRadius: "100px",
        background: isScrolled ? "rgba(255, 255, 255, 0.94)" : "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: isScrolled
          ? "1px solid rgba(163, 123, 59, 0.35)"
          : "1px solid rgba(255, 255, 255, 0.65)",
        boxShadow: isScrolled
          ? "0 14px 45px -10px rgba(15, 33, 55, 0.12), 0 0 20px rgba(163, 123, 59, 0.15)"
          : "0 10px 40px -10px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(15, 33, 55, 0.04)",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      <div className="floating-capsule-inner px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center justify-between">
        {/* LOGO & BRAND TITLE (FAR LEFT) */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Chartered Growth Consultants Logo"
            width={180}
            height={55}
            priority
            className="h-11 sm:h-12 w-auto object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col border-l border-[#A37B3B]/30 pl-3">
            <span className="font-serif text-[#0F2137] text-[14px] md:text-[15px] font-bold uppercase tracking-wider leading-tight">
              Chartered Growth
            </span>
            <span className="text-[9.5px] text-[#A37B3B] uppercase tracking-[0.25em] font-bold">
              Consultants – FZCO
            </span>
          </div>
        </Link>

        {/* CENTER NAVIGATION LINKS (DESKTOP) */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[#A37B3B] ${
              pathname === "/" ? "text-[#A37B3B]" : "text-[#0F2137]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[#A37B3B] ${
              pathname === "/about" ? "text-[#A37B3B]" : "text-[#0F2137]"
            }`}
          >
            About
          </Link>

          {/* SOLUTIONS SPLIT-PANEL SLIDE DRAWER TRIGGER */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[#A37B3B] cursor-pointer ${
              pathname.startsWith("/services") ? "text-[#A37B3B]" : "text-[#0F2137]"
            }`}
          >
            <span>Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#A37B3B]" />
          </button>

          <Link
            href="/industries"
            className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[#A37B3B] ${
              pathname === "/industries" ? "text-[#A37B3B]" : "text-[#0F2137]"
            }`}
          >
            Industries
          </Link>
          <Link
            href="/contact"
            className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[#A37B3B] ${
              pathname === "/contact" ? "text-[#A37B3B]" : "text-[#0F2137]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* GOLD CTA BUTTON (FAR RIGHT) & MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#A37B3B] hover:bg-[#0F2137] transition-all duration-300 rounded-full shadow-md uppercase gold-glow-hover"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Free Consultation</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#0F2137] hover:text-[#A37B3B] transition-colors rounded-full hover:bg-[#A37B3B]/10"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* FLOATING MOBILE DRAWER MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden w-full bg-[#FFFFFF]/95 backdrop-blur-xl border-t border-[#A37B3B]/20 rounded-b-3xl overflow-hidden shadow-2xl"
          >
            <div className="px-5 pt-4 pb-6 space-y-3">
              <Link
                href="/"
                className={`block px-3 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider ${
                  pathname === "/"
                    ? "bg-[#A37B3B]/15 text-[#A37B3B]"
                    : "text-[#0F2137] hover:bg-[#FAF6EE]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider ${
                  pathname === "/about"
                    ? "bg-[#A37B3B]/15 text-[#A37B3B]"
                    : "text-[#0F2137] hover:bg-[#FAF6EE]"
                }`}
              >
                About
              </Link>

              {/* Mobile Solutions Drawer Trigger */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsDrawerOpen(true);
                }}
                className={`flex items-center justify-between w-full text-sm font-bold uppercase tracking-wider px-3 py-2.5 rounded-xl transition-colors ${
                  pathname.startsWith("/services")
                    ? "bg-[#A37B3B]/15 text-[#A37B3B]"
                    : "text-[#0F2137] hover:bg-[#FAF6EE]"
                }`}
              >
                <span>Solutions Directory</span>
                <ChevronRight className="w-4 h-4 text-[#A37B3B]" />
              </button>

              <Link
                href="/industries"
                className={`block px-3 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider ${
                  pathname === "/industries"
                    ? "bg-[#A37B3B]/15 text-[#A37B3B]"
                    : "text-[#0F2137] hover:bg-[#FAF6EE]"
                }`}
              >
                Industries
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider ${
                  pathname === "/contact"
                    ? "bg-[#A37B3B]/15 text-[#A37B3B]"
                    : "text-[#0F2137] hover:bg-[#FAF6EE]"
                }`}
              >
                Contact
              </Link>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#A37B3B] hover:bg-[#0F2137] transition-all duration-300 rounded-full shadow-md uppercase gold-glow-hover"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Free Consultation</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SPLIT-PANEL SLIDE DRAWER (SIDEBAR) */}
      <SolutionsDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
}
