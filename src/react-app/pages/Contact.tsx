import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Target, Loader2 } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col items-center pt-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-display uppercase text-[#F9FAFB] mb-6">Get in Touch</h1>
        <p className="text-xl text-[#CCFF00] tracking-widest uppercase">Ready to start your fitness journey?</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mb-32">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass-card p-10"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-20 h-20 bg-[#CCFF00]/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-[#CCFF00]" />
              </div>
              <h3 className="text-3xl font-display uppercase mb-4 text-[#F9FAFB]">Message Sent!</h3>
              <p className="text-[#9CA3AF]">We'll be in touch with you shortly to kickstart your journey.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">Name</label>
                <input required type="text" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">Phone</label>
                <input required type="tel" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">Email</label>
                <input required type="email" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">Message / Fitness Goals</label>
                <textarea required rows={4} className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="bg-[#CCFF00] text-black font-bold uppercase tracking-widest py-4 rounded-full mt-4 hover:scale-[1.02] transition-transform flex justify-center items-center h-[56px]"
              >
                {loading ? <Loader2 className="animate-spin w-6 h-6 text-black" /> : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="liquid-glass-card p-8 flex items-start gap-6">
            <div className="bg-white/5 p-4 rounded-full">
              <MapPin className="w-8 h-8 text-[#CCFF00]" />
            </div>
            <div>
              <h4 className="text-xl font-display uppercase mb-2">Location</h4>
              <p className="text-[#9CA3AF] leading-relaxed">C-1/342, Sector G, Jankipuram,<br/>Lucknow, UP 226021</p>
              <p className="text-sm text-white/50 mt-4 uppercase tracking-widest">Areas Served: Jankipuram, Sector G, Gomti Nagar Ext, Aliganj, Shaheed Path.</p>
            </div>
          </div>

          <div className="liquid-glass-card p-8 flex items-start gap-6">
            <div className="bg-white/5 p-4 rounded-full">
              <Phone className="w-8 h-8 text-[#CCFF00]" />
            </div>
            <div className="w-full">
              <h4 className="text-xl font-display uppercase mb-2">Phone</h4>
              <a href="tel:+918354855567" className="text-2xl font-display text-white hover:text-[#CCFF00] transition-colors tracking-widest block mb-4">+91 83548 55567</a>
              <a href="https://wa.me/918354855567" target="_blank" rel="noreferrer">
                <button className="w-full border border-[#CCFF00]/50 text-[#CCFF00] py-3 rounded-full font-bold uppercase tracking-widest hover:bg-[#CCFF00]/10 transition-colors">
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>

          <div className="liquid-glass-card p-8 flex items-start gap-6">
            <div className="bg-white/5 p-4 rounded-full">
              <Clock className="w-8 h-8 text-[#CCFF00]" />
            </div>
            <div>
              <h4 className="text-xl font-display uppercase mb-2">Hours</h4>
              <p className="text-[#9CA3AF]">Mon - Sat: 5:00 PM - 10:00 PM</p>
              <p className="text-[#CCFF00] mt-1 uppercase tracking-widest text-sm font-bold">Closed Sundays</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
