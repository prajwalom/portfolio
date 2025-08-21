import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Redis', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(({ icon: Icon, title, skills }) => (
            <div key={title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              </div>

              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{name}</span>
                      <span className="text-gray-500 text-sm">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-8 opacity-60">
          <div className="text-center">
            <Globe className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <span className="text-gray-600 text-sm">Web Dev</span>
          </div>
          <div className="text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <span className="text-gray-600 text-sm">Mobile</span>
          </div>
          <div className="text-center">
            <Database className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <span className="text-gray-600 text-sm">Database</span>
          </div>
          <div className="text-center">
            <Server className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <span className="text-gray-600 text-sm">Backend</span>
          </div>
          <div className="text-center">
            <Palette className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <span className="text-gray-600 text-sm">UI/UX</span>
          </div>
          <div className="text-center">
            <Code className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <span className="text-gray-600 text-sm">Clean Code</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;