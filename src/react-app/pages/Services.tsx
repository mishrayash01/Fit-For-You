import { motion } from "framer-motion";
import { Dumbbell, Flame, Users, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Strength Training",
      icon: Dumbbell,
      desc: "Barbells, dumbbells, modern weight machines, power racks.",
      delay: 0.1
    },
    {
      title: "Cardio Zone",
      icon: Flame,
      desc: "Treadmills, stationary bikes, cross trainers, rowing machines.",
      delay: 0.2
    },
    {
      title: "Group Classes",
      icon: Users,
      desc: "Zumba, Yoga, Aerobics, Group strength.",
      delay: 0.3
    },
    {
      title: "Personal Training",
      icon: Sparkles,
      desc: "1-on-1 sessions, custom plans, nutrition guidance.",
      delay: 0.4
    }
  ];

  return (
    <div className="w-full flex flex-col items-center pt-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-display uppercase text-[#F9FAFB] mb-6">Our Services</h1>
        <p className="text-xl text-[#CCFF00] tracking-widest uppercase">Everything you need under one roof</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-24">
        {services.map((srv, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: srv.delay, duration: 0.6, ease: "easeOut" }}
            className="liquid-glass-card p-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 group hover:border-[#CCFF00]/50 transition-colors"
          >
            <div className="bg-white/5 p-6 rounded-full group-hover:bg-[#CCFF00]/10 transition-colors">
              <srv.icon className="w-12 h-12 text-[#CCFF00]" />
            </div>
            <div>
              <h3 className="text-3xl font-display uppercase mb-4">{srv.title}</h3>
              <p className="text-[#9CA3AF] text-lg">{srv.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-24"
      >
        {["CrossFit Training", "Online Classes", "Nutrition Guidance"].map((badge, i) => (
          <span key={i} className="px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border border-[#CCFF00]/30 text-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.15)]">
            {badge}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
