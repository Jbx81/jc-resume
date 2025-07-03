import React from 'react';
import { ExternalLink, Github, Zap, Star, Users, TrendingUp, Palette, Layers } from 'lucide-react';

const CurrentProjects = () => {
  const projects = [
    {
      title: "Design System & Component Library",
      description: "Comprehensive React component library with design tokens, built from 12 years of design expertise. Features 60+ components with Storybook documentation and automated visual regression testing.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Storybook", "Design Tokens", "Figma", "Chromatic"],
      metrics: ["20+ Products", "60+ Components", "99% Design Accuracy"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Design Systems"
    },
    {
      title: "E-commerce Design-to-Code Platform",
      description: "High-fidelity e-commerce platform built from detailed design specifications. Pixel-perfect implementation with advanced animations, micro-interactions, and responsive design across all devices.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe", "Figma", "TypeScript"],
      metrics: ["Pixel Perfect", "95+ Lighthouse", "Mobile Optimized"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "E-commerce"
    },
    {
      title: "Creative Portfolio CMS",
      description: "Content management system for creative professionals, combining intuitive design with powerful functionality. Built with deep understanding of designer workflows and creative industry needs.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Cloudinary", "Adobe Creative SDK", "GraphQL"],
      metrics: ["Creative Focused", "Asset Management", "Portfolio Builder"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Creative Tools"
    },
    {
      title: "Typography-Focused Blog Platform",
      description: "Publishing platform emphasizing beautiful typography and reading experience, leveraging print design principles for optimal web readability.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["Next.js", "MDX", "Typography.js", "CSS Grid", "Web Fonts"],
      metrics: ["Typography Focus", "Reading Experience", "Performance Optimized"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Publishing"
    },
    {
      title: "Brand Guidelines Generator",
      description: "Tool for creating comprehensive brand guidelines and style guides, drawing from extensive experience in brand design and print production.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["React", "Canvas API", "Color Theory", "PDF Generation", "Brand Tools"],
      metrics: ["Brand Guidelines", "Style Guides", "Export Tools"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Branding"
    },
    {
      title: "Accessible Design System",
      description: "WCAG 2.1 AA compliant component library with comprehensive accessibility features, keyboard navigation, and screen reader optimization.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["React", "ARIA", "Focus Management", "Screen Reader Testing", "Axe-core"],
      metrics: ["WCAG 2.1 AA", "100% Keyboard Nav", "Screen Reader Optimized"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Accessibility"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Design Systems': return <Layers className="w-4 h-4" />;
      case 'E-commerce': return <TrendingUp className="w-4 h-4" />;
      case 'Creative Tools': return <Palette className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Design Systems': return 'from-purple-500 to-indigo-500';
      case 'E-commerce': return 'from-green-500 to-emerald-500';
      case 'Creative Tools': return 'from-pink-500 to-rose-500';
      case 'Publishing': return 'from-blue-500 to-cyan-500';
      case 'Branding': return 'from-orange-500 to-red-500';
      case 'Accessibility': return 'from-teal-500 to-cyan-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing the intersection of design expertise and engineering excellence through 
            pixel-perfect, performant, and accessible web applications.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-6 left-6">
                    <div className={`flex items-center space-x-2 bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}>
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{project.description}</p>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                      <div className="text-sm font-semibold text-gray-900">{metric}</div>
                    </div>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full text-sm font-medium hover:from-gray-200 hover:to-gray-300 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl font-semibold"
                  >
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Additional Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center space-x-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
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

export default CurrentProjects;