import { motion } from "framer-motion";
import { Link } from "react-router";

const WordsPullUp = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
          className="mr-[0.3em] mb-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/aabbccddeeff_workout_videomp_.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0A0A0A] backdrop-blur-[2px] z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto pt-16">
          <WordsPullUp 
            text="Commit to Be Fit. The Ultimate Fitness Experience." 
            className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1.1] uppercase text-[#F9FAFB]"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[#9CA3AF] text-lg md:text-2xl mt-6 max-w-3xl"
          >
            State-of-the-art equipment, professional trainers, and a motivating atmosphere at Fit For You.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-[#F9FAFB] font-medium tracking-wider text-xs md:text-sm uppercase bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] rounded-full px-6 py-2"
          >
            <span>4.7/5</span> <span className="text-[#CCFF00]">|</span>
            <span>98+ Google Reviews</span> <span className="text-[#CCFF00]">|</span>
            <span>100% Certified Trainers</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-row justify-center gap-4 mt-8"
          >
            <Link to="/pricing">
              <button className="bg-[#CCFF00] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                Start Your Journey
              </button>
            </Link>
            <a href="tel:+918354855567">
              <button className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-white">
                Call Now
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display text-white uppercase mb-8">State-of-Art Facilities</h2>
          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10">
            We offer a hygienic, spacious environment with proper ventilation. Our mission is to provide a total fitness experience that doesn't just instruct, but builds explosive athletic performance from the ground up.
          </p>
          <Link to="/about">
            <button className="liquid-glass px-8 py-4 rounded-full font-bold uppercase text-[#CCFF00] hover:bg-[#CCFF00] hover:text-black transition-all">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
