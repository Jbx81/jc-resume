import React from 'react';
import { Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Engineer",
      company: "TechFlow Solutions",
      location: "Seattle, WA",
      duration: "2022 - Present",
      description: "Leading frontend development for enterprise SaaS platform serving 500K+ users",
      achievements: [
        "Architected and implemented design system used across 12+ product teams",
        "Reduced bundle size by 40% through code splitting and optimization strategies",
        "Led migration from JavaScript to TypeScript, improving code quality and developer experience",
        "Mentored 6 junior developers and established frontend best practices"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Jest"],
      highlight: true
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc",
      location: "Seattle, WA",
      duration: "2020 - 2022",
      description: "Developed responsive web applications for e-commerce and marketing platforms",
      achievements: [
        "Built pixel-perfect implementations from Figma designs with 99% accuracy",
        "Improved Core Web Vitals scores by 35% through performance optimization",
        "Collaborated with UX team to create reusable component library",
        "Implemented accessibility features achieving WCAG 2.1 AA compliance"
      ],
      technologies: ["React", "JavaScript", "Sass", "Webpack", "REST APIs", "Cypress"],
      highlight: false
    },
    {
      title: "Junior Frontend Developer",
      company: "StartupLab",
      location: "Seattle, WA",
      duration: "2019 - 2020",
      description: "Contributed to multiple client projects while transitioning from design to development",
      achievements: [
        "Developed responsive landing pages and marketing websites",
        "Integrated third-party APIs and payment processing systems",
        "Collaborated with design team to ensure design-to-code accuracy",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git"],
      highlight: false
    }
  ];

  const designExperience = {
    title: "Graphic Designer & Production Manager",
    company: "Various Publishing Companies",
    location: "Seattle, WA",
    duration: "2006 - 2018",
    description: "12 years in magazine print production, developing expertise in typography, layout, color theory, and design systems.",
    achievements: [
      "Managed end-to-end production for 15+ monthly publications with circulations up to 100K",
      "Developed brand guidelines and design systems for consistent visual identity",
      "Mastered typography, color theory, and layout principles for print and digital media",
      "Led design teams and collaborated with editors, photographers, and marketing departments"
    ],
    technologies: ["Adobe Creative Suite", "InDesign", "Photoshop", "Illustrator", "Print Production", "Brand Design"]
  };

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

        {/* Software Engineering Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Software Engineering</h3>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative ${exp.highlight ? 'lg:scale-105' : ''}`}>
                {exp.highlight && <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>}
                <div
                  className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border ${
                    exp.highlight ? 'border-blue-200 bg-gradient-to-br from-blue-50/50 to-cyan-50/50' : 'border-gray-100'
                  }`}
                >
                  {exp.highlight && (
                    <div className="absolute top-6 right-6">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">Current Role</span>
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{exp.title}</h4>
                      <h5 className="text-xl lg:text-2xl text-blue-600 font-semibold mb-4">{exp.company}</h5>
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
                    <h6 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                      Key Achievements
                    </h6>
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
                    <h6 className="text-lg font-semibold text-gray-900 mb-4">Technologies & Tools</h6>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            exp.highlight ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                        >
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

        {/* Design Experience */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Design Background</h3>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl shadow-xl p-8 lg:p-10 border border-purple-200">
              <div className="absolute top-6 right-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Foundation Experience
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="flex-1">
                  <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{designExperience.title}</h4>
                  <h5 className="text-xl lg:text-2xl text-purple-600 font-semibold mb-4">{designExperience.company}</h5>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{designExperience.description}</p>
                </div>

                <div className="lg:text-right space-y-3 lg:ml-8">
                  <div className="flex items-center lg:justify-end space-x-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold text-lg">{designExperience.duration}</span>
                  </div>
                  <div className="flex items-center lg:justify-end space-x-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-purple-500" />
                    <span className="text-lg">{designExperience.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h6 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-500 mr-2" />
                  Design Expertise Developed
                </h6>
                <div className="grid md:grid-cols-2 gap-4">
                  {designExperience.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-white/70 rounded-xl hover:bg-white transition-colors">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h6 className="text-lg font-semibold text-gray-900 mb-4">Design Tools & Skills</h6>
                <div className="flex flex-wrap gap-3">
                  {designExperience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 rounded-full text-sm font-medium transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;