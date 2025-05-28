import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Briefcase, Code, House, Mail, Menu, User, X } from 'lucide-react';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 500) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', icon: <House size={20} />, label: 'Home', ariaLabel: 'Navigate to home section' },
    { id: 'about', icon: <User size={20} />, label: 'About', ariaLabel: 'Navigate to about section' },
    { id: 'skills', icon: <Code size={20} />, label: 'Skills', ariaLabel: 'Navigate to skills section' },
    { id: 'projects', icon: <Briefcase size={20} />, label: 'Projects', ariaLabel: 'Navigate to projects section' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact', ariaLabel: 'Navigate to contact section' },
  ];

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50 md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.8,
          y: visible ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        {!visible && !isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -top-16 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-gray-600 dark:text-gray-300 pointer-events-none"
          >
            Scroll up to navigate
          </motion.div>
        )}

        <motion.button
          className="w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-16 right-0 mb-2"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2 flex flex-col gap-2 items-stretch min-w-[150px] border border-gray-100 dark:border-gray-700">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-inset"
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    aria-label={item.ariaLabel}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
