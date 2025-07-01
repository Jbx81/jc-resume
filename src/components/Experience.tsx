import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2021 - Present",
      description: "Lead a team of 8 developers building scalable web applications for enterprise clients.",
      achievements: [
        "Architected and implemented microservices infrastructure serving 1M+ users",
        "Reduced application load time by 60% through performance optimization",
        "Mentored 5 junior developers and established code review processes",
        "Led migration from monolithic to microservices architecture"
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Innovate Labs",
      location: "San Francisco, CA", 
      duration: "2019 - 2021",
      description: "Developed and maintained multiple web applications using modern JavaScript frameworks.",
      achievements: [
        "Built and deployed 8 web applications from conception to production",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Collaborated with UX team to improve user engagement by 35%",
        "Integrated third-party APIs and payment processing systems"
      ],
      technologies: ["React", "Vue.js", "Express.js", "MongoDB", "Firebase", "Stripe"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Los Angeles, CA",
      duration: "2017 - 2019", 
      description: "Specialized in creating responsive, high-performance user interfaces for various clients.",
      achievements: [
        "Delivered 15+ client projects with 98% client satisfaction rate",
        "Implemented responsive designs increasing mobile engagement by 50%",
        "Optimized SEO resulting in 200% increase in organic traffic",
        "Created reusable component library used across multiple projects"
      ],
      technologies: ["JavaScript", "React", "SASS", "Webpack", "jQuery", "Bootstrap"]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "2016 - 2017",
      description: "Gained foundational experience in web development working on various startup projects.",
      achievements: [
        "Contributed to MVP development resulting in $500K seed funding",
        "Learned modern development practices and agile methodologies",
        "Built responsive landing pages and customer-facing features",
        "Participated in code reviews and technical architecture discussions"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-4">{exp.company}</h4>
                  <p className="text-gray-700 mb-6">{exp.description}</p>
                </div>
                
                <div className="lg:text-right space-y-2">
                  <div className="flex items-center lg:justify-end space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center lg:justify-end space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
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