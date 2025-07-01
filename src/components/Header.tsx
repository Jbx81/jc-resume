import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Code2, Palette, Layers } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left flex-1">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                <Layers className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Jonathan Ciccarella
            </h1>
            <h2 className="text-2xl lg:text-4xl text-gray-200 mb-6 font-light">
              Senior Software Engineer
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-6">
              Frontend-focused engineer with 6 years of software development and 12 years of graphic design expertise. 
              Bridging the gap between design and development to create pixel-perfect, performant user experiences.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                6 Years Engineering
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                12 Years Combined Design and Product Management
              </span>
              {/* <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                Design-to-Code Expert
              </span> */}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-200 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="font-medium">jonciccarella@email.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-200 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-medium">+1 (917) 539-0816</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-200 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <span className="font-medium">Hoboken, NJ</span>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <div className="grid grid-cols-3 gap-3">
                  <a href="https://www.linkedin.com/in/jonciccarella" className="flex flex-col items-center space-y-2 bg-blue-600/20 hover:bg-blue-600/30 p-3 rounded-xl transition-colors group">
                    <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </a>
                  <a href="https://www.github.com/Jonathan-Ciccarella_mmcgh" className="flex flex-col items-center space-y-2 bg-gray-600/20 hover:bg-gray-600/30 p-3 rounded-xl transition-colors group">
                    <Github className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">GitHub</span>
                  </a>
                  <button className="flex flex-col items-center space-y-2 bg-green-600/20 hover:bg-green-600/30 p-3 rounded-xl transition-colors group">
                    <Download className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;