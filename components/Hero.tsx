'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Rocket, Send, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const roles = ['Building Website', 'Animations'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setSpeed(100);
      }
      if (!isDeleting && text === currentRole) {
        setIsDeleting(true);
        setSpeed(2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setSpeed(500);
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, speed]);

  return (
    <section id="hero" className="section-navy relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-x-clip">
      <div className="max-w-4xl w-full text-center z-10 px-2 sm:px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 text-[#C084FC] text-xs font-medium tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" />
          Available for freelance work
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.15] overflow-visible">
          Hi, I am <span className="text-gradient-accent italic">Jolo</span>
        </h1>
        <div className="text-xl md:text-2xl text-white/80 mb-10 h-16 md:h-8">
          I like <span className="text-white font-medium">{text}</span>
          <span className="w-1 h-6 bg-gradient-to-b from-[#C084FC] to-[#7C3AED] ml-1 inline-block animate-pulse" />
          <br className="hidden md:block" />
          <span className="text-sm md:text-base mt-2 block text-white/70">
            Beautiful digital experiences that make people go{' '}
            <em className="text-gradient-accent-subtle not-italic">&quot;wow&quot;</em>.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#projects" className="w-full sm:w-auto flex items-center justify-center gap-2 btn-portfolio px-8 py-4 rounded-lg hover:scale-[1.01] transition-all duration-180">
            <Rocket size={18} />
            View My Work
          </Link>
          <Link href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 btn-portfolio px-8 py-4 rounded-lg hover:scale-[1.01] transition-all duration-180">
            <Send size={18} />
            Get In Touch
          </Link>
          <a href="/resume.pdf" download="Jolo_Rupido_Resume.pdf" className="w-full sm:w-auto flex items-center justify-center gap-2 btn-portfolio px-8 py-4 rounded-lg hover:scale-[1.01] transition-all duration-180">
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce z-10">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C084FC] via-[#7C3AED] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
