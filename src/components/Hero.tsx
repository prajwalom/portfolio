import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Full Stack Developer & Problem Solver';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setText(fullText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-white hover:bg-gray-800' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400 hover:bg-blue-400/10' },
    { icon: Mail, href: '#contact', label: 'Email', color: 'hover:text-cyan-400 hover:bg-cyan-400/10' }
  ];

  return (
    <section id="home" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
    
      <div className="absolute inset-0">
       
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
      
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Greeting */}
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-lg">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span>Hello, I'm</span>
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 relative">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Prajwal
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_100%]">
              Padole
            </span>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce"></div>
          </h1>

          {/* Animated Role */}
          <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
            <Code className="w-8 h-8 mr-3 text-cyan-400 animate-pulse" />
            <span className="font-light">
              {text}
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </span>
            <Zap className="w-8 h-8 ml-3 text-purple-400 animate-pulse" />
          </div>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting <span className="text-cyan-400 font-semibold">innovative digital experiences</span> with 
            cutting-edge technologies. Passionate about turning 
            <span className="text-purple-400 font-semibold"> complex problems</span> into 
            <span className="text-pink-400 font-semibold"> elegant solutions</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </div>
            </button>
            
            <button className="group relative border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:text-black">
              <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative">Explore My Work</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`group p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:border-transparent ${color}`}
                aria-label={label}
              >
                <Icon className="w-6 h-6 group-hover:animate-pulse" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <span className="text-gray-500 text-sm">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-cyan-400/30"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-purple-400/30"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-purple-400/30"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-cyan-400/30"></div>
    </section>
  );
};

export default Hero;