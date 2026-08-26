"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Award, Briefcase, FileCheck, ArrowRight, ShieldCheck, Scale, Globe, FileSpreadsheet } from "lucide-react";

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
      { name: "Business Setup & Setup", href: "/services/business-setup" },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-dark/95 backdrop-blur-md border-b border-gold-accent/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <Image
              src="/images/logo.png"
              alt="Chartered Growth Consultants Logo"
              width={200}
              height={65}
              priority
              className="h-14 sm:h-16 w-auto object-contain rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col border-l border-gold-accent/30 pl-3">
              <span className="font-serif text-white text-[15px] sm:text-[17px] font-bold uppercase tracking-widest leading-tight">
                Chartered Growth
              </span>
              <span className="text-[10px] sm:text-[11px] text-gold-accent uppercase tracking-[0.3em] font-semibold">
                Consultants – FZCO
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-gold-accent ${
                pathname === "/" ? "text-gold-accent" : "text-white/80"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-gold-accent ${
                pathname === "/about" ? "text-gold-accent" : "text-white/80"
              }`}
            >
              About
            </Link>

            {/* Services with Mega Menu */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setActiveSubmenu("services")}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-gold-accent cursor-pointer ${
                  pathname.startsWith("/services") ? "text-gold-accent" : "text-white/80"
                }`}
              >
                Solutions
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <AnimatePresence>
                {activeSubmenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] bg-navy-dark/95 border border-gold-accent/15 rounded-xl shadow-2xl p-6 backdrop-blur-md"
                  >
                    <div className="pb-3 mb-4 border-b border-white/5 flex justify-between items-center">
                      <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
                        Comprehensive Tax & Compliance Solutions
                      </h4>
                      <span className="text-[11px] text-white/50">FTA Approved Expert Advisory</span>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                      {serviceCategories.map((cat, catIdx) => {
                        const Icon = cat.icon;
                        return (
                          <div key={catIdx} className="space-y-2">
                            <Link
                              href={cat.href}
                              className="flex items-center gap-1.5 text-xs font-bold text-gold-accent hover:text-white uppercase tracking-wider transition-colors pb-1 border-b border-gold-accent/10"
                            >
                              <Icon className="w-3.5 h-3.5 shrink-0" />
                              <span>{cat.category}</span>
                            </Link>
                            <ul className="space-y-1.5 pt-1">
                              {cat.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    href={item.href}
                                    className="text-[11px] text-white/70 hover:text-gold-light hover:pl-1 transition-all duration-200 block leading-snug"
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

                    <div className="mt-5 pt-3 border-t border-white/5 flex justify-between items-center text-xs">
                      <span className="text-white/50">One-Stop Solution Provider for VAT, Corporate Tax, ESR & Accounting in UAE</span>
                      <Link
                        href="/services"
                        className="flex items-center gap-1.5 text-gold-accent hover:text-white font-medium transition-colors"
                      >
                        Explore All Solutions
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/industries"
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-gold-accent ${
                pathname === "/industries" ? "text-gold-accent" : "text-white/80"
              }`}
            >
              Industries
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-gold-accent ${
                pathname === "/contact" ? "text-gold-accent" : "text-white/80"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-widest text-navy-dark bg-gold-accent hover:bg-gold-light transition-colors duration-300 rounded-md shadow-md uppercase"
            >
              Free Consultation
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white/85 hover:text-gold-accent transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-navy-deep border-b border-gold-accent/15 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-3">
              <Link
                href="/"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium uppercase tracking-wider hover:bg-white/5 ${
                  pathname === "/" ? "text-gold-accent" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium uppercase tracking-wider hover:bg-white/5 ${
                  pathname === "/about" ? "text-gold-accent" : "text-white"
                }`}
              >
                About
              </Link>

              {/* Services Submenu for Mobile */}
              <div className="px-3 py-1">
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === "services" ? null : "services")}
                  className="flex items-center justify-between w-full text-base font-medium uppercase tracking-wider text-white py-2"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
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
                      className="pl-4 mt-2 space-y-2 border-l border-gold-accent/20 overflow-hidden"
                    >
                      {serviceCategories.map((cat, idx) => (
                        <div key={idx} className="py-1">
                          <span className="text-xs font-bold text-gold-accent uppercase block mb-1">
                            {cat.category}
                          </span>
                          {cat.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              className="block py-1 text-xs text-white/70 hover:text-gold-accent transition-colors pl-2"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link
                        href="/services"
                        className="block py-2 text-sm text-gold-accent font-semibold flex items-center gap-1.5 pt-2"
                      >
                        Explore All Solutions <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/industries"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium uppercase tracking-wider hover:bg-white/5 ${
                  pathname === "/industries" ? "text-gold-accent" : "text-white"
                }`}
              >
                Industries
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium uppercase tracking-wider hover:bg-white/5 ${
                  pathname === "/contact" ? "text-gold-accent" : "text-white"
                }`}
              >
                Contact
              </Link>

              <div className="pt-4 px-3">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold tracking-widest text-navy-dark bg-gold-accent hover:bg-gold-light transition-colors duration-300 rounded-md shadow-md uppercase"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
