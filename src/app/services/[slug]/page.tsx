import Metadata from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FileCheck,
  ShieldCheck,
  Scale,
  FileSpreadsheet,
  Globe,
  Users2,
  Calculator,
  BookOpenCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Shield,
  Clock,
  Briefcase,
  ChevronRight,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { SERVICES_DATA, SERVICE_CATEGORIES, ServiceDetail } from "@/data/servicesData";

const ICON_MAP = {
  FileCheck,
  ShieldCheck,
  Scale,
  FileSpreadsheet,
  Globe,
  Users2,
  Calculator,
  BookOpenCheck,
  Building2,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return {
      title: "Service Not Found | Chartered Growth Consultants",
    };
  }

  return {
    title: `${service.title} | Chartered Growth Consultants FZCO`,
    description: service.shortDesc,
    keywords: [
      service.title,
      service.categoryName,
      "UAE tax consultancy",
      "Dubai business advisory",
      "Chartered Growth Consultants",
    ],
    openGraph: {
      title: `${service.title} | Chartered Growth Consultants`,
      description: service.shortDesc,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service: ServiceDetail | undefined = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  const IconComponent = ICON_MAP[service.iconName] || FileCheck;

  // Get related services
  const relatedServices = service.relatedSlugs
    .map((rSlug) => SERVICES_DATA[rSlug])
    .filter((s): s is ServiceDetail => s !== undefined);

  return (
    <div className="relative bg-[#FAF6EE] min-h-screen pb-24 text-[#0F2137]">
      {/* Background glow effects */}
      <div className="hidden md:block absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#A37B3B]/5 filter blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute top-96 right-10 w-[400px] h-[400px] rounded-full bg-[#A37B3B]/5 filter blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FFFDF7] border-b border-[#A37B3B]/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#475569] mb-8 font-medium">
            <Link href="/" className="hover:text-[#A37B3B] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <Link href="/services" className="hover:text-[#A37B3B] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span className="text-[#A37B3B] font-bold">{service.categoryName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A37B3B]/10 border border-[#A37B3B]/30 text-[#A37B3B] text-xs font-bold uppercase tracking-widest">
                <IconComponent className="w-4 h-4" />
                <span>{service.categoryName}</span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F2137] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-[#A37B3B] text-base sm:text-lg font-medium leading-relaxed border-l-2 border-[#A37B3B] pl-4">
                {service.tagline}
              </p>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-normal">
                {service.shortDesc}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold tracking-widest text-[#FFFFFF] bg-[#0F2137] hover:bg-[#A37B3B] transition-all duration-300 rounded-lg shadow-md uppercase gold-glow-hover"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+971527938572"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold tracking-widest text-[#A37B3B] bg-[#FFFFFF] border border-[#A37B3B] hover:bg-[#A37B3B] hover:text-[#FFFFFF] transition-all duration-300 rounded-lg shadow-xs uppercase"
                >
                  <PhoneCall className="w-4 h-4 text-[#A37B3B]" />
                  +971 52 793 8572
                </a>
              </div>

              {/* Trust badges */}
              <div className="pt-6 border-t border-[#F0EBE1] flex flex-wrap items-center gap-6 text-xs text-[#475569] font-bold">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#A37B3B]" />
                  FTA Registered Advisors
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#A37B3B]" />
                  100% Guaranteed Compliance
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#A37B3B]" />
                  Fast Processing Timelines
                </span>
              </div>

            </div>

            {/* Right Graphic Card (5 Cols) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="glass-card p-8 rounded-2xl border border-gold-accent/20 relative shadow-2xl w-full max-w-md space-y-6">
                <div className="relative w-full h-[220px] sm:h-[260px] flex justify-center items-center">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    priority
                    className="object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
                  />
                </div>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-bold text-gold-accent uppercase tracking-wider">
                    Core Solutions Included:
                  </h4>
                  <ul className="space-y-2 text-xs text-white/80">
                    {service.subServices.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-24">
        
        {/* Full Overview & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Service Overview & UAE Legal Context
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
              {service.fullDesc}
            </p>

            {/* Compliance callout box */}
            {service.complianceNotes && (
              <div className="glass-card rounded-xl p-6 border-l-4 border-l-gold-accent bg-gold-accent/5 space-y-2 mt-6">
                <div className="flex items-center gap-2 text-gold-accent font-semibold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>UAE Regulatory & Mandatory Requirement:</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {service.complianceNotes}
                </p>
              </div>
            )}
          </div>

          {/* Target Audience Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card rounded-xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-gold-accent font-bold text-sm uppercase tracking-wider border-b border-white/10 pb-3">
                <Briefcase className="w-4 h-4" />
                <span>Who Needs This Service?</span>
              </div>
              <ul className="space-y-3 text-xs text-white/70">
                {service.whoNeedsThis.map((target, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-accent mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{target}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Key Features / Capabilities */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
              Core Capabilities
            </h4>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              What We Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-6 border border-white/10 hover:border-gold-accent/40 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">{feat.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed pl-11">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Execution Workflow Steps */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
              How We Work
            </h4>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Step-by-Step Execution Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.steps.map((st, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-6 border border-white/10 relative flex flex-col justify-between group hover:border-gold-accent/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="text-2xl font-serif font-bold text-gold-accent block">
                    {st.step}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Value & Outcomes */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-gold-accent/20 space-y-6">
          <div className="space-y-2">
            <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
              Measurable Results
            </h4>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Key Value & Outcomes for Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-10 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
                Got Questions?
              </h4>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="glass-card rounded-xl border border-white/10 p-6 group cursor-pointer transition-all duration-300 [&[open]]:border-gold-accent/40"
                >
                  <summary className="text-sm sm:text-base font-bold text-white flex items-center justify-between gap-4 list-none">
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-gold-accent shrink-0" />
                      {faq.question}
                    </span>
                    <span className="text-gold-accent font-bold group-open:rotate-180 transition-transform">
                      ↓
                    </span>
                  </summary>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pt-4 pl-6 border-t border-white/5 mt-4">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="space-y-8 pt-10 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
                  Explore Complementary Services
                </h4>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight mt-1">
                  Related Advisory Solutions
                </h2>
              </div>
              <Link
                href="/services"
                className="text-xs font-semibold text-gold-accent hover:text-white uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                View All Solutions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel, idx) => {
                const RelIcon = ICON_MAP[rel.iconName] || FileCheck;
                return (
                  <Link
                    key={idx}
                    href={`/services/${rel.slug}`}
                    className="glass-card rounded-xl p-6 border border-white/10 hover:border-gold-accent/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center text-gold-accent">
                        <RelIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-gold-accent transition-colors">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-white/60 line-clamp-3 leading-relaxed font-light">
                        {rel.shortDesc}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-gold-accent font-semibold uppercase tracking-wider">
                      <span>Read Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="glass-card rounded-2xl p-10 md:p-14 border border-gold-accent/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
              Schedule A Professional Consultation
            </h4>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Ready to Secure Your UAE Tax & Compliance Operations?
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Speak directly with our chartered tax advisors and legal corporate setup experts today.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-navy-dark bg-gold-accent hover:bg-gold-light transition-all duration-300 rounded-md shadow-lg uppercase gold-glow-hover w-full sm:w-auto"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:kaid@charteredgrowth.ae"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest text-white border border-white/20 hover:bg-white/5 transition-all duration-300 rounded-md uppercase w-full sm:w-auto"
            >
              kaid@charteredgrowth.ae
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
