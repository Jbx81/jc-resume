import React from 'react';
import { Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Engineer",
      company: "Stripe",
      location: "Seattle, WA",
      duration: "2022 - Present",
      description: "Leading frontend architecture for payment infrastructure serving 100M+ transactions daily.",
      achievements: [
        "Architected micro-frontend system reducing bundle size by 40% and improving load times",
        "Built accessible component library adopted by 12 product teams across the organization",
        "Led performance optimization initiative achieving 95+ Lighthouse scores across all products",
        "Mentored 6 junior engineers and established frontend best practices and code review standards"
      ],
      technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS", "Framer Motion"],
      highlight: true
    },
    {
      title: "Frontend Engineer",
      company: "Airbnb",
      location: "San Francisco, CA", 
      duration: "2020 - 2022",
      description: "Developed user-facing features for booking platform used by millions of travelers worldwide.",
      achievements: [
        "Implemented responsive booking flow increasing mobile conversion by 28%",
        "Built real-time messaging system with WebSocket integration and offline support",
        "Created automated testing suite reducing frontend bugs in production by 60%",
        "Collaborated with design team to implement new design system across 8 product areas"
      ],
      technologies: ["React", "Redux", "Sass", "Jest", "Cypress", "Webpack"],
      highlight: false
    },
    {
      title: "Frontend Developer",
      company: "Shopify",
      location: "Remote",
      duration: "2019 - 2020", 
      description: "Built merchant-facing tools and customer checkout experiences for e-commerce platform.",
      achievements: [
        "Developed checkout optimization features increasing merchant revenue by $2M+ monthly",
        "Built responsive admin dashboard used by 500K+ merchants globally",
        "Implemented A/B testing framework for frontend experiments and feature rollouts",
        "Optimized critical rendering path reducing time-to-interactive by 35%"
      ],
      technologies: ["React", "Vue.js", "JavaScript", "CSS3", "Ruby on Rails", "GraphQL"],
      highlight: false
    },
    {
      title: "Junior Frontend Developer",
      company: "Microsoft",
      location: "Redmond, WA",
      duration: "2018 - 2019",
      description: "Contributed to Office 365 web applications and internal developer tools.",
      achievements: [
        "Built accessibility features ensuring WCAG 2.1 AA compliance across Office web apps",
        "Developed internal component library reducing development time by 25%",
        "Implemented progressive web app features for offline functionality",
        "Participated in design system evolution and cross-team collaboration initiatives"
      ],
      technologies: ["JavaScript", "React", "TypeScript", "Azure", "CSS3", "HTML5"],
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative ${exp.highlight ? 'lg:scale-105' : ''}`}>
              {exp.highlight && (
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
              )}
              <div className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border ${exp.highlight ? 'border-blue-200 bg-gradient-to-br from-blue-50/50 to-cyan-50/50' : 'border-gray-100'}`}>
                {exp.highlight && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Current Role
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <h4 className="text-xl lg:text-2xl text-blue-600 font-semibold mb-4">{exp.company}</h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{exp.description}</p>
                  </div>
                  
                  <div className="lg:text-right space-y-3 lg:ml-8">
                    <div className="flex items-center lg:justify-end space-x-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-lg">{exp.duration}</span>
                    </div>
                    <div className="flex items-center lg:justify-end space-x-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span className="text-lg">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                    Key Achievements
                  </h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Technologies & Tools</h5>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        exp.highlight 
                          ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;