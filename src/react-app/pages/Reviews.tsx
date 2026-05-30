import { motion } from "framer-motion";
import { Star, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Reviews() {
  const stats = [
    { label: "Knowledgeable Trainers", desc: "Expert guidance & support", rank: "#1" },
    { label: "Owner Involvement", desc: "Works out with members", rank: "#2" },
    { label: "Equipment Quality", desc: "State-of-art facilities", rank: "#3" },
    { label: "Value for Money", desc: "Affordable & worth it", rank: "#4" },
  ];

  const reviews = [
    { 
      name: "Jyotirendra", 
      tag: "Long-term member since 2023",
      text: "I've been going to 'Fit For You' in Jankipuram since 2023 and it has been an incredible experience. One of the things that makes this gym stand out is that the owner actually works out alongside members, creating a motivating and friendly atmosphere." 
    },
    { 
      name: "Sonam Sharma", 
      tag: "Fantastic trainers",
      text: "A great place to get in shape with ample equipment and fantastic trainers to keep you motivated, challenged & engaged. The location is extremely convenient and prices are reasonable. Highly recommended!" 
    },
    { 
      name: "DeepabaleeSaha1994", 
      tag: "Ultimate experience",
      text: "This place is the ultimate experience for the ones who wanna really lose weight and experience the thrill beyond the fat life. This is gonna bring you so much positivity and the nature of the owner Deepak Sir and the trainers are also so good. You can also opt for PT here." 
    },
    { 
      name: "Suraj Saroj", 
      tag: "Economical packages",
      text: "Great place to keep your body fit. Trainers are well educated and guiding you in great manner. Most important you will find all packages in very economical budget." 
    },
    { 
      name: "Swapnil Johri", 
      tag: "Well trained coaches",
      text: "The gym is really nice and all the coaches are well trained and knowledgeable. The overall staff is also really supportive." 
    },
    { 
      name: "Ishika Jaiswal", 
      tag: "Best environment",
      text: "Therapy 🩷♾️. Best environment. The motivating atmosphere created by the owner and trainers is unmatched." 
    },
    { 
      name: "Aatman Mishra", 
      tag: "Proper ventilation",
      text: "Spacious Gym with Proper Ventilation. Owner is very friendly and Trainers are also good." 
    },
    { 
      name: "Rahul Srivastava", 
      tag: "Advance equipment",
      text: "Good trainers, advance equipment and good gentry makes it perfect. Nice gym." 
    }
  ];

  return (
    <div className="w-full flex flex-col items-center pt-32 px-6 max-w-7xl mx-auto pb-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-display uppercase text-[#F9FAFB] mb-6">Customer Reviews</h1>
        <p className="text-xl text-[#CCFF00] tracking-widest uppercase flex justify-center items-center gap-2">
          <Star className="fill-[#CCFF00] text-[#CCFF00] w-6 h-6" /> 4.7 Rating based on 98+ Google Reviews
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-24">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="liquid-glass-card p-8 flex flex-col items-center justify-center text-center hover:border-[#CCFF00]/50 transition-colors"
          >
            <div className="text-5xl font-display text-[#CCFF00] mb-4">{stat.rank}</div>
            <div className="text-lg font-bold uppercase tracking-wider text-[#F9FAFB] mb-2">{stat.label}</div>
            <div className="text-sm text-[#9CA3AF]">{stat.desc}</div>
          </motion.div>
        ))}
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 w-full mb-32">
        {reviews.map((rev, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (i % 3) * 0.15, duration: 0.6 }}
            className="liquid-glass-card p-8 break-inside-avoid relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageSquare className="w-16 h-16 text-[#CCFF00]" />
            </div>
            
            <div className="mb-6 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00]" />
              ))}
            </div>

            <p className="text-lg text-[#F9FAFB] mb-8 leading-relaxed relative z-10 italic">"{rev.text}"</p>
            
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-12 h-12 rounded-full bg-[#CCFF00] flex items-center justify-center text-black font-bold text-xl uppercase shrink-0">
                {rev.name[0]}
              </div>
              <div>
                <div className="font-display tracking-widest uppercase text-sm text-white">{rev.name}</div>
                <div className="text-xs text-[#CCFF00] mt-1 font-medium">{rev.tag}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Join Our Community CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full liquid-glass-card p-12 text-center flex flex-col items-center bg-[#CCFF00]/5 border-[#CCFF00]/20"
      >
        <h2 className="text-4xl md:text-5xl font-display uppercase text-[#F9FAFB] mb-6">Join Our Community</h2>
        <p className="text-[#9CA3AF] text-lg max-w-2xl mb-10 leading-relaxed">
          Become part of the Fit For You family and experience the difference that a supportive, motivating environment can make in your fitness journey.
        </p>
        <Link to="/pricing">
          <button className="bg-[#CCFF00] text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
