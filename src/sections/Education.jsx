import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const education = [
    {
      degree: 'B.Tech Computer Science & Engineering',
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      duration: '2020 - 2024',
      cgpa: '8.90',
      description: 'Comprehensive study of computer science fundamentals including data structures, algorithms, software engineering, and modern web technologies.',
      achievements: [
        'Specialized in Full-Stack Web Development',
        'Completed projects in React, Node.js, and Database Management',
        'Active participation in coding competitions and hackathons',
        'Strong foundation in Object-Oriented Programming and Data Structures'
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600'
    },
    {
      degree: 'Senior Secondary Education',
      institution: 'Sri Chaitanya Junior College',
      location: 'Hyderabad, India',
      duration: '2017 - 2019',
      cgpa: '91.5%',
      description: 'Focused on Mathematics, Physics, and Chemistry with emphasis on analytical thinking and problem-solving skills.',
      achievements: [
        'Excellent performance in Science subjects',
        'Strong foundation in Mathematics and Physics',
        'Active participation in science exhibitions',
        'Developed critical thinking and analytical skills'
      ],
      icon: Award,
      color: 'from-green-500 to-green-600'
    },
    {
      degree: 'Secondary Education',
      institution: 'MDJ Public School',
      location: 'Bihar, India',
      duration: '2016 - 2017',
      cgpa: '9.8',
      description: 'Comprehensive secondary education with focus on all-round development including academics, sports, and extracurricular activities.',
      achievements: [
        'Outstanding academic performance',
        'Active participation in school activities',
        'Strong foundation in core subjects',
        'Leadership and teamwork skills development'
      ],
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section id="education" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and educational achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent hidden md:block"></div>
              
              {/* Education Card */}
              <div className="card p-8 relative">
                {/* Timeline Dot */}
                <div className={`absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r ${edu.color} rounded-full items-center justify-center hidden md:flex`}>
                  <edu.icon className="w-4 h-4 text-white" />
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.duration}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                        {edu.cgpa}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.cgpa.includes('%') ? 'Percentage' : 'CGPA'}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Continuous Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'React Development',
                description: 'Advanced React concepts, hooks, and state management',
                progress: 95
              },
              {
                title: 'Full-Stack Development',
                description: 'End-to-end web application development',
                progress: 85
              },
              {
                title: 'Software Engineering',
                description: 'Best practices and design patterns',
                progress: 90
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="card p-6 text-center"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {cert.description}
                </p>
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${cert.progress}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                    className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                  />
                </div>
                <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mt-2">
                  {cert.progress}% Complete
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
