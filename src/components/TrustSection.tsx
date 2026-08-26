"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Building2, Briefcase, Users, ShieldCheck } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

      const timer = setInterval(() => {
        start += Math.ceil(end / 40); // larger step size
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif">
      {count}
      {suffix}
    </span>
  );
}

export default function TrustSection() {
  const stats = [
    {
      icon: Award,
      label: "Years of Excellence",
      numberValue: 10,
      suffix: "+",
      description: "Trusted advisory excellence since 2014.",
    },
    {
      icon: Building2,
      label: "Clients Advised",
      numberValue: 1000,
      suffix: "+",
      description: "From startups to multinational enterprises.",
    },
    {
      icon: Briefcase,
      label: "Industries Served",
      numberValue: 25,
      suffix: "+",
      description: "Diverse sector expertise across GCC & global markets.",
    },
    {
      icon: Users,
      label: "Qualified Professionals",
      numberValue: 50,
      suffix: "+",
      description: "Experienced advisory, tax, and audit specialists.",
    },
  ];

  return (
    <section style={{ contentVisibility: "auto" }} className="relative py-16 bg-[#FAF6EE] border-y border-[#A37B3B]/20 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#FFFFFF] rounded-xl p-6 border border-[#A37B3B]/25 hover:border-[#A37B3B] hover:shadow-[0_12px_28px_rgba(163,123,59,0.16)] transition-all duration-300 group flex flex-col items-center text-center"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-lg bg-[#A37B3B]/10 border border-[#A37B3B]/25 flex items-center justify-center text-[#A37B3B] mb-4 group-hover:bg-[#A37B3B] group-hover:text-[#FFFFFF] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Counter */}
                <h3 className="text-3xl md:text-4xl font-bold text-[#0F2137] tracking-tight">
                  <Counter value={stat.numberValue} suffix={stat.suffix} />
                </h3>

                {/* Title */}
                <h4 className="text-xs font-bold text-[#A37B3B] mt-3 uppercase tracking-wider">
                  {stat.label}
                </h4>

                {/* Description */}
                <p className="text-[#475569] text-xs mt-2.5 leading-relaxed font-normal">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

