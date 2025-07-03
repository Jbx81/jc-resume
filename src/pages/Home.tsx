import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Palette, Brain, Sparkles, Zap, Star, ChevronDown } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      description: "6 years building scalable React applications",
      color: "from-blue-500 to-cyan-500",
      link: "/experience"
    },
    {
      icon: Palette,
      title: "Design Heritage",
      description: "12 years in magazine production & graphic design",
      color: "from-purple-500 to-pink-500",
      link: "/about"
    },
    {
      icon: Brain,
      title: "AI Engineering",
      description: "Pioneering AI-driven development workflows",
      color: "from-emerald-500 to-teal-500",
      link: "/current-projects"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-32 h-32 border border-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-48 h-48 border border-white/20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full animate-bounce delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span>Available for AI Engineering Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jonathan
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Ciccarella
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-2xl lg:text-4xl text-gray-200 mb-8 font-light">
            <span className="block">AI-Driven Frontend Engineer</span>
            <span className="block text-lg lg:text-xl text-gray-300 mt-2">
              Where Design Excellence Meets AI Innovation
            </span>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Combining 6 years of software engineering with 12 years of graphic design mastery, 
            now pioneering the future of development through AI-enhanced workflows and intelligent automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/current-projects"
              className="group flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Brain className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Explore AI Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/experience"
              className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
            >
              <Code2 className="w-6 h-6" />
              <span>View Experience</span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Core Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              The Perfect Intersection
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unique blend of creative vision, technical excellence, and AI innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Link
                key={index}
                to={highlight.link}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" 
                     style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200 group-hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{highlight.description}</p>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Innovation Callout */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Pioneering AI-Enhanced Development
          </h2>
          <p className="text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Currently exploring the frontiers of AI engineering, building MCP clients and servers, 
            and developing intelligent workflows that revolutionize how we create digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/current-projects"
              className="group flex items-center space-x-3 bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Brain className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>View AI Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/skills"
              className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
            >
              <Zap className="w-6 h-6" />
              <span>Technical Skills</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;