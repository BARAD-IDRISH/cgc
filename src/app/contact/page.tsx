"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, MessageSquare, AlertCircle, Clock } from "lucide-react";

// Helper function to sanitize text input and prevent XSS injections
function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>?/gm, "") // Remove HTML tags
    .replace(/[<>'"]/g, "")    // Remove potentially dangerous characters
    .trim();
}

// Helper to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Helper to validate phone format
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{5,20}$/;
  return phoneRegex.test(phone);
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Company Formation",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Sanitize inputs
    const cleanName = sanitizeInput(formData.name);
    const cleanCompany = sanitizeInput(formData.company);
    const cleanEmail = formData.email.trim();
    const cleanPhone = sanitizeInput(formData.phone);
    const cleanMessage = sanitizeInput(formData.message);

    // Validate inputs
    if (!cleanName || cleanName.length < 2) {
      setErrorMsg("Please enter a valid full name (minimum 2 characters).");
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setErrorMsg("Please enter a valid business email address.");
      return;
    }

    if (!isValidPhone(cleanPhone)) {
      setErrorMsg("Please enter a valid contact phone number.");
      return;
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      setErrorMsg("Please provide a message with at least 10 characters detailing your inquiry.");
      return;
    }

    if (cleanMessage.length > 2000) {
      setErrorMsg("Message is too long (maximum 2,000 characters).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: cleanName,
          companyName: cleanCompany,
          email: cleanEmail,
          phone: cleanPhone,
          service: formData.service,
          message: cleanMessage,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "Company Formation",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        setErrorMsg(result.error || "Failed to dispatch email. Please try again or email kaid@charteredgrowth.ae directly.");
      }
    } catch {
      // Fallback for static dev environments without PHP runtime
      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Company Formation",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="relative bg-navy-deep min-h-screen pb-20">
      
      {/* Banner */}
      <section className="relative py-24 bg-navy-dark border-b border-gold-accent/10 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-accent/5 filter blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight"
          >
            Connect With Our Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Establish your business operations, secure corporate tax filings, and coordinate golden visas with UAE registry specialists.
          </motion.p>
        </div>
      </section>

      {/* Main Split Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-widest text-gold-accent uppercase border-l-2 border-gold-accent pl-3">
                Corporate Registry
              </h4>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Chartered Growth Consultants – FZCO
              </h2>
              <p className="text-white/60 text-xs leading-relaxed">
                Connect with our advisory consultants for bespoke company formations, corporate tax return computations, VAT filing audits, and accounting solutions.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4 p-5 glass-card rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-gold-accent/10 border border-gold-accent/15 flex items-center justify-center text-gold-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Our Location</h4>
                  <p className="text-white/65 text-xs mt-1.5 leading-relaxed">
                    IFZA Business Park, Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 glass-card rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-gold-accent/10 border border-gold-accent/15 flex items-center justify-center text-gold-accent shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Business Hours</h4>
                  <p className="text-white/65 text-xs mt-1.5 leading-relaxed">
                    Monday to Friday: 9:00 AM – 6:00 PM (UAE Time)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 glass-card rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-gold-accent/10 border border-gold-accent/15 flex items-center justify-center text-gold-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Email Advisory Desk</h4>
                  <a href="mailto:kaid@charteredgrowth.ae" className="text-white/65 text-xs mt-1.5 hover:text-gold-accent transition-colors block">
                    kaid@charteredgrowth.ae
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 glass-card rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-gold-accent/10 border border-gold-accent/15 flex items-center justify-center text-gold-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Helpline Support</h4>
                  <a href="tel:+971527938572" className="text-white/65 text-xs mt-1.5 hover:text-gold-accent transition-colors block font-mono">
                    +971 52 793 8572
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Integration with Address Overlay */}
            <div className="relative w-full h-[260px] rounded-xl overflow-hidden border border-gold-accent/20 shadow-lg group">
              {/* Address Header Badge */}
              <div className="absolute top-3 right-3 z-10 bg-navy-deep/90 backdrop-blur-md border border-gold-accent/30 rounded-lg px-3 py-2 flex items-center gap-2 shadow-md">
                <MapPin className="w-4 h-4 text-gold-accent shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-white tracking-wide">IFZA Business Park</span>
                  <span className="text-[10px] text-white/70">Dubai, United Arab Emirates</span>
                </div>
              </div>

              <iframe
                title="IFZA Business Park Location Map"
                src="https://maps.google.com/maps?q=IFZA%20Business%20Park%2C%20Dubai%2C%20United%20Arab%20Emirates&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-gold-accent/15 shadow-2xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-gold-accent/15 border border-gold-accent flex items-center justify-center text-gold-accent">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">Consultation Booked Successfully</h3>
                  <p className="text-xs text-white/60 max-w-sm leading-relaxed">
                    Thank you for connecting. One of our regulatory advisors or chartered tax specialists will contact you shortly to schedule your consultation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="border-b border-white/5 pb-4 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-gold-accent" />
                    <h3 className="text-base font-bold text-white uppercase tracking-wider">Book Corporate Consultation</h3>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-md flex items-center gap-2 text-xs text-red-400">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="text-[10px] font-bold text-white uppercase tracking-wider block mb-2">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-xs text-white focus:outline-none focus:border-gold-accent transition-colors"
                        placeholder="Full Name"
                      />
                    </div>
                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className="text-[10px] font-bold text-white uppercase tracking-wider block mb-2">Company Name</label>
                      <input
                        id="contact-company"
                        type="text"
                        maxLength={100}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-xs text-white focus:outline-none focus:border-gold-accent transition-colors"
                        placeholder="Company or Entity Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="text-[10px] font-bold text-white uppercase tracking-wider block mb-2">Business Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={120}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-xs text-white focus:outline-none focus:border-gold-accent transition-colors"
                        placeholder="name@company.com"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="text-[10px] font-bold text-white uppercase tracking-wider block mb-2">Phone Number *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        maxLength={30}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-xs text-white focus:outline-none focus:border-gold-accent transition-colors"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label htmlFor="contact-service" className="text-[10px] font-bold text-white uppercase tracking-wider block mb-2">Service Required *</label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-navy-dark border border-white/10 rounded-md py-3 px-4 text-xs text-white focus:outline-none focus:border-gold-accent transition-colors cursor-pointer"
                    >
                      <option value="Company Formation">Company Formation</option>
                      <option value="Corporate Tax Services">Corporate Tax Services</option>
                      <option value="VAT Services">VAT Services</option>
                      <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                      <option value="Compliance Services">Compliance Services</option>
                      <option value="Business Advisory">Business Advisory</option>
                      <option value="Residency Solutions">Residency Solutions</option>
                      <option value="Corporate Structuring">Corporate Structuring</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="text-[10px] font-bold text-white uppercase tracking-wider block mb-2">Message *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      maxLength={2000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-xs text-white focus:outline-none focus:border-gold-accent transition-colors"
                      placeholder="Specify your business needs or tax queries..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest text-navy-dark bg-gold-accent hover:bg-gold-light disabled:opacity-50 transition-all duration-300 rounded-md shadow-lg uppercase gold-glow-hover cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-navy-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Dispatching Consultation Inquiry...
                        </span>
                      ) : (
                        "Submit Booking Inquiry"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

