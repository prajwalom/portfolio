import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Mumbai, India',
      period: '2023 - Present',
      description: 'Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentor junior developers and collaborate with cross-functional teams.',
      achievements: [
        'Increased application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'Pune, India',
      period: '2022 - 2023',
      description: 'Developed and maintained multiple client projects using modern JavaScript frameworks. Focused on creating responsive and user-friendly interfaces.',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced bug reports by 60%',
        'Improved code review process'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Hub',
      location: 'Bangalore, India',
      period: '2021 - 2022',
      description: 'Started career developing interactive frontend applications. Gained expertise in React, JavaScript, and modern development practices.',
      achievements: [
        'Built responsive web applications',
        'Collaborated with design team',
        'Learned agile development'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey building innovative solutions and growing as a developer.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                        <h4 className="text-lg text-blue-600 font-semibold mb-2">{experience.company}</h4>
                      </div>
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;