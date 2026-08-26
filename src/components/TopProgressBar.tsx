"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Briefly trigger loading bar animation on route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed top-0 left-0 right-0 h-[4px] bg-black/80 backdrop-blur-md border-b border-gold-accent/20 z-[9999] pointer-events-none overflow-hidden">
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 0.8 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ originX: 0 }}
            className="h-full bg-gradient-to-r from-gold-accent via-[#FFF8DC] to-white shadow-[0_0_15px_#FFFFFF] relative"
          >
            {/* Leading Laser Orb Head */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_12px_#FFFFFF,_0_0_20px_#D4AF37]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

