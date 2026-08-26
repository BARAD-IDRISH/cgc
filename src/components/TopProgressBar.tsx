"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger progress bar animation on route changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none">
          {/* Main glowing progress bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 0.85 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="h-1 bg-gradient-to-r from-gold-accent via-[#FFF8DC] to-white shadow-[0_0_20px_rgba(255,255,255,1),0_0_10px_rgba(212,175,55,0.9)] relative"
          >
            {/* Leading Laser White Orb Tip */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#ffffff,0_0_8px_#d4af37]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

