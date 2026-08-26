"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loading bar animation on route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 0.85 }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ originX: 0 }}
          className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#00F0FF] via-[#00A8FF] via-gold-accent to-white shadow-[0_0_15px_#00F0FF,0_0_25px_#D4AF37] z-[9999] pointer-events-none flex items-center justify-end"
        >
          {/* Glowing laser tip at the leading right edge */}
          <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_#FFFFFF,0_0_20px_#00F0FF] translate-x-1" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

