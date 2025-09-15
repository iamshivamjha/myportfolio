import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Database, 
  Palette, 
  Wrench, 
  Brain, 
  Monitor,
  Smartphone,
  Globe
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'MySQL', level: 80 },
        { name: 'CSS', level: 90 }
      ]
    },
    {
      title: 'Frameworks',
      icon: Globe,
      skills: [
        { name: 'ReactJS', level: 95 },
        { name: 'Express', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'OpenCV', level: 75 },
        { name: 'Shadcn UI', level: 90 },
        { name: 'Axios', level: 85 },
        { name: 'NPM', level: 90 }
      ]
    },
    {
      title: 'Concepts',
      icon: Brain,
      skills: [
        { name: 'OOPs', level: 90 },
        { name: 'DSA', level: 85 },
        { name: 'Component Architecture', level: 95 },
        { name: 'State Management', level: 90 },
        { name: 'Responsive Design', level: 95 }
      ]
    }
  ]

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Flutter', icon: Smartphone, color: 'text-blue-500' },
              { name: 'Computer Vision', icon: Monitor, color: 'text-green-500' },
              { name: 'MISRA C++', icon: Code, color: 'text-orange-500' },
              { name: 'UI/UX Design', icon: Palette, color: 'text-pink-500' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center hover:shadow-xl"
              >
                <skill.icon className={`w-12 h-12 mx-auto mb-3 ${skill.color}`} />
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
