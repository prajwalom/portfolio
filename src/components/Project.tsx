import React from 'react';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes payment integration, admin dashboard, and real-time inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A comprehensive weather analytics dashboard with data visualization, location-based forecasts, and historical weather data analysis.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social media platform with real-time messaging, post sharing, and advanced user interaction features.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'GraphQL', 'Prisma', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'AI-Powered Chat Bot',
      description: 'An intelligent chatbot with natural language processing capabilities, built using modern AI technologies and seamless user interface.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Python', 'OpenAI', 'Flask'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A beautiful and responsive portfolio website showcasing modern web development techniques and best practices.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my best work, demonstrating expertise in modern web technologies and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div key={project.title} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a href={project.github} className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                        <Github className="w-4 h-4 text-gray-600" />
                      </a>
                      <a href={project.live} className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                        <Eye className="w-4 h-4 text-blue-600" />
                      </a>
                    </div>
                    <span className="text-sm text-gray-500">View Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;