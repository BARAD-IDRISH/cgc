"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Users2,
  Building2,
  Globe2,
  TrendingUp,
  Landmark,
  ShoppingBag,
  Cpu,
  Globe,
  Award,
  Building,
  Palmtree,
  Truck,
  Factory,
  HeartPulse,
  BookOpen,
  Briefcase,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  const clientSegments = [
    {
      title: "Entrepreneurs & Startups",
      icon: Rocket,
      desc: "Helping visionaries turn ideas into viable, legally sound, and scalable corporate structures across free zones and mainland UAE.",
      solutions: ["Jurisdiction & Entity Selection", "License Issuance & Approvals", "Founders' Shareholding Agreement", "Initial Banking & Visa Processing"],
    },
    {
      title: "Family Businesses",
      icon: Users2,
      desc: "Preserving legacy and enabling smooth transition across generations with robust governance frameworks and asset structures.",
      solutions: ["Family Business Governance", "Succession & Inheritance Planning", "Asset Protection & Holding Setup", "Next-Gen Advisory & Restructuring"],
    },
    {
      title: "SMEs (Small & Medium Enterprises)",
      icon: Building2,
      desc: "Empowering operational SMEs with financial control, bookkeeping, corporate tax alignment, and growth capital strategies.",
      solutions: ["Monthly Bookkeeping & Management Accounts", "VAT & Corporate Tax Compliance", "Working Capital Optimization", "WPS & Regulatory Reporting"],
    },
    {
      title: "Corporates & Multinationals",
      icon: Globe2,
      desc: "Managing complex cross-border structures, branch setups, transfer pricing compliance, and statutory audit mandates.",
      solutions: ["Regional Branch & Subsidiary Structuring", "Transfer Pricing Documentation", "Statutory & Internal Audit Services", "Group Tax Alignment & Group Registrations"],
    },
    {
      title: "Investors",
      icon: TrendingUp,
      desc: "Providing strategic insights, legal due diligence, and market entry feasibility studies for local and international investors.",
      solutions: ["Market Entry Feasibility Studies", "Legal & Financial Due Diligence", "Investment Structuring", "Joint Venture & Partnership Agreements"],
    },
    {
      title: "Family Offices & HNWIs",
      icon: Landmark,
      desc: "Comprehensive wealth preservation, cross-border holding vehicles, foundation setups, and multi-jurisdictional tax planning.",
      solutions: ["DIFC / ADGM Foundation Registrations", "Cross-Border Wealth Structuring", "Tax Residency Certificate (TRC) Facilitation", "Golden Visa & Family Residency Coordination"],
    },
  ];

  const sectors = [
    { name: "Trading & Commerce", icon: ShoppingBag, desc: "Import-export, wholesale distribution, and retail." },
    { name: "Technology & IT", icon: Cpu, desc: "SaaS, AI development, IT services, and IP holding." },
    { name: "E-Commerce", icon: Globe, desc: "Digital marketplaces, D2C retail, and payment gateways." },
    { name: "Professional Services", icon: Award, desc: "Consultancies, legal practices, agencies, and HR." },
    { name: "Real Estate & Construction", icon: Building, desc: "Development, brokerages, and property management." },
    { name: "Hospitality & Tourism", icon: Palmtree, desc: "Hotels, restaurants, travel agencies, and events." },
    { name: "Logistics & Supply Chain", icon: Truck, desc: "Freight forwarding, warehousing, and cargo hubs." },
    { name: "Manufacturing & Industrial", icon: Factory, desc: "Processing plants, industrial assembly, and export." },
    { name: "Healthcare & Life Sciences", icon: HeartPulse, desc: "Clinics, health-tech, and medical equipment." },
    { name: "Education & EdTech", icon: BookOpen, desc: "Academies, training centers, and e-learning hubs." },
    { name: "Investment & Wealth Management", icon: Briefcase, desc: "Private equity, venture capital, and holding setups." },
    { name: "Family Business Groups", icon: Users, desc: "Multi-generational conglomerates & trusts." },
  ];

  return (
    <div className="relative bg-navy-deep min-h-screen pb-20">
      
      {/* Banner */}
      <section className="relative py-24 bg-navy-dark border-b border-gold-accent/10 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-accent/5 filter blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Who We Serve &amp; Industry Reach
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Tailored Advisory Across 6 Client Segments &bull; Deep Sector Expertise in 25+ Industries.
          </motion.p>
        </div>
      </section>

      {/* Client Segments Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
            Client Categories
          </h4>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Tailored Solutions for Every Growth Phase
          </h2>
          <p className="text-white/60 text-xs">
            We adapt our advisory framework to meet the specific demands of each client segment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientSegments.map((segment, idx) => {
            const Icon = segment.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl p-8 hover:border-gold-accent/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-gold-accent/5 border border-gold-accent/15 flex items-center justify-center text-gold-accent mb-6 group-hover:bg-gold-accent group-hover:text-navy-dark transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-accent transition-colors">
                    {segment.title}
                  </h3>
                  <p className="text-white/60 text-xs mt-3 leading-relaxed">
                    {segment.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
                    <span className="text-[10px] font-bold text-gold-accent uppercase tracking-widest block mb-2">
                      Key Advisory Focus:
                    </span>
                    <ul className="space-y-1.5 text-xs text-white/70">
                      {segment.solutions.map((sol, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-accent hover:text-white uppercase tracking-wider transition-colors"
                  >
                    Discuss your requirements
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
            Sector Coverage &bull; 25+ Industries
          </h4>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Industry-Specific Legal &amp; Tax Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div key={idx} className="glass-card rounded-xl p-6 hover:border-gold-accent/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gold-accent/5 border border-gold-accent/15 flex items-center justify-center text-gold-accent mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{sec.name}</h3>
                <p className="text-white/55 text-xs mt-2 leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

