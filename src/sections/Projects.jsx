import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const projects = [
    {
      name: 'Car Detailing Website',
      description: 'A modern, responsive website for car detailing services featuring interactive galleries, service booking, and customer testimonials. Built with React and styled with Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      live: 'https://car-detailing-websites.netlify.app',
      github: 'https://github.com/iamshivamjha/car-detailing-website'
    },
    {
      name: 'PPL Records',
      description: 'A comprehensive cricket statistics website built with Vite + React + TypeScript, featuring responsive design, dark/light theme, player profiles, records, and WhatsApp contact integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      live: 'https://pplrecords.netlify.app',
      github: 'https://github.com/iamshivamjha/PPL'
    },
    {
      name: 'Movie Lander',
      description: 'A movie discovery and information platform with search functionality, movie details, ratings, and recommendations. Integrated with external movie APIs for real-time data.',
      technologies: ['React', 'API Integration', 'Axios', 'CSS3', 'JavaScript'],
      live: 'https://shivam-movie-lander.netlify.app',
      github: 'https://github.com/iamshivamjha/movie-lander'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent projects and technical implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in my work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.a
              href="https://github.com/iamshivamjha"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View All Projects</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
