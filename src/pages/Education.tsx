import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Palette, Brain } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Washington",
      location: "Seattle, WA",
      year: "2018",
      gpa: "3.8/4.0",
      focus: "Specialization in Human-Computer Interaction and Web Technologies",
      coursework: ["Advanced Web Development", "UI/UX Design", "Data Structures", "Software Engineering"],
      note: "Career transition from graphic design to software engineering"
    },
    {
      degree: "Associate of Applied Arts in Graphic Design",
      school: "Seattle Central College",
      location: "Seattle, WA", 
      year: "2006",
      gpa: "3.9/4.0",
      focus: "Print Production, Typography, and Visual Communication",
      coursework: ["Typography", "Print Production", "Color Theory", "Brand Design"],
      note: "Foundation for 12-year design career"
    }
  ];

  const certifications = [
    {
      name: "AI Engineering Fundamentals",
      issuer: "DeepLearning.AI",
      year: "2024",
      icon: Brain,
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Prompt Engineering for Developers",
      issuer: "OpenAI",
      year: "2024",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "React Advanced Patterns",
      issuer: "Epic React by Kent C. Dodds",
      year: "2023",
      icon: Award,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Design Systems with React",
      issuer: "Frontend Masters",
      year: "2023", 
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Web Performance Optimization",
      issuer: "Google Developers",
      year: "2022",
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Accessibility Specialist",
      issuer: "International Association of Accessibility Professionals",
      year: "2022",
      icon: Award,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "TypeScript Advanced",
      issuer: "Microsoft Learn",
      year: "2021",
      icon: Award,
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Adobe Certified Expert",
      issuer: "Adobe Systems",
      year: "2010",
      icon: Award,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const continuousLearning = [
    "Advanced AI Model Integration & MCP Development",
    "Prompt Engineering & AI Workflow Optimization", 
    "Design System Architecture & AI-Enhanced Tokens",
    "Web Assembly & Modern Browser APIs", 
    "Accessibility & Inclusive Design",
    "Frontend Testing Strategies & AI-Assisted QA",
    "Design-to-Code Workflow Optimization",
    "Machine Learning for Frontend Applications"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Learning & Growth</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Education & Certifications</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className={`rounded-2xl p-6 shadow-lg border ${
                  index === 0 
                    ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100' 
                    : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100'
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{edu.degree}</h3>
                    {index === 1 && <Palette className="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" />}
                  </div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    index === 0 ? 'text-blue-600' : 'text-purple-600'
                  }`}>{edu.school}</h4>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className={`w-4 h-4 ${index === 0 ? 'text-blue-500' : 'text-purple-500'}`} />
                      <span className="font-medium">{edu.year}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                    <div className="font-medium text-gray-900 text-sm">GPA: {edu.gpa}</div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">{edu.focus}</p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">Key Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span key={idx} className={`px-2 py-1 rounded-full text-xs font-medium ${
                          index === 0 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`text-xs font-medium p-2 rounded-lg ${
                    index === 0 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {edu.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              Professional Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{cert.name}</h3>
                      <p className="text-blue-600 font-semibold mb-1">{cert.issuer}</p>
                      <p className="text-gray-600 text-sm">Completed: {cert.year}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Continuous Learning */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="w-7 h-7 mr-3" />
                Continuous Learning Focus
              </h3>
              <p className="text-indigo-100 mb-6 text-lg">
                Staying current with evolving AI technologies while deepening design-to-code expertise 
                and exploring the intersection of artificial intelligence and frontend development.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {continuousLearning.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;