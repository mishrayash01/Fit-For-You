import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

export default function Layout() {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(true);

  // Mouse Follower setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);

    const handleMouseMove = (e: MouseEvent) => {
      // 400x400 radial gradient, offset by 200 to center it
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen bg-[#050510] text-[#F9FAFB] overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      
      {/* Ambient Motion Orbs */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#4c1d95] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-orb-1"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#1e3a8a] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-orb-2"></div>
        <div className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] bg-[#ccff00] rounded-full mix-blend-screen filter blur-[90px] opacity-10 animate-orb-1" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Interactive Mouse Follower */}
      {isDesktop && (
        <motion.div
          className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[-1]"
          style={{
            x: smoothX,
            y: smoothY,
            background: "radial-gradient(circle, rgba(204,255,0,0.1) 0%, transparent 70%)",
          }}
        />
      )}

      <Navigation />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col min-h-screen"
        >
          <div className="flex-grow flex flex-col">
            <Outlet />
          </div>
          
          {/* Global Footer */}
          <footer className="w-full text-center py-6 mt-auto relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <a 
              href="https://portfolio-navy-chi-383nn8ane7.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#CCFF00] transition-colors duration-300 block"
            >
              Developer - Yash Mishra
            </a>
          </footer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
