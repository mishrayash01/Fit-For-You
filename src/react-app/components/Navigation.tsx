import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between lg:justify-center">
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  isActive ? "text-[#CCFF00]" : "text-[#9CA3AF] hover:text-[#F9FAFB]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Logo / Menu Toggle */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <Link to="/" className="text-xl font-display text-white tracking-widest uppercase">
            Fit For You
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#CCFF00] transition-colors p-1">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 z-40 flex flex-col items-center py-8 gap-6 lg:hidden"
          >
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold uppercase tracking-widest transition-colors ${
                    isActive ? "text-[#CCFF00]" : "text-[#9CA3AF] hover:text-[#F9FAFB]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
