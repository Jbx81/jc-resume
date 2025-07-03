import React from 'react';
import { Zap, Users, Award, Target, Layers, Sparkles, Palette, Code2, Brain, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      description: "6 years building scalable React applications with TypeScript, serving millions of users",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Design Heritage",
      description: "12 years in graphic design and magazine production, bringing visual expertise to development",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Brain,
      title: "AI Engineering",
      description: "Pioneering AI-driven development workflows, MCP clients/servers, and intelligent automation",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimize applications for 95+ Lighthouse scores while maintaining design fidelity",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const aiJourney = [
    {
      icon: Brain,
      title: "AI Engineering Passion",
      description: "Actively exploring and implementing AI technologies in development workflows"
    },
    {
      icon: Lightbulb,
      title: "Prompt Engineering",
      description: "Crafting sophisticated prompts for optimal AI model interactions and outputs"
    },
    {
      icon: Layers,
      title: "MCP Development",
      description: "Building Model Context Protocol clients and servers for enhanced AI integration"
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
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Where Design Meets AI-Driven Engineering
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
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
                    <span className="text-white text-4xl font-bold">JC</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-600 font-medium">Available for AI Engineering roles</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm text-gray-500 mt-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="font-bold text-blue-600 text-lg">6+</div>
                        <div>Years Engineering</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="font-bold text-purple-600 text-lg">12+</div>
                        <div>Years Design</div>
                      </div>
                      <div className="text-center p-3 bg-emerald-50 rounded-lg">
                        <div className="font-bold text-emerald-600 text-lg">AI</div>
                        <div>Focused</div>
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
                from magazine print production, now enhanced by a passion for 
                <span className="font-semibold text-emerald-600"> AI engineering</span>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                My design background gives me an intuitive understanding of typography, layout, color theory, 
                and user experience principles. This foundation allows me to build applications that are not 
                only technically excellent but also visually compelling and user-friendly.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently, I'm pioneering the integration of AI technologies into development workflows, 
                building MCP clients and servers, and exploring how artificial intelligence can enhance 
                both the development process and end-user experiences.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {['React/TypeScript', 'AI Engineering', 'Design Systems', 'MCP Development', 'Prompt Engineering', 'CSS/Sass', 'Figma to Code', 'Performance Optimization'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Engineering Focus */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI Engineering Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Actively exploring and implementing cutting-edge AI technologies to revolutionize development workflows
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiJourney.map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-emerald-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
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