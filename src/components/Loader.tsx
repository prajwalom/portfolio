import React, { useState, useEffect } from 'react';
import { Code2, Zap, Sparkles, Rocket } from 'lucide-react';

const quotes = [
  "Code is poetry written in logic.",
  "Innovation distinguishes between a leader and a follower.",
  "The future belongs to those who code it.",
  "Every expert was once a beginner.",
  "Dream in code, build in reality."
];

interface LoaderProps {
  onLoadComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(quoteInterval);
          setTimeout(onLoadComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    const iconInterval = setInterval(() => {
      setShowIcon(prev => !prev);
    }, 800);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(progressInterval);
      clearInterval(iconInterval);
    };
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Animated Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Main Icon with Glow Effect */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse scale-150"></div>
          <div className={`relative transition-all duration-500 ${showIcon ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
            {progress < 25 ? (
              <Code2 className="w-20 h-20 text-cyan-400 mx-auto animate-bounce" />
            ) : progress < 50 ? (
              <Zap className="w-20 h-20 text-yellow-400 mx-auto animate-spin" />
            ) : progress < 75 ? (
              <Sparkles className="w-20 h-20 text-purple-400 mx-auto animate-pulse" />
            ) : (
              <Rocket className="w-20 h-20 text-green-400 mx-auto animate-bounce" />
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-8">
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full"></div>
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full transition-all duration-300 relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-gray-400">Loading...</span>
            <span className="text-cyan-400 font-bold">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Quote Section */}
        <div className="h-20 flex items-center justify-center mb-8">
          <div className="max-w-md">
            <p className="text-white text-lg font-light italic leading-relaxed animate-fade-in-up">
              "{quotes[currentQuote]}"
            </p>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Prajwal Padole
          </h3>
          <p className="text-gray-400 animate-bounce">
            {progress < 30 ? 'Initializing...' : 
             progress < 60 ? 'Loading Portfolio...' : 
             progress < 90 ? 'Almost Ready...' : 'Welcome!'}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-cyan-400/30 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-purple-400/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
};

export default Loader;