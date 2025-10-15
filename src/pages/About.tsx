import React from 'react';
import { Zap, Users, Handshake, Award, Target, Layers, Sparkles, Palette, Code2 } from 'lucide-react';

const About = () => {
  const highlights = [
      {
        icon: Code2,
        title: "Software Engineering",
        description: "6 years building scalable enterprise applications, serving tens of thousands of users",
        color: "from-blue-400 to-cyan-500"
      },
      {
        icon: Palette,
        title: "Design Background",
        description: "12 years in graphic design and magazine production, bringing visual expertise to development",
        color: "from-purple-400 to-pink-500"
      },
      {
        icon: Layers,
        title: "Design Systems",
        description: "Architect component libraries that bridge design and development teams seamlessly",
        color: "from-emerald-400 to-teal-500"
      },
      {
        icon: Zap,
        title: "Performance Focus",
        description: "Optimize applications for 95+ Lighthouse scores while maintaining design fidelity",
        color: "from-yellow-400 to-orange-500"
      },
      {
        icon: Palette,
        title: "Design Heritage",
        description: "12 years in print production & graphic design",
        color: "from-purple-500 to-pink-500",
        link: "/about"
      },
      {
        icon: Handshake,
        title: "Cross-Functional Collaboration",
        description: "Bridging business needs and development seamlessly",
        color: "from-emerald-500 to-teal-500",
        link: "/skills"
      }
    ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Where Design Meets Engineering
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="w-full max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-2xl opacity-60"></div>
              
              {/* Main profile area */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-white text-4xl font-bold">AC</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-600 font-medium">Available for opportunities</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mt-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="font-bold text-blue-600 text-lg">6+</div>
                        <div>Years Engineering</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="font-bold text-purple-600 text-lg">12+</div>
                        <div>Years Design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                I bring a unique perspective to frontend engineering, combining 
                <span className="font-semibold text-indigo-600"> 6 years of software development</span> with 
                <span className="font-semibold text-purple-600"> 12 years of graphic design expertise</span> 
                 from magazine print production.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                My design background gives me an intuitive understanding of typography, layout, color theory, 
                and user experience principles. This foundation allows me to build applications that are not 
                only technically excellent but also visually compelling and user-friendly.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in translating complex design systems into scalable React components, 
                ensuring pixel-perfect implementation while maintaining optimal performance and accessibility standards.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {['React/TypeScript', 'Design Systems', 'CSS/Sass', 'Figma to Code', 'Performance Optimization', 'Accessibility'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" 
                   style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl mb-6 shadow-lg`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;