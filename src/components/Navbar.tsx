import { Link, NavLink } from "react-router-dom";
import { Dumbbell, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Trainers", path: "/trainer-choice" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-hulk-dark/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      }`} 
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 hulk-gradient rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(191,255,0,0.3)]">
              <Dumbbell className="text-black" size={28} />
            </div>
            <div className="flex flex-col -gap-1">
              <span className="font-display font-black text-2xl tracking-tighter uppercase leading-none italic">
                Hulks
              </span>
              <span className="font-display font-bold text-lg tracking-tighter uppercase leading-none text-hulk-green italic">
                Work Zone
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-display font-semibold text-sm uppercase tracking-[0.2em] transition-all hover:text-hulk-green ${
                    isActive ? "text-hulk-green border-b-2 border-hulk-green" : "text-white/60"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/contact"
              className="hulk-gradient px-8 py-3 rounded-full font-display font-black text-sm text-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(191,255,0,0.2)]"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed top-0 right-0 w-full h-screen bg-hulk-dark z-[60] px-8 py-20 flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-8 right-8 p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={40} className="text-hulk-green" />
            </button>

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-display font-black text-5xl uppercase tracking-tighter italic transition-colors ${
                    isActive ? "text-hulk-green" : "text-white/40 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hulk-gradient w-full mt-8 py-5 rounded-2xl font-display font-black text-xl text-black uppercase tracking-[0.2em] text-center"
            >
              Start Training
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
