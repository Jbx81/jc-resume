import React from 'react';
import { Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';
import { experiences, designExperience } from '../components/experience/experience';

const Experience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Professional Journey</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Experience</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto"></div>
        </div>

        {/* Software Engineering Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Software Engineering</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative ${exp.highlight ? 'lg:scale-105' : ''}`}>
                {exp.highlight && <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>}
                <div
                  className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border ${
                    exp.highlight ? 'border-blue-200 bg-gradient-to-br from-blue-50/50 to-cyan-50/50' : 'border-gray-100'
                  }`}
                >
                  {exp.highlight && (
                    <div className="absolute top-6 right-6">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">Current Role</span>
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <h4 className="text-xl lg:text-2xl text-blue-600 font-semibold mb-4">{exp.company}</h4>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">{exp.description}</p>
                    </div>

                    <div className="lg:text-right space-y-3 lg:ml-8">
                      <div className="flex items-center lg:justify-end space-x-2 text-gray-600">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold text-lg">{exp.duration}</span>
                      </div>
                      <div className="flex items-center lg:justify-end space-x-2 text-gray-600">
                        <MapPin className="w-5 h-5 text-blue-500" />
                        <span className="text-lg">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                      Key Achievements
                    </h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Technologies & Tools</h5>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            exp.highlight ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Experience */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Design Background and Project Management Experience</h2>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl shadow-xl p-8 lg:p-10 border border-purple-200">
              {designExperience.map((desExp) => (
                <div key={desExp.id}>
                  <div className="absolute top-6 right-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Foundation Experience
                    </span>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{desExp.title}</h3>
                      <h4 className="text-xl lg:text-2xl text-purple-600 font-semibold mb-4">{desExp.company}</h4>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">{desExp.description}</p>
                    </div>

                    <div className="lg:text-right space-y-3 lg:ml-8">
                      <div className="flex items-center lg:justify-end space-x-2 text-gray-600">
                        <Calendar className="w-5 h-5 text-purple-500" />
                        <span className="font-semibold text-lg">{desExp.duration}</span>
                      </div>
                      <div className="flex items-center lg:justify-end space-x-2 text-gray-600">
                        <MapPin className="w-5 h-5 text-purple-500" />
                        <span className="text-lg">{desExp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <ChevronRight className="w-5 h-5 text-purple-500 mr-2" />
                      Design Expertise Developed
                    </h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      {desExp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-white/70 rounded-xl hover:bg-white transition-colors">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Design Tools & Skills</h5>
                    <div className="flex flex-wrap gap-3">
                      {desExp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 rounded-full text-sm font-medium transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;