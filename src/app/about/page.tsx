"use client";

import { motion } from "framer-motion";
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
  Check
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
            Building Businesses. <span className="text-gold-gradient">Earning Trust. Delivering Growth.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Chartered Growth Consultants FZCO (CGC) — Founded 2014 &bull; Headquarters: IFZA Business Park, Dubai, UAE.
          </motion.p>
        </div>
      </section>

      {/* Corporate Overview & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Story */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase border-l-2 border-gold-accent pl-3">
              Company Overview
            </h4>
            <h2 className="text-3xl font-serif font-bold text-white tracking-tight leading-tight">
              Empowering Entrepreneurs & Enterprises Since 2014.
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Since 2014, Chartered Growth Consultants FZCO has partnered with entrepreneurs, family businesses, investors, and corporate organisations to navigate complexity, strengthen governance, and achieve sustainable growth.
            </p>
            <p className="text-white/65 text-sm leading-relaxed">
              Through strategic advisory, tax expertise, financial insight, and long-term partnership, we help businesses move forward with confidence. Operating out of IFZA Business Park, Dubai, our team of 50+ qualified professionals brings multidisciplinary expertise across business setup, corporate tax, statutory audit, bookkeeping, and advisory services.
            </p>
          </div>

          {/* Vision, Mission, Purpose */}
          <div className="lg:col-span-5 space-y-6">
            {/* Vision Card */}
            <div className="glass-card rounded-xl p-6 border-l-4 border-l-gold-accent relative">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Our Vision</h3>
                  <p className="text-white/70 text-xs mt-2 leading-relaxed">
                    To be the most trusted and dynamic advisory firm, empowering businesses to achieve their highest potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="glass-card rounded-xl p-6 border-l-4 border-l-gold-accent relative">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Our Mission</h3>
                  <p className="text-white/70 text-xs mt-2 leading-relaxed">
                    To simplify complexity, create clarity, and deliver practical solutions that drive growth, compliance, and value.
                  </p>
                </div>
              </div>
            </div>

            {/* Purpose Card */}
            <div className="glass-card rounded-xl p-6 border-l-4 border-l-gold-accent relative">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Our Purpose</h3>
                  <p className="text-white/70 text-xs mt-2 leading-relaxed">
                    To build businesses, earn trust, and deliver growth with integrity and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Chairman's Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-gold-accent/25 relative overflow-hidden">
          <div className="hidden md:block absolute top-0 right-0 w-80 h-80 bg-gold-accent/5 rounded-full filter blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase border-l-2 border-gold-accent pl-3">
              Leadership Insights
            </h4>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Message from the Founder & Managing Partner
            </h2>

            <blockquote className="text-gold-accent text-lg font-serif italic border-l-4 border-gold-accent pl-4 py-1">
              &ldquo;Success is measured not by the number of businesses we advise, but by the number of businesses that continue to trust us.&rdquo;
            </blockquote>

            <div className="space-y-4 text-white/75 text-sm leading-relaxed">
              <p>
                Since our inception in 2014, our mission has remained clear – to be a trusted partner in our clients&apos; growth journey. We set out with a simple belief: that with the right guidance, clarity, and integrity, businesses can scale new heights and create lasting impact.
              </p>
              <p>
                Over the years, we have had the privilege of working with entrepreneurs, family businesses, investors, and corporates across diverse industries. Every engagement has strengthened our commitment to deliver solutions that are practical, sustainable, and tailored to our clients&apos; unique aspirations.
              </p>
              <p>
                At CGC, our people are our greatest strength. Their expertise, passion, and dedication drive the quality of our work and the trust our clients place in us. Together, we continue to build relationships that go beyond advisory – relationships that empower businesses to grow with confidence.
              </p>
              <p className="pt-2 font-medium text-white">
                Here&apos;s to building a stronger, smarter, and more prosperous tomorrow – together.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="text-base font-bold text-white">Kaid Khojumabhai Barad</h4>
                <p className="text-xs text-gold-accent uppercase tracking-wider font-semibold">
                  Founder & Managing Partner &bull; Chartered Growth Consultants FZCO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our 5-Step Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
            How We Deliver Value
          </h4>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Our 5-Step Advisory Approach
          </h2>
          <p className="text-white/60 text-xs">
            A proven methodology engineered to achieve sustainable results and total regulatory clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {approach.map((a, idx) => {
            const Icon = a.icon;
            return (
              <div key={idx} className="glass-card rounded-xl p-6 hover:border-gold-accent/40 transition-all duration-300 relative group">
                <span className="text-xs font-mono font-bold text-gold-accent block mb-3 opacity-60">
                  STEP {a.step}
                </span>
                <div className="w-10 h-10 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent mb-4 group-hover:bg-gold-accent group-hover:text-navy-dark transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{a.title}</h3>
                <p className="text-white/60 text-xs mt-2 leading-relaxed">
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
          <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
            Our Principles
          </h4>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="glass-card rounded-xl p-8 hover:border-gold-accent/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gold-accent/5 border border-gold-accent/15 flex items-center justify-center text-gold-accent mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{v.title}</h3>
                <p className="text-white/60 text-xs mt-3 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience Milestone Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
            History & Growth
          </h4>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Our Journey Since 2014
          </h2>
        </div>

        <div className="relative border-l border-gold-accent/20 max-w-3xl mx-auto pl-6 md:pl-10 space-y-12">
          {milestones.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-navy-deep border-2 border-gold-accent flex items-center justify-center timeline-dot shadow-md z-15" />
              <div className="glass-card rounded-xl p-6 hover:border-gold-accent/30 transition-all duration-300">
                <span className="text-xs font-bold text-gold-accent block mb-1 font-mono">
                  {m.year}
                </span>
                <h3 className="text-base font-bold text-white">
                  {m.title}
                </h3>
                <p className="text-white/60 text-xs mt-2 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

