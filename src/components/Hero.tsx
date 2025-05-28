import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950 dark:to-gray-900 transition-colors duration-300 -z-10" />
      
      <div className="absolute top-0 right-0 h-96 w-96 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-6"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-600 font-medium"
          >
            Hello, I'm
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
          >
            Vasco van Gils
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text text-2xl md:text-3xl font-medium"
          >
            Software Developer
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl text-gray-600"
          >
            I create beautiful, functional, and responsive web experiences with modern technologies and a keen eye for design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex space-x-4"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              aria-label="View my projects"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              aria-label="Contact me"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.button
          onClick={scrollToAbout}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowDown size={24} />
        </motion.button>
      </div>
    </section>
  );
}
