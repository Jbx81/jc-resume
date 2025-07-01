import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built for a client with 10,000+ products.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management application with real-time updates, task tracking, and team communication features. Used by 500+ active users.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI Content Generator",
      description: "Machine learning-powered content generation tool that helps marketers create engaging copy. Integrated with OpenAI API for intelligent text generation.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["Python", "FastAPI", "React", "OpenAI API", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for tracking user engagement and business metrics. Features interactive charts and custom reporting.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Mobile Fitness App",
      description: "React Native fitness tracking application with workout plans, progress tracking, and social features. Published on both iOS and Android stores.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Stripe", "Push Notifications"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency portfolio tracker with price alerts, market analysis, and trading recommendations. Handles 1M+ API calls daily.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Node.js", "WebSocket", "CoinGecko API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <Zap className="w-4 h-4" />
                      <span>Featured</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                  <p className="text-gray-700">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
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