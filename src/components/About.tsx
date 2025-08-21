import { useEffect, useRef, useState } from "react"
import { User, Award, Coffee, Heart, Code, Zap, Target, Rocket } from 'lucide-react';



const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const oberver = new IntersectionObserver (
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1}


        );

        if (sectionRef.current) {
            oberver.observe(sectionRef.current)
        }

       return () => oberver.disconnect()
    }, [])


     const stats = [
    { icon: Award, number: '50+', label: 'Projects Completed', color: 'text-cyan-400' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee', color: 'text-yellow-400' },
    { icon: Heart, number: '100%', label: 'Client Satisfaction', color: 'text-pink-400' },
    { icon: Rocket, number: '3+', label: 'Years Experience', color: 'text-purple-400' }
  ];

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 
    'TypeScript', 'Next.js', 'AWS', 'Docker'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <User className="w-8 h-8 text-cyan-400 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-black text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
        </div>

       
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white flex items-center">
                <Code className="w-8 h-8 text-cyan-400 mr-3 animate-pulse" />
                Crafting Digital Excellence
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate <span className="text-cyan-400 font-semibold">Full Stack Developer</span> with an 
                insatiable curiosity for technology and innovation. My journey began with a simple "Hello World" 
                and has evolved into creating <span className="text-purple-400 font-semibold">complex, scalable applications</span> 
                that solve real-world problems.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                With expertise spanning both <span className="text-pink-400 font-semibold">frontend artistry</span> and 
                <span className="text-yellow-400 font-semibold"> backend architecture</span>, I specialize in creating 
                seamless user experiences backed by robust, efficient systems. I believe in writing 
                <span className="text-green-400 font-semibold"> clean, maintainable code</span> that stands the test of time.
              </p>
            </div>

            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold">Core Technologies</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={skill} 
                    className={`px-4 py-2 bg-gray-900/50 border border-gray-800 text-gray-300 rounded-full text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-default transform hover:scale-105 ${isVisible ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 text-center relative overflow-hidden">
             
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
                
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Prajwal Padole</h4>
                  <p className="text-cyan-400 font-semibold mb-4">Full Stack Developer</p>
                  <div className="flex items-center justify-center space-x-2 text-gray-400">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Always Learning, Always Growing</span>
                  </div>
                </div>

                
                <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

           
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, number, label, color }, index) => (
            <div 
              key={label} 
              className={`group text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <Icon className={`w-8 h-8 ${color} mx-auto mb-4 group-hover:animate-bounce`} />
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {number}
                </div>
                <div className="text-gray-400 font-medium text-sm">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;