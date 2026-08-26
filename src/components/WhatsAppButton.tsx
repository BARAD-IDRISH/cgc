"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/971527938572?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20regarding%20UAE%20business%20advisory%20services.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1ebd59] transition-colors duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Outer pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
      
      {/* Floating tooltip */}
      <div className="absolute right-16 bg-navy-dark text-white text-xs font-medium py-1.5 px-3 rounded-md shadow-md border border-gold-accent/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:flex items-center gap-1.5 hidden group-hover:block">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Speak to a Consultant
      </div>
      
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
