"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Shield, ArrowUpRight, Clock } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-navy-deep border-t border-gold-accent/15 pt-20 pb-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold-accent/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group">
              <Image
                src="/images/logo-light.png"
                alt="Chartered Growth Consultants Logo"
                width={140}
                height={45}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col border-l border-gold-accent/30 pl-3">
                <span className="font-serif text-white text-[14px] sm:text-[15px] font-bold uppercase tracking-widest leading-tight">
                  Chartered Growth
                </span>
                <span className="text-[10px] text-gold-accent uppercase tracking-[0.3em] font-semibold">
                  Consultants – FZCO
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed pr-4">
              Providing premium bespoke business setup, corporate tax, compliance, and corporate structuring advisory services in the United Arab Emirates.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-gold-accent hover:text-gold-accent text-white/70 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-gold-accent hover:text-gold-accent text-white/70 flex items-center justify-center transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:pl-10">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-l-2 border-gold-accent pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/" className="text-white/60 hover:text-gold-accent transition-colors flex items-center gap-1 group">
                  Home <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-gold-accent transition-colors flex items-center gap-1 group">
                  About <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-gold-accent transition-colors flex items-center gap-1 group">
                  Services <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-white/60 hover:text-gold-accent transition-colors flex items-center gap-1 group">
                  Industries <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-gold-accent transition-colors flex items-center gap-1 group">
                  Contact <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-l-2 border-gold-accent pl-3">
              Services
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/services#formation" className="text-white/60 hover:text-gold-accent transition-colors">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link href="/services#corporate-tax" className="text-white/60 hover:text-gold-accent transition-colors">
                  Corporate Tax Services
                </Link>
              </li>
              <li>
                <Link href="/services#vat" className="text-white/60 hover:text-gold-accent transition-colors">
                  VAT Advisory & Filing
                </Link>
              </li>
              <li>
                <Link href="/services#accounting" className="text-white/60 hover:text-gold-accent transition-colors">
                  Accounting & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-l-2 border-gold-accent pl-3">
              Corporate Newsletter
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Stay updated on UAE tax updates, regulatory compliance laws, and setup updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative mt-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Business Email"
                className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-gold-accent transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded bg-gold-accent hover:bg-gold-light text-navy-dark flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-gold-accent animate-fade-in">
                Thank you! You have successfully subscribed to our newsletter.
              </p>
            )}
          </div>

        </div>

        {/* Contact Info bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 text-sm border-b border-white/5">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent shrink-0">
              <MapPin className="w-4.5 h-4.5" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Our Location</h5>
              <p className="text-white/55 text-xs mt-1 leading-relaxed">
                IFZA Business Park, Dubai, United Arab Emirates
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent shrink-0">
              <Clock className="w-4.5 h-4.5" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Business Hours</h5>
              <p className="text-white/55 text-xs mt-1 leading-relaxed">
                Mon – Fri: 9:00 AM – 6:00 PM (GST)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent shrink-0">
              <Mail className="w-4.5 h-4.5" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Email Consultation</h5>
              <a href="mailto:kaid@charteredgrowth.ae" className="text-white/55 text-xs mt-1 hover:text-gold-accent block">
                kaid@charteredgrowth.ae
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent shrink-0">
              <Phone className="w-4.5 h-4.5" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Expert Helpline</h5>
              <a href="tel:+971527938572" className="text-white/55 text-xs mt-1 hover:text-gold-accent block">
                +971 52 793 8572
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-white/45 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Chartered Growth Consultants – FZCO. All Rights Reserved.
          </p>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-gold-accent" />
              Licensed Corporate Advisor in the UAE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
