"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, HeartHandshake, Lightbulb, Users, CheckCircle2 } from "lucide-react";

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
    <section style={{ contentVisibility: "auto" }} className="relative py-24 bg-navy-dark overflow-hidden">
      {/* Background radial glow - hidden on mobile for performance */}
      <div className="hidden md:block absolute top-1/2 left-1/4 w-[380px] h-[380px] rounded-full bg-gold-accent/5 filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase">
            Our Foundation & Values
          </h4>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
            Why Businesses Choose CGC
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Our core values shape who we are, drive how we work, and reflect our commitment to every client we partner with.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-8 sm:p-9 hover:border-gold-accent/40 transition-all duration-300 group shadow-md hover:shadow-xl hover:-translate-y-1.5"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-accent/5 border border-gold-accent/20 flex items-center justify-center text-gold-accent mb-6 group-hover:bg-gold-accent group-hover:text-navy-dark group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gold-accent transition-colors duration-200">
                  {v.title}
                </h3>
                <p className="text-white/60 text-xs mt-3 leading-relaxed font-normal">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

