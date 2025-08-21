import  { useState, useEffect } from 'react';
import { Menu, X, Code2, Zap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Code2 className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              Prajwal Padole
            </span>
            <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-lg ${
                    activeSection === item.href.slice(1)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? 'w-full' : ''
                  }`}></span>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-cyan-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
            >
              <div className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isOpen ? (
                <X className="w-6 h-6 relative z-10 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-black/95 backdrop-blur-md border-t border-gray-800/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg relative group ${
                  activeSection === item.href.slice(1)
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'bg-cyan-400'
                      : 'bg-gray-600 group-hover:bg-cyan-400'
                  }`}></div>
                  <span>{item.name}</span>
                </div>
                
                {/* Mobile hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation indicator dots */}
      <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group block"
              title={item.name}
            >
              <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? 'bg-cyan-400 border-cyan-400 scale-125'
                  : 'border-gray-600 hover:border-cyan-400 hover:scale-110'
              }`}>
                <div className={`absolute right-6 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
                  activeSection === item.href.slice(1) ? 'text-cyan-400' : ''
                }`}>
                  {item.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;