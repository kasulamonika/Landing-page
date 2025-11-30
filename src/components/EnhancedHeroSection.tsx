import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface MouseGradientStyle {
  left: string;
  top: string;
  opacity: number;
}

const EnhancedHeroSection = () => {
  const [mouseGradientStyle, setMouseGradientStyle] = useState<MouseGradientStyle>({
    left: '0px',
    top: '0px',
    opacity: 0,
  });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const animateWords = () => {
      const wordElements = document.querySelectorAll('.hero-word-animate');
      wordElements.forEach(word => {
        const delay = parseInt(word.getAttribute('data-delay') || '0') || 0;
        setTimeout(() => {
          const element = word as HTMLElement;
          if (element) element.style.animation = 'word-appear 0.8s ease-out forwards';
        }, delay);
      });
    };
    const timeoutId = setTimeout(animateWords, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const handleMouseLeave = () => {
      setMouseGradientStyle(prev => ({ ...prev, opacity: 0 }));
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1000);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const wordElements = document.querySelectorAll('.hero-word-animate');
    const handleMouseEnter = (e: Event) => { 
      const target = e.target as HTMLElement;
      if (target) target.style.textShadow = '0 0 20px rgba(165, 212, 245, 0.6)'; 
    };
    const handleMouseLeave = (e: Event) => { 
      const target = e.target as HTMLElement;
      if (target) target.style.textShadow = 'none'; 
    };
    wordElements.forEach(word => {
      word.addEventListener('mouseenter', handleMouseEnter);
      word.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      wordElements.forEach(word => {
        if (word) {
          word.removeEventListener('mouseenter', handleMouseEnter);
          word.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  const heroStyles = `
    .hero-mouse-gradient {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px;
      background-image: radial-gradient(circle, rgba(28, 130, 180, 0.08), rgba(2, 62, 125, 0.05), transparent 70%);
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
    }
    @keyframes word-appear { 
      0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px); } 
      50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px); } 
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } 
    }
    @keyframes grid-draw { 
      0% { stroke-dashoffset: 1000; opacity: 0; } 
      50% { opacity: 0.2; } 
      100% { stroke-dashoffset: 0; opacity: 0.1; } 
    }
    @keyframes pulse-glow { 
      0%, 100% { opacity: 0.1; transform: scale(1); } 
      50% { opacity: 0.3; transform: scale(1.1); } 
    }
    .hero-word-animate { 
      display: inline-block; 
      opacity: 0; 
      margin: 0 0.1em; 
      transition: color 0.3s ease, transform 0.3s ease; 
    }
    .hero-word-animate:hover { 
      color: #a5d4f5;
      transform: translateY(-3px); 
      text-shadow: 0 0 20px rgba(165, 212, 245, 0.6);
    }
    .grid-line { 
      stroke: #1c82b4; 
      stroke-width: 0.5; 
      opacity: 0; 
      stroke-dasharray: 5 5; 
      stroke-dashoffset: 1000; 
      animation: grid-draw 2s ease-out forwards; 
    }
    .detail-dot { 
      fill: #a5d4f5; 
      opacity: 0; 
      animation: pulse-glow 3s ease-in-out infinite; 
    }
    .ripple-effect-hero { 
      position: fixed; 
      width: 4px; 
      height: 4px; 
      background: rgba(28, 130, 180, 0.6); 
      border-radius: 50%; 
      transform: translate(-50%, -50%); 
      pointer-events: none; 
      animation: pulse-glow 1s ease-out forwards; 
      z-index: 9999; 
    }
  `;

  return (
    <>
      <style>{heroStyles}</style>
      <div className="relative overflow-hidden text-white min-h-screen flex items-center justify-center" 
        style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
        
        {/* Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridCareerG1" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(28, 130, 180, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridCareerG1)" />
          <line x1="0" y1="25%" x2="100%" y2="25%" className="grid-line" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="75%" x2="100%" y2="75%" className="grid-line" style={{ animationDelay: '1s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
          <circle cx="20%" cy="25%" r="2" className="detail-dot" style={{ animationDelay: '3s' }} />
          <circle cx="80%" cy="25%" r="2" className="detail-dot" style={{ animationDelay: '3.2s' }} />
          <circle cx="20%" cy="75%" r="2" className="detail-dot" style={{ animationDelay: '3.4s' }} />
          <circle cx="80%" cy="75%" r="2" className="detail-dot" style={{ animationDelay: '3.6s' }} />
        </svg>

        {/* Decorative Blur circles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blue10)' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blue10)' }}></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Top Label */}
            <div>
              <h2 className="text-xs sm:text-sm font-mono font-light text-blue-100 uppercase tracking-[0.2em] opacity-80">
                <span className="hero-word-animate" data-delay="0">Smart</span>
                <span className="hero-word-animate" data-delay="150">Decisions.</span>
              </h2>
              <div className="mt-3 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30 mx-auto"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              <div className="mb-4 md:mb-6">
                <span className="hero-word-animate" data-delay="300">Your</span>
                <span className="hero-word-animate" data-delay="450">Future</span>
                <span className="hero-word-animate" data-delay="600">Starts</span>
                <span className="hero-word-animate" data-delay="750">with</span>
              </div>
              <div 
                style={{ 
                  color: 'white',
                  filter: 'drop-shadow(0 0 25px rgba(165, 212, 245, 1))',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 35px rgba(165, 212, 245, 1.2))';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(165, 212, 245, 1))';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span className="hero-word-animate" data-delay="900">Smart</span>
                <span className="hero-word-animate" data-delay="1050">Career</span>
                <span className="hero-word-animate" data-delay="1200">Decisions</span>
              </div>
            </h1>

            {/* Subheading */}
            <div className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(165, 212, 245, 0.9)' }}>
              <span className="hero-word-animate" data-delay="1400">CareerG1</span>
              <span className="hero-word-animate" data-delay="1550">combines</span>
              <span className="hero-word-animate" data-delay="1700">AI</span>
              <span className="hero-word-animate" data-delay="1850">assessments,</span>
              <span className="hero-word-animate" data-delay="2000">personalized</span>
              <span className="hero-word-animate" data-delay="2150">recommendations,</span>
              <span className="hero-word-animate" data-delay="2300">learning</span>
              <span className="hero-word-animate" data-delay="2450">pathways,</span>
              <span className="hero-word-animate" data-delay="2600">and</span>
              <span className="hero-word-animate" data-delay="2750">mentorship</span>
              <span className="hero-word-animate" data-delay="2900">to</span>
              <span className="hero-word-animate" data-delay="3050">help</span>
              <span className="hero-word-animate" data-delay="3200">you</span>
              <span className="hero-word-animate" data-delay="3350">make</span>
              <span className="hero-word-animate" data-delay="3500">informed,</span>
              <span className="hero-word-animate" data-delay="3650">data-backed</span>
              <span className="hero-word-animate" data-delay="3800">career</span>
              <span className="hero-word-animate" data-delay="3950">choices.</span>
            </div>

            {/* Bottom Decoration */}
            <div className="pt-8">
              <div className="mb-4 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30 mx-auto"></div>
              <div className="mt-6 flex justify-center space-x-4 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '4.5s' }}>
                <div className="w-1 h-1 bg-blue-300 rounded-full opacity-40"></div>
                <div className="w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
                <div className="w-1 h-1 bg-blue-300 rounded-full opacity-40"></div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              <motion.div 
                className="rounded-lg p-4 border transition-all duration-300 cursor-pointer group/card" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.2)', backdropFilter: 'blur(4px)' }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(165, 212, 245, 0.3)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false }}
              >
                <div className="text-3xl font-bold group-hover/card:text-white transition-colors">250M+</div>
                <div className="text-sm" style={{ color: 'rgba(165, 212, 245, 0.8)' }}>School Students</div>
              </motion.div>
              <motion.div 
                className="rounded-lg p-4 border transition-all duration-300 cursor-pointer group/card" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.2)', backdropFilter: 'blur(4px)' }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(165, 212, 245, 0.3)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <div className="text-3xl font-bold group-hover/card:text-white transition-colors">40M+</div>
                <div className="text-sm" style={{ color: 'rgba(165, 212, 245, 0.8)' }}>College Students</div>
              </motion.div>
              <motion.div 
                className="rounded-lg p-4 border transition-all duration-300 cursor-pointer group/card" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.2)', backdropFilter: 'blur(4px)' }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(165, 212, 245, 0.3)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <div className="text-3xl font-bold group-hover/card:text-white transition-colors">12M</div>
                <div className="text-sm" style={{ color: 'rgba(165, 212, 245, 0.8)' }}>Graduates/Year</div>
              </motion.div>
              <motion.div 
                className="rounded-lg p-4 border transition-all duration-300 cursor-pointer group/card" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.2)', backdropFilter: 'blur(4px)' }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(165, 212, 245, 0.3)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
              >
                <div className="text-3xl font-bold group-hover/card:text-white transition-colors">70%</div>
                <div className="text-sm" style={{ color: 'rgba(165, 212, 245, 0.8)' }}>Lack Guidance</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mouse Gradient Follow Effect */}
        <div 
          className="hero-mouse-gradient w-60 h-60 blur-xl sm:w-80 sm:h-80 sm:blur-2xl md:w-96 md:h-96 md:blur-3xl"
          style={{
            left: mouseGradientStyle.left,
            top: mouseGradientStyle.top,
            opacity: mouseGradientStyle.opacity,
          }}
        ></div>

        {/* Ripple Effects */}
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple-effect-hero"
            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default EnhancedHeroSection;
