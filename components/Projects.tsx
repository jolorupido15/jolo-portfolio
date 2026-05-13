'use client';

import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'NexShop — E-Commerce Platform',
    desc: 'A full-stack e-commerce solution with real-time inventory, Stripe payments, and a slick admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: '🛒',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'AuraAI — Chat Assistant',
    desc: 'An intelligent AI chat assistant with context memory, document parsing, and multi-model support.',
    tags: ['Python', 'FastAPI', 'OpenAI'],
    icon: '🤖',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'FlowBoard — SaaS Dashboard',
    desc: 'A powerful analytics dashboard for startups. Real-time charts, team collaboration, and automated reports.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    icon: '📊',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Wavify — Music Streaming App',
    desc: 'A cross-platform music streaming app with offline mode, social playlists, and AI-powered recommendations.',
    tags: ['React Native', 'Expo', 'Firebase'],
    icon: '🎵',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'GreenTrack — Eco Footprint Tracker',
    desc: 'A sustainability platform that gamifies eco-friendly habits. Users track their carbon footprint.',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    icon: '🌿',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Roamly — Smart Travel Planner',
    desc: 'An AI-powered travel planner that generates personalized itineraries and visualizes your journey.',
    tags: ['React', 'GraphQL', 'Mapbox'],
    icon: '✈️',
    color: 'from-yellow-500/20 to-amber-500/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            Featured Work
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects I'm <span className="text-accent italic">proud of</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`h-48 flex items-center justify-center text-6xl bg-gradient-to-br ${project.color} group-hover:scale-105 transition-transform duration-700`}>
                <span className="drop-shadow-2xl">{project.icon}</span>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest hover:opacity-70 transition-opacity">
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-xs font-bold text-white/30 uppercase tracking-widest hover:text-white transition-colors">
                    <Code size={14} />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
