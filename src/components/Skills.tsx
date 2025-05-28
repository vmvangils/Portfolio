import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'HTML/CSS', level: 65, color: 'bg-orange-500' },
  { name: 'TypeScript', level: 60, color: 'bg-blue-600' },
  { name: 'React.js', level: 60, color: 'bg-blue-500' },
  { name: 'JavaScript', level: 55, color: 'bg-yellow-500' },
  { name: 'React Native', level: 50, color: 'bg-purple-500' },
  { name: 'Tailwind CSS', level: 50, color: 'bg-teal-500' },
  { name: 'Node.js', level: 45, color: 'bg-green-500' },
  { name: 'Bootstrap', level: 35, color: 'bg-indigo-500' },
];

const technologies = [
  'Git', 'GitHub', 'REST APIs', 'Supabase', 'SQL', 
  'Express', 'Laravel', 'Frontend Development',
  'Backend Development', 'Responsive Design', 'UI/UX Basics', 'Web Development',
  'Docker'
];

export default function Skills() {
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 }
    }),
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      custom={skill.level}
                      variants={progressVariants}
                      className={`h-full ${skill.color} rounded-full`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Other Technologies</h3>
            
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-4">My Approach</h3>
            <motion.ul variants={itemVariants} className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                <span>Developing clean, maintainable code</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                <span>Creating responsive user interfaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                <span>Learning and adapting to new technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                <span>Problem-solving with creative solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                <span>Building user-friendly applications</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
