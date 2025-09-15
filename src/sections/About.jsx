import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Users, Lightbulb, Target } from 'lucide-react'
import shivamImage from '../assets/shivam_image.jpg'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expertise in React, Node.js, and modern web technologies'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: '17 months of experience working in agile development teams'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Strong analytical skills and attention to detail'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on delivering high-quality, scalable solutions'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, skills, and passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative overflow-hidden rounded-2xl group cursor-pointer">
                {/* Profile image */}
                <img 
                  src={shivamImage} 
                  alt="Shivam Prakash Jha" 
                  className="w-full h-full object-fill object-center transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Code className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-lg font-semibold">Developer</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Shivam Prakash Jha
            </h3>
            <p className="text-lg text-primary-600 dark:text-primary-400 mb-6">
              Associate Software Developer | React Developer
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm an enthusiastic software developer with 17 months of traineeship experience at KPIT Technologies. 
              My primary expertise lies in React development, with additional experience in full-stack development, 
              C++ (MISRA C++ compliance), Flutter, and computer vision using OpenCV. I'm passionate about creating 
              efficient, scalable solutions and continuously learning new technologies.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card p-6 text-center hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '17+', label: 'Months Experience' },
            { number: '5+', label: 'Projects Completed' },
            { number: '7+', label: 'Technologies' },
            { number: '100%', label: 'Dedication' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
