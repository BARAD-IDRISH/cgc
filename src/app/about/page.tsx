"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Eye,
  Target,
  ShieldCheck,
  Award,
  HeartHandshake,
  Lightbulb,
  Users,
  CheckCircle2,
  Search,
  Sparkles,
  Zap,
  TrendingUp,
  Check,
  ArrowRight,
  MapPin,
  Building2,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "We act with honesty, transparency, and strong ethical standards in everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Committed to delivering the highest quality through expertise, rigor, and continuous improvement.",
    },
    {
      icon: HeartHandshake,
      title: "Client Trust",
      desc: "We build lasting relationships by understanding our clients' needs and consistently exceeding expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We embrace new ideas and smarter approaches to solve complex challenges and create value.",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "We believe in the power of teamwork – within our firm and with our clients – to achieve greater outcomes.",
    },
    {
      icon: CheckCircle2,
      title: "Accountability",
      desc: "We take ownership of our commitments and deliver results with responsibility and reliability.",
    },
  ];

  const milestones = [
    { year: "2014", title: "The Beginning", desc: "Founded in the UAE with a mission to deliver high-quality corporate advisory, consulting, and tax solutions." },
    { year: "2016–2018", title: "Building Foundations", desc: "Expanded service offerings and built a strong client base across the UAE and GCC region." },
    { year: "2019–2021", title: "Growing Together", desc: "Strengthened our multi-disciplinary team, enhanced capabilities, and deepened client engagements." },
    { year: "2022–2024", title: "Expanding Horizons", desc: "Broadened reach internationally and delivered strategic solutions at scale for global clients." },
    { year: "2025 & Beyond", title: "Committed to the Future", desc: "Continuing to innovate, empower, and partner for sustainable growth and long-term impact." },
  ];

  const approach = [
    { step: "01", title: "Discover", desc: "We listen, understand your goals, and analyze the landscape to identify opportunities and challenges.", icon: Search },
    { step: "02", title: "Strategize", desc: "We craft tailored strategies and solutions aligned with your objectives and market realities.", icon: Sparkles },
    { step: "03", title: "Execute", desc: "Our experts implement with precision, leveraging best practices and proven methodologies.", icon: Zap },
    { step: "04", title: "Optimize", desc: "We monitor, measure, and refine to ensure efficiency, compliance, and sustainable improvement.", icon: TrendingUp },
    { step: "05", title: "Deliver", desc: "We deliver measurable results that drive growth, value, and long-term success.", icon: Check },
  ];

  const phoneUrl = "tel:+971527938572";
  const whatsappUrl = "https://wa.me/971527938572?text=Hello%20CGC%2C%20I%20would%20like%20to%20consult%20with%20your%20advisory%20team.";

  return (
    <div className="relative bg-[#FAF6EE] min-h-screen pb-24 text-[#0F2137]">
      
      {/* Page Hero Banner with Dubai Skyline Background */}
      <section className="relative py-28 bg-[#FFFDF7] border-b border-[#A37B3B]/20 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A37B3B]/10 border border-[#A37B3B]/30 text-[#A37B3B] text-xs font-bold uppercase tracking-widest"
          >
            Chartered Growth Consultants FZCO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0F2137] tracking-tight"
          >
            Building Businesses. <span className="text-[#A37B3B]">Earning Trust. Delivering Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Founded in 2014 &bull; Registered Free Zone Company (FZCO) &bull; Headquartered at IFZA Business Park, Dubai, UAE.
          </motion.p>
        </div>
      </section>

      {/* Corporate Overview with Real Editorial Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Image Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#A37B3B]/30 shadow-xl group">
              <Image
                src="/images/editorial/dubai-skyline.png"
                alt="Dubai DIFC Financial District"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A37B3B] bg-[#0F2137]/90 px-3 py-1 rounded-full border border-[#A37B3B]/40">
                    Dubai Corporate Presence
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white">
                    Trusted Advisory Across Free Zones &amp; UAE Mainland
                  </h3>
                </div>
              </div>
            </div>

            {/* Office Presence Pill */}
            <div className="bg-[#FFFFFF] rounded-xl p-4 border border-[#A37B3B]/25 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#A37B3B]/10 border border-[#A37B3B]/25 flex items-center justify-center text-[#A37B3B]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F2137] uppercase tracking-wider">
                    Dubai Silicon Oasis Office
                  </h4>
                  <p className="text-[#475569] text-xs font-normal">
                    IFZA Business Park, Building A1, Dubai, UAE
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#A37B3B] bg-[#A37B3B]/10 px-3 py-1 rounded-full border border-[#A37B3B]/20">
                50+ Specialists
              </span>
            </div>
          </div>

          {/* Story & Core Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase border-l-2 border-[#A37B3B] pl-3">
                Company Overview
              </h4>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight leading-tight">
                Empowering Entrepreneurs &amp; Enterprises Since 2014.
              </h2>
            </div>

            <p className="text-[#475569] text-sm leading-relaxed font-normal">
              Since 2014, Chartered Growth Consultants FZCO has partnered with entrepreneurs, family businesses, investors, and corporate organisations to navigate complexity, strengthen governance, and achieve sustainable growth.
            </p>

            <p className="text-[#475569] text-sm leading-relaxed font-normal">
              Operating out of IFZA Business Park, Dubai, our team of 50+ qualified professionals brings multidisciplinary expertise across business setup, corporate tax, statutory audit, bookkeeping, and strategic advisory services.
            </p>

            {/* Vision, Mission, Purpose Stack */}
            <div className="space-y-4 pt-2">
              <div className="bg-[#FFFFFF] rounded-xl p-4 border-l-4 border-l-[#A37B3B] border-x border-b border-[#A37B3B]/25 shadow-xs flex items-start gap-3">
                <Eye className="w-5 h-5 text-[#A37B3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0F2137] uppercase tracking-wider">Our Vision</h4>
                  <p className="text-[#475569] text-xs mt-1 leading-relaxed">
                    To be the most trusted and dynamic advisory firm, empowering businesses to achieve their highest potential.
                  </p>
                </div>
              </div>

              <div className="bg-[#FFFFFF] rounded-xl p-4 border-l-4 border-l-[#A37B3B] border-x border-b border-[#A37B3B]/25 shadow-xs flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#A37B3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0F2137] uppercase tracking-wider">Our Mission</h4>
                  <p className="text-[#475569] text-xs mt-1 leading-relaxed">
                    To simplify complexity, create clarity, and deliver practical solutions that drive growth, compliance, and long-term value.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership Insights & Chairman's Message with Portrait */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="bg-[#FFFDF7] rounded-2xl p-8 sm:p-12 border-2 border-[#A37B3B]/30 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Leadership Portrait */}
            <div className="lg:col-span-4 space-y-4 text-center">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 mx-auto rounded-2xl overflow-hidden border-2 border-[#A37B3B] shadow-md">
                <Image
                  src="/images/editorial/managing-partner.png"
                  alt="Kaid Khojumabhai Barad"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-[#0F2137]">Kaid Khojumabhai Barad</h3>
                <p className="text-xs text-[#A37B3B] uppercase tracking-wider font-bold mt-0.5">
                  Founder &amp; Managing Partner
                </p>
                <p className="text-[11px] text-[#475569] font-medium">
                  Senior Tax Advisor &bull; Chartered Growth Consultants FZCO
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <a
                  href={phoneUrl}
                  className="inline-flex items-center gap-1 py-1.5 px-3 text-[10px] font-bold uppercase tracking-wider text-[#A37B3B] bg-[#FFFFFF] border border-[#A37B3B] hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-all rounded-md"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Partner</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 py-1.5 px-3 text-[10px] font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#25D366] hover:bg-[#1faa53] transition-all rounded-md"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Letter Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#A37B3B]">
                  Leadership Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2137]">
                  A Letter from Our Founder
                </h2>
              </div>

              <blockquote className="text-[#0F2137] text-base sm:text-lg font-serif italic border-l-4 border-[#A37B3B] pl-4 py-1">
                &ldquo;Success is measured not by the number of businesses we advise, but by the number of businesses that continue to trust us year after year.&rdquo;
              </blockquote>

              <div className="space-y-3.5 text-[#475569] text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  Since our inception in 2014, our mission has remained clear – to be a trusted partner in our clients&apos; growth journey. We set out with a simple belief: that with the right guidance, clarity, and integrity, businesses can scale new heights and create lasting impact.
                </p>
                <p>
                  Over the years, we have had the privilege of working with entrepreneurs, family businesses, investors, and corporates across diverse industries in the UAE. Every engagement has strengthened our commitment to deliver solutions that are practical, sustainable, and tailored to our clients&apos; unique aspirations.
                </p>
                <p>
                  At CGC, our people are our greatest strength. Their expertise, passion, and dedication drive the quality of our work and the trust our clients place in us.
                </p>
              </div>

              <div className="pt-3 border-t border-[#A37B3B]/20 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F2137] tracking-wider uppercase">
                  Chartered Growth Consultants FZCO
                </span>
                <span className="text-xs font-semibold text-[#A37B3B]">
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Our 5-Step Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase">
            How We Deliver Value
          </h4>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight">
            Our 5-Step Advisory Approach
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm font-normal">
            A structured methodology engineered to achieve sustainable results and total regulatory clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {approach.map((a, idx) => {
            const Icon = a.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-xl p-6 border border-[#A37B3B]/25 hover:border-[#A37B3B] hover:shadow-[0_10px_25px_rgba(163,123,59,0.12)] transition-all duration-300 relative group"
              >
                <span className="text-xs font-mono font-bold text-[#A37B3B] block mb-3 opacity-80">
                  STEP {a.step}
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#A37B3B]/10 border border-[#A37B3B]/25 flex items-center justify-center text-[#A37B3B] mb-4 group-hover:bg-[#A37B3B] group-hover:text-[#FFFFFF] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0F2137]">{a.title}</h3>
                <p className="text-[#475569] text-xs mt-2 leading-relaxed font-normal">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase">
            Our Operating Principles
          </h4>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            const number = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-xl p-8 border-t-4 border-t-[#A37B3B] border-x border-b border-[#A37B3B]/25 hover:border-[#A37B3B] hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(163,123,59,0.15)] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#A37B3B]/10 border border-[#A37B3B]/25 flex items-center justify-center text-[#A37B3B] group-hover:bg-[#A37B3B] group-hover:text-[#FFFFFF] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-serif font-bold text-[#A37B3B]/30 select-none">
                      {number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F2137] group-hover:text-[#A37B3B] transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-[#475569] text-xs mt-3 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase">
            History &amp; Track Record
          </h4>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight">
            Our Journey Since 2014
          </h2>
        </div>

        <div className="relative border-l-2 border-[#A37B3B]/30 max-w-3xl mx-auto pl-6 md:pl-10 space-y-10">
          {milestones.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative"
            >
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#A37B3B] border-2 border-[#FFFFFF] shadow-md z-15" />
              <div className="bg-[#FFFFFF] rounded-xl p-6 border border-[#A37B3B]/25 hover:border-[#A37B3B] transition-all duration-300 shadow-xs">
                <span className="text-xs font-bold text-[#A37B3B] block mb-1 font-mono">
                  {m.year}
                </span>
                <h3 className="text-base font-bold text-[#0F2137]">
                  {m.title}
                </h3>
                <p className="text-[#475569] text-xs mt-2 leading-relaxed font-normal">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="bg-[#FFFFFF] rounded-2xl p-10 md:p-14 border border-[#A37B3B]/30 text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase">
              Schedule Your Session
            </h4>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight">
              Speak to Our Managing Partners
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
              Book a confidential consultation at our Dubai office or via video conference.
            </p>
          </div>

          <div className="pt-4 flex justify-center relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#0F2137] hover:bg-[#A37B3B] transition-all duration-300 rounded-lg shadow-md uppercase gold-glow-hover"
            >
              Book Partner Advisory Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
