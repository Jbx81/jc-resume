import React from 'react';
import { Code, Palette, Zap, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95, description: "Advanced hooks, SSR, performance optimization" },
        { name: "TypeScript", level: 92, description: "Complex types, generics, advanced patterns" },
        { name: "Vue.js/Nuxt", level: 85, description: "Composition API, state management" },
        { name: "Svelte/SvelteKit", level: 78, description: "Modern reactive framework" }
      ]
    },
    {
      title: "Styling & Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "CSS3/Sass", level: 95, description: "Advanced layouts, animations, preprocessors" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first, custom configurations" },
        { name: "Styled Components", level: 88, description: "CSS-in-JS, theming systems" },
        { name: "Framer Motion", level: 85, description: "Complex animations, gestures" }
      ]
    },
    {
      title: "Performance & Build",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Webpack/Vite", level: 88, description: "Bundle optimization, code splitting" },
        { name: "Web Performance", level: 92, description: "Core Web Vitals, optimization strategies" },
        { name: "PWA Development", level: 85, description: "Service workers, offline functionality" },
        { name: "Testing", level: 90, description: "Jest, Cypress, Testing Library" }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Git/GitHub", level: 95, description: "Advanced workflows, CI/CD integration" },
        { name: "Design Systems", level: 90, description: "Component libraries, documentation" },
        { name: "Accessibility", level: 88, description: "WCAG compliance, screen readers" },
        { name: "GraphQL/REST", level: 85, description: "API integration, state management" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized in modern frontend technologies with a focus on performance, 
            accessibility, and exceptional user experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-center mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
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
        
        {/* Additional Skills Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Additional Expertise</h3>
            <p className="text-indigo-100 text-lg">
              Beyond core frontend skills, I bring valuable experience in these areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">UI/UX Collaboration</h4>
              <p className="text-indigo-100">Working closely with designers to implement pixel-perfect interfaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Performance Optimization</h4>
              <p className="text-indigo-100">Core Web Vitals expertise and advanced optimization techniques</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Accessibility</h4>
              <p className="text-indigo-100">WCAG 2.1 compliance and inclusive design practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;