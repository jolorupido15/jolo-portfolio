'use client';

import { MapPin } from 'lucide-react';


const About = () => {
  const skills = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'Python',
    'PostgreSQL', 'Tailwind CSS', 'Figma', 'Docker', 'AWS'
  ];

  const stats = [
    { num: '30+', label: 'Projects Completed' },
    { num: '20+', label: 'Happy Clients' },
    { num: '3+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] blur-2xl group-hover:bg-accent/30 transition-colors duration-500" />
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 transition-all duration-180 hover:border-accent/30 hover:shadow-lg">
            {/* Placeholder for profile image since I can't confirm exact path in public/ */}
            <img
              src="/profile.png"
              alt="Jolo Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jolo';
              }}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
        </div>

        <div>
          <div className="flex items-center gap-3 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Turning ideas into <br />
            <span className="text-accent italic">digital reality</span>
          </h2>

          <div className="space-y-4 text-white/60 leading-relaxed mb-8 text-sm md:text-base">
            <p>
              I am <strong className="text-white font-semibold">Jolo</strong>, a passionate full-stack developer and UI/UX designer based in the <span className="inline-flex items-center gap-1 text-white font-medium">Philippines <MapPin size={14} className="text-accent" /></span>. I love building products that are not just functional — but <strong className="text-white font-semibold">visually extraordinary</strong>.
            </p>
            <p>
              With over <strong className="text-white font-semibold">3 years of experience</strong>, I've worked on everything from sleek landing pages to complex SaaS platforms. My philosophy: every pixel matters, every interaction should feel intentional.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg border border-white/5 bg-white/5 text-white/70 text-xs font-medium hover:border-accent/30 hover:text-accent transition-all duration-180 hover:scale-[1.01] cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.num}
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
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
