'use client';

import { ExternalLink, Code, ShoppingBag, MessageSquare, BarChart3, Music, Leaf, Globe } from 'lucide-react';

const projects = [
  {
    title: 'NexShop — E-Commerce Platform',
    desc: 'A full-stack e-commerce solution with real-time inventory, Stripe payments, and a slick admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: <ShoppingBag size={48} />,
  },
  {
    title: 'AuraAI — Chat Assistant',
    desc: 'An intelligent AI chat assistant with context memory, document parsing, and multi-model support.',
    tags: ['Python', 'FastAPI', 'OpenAI'],
    icon: <MessageSquare size={48} />,
  },
  {
    title: 'FlowBoard — SaaS Dashboard',
    desc: 'A powerful analytics dashboard for startups. Real-time charts, team collaboration, and automated reports.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    icon: <BarChart3 size={48} />,
  },
  {
    title: 'Wavify — Music Streaming App',
    desc: 'A cross-platform music streaming app with offline mode, social playlists, and AI-powered recommendations.',
    tags: ['React Native', 'Expo', 'Firebase'],
    icon: <Music size={48} />,
  },
  {
    title: 'GreenTrack — Eco Footprint Tracker',
    desc: 'A sustainability platform that gamifies eco-friendly habits. Users track their carbon footprint.',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    icon: <Leaf size={48} />,
  },
  {
    title: 'Roamly — Smart Travel Planner',
    desc: 'An AI-powered travel planner that generates personalized itineraries and visualizes your journey.',
    tags: ['React', 'GraphQL', 'Mapbox'],
    icon: <Globe size={48} />,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-projects section-overlay relative py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 text-neutral-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-neutral-900 to-neutral-500" />
            Featured Work
            <div className="w-8 h-[1px] bg-gradient-to-l from-neutral-900 to-neutral-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Projects I&apos;m <span className="text-gradient-dark italic">proud of</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-180 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-48 flex items-center justify-center text-neutral-400 bg-white/5 group-hover:bg-white/10 transition-colors duration-500">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded bg-white/10 text-[10px] font-bold uppercase tracking-wider text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neutral-200 transition-colors duration-180">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-xs font-bold text-neutral-300 uppercase tracking-widest hover:text-white transition-all duration-180 hover:scale-[1.01]"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest hover:text-white transition-all duration-180 hover:scale-[1.01]"
                  >
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
