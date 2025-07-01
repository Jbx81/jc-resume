import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              John Smith
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6">
              Senior Full Stack Developer
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Passionate developer with 8+ years of experience building scalable web applications 
              and leading development teams to deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>john.smith@email.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>San Francisco, CA</span>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <a href="#" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;