"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Users2,
  Calculator,
  FileSpreadsheet,
  BookOpenCheck,
  Briefcase,
  ArrowRight
} from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      title: "Business Setup & Structuring",
      desc: "End-to-end company formation and structuring across mainland & free zones in the UAE. License approvals, legal structures, holding setups, and succession planning.",
      icon: Building2,
      link: "/services#setup-structuring",
    },
    {
      title: "Visa & PRO Services",
      desc: "Comprehensive visa and immigration solutions for investors, partners, employees, and dependents with efficient processing and full PRO support.",
      icon: Users2,
      link: "/services#visa-pro",
    },
    {
      title: "Tax Advisory",
      desc: "Practical tax advisory services for Corporate Tax, VAT registration & filing, Tax Residency Certificates (TRC), and Excise Tax compliance.",
      icon: Calculator,
      link: "/services#tax-advisory",
    },
    {
      title: "Audit & Assurance",
      desc: "Independent statutory and internal audit services that strengthen credibility, ensure compliance, and support informed decision-making.",
      icon: FileSpreadsheet,
      link: "/services#audit-assurance",
    },
    {
      title: "Accounting & Bookkeeping",
      desc: "Reliable bookkeeping, bank reconciliations, management reporting, financial statements, and payroll processing with WPS compliance.",
      icon: BookOpenCheck,
      link: "/services#accounting-bookkeeping",
    },
    {
      title: "Advisory & Consulting",
      desc: "Strategic business advisory, growth strategy, feasibility studies, market entry, financial planning, and UBO compliance advisory.",
      icon: Briefcase,
      link: "/services#advisory-consulting",
    },
  ];

  return (
    <section className="relative py-24 bg-navy-dark overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-accent/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gold-accent/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
            What We Do
          </h4>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
            Our Core Advisory Services
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Integrated, practical, and results-driven solutions designed to deliver measurable value and sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-xl p-8 hover:border-gold-accent/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gold-accent/5 border border-gold-accent/15 flex items-center justify-center text-gold-accent mb-6 group-hover:bg-gold-accent group-hover:text-navy-dark transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-accent transition-colors duration-250">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-xs mt-3 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Learn More CTA */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-xs text-gold-accent hover:text-white font-semibold tracking-wider uppercase transition-colors"
                  >
                    View Service Details
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm">
            Looking for customized advisory or setup guidance for your business?{" "}
            <Link href="/contact" className="text-gold-accent font-semibold hover:underline">
              Speak to our consultants &rarr;
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}

