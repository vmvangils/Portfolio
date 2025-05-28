import { useEffect, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingNav from './components/FloatingNav';
import SkipToContent from './components/SkipToContent';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen w-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

export function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="font-[Inter] dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <SkipToContent />
        <Navbar />
        <main id="main-content">
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingFallback />}>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </motion.div>
            </Suspense>
          </AnimatePresence>
        </main>
        <FloatingNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
