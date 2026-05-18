'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

const About = () => {
  const skills = [
    'HTML', 'Tailwind CSS', 'React', 'JavaScript', 'Figma'
  ];

  const stats = [
    { num: '6+', label: 'Projects Built' },
    { num: '100+', label: 'Hours of Coding' },
    { num: '5+', label: 'Technologies Learned' },
  ];

  return (
    <section
      id="about"
      className="section-alt relative py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 glow-accent rounded-[2rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#7C3AED]/40 bg-black transition-all duration-180 hover:border-[#7C3AED] hover:shadow-[0_0_32px_rgba(124,58,237,0.3)]">
            <Image
              src="/profile.jpg"
              alt="Jolo Profile"
              width={400}
              height={400}
              className="w-full h-full object-cover object-top transition-all duration-500"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#7C3AED]/15 rounded-full blur-xl" />
        </div>

        <div>
          <div className="flex items-center gap-3 section-label text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <div className="w-8 h-[1px] divider-gradient" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Turning ideas into <br />
            <span className="text-gradient-accent italic">digital reality</span>
          </h2>

          <div className="space-y-4 text-white/80 leading-relaxed mb-8 text-sm md:text-base">
            <p>
              I am <strong className="text-white font-semibold">Jolo</strong>, a passionate Frontend Developer based in the{' '}
              <span className="inline-flex items-center gap-1 text-white font-medium">
                Philippines <MapPin size={14} className="text-[#C084FC]" />
              </span>
              . I love building clean and visually appealing web interfaces.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="btn-portfolio px-4 py-2 rounded-lg text-xs transition-all duration-180 hover:scale-[1.01] cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#7C3AED]/25">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.num}
                </div>
                <div className="text-[10px] text-white/60 uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
