'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Rocket, Send } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const roles = ['Frontend Developer', 'UI/UX Designer', 'Creative Coder', 'Problem Solver'];
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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl w-full text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for freelance work
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
          Hi, I am <span className="text-accent italic"> Jolo </span>
        </h1>

        <div className="text-xl md:text-2xl text-white/60 mb-10 h-16 md:h-8">
          I like <span className="text-white font-medium">{text}</span>
          <span className="w-1 h-6 bg-accent ml-1 inline-block animate-pulse" />
          <br className="hidden md:block" />
          <span className="text-sm md:text-base mt-2 block">
            Beautiful digital experiences that make people go <em className="text-accent/80 not-italic">"wow"</em>.
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent text-[#0a0a0a] px-8 py-4 rounded-lg font-bold hover:scale-[1.01] transition-all duration-180"
          >
            <Rocket size={18} />
            View My Work
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/10 bg-white/5 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 hover:scale-[1.01] transition-all duration-180"
          >
            <Send size={18} />
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
