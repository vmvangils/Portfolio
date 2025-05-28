import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
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

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out to me for any inquiries or opportunities. I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 mt-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                <Mail size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-gray-900 dark:text-gray-200 font-medium">Email</h4>
                <a href="mailto:vmvangils@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  vmvangils@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                <MapPin size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-gray-900 dark:text-gray-200 font-medium">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Netherlands</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                <Phone size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-gray-900 dark:text-gray-200 font-medium">Phone</h4>
                <a href="tel:+31615410923" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  +31 615410923
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="pt-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-3">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/vmvangils" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/vasco-van-gils-23668b293/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors" download>
                <FileText size={18} />
                <span className="sr-only">Download CV</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
