import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
    { name: 'Officers', path: '/officers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 grid grid-cols-2 gap-0.5 transform group-hover:rotate-90 transition-transform duration-500">
                <div className="bg-[#F25022] rounded-tl-sm"></div>
                <div className="bg-[#7FBA00] rounded-tr-sm"></div>
                <div className="bg-[#00A4EF] rounded-bl-sm"></div>
                <div className="bg-[#FFB900] rounded-br-sm"></div>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-gray-900">
                DLSU <span className="text-[#007A53]">MSC</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-4 py-2 text-sm font-medium group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive(link.path) ? 'text-[#00A4EF]' : 'text-gray-600 group-hover:text-gray-900'
                }`}>
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-[#00A4EF]/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <div className="pl-4 ml-2 border-l border-gray-200">
              <a
                href="#join"
                className="px-6 py-2.5 rounded-full bg-[#007A53] text-white text-sm font-medium hover:bg-[#006F4E] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-block"
              >
                Join Us
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-100/50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-[#00A4EF] bg-[#00A4EF]/10'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#join"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-6 px-5 py-4 rounded-xl bg-[#007A53] text-white font-medium shadow-md"
              >
                Join Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
