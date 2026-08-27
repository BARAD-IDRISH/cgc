"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionDivider from "@/components/SectionDivider";
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
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function IndustriesPage() {
  const clientSegments = [
    {
      id: "startups",
      title: "Entrepreneurs & Startups",
      tagline: "Turn Visionary Ideas Into Scalable Commercial Structures",
      icon: Rocket,
      image: "/images/formation-3d.png",
      desc: "End-to-end guidance for launch, company formation, licensing, and scaling across free zones and mainland UAE. We navigate jurisdiction selection, shareholder agreements, and initial capital compliance.",
      solutions: [
        "Jurisdiction & Entity Selection (Free Zone vs Mainland)",
        "Trade License Issuance & Authority Approvals",
        "Founders' Shareholding & Equity Agreements",
        "Initial Banking Setup & Investor Visa Processing",
        "Voluntary VAT Registration for Cost Recovery",
      ],
    },
    {
      id: "family-business",
      title: "Family Businesses",
      tagline: "Preserving Multi-Generational Wealth & Corporate Governance",
      icon: Users2,
      image: "/images/industries-3d.png",
      desc: "Preserving legacy and enabling smooth transition across generations with robust governance frameworks, family constitutions, and asset holding structures.",
      solutions: [
        "Family Business Governance Constitutions",
        "Succession & Cross-Border Inheritance Planning",
        "Asset Protection & Holding Entity Setup",
        "Next-Gen Executive Advisory & Restructuring",
        "Corporate Tax Alignment for Family Holdings",
      ],
    },
    {
      id: "smes",
      title: "SMEs (Small & Medium Enterprises)",
      tagline: "Financial Control & Corporate Tax Readiness",
      icon: Building2,
      image: "/images/accounting-3d.png",
      desc: "Empowering operational SMEs with financial control, bookkeeping, corporate tax alignment, WPS payroll, and strategic growth capital guidance.",
      solutions: [
        "Monthly IFRS Bookkeeping & Management Accounts",
        "VAT & Corporate Tax Compliance Filing",
        "Working Capital & Cash Flow Optimization",
        "WPS Payroll & Mandatory Regulatory Reporting",
        "Annual Statutory Audit Preparation",
      ],
    },
    {
      id: "corporates",
      title: "Corporates & Multinationals",
      tagline: "Complex Group Restructuring & Cross-Border Compliance",
      icon: Globe2,
      image: "/images/tax-3d.png",
      desc: "Managing complex cross-border corporate structures, regional branch setups, OECD transfer pricing compliance, and statutory audit mandates.",
      solutions: [
        "Regional Branch & Subsidiary Structuring",
        "OECD Transfer Pricing Master & Local Files",
        "External Statutory Audit & Internal Control Audits",
        "Group Tax Alignment & Corporate Tax Pooling",
        "GoAML Compliance & Anti-Money Laundering Controls",
      ],
    },
    {
      id: "investors",
      title: "Investors & Venture Capital",
      tagline: "Strategic Feasibility, M&A & Legal Due Diligence",
      icon: TrendingUp,
      image: "/images/hero-3d.png",
      desc: "Providing strategic insights, legal due diligence, valuation, and market entry feasibility studies for local and international institutional investors.",
      solutions: [
        "UAE Market Entry Feasibility Studies",
        "Financial & Legal M&A Due Diligence",
        "Cross-Border Investment Holding Structuring",
        "Joint Venture & Share Purchase Agreements",
        "Economic Substance & Tax Residency Optimizations",
      ],
    },
    {
      id: "family-offices",
      title: "Family Offices & HNWIs",
      tagline: "DIFC / ADGM Foundation & Asset Preservation",
      icon: Landmark,
      image: "/images/vat-3d.png",
      desc: "Comprehensive wealth preservation, cross-border holding vehicles, foundation setups in DIFC/ADGM, and multi-jurisdictional tax planning for high-net-worth families.",
      solutions: [
        "DIFC & ADGM Foundation Registrations",
        "Cross-Border Wealth Protection & Asset Holding",
        "Tax Residency Certificate (TRC) Facilitation",
        "UAE Golden Visa & Family Residency Coordination",
        "Confidential Asset Structuring & Legacy Planning",
      ],
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

  const phoneUrl = "tel:+971527938572";

  return (
    <div className="relative bg-[#FAF6EE] min-h-screen pb-24 text-[#0F2137]">
      
      {/* Page Hero Banner */}
      <section className="relative pt-32 pb-28 md:pb-32 bg-[#FFFDF7] border-b border-[#A37B3B]/20 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#A37B3B]/5 filter blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A37B3B]/10 border border-[#A37B3B]/30 text-[#A37B3B] text-xs font-bold uppercase tracking-widest"
          >
            Executive Advisory Framework
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0F2137] tracking-tight"
          >
            Who We Serve &amp; Industry Reach
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Tailored Advisory Across 6 Client Segments &bull; Deep Sector Expertise in 25+ Industries across the UAE &amp; GCC.
          </motion.p>
        </div>

        {/* Curved SVG Section Divider transition to Cream section */}
        <SectionDivider position="bottom" fillColor="#FAF6EE" variant="curve" />
      </section>

      {/* Quick Jump Pills for Client Segments */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-3 py-4 border-b border-[#A37B3B]/20 text-xs">
          {clientSegments.map((segment) => (
            <a
              key={segment.id}
              href={`#${segment.id}`}
              className="px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#A37B3B]/25 text-[#0F2137] hover:text-[#FFFFFF] hover:bg-[#A37B3B] hover:border-[#A37B3B] transition-all duration-200 uppercase font-bold tracking-wider shadow-xs"
            >
              {segment.title}
            </a>
          ))}
        </div>
      </div>

      {/* Client Segments - Full Dedicated Alternating Visual Sections */}
      <div className="space-y-0 pt-10">
        {clientSegments.map((segment, idx) => {
          const Icon = segment.icon;
          const isEven = idx % 2 === 1;
          const whatsappUrl = `https://wa.me/971527938572?text=${encodeURIComponent(
            `Hello CGC, I would like to consult regarding advisory for ${segment.title}.`
          )}`;

          return (
            <section
              key={segment.id}
              id={segment.id}
              className={`scroll-mt-28 py-20 border-b border-[#A37B3B]/20 relative overflow-hidden ${
                isEven ? "bg-[#FFFDF7]" : "bg-[#FAF6EE]"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Image Column (Alternating Left/Right) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5 }}
                      className="relative rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FDF9F0] to-[#F5EFE0] border-2 border-[#A37B3B]/30 p-8 shadow-[0_16px_40px_rgba(163,123,59,0.12)] group hover:border-[#A37B3B] transition-all duration-300"
                    >
                      {/* Top Silk Category Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A37B3B]/10 border border-[#A37B3B]/30 text-[#A37B3B] text-xs font-bold uppercase tracking-widest mb-6">
                        <Icon className="w-4 h-4" />
                        <span>Client Segment 0{idx + 1}</span>
                      </div>

                      {/* 3D Showcase Graphic */}
                      <div className="relative w-full h-64 sm:h-72 mx-auto my-2 rounded-xl flex items-center justify-center overflow-hidden">
                        <Image
                          src={segment.image}
                          alt={segment.title}
                          fill
                          className="object-contain drop-shadow-[0_8px_20px_rgba(163,123,59,0.25)] group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Bottom Accent Strip */}
                      <div className="mt-4 pt-4 border-t border-[#A37B3B]/20 flex items-center justify-between text-xs text-[#0F2137] font-bold">
                        <span className="text-[#A37B3B]">CGC Advisory Framework</span>
                        <span className="uppercase tracking-wider">GCC Coverage</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#A37B3B]">
                        Segment Spotlight
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight leading-tight">
                        {segment.title}
                      </h2>
                      <p className="text-[#A37B3B] text-base sm:text-lg font-bold leading-relaxed border-l-2 border-[#A37B3B] pl-4">
                        {segment.tagline}
                      </p>
                    </div>

                    <p className="text-[#475569] text-sm leading-relaxed font-normal">
                      {segment.desc}
                    </p>

                    {/* Key Advisory Focus Solutions */}
                    <div className="bg-[#FFFFFF] rounded-xl p-6 border border-[#A37B3B]/25 shadow-xs space-y-3">
                      <h4 className="text-xs font-bold text-[#0F2137] uppercase tracking-wider">
                        Key Advisory Focus &amp; Deliverables:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {segment.solutions.map((sol, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-start gap-2 text-xs text-[#0F2137] font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#A37B3B] shrink-0 mt-0.5" />
                            <span className="leading-snug">{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#0F2137] hover:bg-[#A37B3B] transition-all duration-300 rounded-lg shadow-md uppercase gold-glow-hover"
                      >
                        <span>Discuss Requirements</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <div className="grid grid-cols-2 sm:flex items-center gap-2">
                        <a
                          href={phoneUrl}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-[#A37B3B] bg-[#FFFFFF] border border-[#A37B3B] hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-all duration-200 rounded-lg shadow-xs"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call</span>
                        </a>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#25D366] hover:bg-[#1faa53] transition-all duration-200 rounded-lg shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Sectors We Serve Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase">
            Sector Coverage &bull; 25+ Specialized Fields
          </h4>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight">
            Industry-Specific Legal &amp; Tax Solutions
          </h2>
          <p className="text-[#475569] text-sm font-normal">
            Our multi-disciplinary team brings deep domain knowledge across diverse commercial sectors in the GCC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-xl p-6 border border-[#A37B3B]/25 hover:border-[#A37B3B] hover:shadow-[0_10px_25px_rgba(163,123,59,0.12)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#A37B3B]/10 border border-[#A37B3B]/25 flex items-center justify-center text-[#A37B3B] mb-4 group-hover:bg-[#A37B3B] group-hover:text-[#FFFFFF] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0F2137] group-hover:text-[#A37B3B] transition-colors">
                  {sec.name}
                </h3>
                <p className="text-[#475569] text-xs mt-2 leading-relaxed font-normal">
                  {sec.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#FFFFFF] rounded-2xl p-10 md:p-14 border border-[#A37B3B]/30 text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase">
              Start Your Advisory Engagement
            </h4>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight">
              Ready to Accelerate Business Growth in the UAE?
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
              Book a consultation with our experienced legal advisors, tax agents, and corporate setup specialists today.
            </p>
          </div>

          <div className="pt-4 flex justify-center relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#0F2137] hover:bg-[#A37B3B] transition-all duration-300 rounded-lg shadow-md uppercase gold-glow-hover"
            >
              Book Free Advisory Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
