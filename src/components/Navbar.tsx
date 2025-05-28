import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-indigo-600 dark:text-indigo-400">Vasco</span><span className="dark:text-white"> van Gils</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors capitalize focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 rounded-md"
              aria-label={`Navigate to ${item} section`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 absolute top-full left-0 right-0 shadow-md py-4 px-4 flex flex-col space-y-4">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left capitalize"
            >
              {item}
            </button>
          ))}
          <div className="flex justify-start pt-2 space-x-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
