import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Washington",
      location: "Seattle, WA",
      year: "2018",
      gpa: "3.8/4.0",
      focus: "Specialization in Human-Computer Interaction and Web Technologies",
      coursework: ["Advanced Web Development", "UI/UX Design", "Data Structures", "Software Engineering"]
    }
  ];

  const certifications = [
    {
      name: "React Advanced Patterns",
      issuer: "Epic React by Kent C. Dodds",
      year: "2023",
      icon: Award,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Web Performance Optimization",
      issuer: "Google Developers",
      year: "2023", 
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Accessibility Specialist",
      issuer: "International Association of Accessibility Professionals",
      year: "2022",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "TypeScript Advanced",
      issuer: "Microsoft Learn",
      year: "2022",
      icon: Award,
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Frontend Masters Certificate",
      issuer: "Frontend Masters",
      year: "2021",
      icon: Award,
      color: "from-orange-500 to-red-500"
    }
  ];

  const continuousLearning = [
    "Advanced React Patterns & Performance",
    "Web Assembly & Modern Browser APIs",
    "Design Systems & Component Architecture",
    "Accessibility & Inclusive Design",
    "Frontend Testing Strategies"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Learning & Growth</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{edu.degree}</h4>
                  <h5 className="text-lg text-green-600 font-semibold mb-4">{edu.school}</h5>
                  <div className="space-y-3 text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <span className="font-medium">{edu.year}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                    <div className="font-medium text-gray-900">GPA: {edu.gpa}</div>
                  </div>
                  <p className="text-gray-700 mb-4">{edu.focus}</p>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h6>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{cert.name}</h4>
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
              <h4 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="w-7 h-7 mr-3" />
                Continuous Learning Focus
              </h4>
              <p className="text-indigo-100 mb-6 text-lg">
                Staying current with the rapidly evolving frontend landscape through ongoing education and hands-on experimentation.
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