import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-200 rounded-full mx-auto overflow-hidden relative z-10">
              <img
                alt="Vasco van Gils - Software Developer"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-20 transform -translate-x-4 translate-y-4"></div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <a href="https://github.com/vmvangils" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vasco-van-gils-23668b293/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hi, I'm Vasco van Gils</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a 19-year-old entry-level fullstack developer from the Netherlands with a passion for creating
              responsive and functional web applications. I specialize in React.js, TypeScript, and
              modern web technologies for both frontend and backend development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently studying at Techniek College Rotterdam, I work with Express and Supabase
              for backend solutions while using React and modern frameworks for frontend. I enjoy solving
              complex problems and continuously learning new technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, I'm exploring new programming concepts, keeping up with the latest AI technology 
              and framework updates, or expanding my knowledge in software development.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-200">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Netherlands</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-200">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">vmvangils@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-200">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">Techniek College Rotterdam</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-200">Age</h4>
                <p className="text-gray-600 dark:text-gray-400">19 Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
