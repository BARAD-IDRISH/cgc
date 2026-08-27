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
  FileCheck,
  ArrowRight,
  ShieldCheck,
  Scale,
  Globe,
  FileSpreadsheet,
  PhoneCall
} from "lucide-react";

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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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

  // Close mobile menu when page changes
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
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
      <div className="floating-capsule-inner px-4 sm:px-6 md:px-8 py-2.5 sm:py-3">
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

          {/* SOLUTIONS MEGA-MENU DROPDOWN */}
          <div
            className="relative py-2 group"
            onMouseEnter={() => setActiveSubmenu("services")}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <button
              className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[#A37B3B] cursor-pointer ${
                pathname.startsWith("/services") ? "text-[#A37B3B]" : "text-[#0F2137]"
              }`}
            >
              Solutions
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-[#A37B3B]" />
            </button>

            <AnimatePresence>
              {activeSubmenu === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[860px] bg-[#FFFFFF]/95 border border-[#A37B3B]/30 rounded-2xl shadow-2xl p-6 backdrop-blur-xl"
                >
                  <div className="pb-3 mb-4 border-b border-[#A37B3B]/20 flex justify-between items-center">
                    <h4 className="text-xs font-bold tracking-widest text-[#A37B3B] uppercase">
                      Comprehensive Advisory, Tax &amp; Compliance Directory
                    </h4>
                    <span className="text-[11px] font-semibold text-[#0F2137]/70 bg-[#A37B3B]/10 px-2.5 py-1 rounded-full border border-[#A37B3B]/20">
                      FTA Registered Tax Agents
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-4">
                    {serviceCategories.map((cat, catIdx) => {
                      const Icon = cat.icon;
                      return (
                        <div key={catIdx} className="space-y-2">
                          <Link
                            href={cat.href}
                            className="flex items-center gap-1.5 text-xs font-bold text-[#0F2137] hover:text-[#A37B3B] uppercase tracking-wider transition-colors pb-1 border-b border-[#A37B3B]/20"
                          >
                            <Icon className="w-3.5 h-3.5 text-[#A37B3B] shrink-0" />
                            <span>{cat.category}</span>
                          </Link>
                          <ul className="space-y-1.5 pt-1">
                            {cat.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  href={item.href}
                                  className="text-[11px] text-[#475569] hover:text-[#A37B3B] hover:pl-1 transition-all duration-200 block leading-snug font-normal"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#A37B3B]/20 flex justify-between items-center text-xs">
                    <span className="text-[#475569] font-normal">
                      Full-Spectrum Corporate Services across Dubai &amp; Global Free Zones
                    </span>
                    <Link
                      href="/services"
                      className="flex items-center gap-1.5 text-[#A37B3B] hover:text-[#0F2137] font-bold uppercase tracking-wider transition-colors"
                    >
                      Explore Solutions Directory
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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

              {/* Mobile Services Accordion */}
              <div className="px-3 py-1">
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === "services" ? null : "services")}
                  className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-wider text-[#0F2137] py-2"
                >
                  <span>Solutions Directory</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#A37B3B] transition-transform ${
                      activeSubmenu === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeSubmenu === "services" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-3 border-l-2 border-[#A37B3B]/30 overflow-hidden"
                    >
                      {serviceCategories.map((cat, idx) => (
                        <div key={idx} className="py-1">
                          <span className="text-xs font-bold text-[#A37B3B] uppercase block mb-1">
                            {cat.category}
                          </span>
                          {cat.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              className="block py-1 text-xs text-[#475569] hover:text-[#A37B3B] transition-colors pl-2"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link
                        href="/services"
                        className="block py-2 text-xs text-[#A37B3B] font-bold uppercase tracking-wider flex items-center gap-1.5 pt-2 border-t border-[#A37B3B]/15"
                      >
                        <span>Explore Solutions Directory</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
    </header>
  );
}
