import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, Dumbbell } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Trainers", path: "/trainers" },
  { name: "Pricing", path: "/pricing" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <Dumbbell className="w-8 h-8 text-[#e94560]" />
            <span>FIT FOR YOU</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white hover:text-[#e94560] transition-colors font-medium ${
                  location.pathname === item.path ? "text-[#e94560]" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:08354855567" className="flex items-center gap-2 text-white hover:text-[#e94560] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">083548 55567</span>
            </a>
            <Button className="glass-button bg-[#e94560]/20 hover:bg-[#e94560]/40 text-white border border-white/20">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 text-white glass-button"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-[#1a1a2e]/95 backdrop-blur-xl z-50 transform transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } border-l border-white/10`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <Dumbbell className="w-6 h-6 text-[#e94560]" />
              <span>FIT FOR YOU</span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 text-white hover:text-[#e94560] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all ${
                      location.pathname === item.path ? "bg-[#e94560]/20 text-[#e94560]" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-white/10 space-y-4">
            <a
              href="tel:08354855567"
              className="flex items-center gap-2 text-white hover:text-[#e94560] transition-colors justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>083548 55567</span>
            </a>
            <Button className="w-full glass-button bg-[#e94560]/20 hover:bg-[#e94560]/40 text-white border border-white/20">
              Join Now
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
