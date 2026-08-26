"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("cgc_loaded")) {
      setIsLoading(false);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("cgc_loaded", "true");
          }
          setTimeout(() => setIsLoading(false), 120);
          return 100;
        }
        return prev + 25;
      });
    }, 15);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-deep pointer-events-none"
        >
          {/* Ambient glowing background orbs - hidden on mobile to boost mobile GPU score */}
          <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-accent/5 filter blur-[60px]" />
          <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-accent/5 filter blur-[60px]" />

          {/* Logo and Typography */}
          <div className="relative z-10 text-center flex flex-col items-center">
            {/* Official Calligraphy Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 relative flex items-center justify-center"
            >
              <Image
                src="/images/logo.png"
                alt="Chartered Growth Consultants Logo"
                width={240}
                height={90}
                priority
                className="h-24 sm:h-28 w-auto object-contain rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg tracking-[0.25em] font-light text-white uppercase"
            >
              Chartered Growth
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs tracking-[0.4em] text-gold-accent uppercase mt-2 font-medium"
            >
              Consultants
            </motion.p>

            {/* Percentage Display */}
            <div className="mt-12 overflow-hidden h-24 flex items-center justify-center">
              <motion.span
                className="text-6xl md:text-8xl font-thin text-gold-accent tracking-tighter preloader-count font-serif"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {progress}
              </motion.span>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-[1px] bg-white/10 mt-6 relative overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-accent to-gold-light"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.6 }}
              className="text-[10px] tracking-[0.2em] text-white uppercase mt-4"
            >
              Securing UAE Growth
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
