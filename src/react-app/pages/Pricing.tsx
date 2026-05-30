import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Monthly",
      price: "₹1,500",
      period: "/month",
      features: ["Full access", "Group classes", "Basic support", "Lockers"],
      delay: 0.1,
      highlight: false
    },
    {
      name: "Quarterly",
      price: "₹3,500",
      period: "/3 months",
      features: ["Save ₹1,000", "Priority support", "PT consultation", "Progress tracking"],
      delay: 0.2,
      highlight: true
    },
    {
      name: "Custom PT",
      price: "Custom",
      period: "",
      features: ["1-on-1 sessions", "Nutrition plans", "24/7 support", "Custom routine"],
      delay: 0.3,
      highlight: false
    }
  ];

  return (
    <div className="w-full flex flex-col items-center pt-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-display uppercase text-[#F9FAFB] mb-6">Pricing & Packages</h1>
        <p className="text-xl text-[#CCFF00] tracking-widest uppercase">Affordable excellence.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-24">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: plan.delay, duration: 0.6 }}
            className={`relative p-10 flex flex-col h-full ${
              plan.highlight 
                ? "liquid-glass-card border-[#CCFF00]/50 shadow-[0_0_30px_rgba(204,255,0,0.15)] transform lg:-translate-y-4" 
                : "liquid-glass-card"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#CCFF00] text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                Best Value
              </div>
            )}
            <h3 className="text-3xl font-display uppercase mb-2">{plan.name}</h3>
            <div className="flex items-end gap-2 mb-8">
              <span className={`text-6xl font-display ${plan.highlight ? "text-[#CCFF00]" : "text-white"}`}>{plan.price}</span>
              {plan.period && <span className="text-[#9CA3AF] mb-2">{plan.period}</span>}
            </div>
            
            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-lg text-[#9CA3AF]">
                  <Check className={`w-5 h-5 ${plan.highlight ? "text-[#CCFF00]" : "text-white"}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest transition-all ${
              plan.highlight ? "bg-[#CCFF00] text-black hover:scale-105" : "bg-white/10 hover:bg-white/20"
            }`}>
              {plan.name === "Custom PT" ? "Contact Us" : "Choose Plan"}
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-2xl p-8 text-center"
      >
        <h4 className="text-2xl font-display uppercase text-[#CCFF00] mb-2">Special Offers</h4>
        <p className="text-lg text-[#9CA3AF]">Ask about our <span className="text-white">Student Discounts</span> (valid ID required) and <span className="text-white">Flexible Payment</span> options at the front desk!</p>
      </motion.div>
    </div>
  );
}
