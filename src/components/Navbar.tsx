"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Award, Briefcase, FileCheck, ArrowRight, ShieldCheck, Scale, Globe } from "lucide-react";

const servicesList = [
  {
    title: "Corporate Tax Services",
    href: "/services#corporate-tax",
    description: "Corporate registration, calculations, tax returns, planning, and transfer pricing support.",
    icon: ShieldCheck,
  },
  {
    title: "VAT Services",
    href: "/services#vat",
    description: "End-to-end VAT registration, deregistrations, monthly return filings, audits, and refunds.",
    icon: FileCheck,
  },
  {
    title: "Company Formation",
    href: "/services#formation",
    description: "Mainland, Free Zone, and Offshore company setups with comprehensive licensing and visas.",
    icon: Globe,
  },
  {
    title: "Accounting & Compliance",
    href: "/services#accounting",
    description: "Bookkeeping, financial accounting, statutory reports, and UAE regulatory compliance checks.",
    icon: Scale,
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
              src="/images/logo-light.png"
              alt="Chartered Growth Consultants Logo"
              width={140}
              height={45}
              priority
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col border-l border-gold-accent/30 pl-3">
              <span className="font-serif text-white text-[14px] sm:text-[15px] font-bold uppercase tracking-widest leading-tight">
                Chartered Growth
              </span>
              <span className="text-[10px] text-gold-accent uppercase tracking-[0.3em] font-semibold">
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
                Services
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <AnimatePresence>
                {activeSubmenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] bg-navy-dark/95 border border-gold-accent/15 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-6 backdrop-blur-md"
                  >
                    <div className="col-span-2 pb-3 border-b border-white/5">
                      <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
                        Our Strategic Solutions
                      </h4>
                    </div>

                    {servicesList.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-250 group/item"
                        >
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold-accent/10 border border-gold-accent/20 text-gold-accent group-hover/item:bg-gold-accent group-hover/item:text-navy-dark transition-colors duration-300 shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-white group-hover/item:text-gold-accent transition-colors duration-200">
                              {service.title}
                            </h5>
                            <p className="text-xs text-white/55 mt-1 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="col-span-2 pt-4 border-t border-white/5 flex justify-between items-center text-xs">
                      <span className="text-white/50">Comprehensive Business setup & tax compliance partner</span>
                      <Link
                        href="/services"
                        className="flex items-center gap-1.5 text-gold-accent hover:text-white font-medium transition-colors"
                      >
                        View All Services
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
                      {servicesList.map((service, idx) => (
                        <Link
                          key={idx}
                          href={service.href}
                          className="block py-2 text-sm text-white/70 hover:text-gold-accent transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="block py-2 text-sm text-gold-accent font-semibold flex items-center gap-1.5"
                      >
                        All Services <ArrowRight className="w-3.5 h-3.5" />
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
