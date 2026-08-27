"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, HeartHandshake, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";

export default function WhyChooseUs() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "We act with honesty, transparency, and strong ethical standards in everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Committed to delivering the highest quality through deep expertise, rigor, and continuous improvement.",
    },
    {
      icon: HeartHandshake,
      title: "Client Trust",
      desc: "We build lasting relationships by understanding our clients' needs and consistently exceeding expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We embrace new ideas and smarter approaches to solve complex challenges and create sustainable value.",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "We believe in the power of teamwork – within our firm and with our clients – to achieve greater outcomes.",
    },
    {
      icon: CheckCircle2,
      title: "Accountability",
      desc: "We take ownership of our commitments and deliver results with responsibility and unwavering reliability.",
    },
  ];

  return (
    <section style={{ contentVisibility: "auto" }} className="relative pt-24 pb-28 md:pb-32 bg-[#FAF6EE] overflow-hidden border-t border-[#A37B3B]/20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-xs font-semibold tracking-widest text-[#A37B3B] uppercase">
            Our Foundation &amp; Values
          </h4>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2137] tracking-tight leading-tight">
            Why Businesses Choose CGC
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed font-normal">
            Our core values shape who we are, drive how we work, and reflect our commitment to every client we partner with.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            const number = String(idx + 1).padStart(2, '0');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FFFFFF] rounded-xl p-8 border-t-4 border-t-[#A37B3B] border-x border-b border-[#A37B3B]/25 hover:border-[#A37B3B] hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(163,123,59,0.16)] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Ambient top light reflection */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A37B3B]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#A37B3B]/10 transition-colors" />

                {/* Top Watermark Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A37B3B]/25 via-[#A37B3B]/10 to-transparent border border-[#A37B3B]/40 flex items-center justify-center text-[#A37B3B] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(163,123,59,0.35)] transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-serif font-bold text-[#A37B3B]/30 group-hover:text-[#A37B3B]/60 transition-colors select-none">
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
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Curved SVG Divider Transitioning into White FAQ Section */}
      <SectionDivider position="bottom" fillColor="#FFFFFF" variant="wave" flipX />
    </section>
  );
}

