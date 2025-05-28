import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Rocket, Sparkles, Zap } from 'lucide-react';

export default function Upgrades() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const categories = [
    {
      title: "Visual Enhancements",
      icon: <Palette className="text-purple-500" size={24} />,
      items: [
        "Add subtle animations for page transitions",
        "Implement a custom cursor or hover effects",
        "Create a 3D interactive skills visualization",
        "Add a floating navigation bubble for mobile",
        "Include project screenshots or mockups"
      ]
    },
    {
      title: "Content Additions",
      icon: <Sparkles className="text-amber-500" size={24} />,
      items: [
        "Add a dedicated Resume/CV page with download option",
        "Create a blog section to share your coding journey",
        "Include testimonials section (when available)",
        "Add a timeline showing your development journey",
        "Showcase certifications and achievements"
      ]
    },
    {
      title: "Technical Improvements",
      icon: <Code className="text-blue-500" size={24} />,
      items: [
        "Implement lazy loading for better performance",
        "Add filtering options for projects by technology",
        "Create a contact form that actually sends emails",
        "Add keyboard navigation for accessibility",
        "Implement a search functionality"
      ]
    },
    {
      title: "Advanced Features",
      icon: <Rocket className="text-indigo-500" size={24} />,
      items: [
        "Add a theme customizer beyond light/dark",
        "Create interactive project demos",
        "Implement a visitor counter or analytics display",
        "Add a chatbot assistant for visitors",
        "Create a skills progress tracker over time"
      ]
    },
    {
      title: "Performance Optimizations",
      icon: <Zap className="text-yellow-500" size={24} />,
      items: [
        "Optimize image loading with modern formats",
        "Implement code splitting for faster initial load",
        "Add service workers for offline capabilities",
        "Improve Core Web Vitals metrics",
        "Add skeleton loaders for content"
      ]
    }
  ];

  return (
    <section id="upgrades" ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Potential Upgrades</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore these possibilities to enhance your portfolio and showcase your evolving skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
