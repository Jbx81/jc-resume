import React from 'react';
import { Code, Palette, Zap, Settings, Layers, Eye, Brain, Lightbulb, Network, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95, description: "Advanced patterns, hooks, SSR, performance optimization" },
        { name: "TypeScript", level: 92, description: "Complex types, generics, advanced patterns" },
        { name: "JavaScript (ES6+)", level: 90, description: "Modern syntax, async/await, modules" },
        { name: "HTML5/CSS3", level: 95, description: "Semantic markup, advanced layouts, animations" }
      ]
    },
    {
      title: "AI Engineering",
      icon: Brain,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "MCP Clients", level: 88, description: "Model Context Protocol client development and integration" },
        { name: "MCP Servers", level: 85, description: "Building robust MCP server infrastructure" },
        { name: "Prompt Engineering", level: 90, description: "Optimizing AI interactions and response quality" },
        { name: "AI Integration", level: 87, description: "Seamlessly integrating AI into web applications" }
      ]
    },
    {
      title: "Design & Styling",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "CSS/Sass/Less", level: 95, description: "Advanced layouts, animations, preprocessors" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first, custom configurations, design systems" },
        { name: "Design Systems", level: 92, description: "Component libraries, design tokens, documentation" },
        { name: "Responsive Design", level: 95, description: "Mobile-first, fluid layouts, breakpoint strategy" }
      ]
    },
    {
      title: "Design Tools & Process",
      icon: Eye,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Figma/Adobe XD", level: 88, description: "Design handoff, prototyping, design systems" },
        { name: "Adobe Creative Suite", level: 95, description: "12 years experience in print and digital design" },
        { name: "Typography", level: 92, description: "Font selection, hierarchy, readability optimization" },
        { name: "Color Theory", level: 90, description: "Palette creation, accessibility, brand consistency" }
      ]
    },
    {
      title: "Development Tools",
      icon: Settings,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Git/GitHub", level: 90, description: "Version control, collaboration, CI/CD workflows" },
        { name: "Webpack/Vite", level: 85, description: "Build optimization, code splitting, bundling" },
        { name: "Testing", level: 88, description: "Jest, React Testing Library, Cypress, visual testing" },
        { name: "Performance", level: 90, description: "Core Web Vitals, optimization, monitoring" }
      ]
    },
    {
      title: "AI Technologies",
      icon: Cpu,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "OpenAI APIs", level: 88, description: "GPT integration, fine-tuning, optimization" },
        { name: "Anthropic Claude", level: 85, description: "Claude API integration and prompt optimization" },
        { name: "LangChain", level: 82, description: "Building AI-powered applications and workflows" },
        { name: "Vector Databases", level: 80, description: "Embedding storage and similarity search" }
      ]
    }
  ];

  const aiSpecializations = [
    "Model Context Protocol (MCP) development",
    "Prompt engineering and optimization",
    "AI-driven development workflows",
    "Intelligent code generation systems",
    "Context-aware AI applications",
    "Multi-model AI integration strategies"
  ];

  const designToCodeSkills = [
    "Pixel-perfect implementation from design files",
    "Design system architecture and component libraries", 
    "Cross-browser compatibility and responsive design",
    "Accessibility (WCAG 2.1) and inclusive design",
    "Performance optimization without compromising design",
    "Design-developer collaboration and handoff processes"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            <span>Technical Expertise</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Skills & Technologies</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Combining 6 years of frontend engineering with 12 years of design expertise, 
            now enhanced by cutting-edge AI engineering capabilities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-center mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
                          <p className="text-sm text-gray-600 mt-1">{skill.description}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Engineering Specialization */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Network className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">AI Engineering Specialization</h2>
              <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
                Pioneering the integration of artificial intelligence into development workflows, 
                with expertise in MCP development and intelligent automation systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiSpecializations.map((skill, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="font-medium leading-relaxed">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Design-to-Code Specialization */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Design-to-Code Specialization</h2>
            <p className="text-indigo-100 text-lg max-w-3xl mx-auto">
              My unique background bridges the gap between design and development, ensuring seamless 
              translation of creative vision into functional, performant code.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designToCodeSkills.map((skill, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                <span className="font-medium leading-relaxed">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;