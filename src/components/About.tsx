import React from 'react';
import { Code, Users, Trophy, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Expertise",
      description: "Proficient in modern web technologies including React, Node.js, Python, and cloud platforms"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led development teams of 5-12 engineers, mentoring junior developers and driving technical decisions"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Delivered 20+ successful projects, increasing user engagement by 40% and reducing load times by 60%"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Passionate about emerging technologies, AI integration, and creating cutting-edge user experiences"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mx-auto lg:mx-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                <span className="text-white text-6xl font-bold">JS</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate full-stack developer with over 8 years of experience creating 
              robust, scalable web applications. My journey began with a Computer Science degree 
              and has evolved through various roles, from startup environments to enterprise-level 
              organizations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in building modern web applications using cutting-edge technologies, 
              with a particular focus on user experience and performance optimization. I'm also 
              experienced in leading development teams and implementing agile methodologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers in the community.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <highlight.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;