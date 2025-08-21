import { Code2, Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
         
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Prajwal Padole</span>
            </div>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating innovative solutions 
              that make a difference in the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

       
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>📧 prajwalpadole@email99.com</p>
              <p>📱 +91 7028378450</p>
              <p>📍 Bhandara, Maharashtra, India</p>
            </div>
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-300">
                Available for freelance opportunities and interesting projects.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>by Prajwal Padole</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;