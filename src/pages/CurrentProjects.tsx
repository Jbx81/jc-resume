import React from 'react';
import { Brain, Zap, Code2, Layers, Lightbulb, Cpu, Network, Bot, Sparkles, ArrowRight, ExternalLink, Github } from 'lucide-react';

const CurrentProjects = () => {
  const aiProjects = [
    {
      title: "MCP Client Development",
      description: "Building sophisticated Model Context Protocol clients that seamlessly integrate with AI models to enhance development workflows and automate complex tasks.",
      status: "Active Development",
      technologies: ["TypeScript", "Node.js", "MCP Protocol", "AI APIs", "WebSockets"],
      features: [
        "Real-time AI model communication",
        "Context-aware prompt management", 
        "Automated code generation workflows",
        "Integration with development tools"
      ],
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      progress: 75
    },
    {
      title: "MCP Server Infrastructure",
      description: "Developing robust MCP servers that provide AI models with enhanced context and capabilities, enabling more intelligent and context-aware responses.",
      status: "Beta Testing",
      technologies: ["Python", "FastAPI", "Docker", "Redis", "PostgreSQL"],
      features: [
        "High-performance context serving",
        "Scalable architecture design",
        "Real-time data synchronization",
        "Advanced caching mechanisms"
      ],
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      progress: 85
    },
    {
      title: "AI-Enhanced Design System",
      description: "Creating an intelligent design system that uses AI to automatically generate components, suggest improvements, and maintain design consistency across projects.",
      status: "Research Phase",
      technologies: ["React", "AI/ML", "Design Tokens", "Figma API", "Computer Vision"],
      features: [
        "Automated component generation",
        "Design consistency analysis",
        "Intelligent color palette suggestions",
        "Accessibility optimization"
      ],
      icon: Layers,
      color: "from-emerald-500 to-teal-500",
      progress: 40
    },
    {
      title: "Prompt Engineering Framework",
      description: "Developing a comprehensive framework for prompt engineering that optimizes AI interactions and ensures consistent, high-quality outputs across different use cases.",
      status: "Active Development",
      technologies: ["Python", "LangChain", "OpenAI API", "Anthropic API", "Vector Databases"],
      features: [
        "Template-based prompt management",
        "A/B testing for prompt optimization",
        "Performance analytics dashboard",
        "Multi-model compatibility"
      ],
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      progress: 60
    }
  ];

  const learningFocus = [
    {
      title: "Advanced AI Model Integration",
      description: "Exploring cutting-edge techniques for integrating AI models into web applications",
      icon: Brain
    },
    {
      title: "Prompt Engineering Mastery",
      description: "Developing expertise in crafting optimal prompts for various AI models and use cases",
      icon: Lightbulb
    },
    {
      title: "MCP Protocol Deep Dive",
      description: "Mastering the Model Context Protocol for enhanced AI-application communication",
      icon: Network
    },
    {
      title: "AI-Driven Development Workflows",
      description: "Creating intelligent development processes that leverage AI for code generation and optimization",
      icon: Code2
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            <span>AI Innovation</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Current Projects</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Pioneering the future of development through AI-enhanced workflows, MCP development, 
            and intelligent automation systems.
          </p>
        </div>

        {/* AI Projects */}
        <div className="space-y-12 mb-20">
          {aiProjects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" 
                   style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 lg:p-12 border border-gray-100 group-hover:border-gray-200">
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex items-start space-x-6 flex-1">
                    <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Active Development' ? 'bg-green-100 text-green-800' :
                          project.status === 'Beta Testing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-gray-700">Development Progress</span>
                    <span className="text-sm font-bold text-gray-900">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${project.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Features and Technologies */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-emerald-500 mr-2" />
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Code2 className="w-5 h-5 text-blue-500 mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Focus */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Current Learning Focus</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Continuously expanding expertise in AI engineering and exploring the latest developments 
              in artificial intelligence and machine learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningFocus.map((focus, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <focus.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{focus.title}</h3>
                  <p className="text-indigo-100 text-sm leading-relaxed">{focus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in AI Engineering Collaboration?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to discuss AI engineering projects, share insights about MCP development, 
              or explore potential collaborations in the AI space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Jonathan-Ciccarella_mmcgh"
                className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;