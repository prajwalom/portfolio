import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  useEffect(() => {

    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (loading) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;