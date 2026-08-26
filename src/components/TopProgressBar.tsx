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
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 0.7 }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ originX: 0 }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent shadow-[0_0_12px_rgba(212,175,55,0.8)] z-[9999] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}
