"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Users2,
  Calculator,
  FileSpreadsheet,
  BookOpenCheck,
  Briefcase
} from "lucide-react";

export default function ServicesPage() {
  const sections = [
    {
      id: "setup-structuring",
      title: "Business Setup & Structuring",
      tagline: "UAE Company Formation & Corporate Advisory",
      desc: "End-to-end company formation and structuring solutions across mainland and free zones in the UAE. We help businesses choose the right structure, obtain licenses, and establish a strong operational foundation.",
      image: "/images/formation-3d.png",
      icon: Building2,
      subServices: [
        "Company formation in mainland and free zones",
        "Legal structure advisory & corporate structuring",
        "Trade license, approvals & government liaison",
        "Shareholding, governance & regulatory compliance",
        "Branch, representative office & subsidiary setup",
        "Holding company setup",
        "Inheritance planning & succession structuring",
      ],
      benefits: [
        "Optimal entity selection for long-term tax & operational efficiency",
        "100% full foreign ownership and free zone / mainland flexibility",
        "Robust corporate governance protecting shareholders and assets",
      ],
      steps: ["Consultation & Discovery", "Entity & Name Approval", "License & Document Processing", "Bank Account & Structuring"],
    },
    {
      id: "visa-pro",
      title: "Visa & PRO Services",
      tagline: "Immigration, Visas & Government Liaison Solutions",
      desc: "Comprehensive visa and immigration solutions for investors, partners, employees, and dependents with efficient processing and full PRO support across all government departments.",
      image: "/images/hero-3d.png",
      icon: Users2,
      subServices: [
        "Investor, partner & employee visa solutions",
        "Dependent visa processing & renewals",
        "Emirates ID, medical & insurance assistance",
        "Labor card, work permits & attestations",
        "End-to-end PRO & government liaison",
      ],
      benefits: [
        "Seamless residency processing for founders, families, and teams",
        "Dedicated PRO handling all ministry and authority liaisons",
        "Timely compliance and renewal tracking without hassle",
      ],
      steps: ["Document Preparation", "Entry Permit Approval", "Medical & Emirates ID", "Visa Stamping & PRO Handover"],
    },
    {
      id: "tax-advisory",
      title: "Tax Advisory",
      tagline: "UAE Corporate Tax, VAT & Indirect Tax Experts",
      desc: "Practical tax advisory services to help businesses meet their tax obligations, optimize outcomes, and remain fully compliant with Federal Tax Authority (FTA) laws.",
      image: "/images/tax-3d.png",
      icon: Calculator,
      subServices: [
        "VAT registration, filing & advisory",
        "Corporate Tax registration, filing & advisory",
        "Tax Residency Certificate (TRC)",
        "Excise Tax & other indirect tax advisory",
      ],
      benefits: [
        "Mitigate FTA audit risks and statutory penalties",
        "Maximize legal tax exemptions and structured deductions",
        "Maintain clean tax residency status for cross-border operations",
      ],
      steps: ["Tax Assessment & Health Check", "Registration & Setup", "Filing Preparation", "Return Submission & Representation"],
    },
    {
      id: "audit-assurance",
      title: "Audit & Assurance",
      tagline: "Independent Audit, Control & Assurance Engagements",
      desc: "Independent audit and assurance services that strengthen credibility, ensure regulatory compliance, and support informed decision-making for stakeholders and financial institutions.",
      image: "/images/vat-3d.png",
      icon: FileSpreadsheet,
      subServices: [
        "Statutory audit for mainland & free zone companies",
        "Internal audit & control review",
        "Financial reporting & assurance engagements",
        "Agreed-upon procedures & special purpose reports",
        "Transfer Pricing report",
      ],
      benefits: [
        "Verifiable financial integrity for banks, investors, and authorities",
        "Robust internal controls mitigating fraud and financial risk",
        "Transfer pricing documentation complying with OECD & FTA standards",
      ],
      steps: ["Audit Planning & Scoping", "Fieldwork & Control Review", "Reporting & Review", "Final Audit Opinion Delivery"],
    },
    {
      id: "accounting-bookkeeping",
      title: "Accounting & Bookkeeping",
      tagline: "Accurate Records, Timely Reporting & Financial Control",
      desc: "Reliable accounting and bookkeeping services that ensure accurate financial records, timely reporting, and enhanced financial control for businesses of all scales.",
      image: "/images/accounting-3d.png",
      icon: BookOpenCheck,
      subServices: [
        "Bookkeeping & general ledger maintenance",
        "Accounts payable & receivable management",
        "Bank reconciliation & month-end closing",
        "Financial statements & management reporting",
        "Payroll processing & WPS compliance",
      ],
      benefits: [
        "IFRS-compliant financial statements prepared by chartered professionals",
        "Full WPS compliance for UAE wage protection requirements",
        "Clear financial visibility supporting strategic executive decisions",
      ],
      steps: ["Chart of Accounts Setup", "Transaction Logging", "Bank Reconciliation", "Management Reporting & Statements"],
    },
    {
      id: "advisory-consulting",
      title: "Advisory & Consulting",
      tagline: "Strategic Business Advisory, Feasibility & Growth",
      desc: "Strategic advisory services to help businesses navigate challenges, improve operational performance, and achieve sustainable growth across GCC and international markets.",
      image: "/images/hero-3d.png",
      icon: Briefcase,
      subServices: [
        "Business advisory & growth strategy",
        "Feasibility studies & market entry advisory",
        "Financial planning & budgeting",
        "Process improvement & operational efficiency",
        "UBO reporting & compliance advisory",
      ],
      benefits: [
        "Data-backed market entry strategies for regional expansion",
        "Streamlined operational processes boosting profit margins",
        "Full compliance with UBO, AML, and corporate transparency mandates",
      ],
      steps: ["Initial Discovery", "Strategic Analysis", "Implementation Roadmap", "Growth Execution & Review"],
    },
  ];

  return (
    <div className="relative bg-navy-deep min-h-screen pb-20">
      
      {/* Banner */}
      <section className="relative py-24 bg-navy-dark border-b border-gold-accent/10 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-accent/5 filter blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Our Core Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            End-to-end Business Setup, Visa, Tax, Audit, Accounting, and Strategic Advisory Solutions.
          </motion.p>
        </div>
      </section>

      {/* Services Detail Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-32">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={section.id}
              id={section.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-28 ${
                isEven ? "" : "lg:flex lg:flex-row-reverse"
              }`}
            >
              
              {/* Graphic (5 cols) */}
              <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] flex justify-center items-center">
                {/* Background glowing frame */}
                <div className="absolute -inset-4 border border-gold-accent/5 rounded-2xl pointer-events-none animate-pulse-glow" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full animate-float-slow"
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.15)] rounded-2xl"
                  />
                </motion.div>
              </div>

              {/* Text details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gold-accent uppercase tracking-widest">
                      {section.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mt-0.5">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <p className="text-white/75 text-sm leading-relaxed">
                  {section.desc}
                </p>

                {/* Sub-services Grid */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-semibold uppercase text-gold-accent tracking-wider">
                    Core Offerings & Capabilities:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-white/70">
                    {section.subServices.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="glass-card rounded-xl p-5 border-l-4 border-l-gold-accent space-y-2">
                  <h4 className="text-xs font-semibold uppercase text-white tracking-wider">
                    Key Value Outcomes:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/60 font-light">
                    {section.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold-accent rounded-full shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Workflow process */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase text-gold-accent tracking-wider">
                    Execution Process:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {section.steps.map((step, stepIdx) => (
                      <div key={stepIdx} className="glass-card rounded-lg p-3 text-center border border-white/5 relative">
                        <span className="text-[10px] text-gold-accent font-bold block mb-1">0{stepIdx + 1}</span>
                        <span className="text-[10px] text-white font-medium block leading-tight">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 flex">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold tracking-widest text-navy-dark bg-gold-accent hover:bg-gold-light transition-all duration-300 rounded-md uppercase shadow-lg gold-glow-hover"
                  >
                    Consult on {section.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          );
        })}
      </section>

    </div>
  );
}

