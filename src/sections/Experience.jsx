import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building2, Code2, Database, Palette, Smartphone } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const experiences = [
    {
      company: 'KPIT Technologies',
      position: 'Associate Software Developer',
      location: 'Pune, India',
      duration: 'Dec 2023 – Jun 2025',
      type: 'Traineeship',
      description: '17 months of intensive training and hands-on development experience in modern web technologies and software development practices.',
      achievements: [
        'Designed and developed interactive, reusable ReactJS components for the "MyWorld" website',
        'Built comprehensive dashboards, interactive forms, and modal components',
        'Integrated REST APIs with the frontend and implemented Redux for state management',
        'Ensured cross-device and cross-browser compatibility for optimal user experience',
        'Collaborated with cross-functional teams in an agile development environment'
      ],
      technologies: ['ReactJS', 'Redux', 'JavaScript', 'REST APIs', 'CSS', 'HTML'],
      icon: Building2
    }
  ]

  const responsibilities = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using ReactJS'
    },
    {
      icon: Database,
      title: 'API Integration',
      description: 'Connecting frontend applications with backend services via REST APIs'
    },
    {
      icon: Palette,
      title: 'UI/UX Implementation',
      description: 'Ensuring consistent design and optimal user experience across devices'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Developing applications that work seamlessly across different devices and browsers'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and key contributions in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent hidden md:block"></div>
              
              {/* Experience Card */}
              <div className="card p-8 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-primary-600 rounded-full items-center justify-center hidden md:flex">
                  <exp.icon className="w-4 h-4 text-white" />
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      <Building2 className="w-5 h-5 mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.4 + achIndex * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.6 + techIndex * 0.1 }}
                        className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Key Responsibilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((responsibility, index) => (
              <motion.div
                key={responsibility.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card p-6 text-center hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <responsibility.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {responsibility.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {responsibility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
