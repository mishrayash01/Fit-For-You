import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, Trophy, Target } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 50%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const values = [
    { title: "Community", icon: Users, desc: "A supportive environment where everyone belongs." },
    { title: "Passion", icon: Heart, desc: "Driven by the love for health and fitness." },
    { title: "Excellence", icon: Trophy, desc: "State-of-the-art facilities and elite training." },
    { title: "Results", icon: Target, desc: "Goal-oriented programming that works." },
  ];

  return (
    <div className="w-full flex flex-col items-center pt-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-display uppercase text-[#F9FAFB] mb-6">About Fit For You</h1>
        <p className="text-xl text-[#CCFF00] tracking-widest uppercase">Your journey to a healthier, stronger you starts here</p>
      </motion.div>

      <motion.section 
        ref={containerRef}
        style={{ opacity, y }}
        className="max-w-4xl text-center mb-32"
      >
        <p className="text-2xl md:text-4xl leading-relaxed text-[#9CA3AF]">
          "Our mission is to provide a total fitness experience. Led by Deepak Sir and our team of knowledgeable trainers, we don't just instruct—we work out alongside you."
        </p>
      </motion.section>

      <section className="w-full mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div 
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="liquid-glass-card p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-[#CCFF00]/10 p-4 rounded-full mb-6">
                <val.icon className="w-8 h-8 text-[#CCFF00]" />
              </div>
              <h3 className="text-2xl font-display uppercase mb-4">{val.title}</h3>
              <p className="text-[#9CA3AF] text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full mb-24">
        <h2 className="text-4xl md:text-5xl font-display uppercase text-center mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="liquid-glass-card p-10 md:col-span-2 flex flex-col justify-center">
            <h3 className="text-3xl font-display uppercase mb-4 text-[#CCFF00]">Expert Leadership</h3>
            <p className="text-[#9CA3AF] text-lg">Deepak Sir doesn't just manage the floor; he trains alongside you. His hands-on approach ensures everyone gets the right form and motivation.</p>
          </div>
          <div className="liquid-glass-card p-10 flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-display uppercase mb-4 text-[#CCFF00]">Certified Trainers</h3>
            <p className="text-[#9CA3AF] text-lg">Mentors and motivators guiding you every step.</p>
          </div>
          <div className="liquid-glass-card p-10 md:col-span-3 flex flex-col justify-center items-center text-center bg-[#CCFF00]/5 border-[#CCFF00]/20">
            <h3 className="text-4xl font-display uppercase mb-4 text-[#CCFF00]">Proven Results</h3>
            <p className="text-[#9CA3AF] text-xl">98+ satisfied members who have transformed their lives with our guidance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
