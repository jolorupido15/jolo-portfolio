'use client';

import { ExternalLink, Code, ShoppingBag, MessageSquare, BarChart3, Music, Leaf, Globe } from 'lucide-react';

const projects = [
  {
    title: 'NexShop — E-Commerce Platform',
    desc: 'A full-stack e-commerce solution with real-time inventory, Stripe payments, and a slick admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: <ShoppingBag size={48} className="text-white" />,
  },
  {
    title: 'AuraAI — Chat Assistant',
    desc: 'An intelligent AI chat assistant with context memory, document parsing, and multi-model support.',
    tags: ['Python', 'FastAPI', 'OpenAI'],
    icon: <MessageSquare size={48} className="text-white" />,
  },
  {
    title: 'FlowBoard — SaaS Dashboard',
    desc: 'A powerful analytics dashboard for startups. Real-time charts, team collaboration, and automated reports.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    icon: <BarChart3 size={48} className="text-white" />,
  },
  {
    title: 'Wavify — Music Streaming App',
    desc: 'A cross-platform music streaming app with offline mode, social playlists, and AI-powered recommendations.',
    tags: ['React Native', 'Expo', 'Firebase'],
    icon: <Music size={48} className="text-white" />,
  },
  {
    title: 'GreenTrack — Eco Footprint Tracker',
    desc: 'A sustainability platform that gamifies eco-friendly habits. Users track their carbon footprint.',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    icon: <Leaf size={48} className="text-white" />,
  },
  {
    title: 'Roamly — Smart Travel Planner',
    desc: 'An AI-powered travel planner that generates personalized itineraries and visualizes your journey.',
    tags: ['React', 'GraphQL', 'Mapbox'],
    icon: <Globe size={48} className="text-white" />,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-navy relative py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 section-label text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <div className="w-8 h-[1px] divider-gradient" />
            Featured Work
            <div className="w-8 h-[1px] divider-gradient scale-x-[-1]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects I&apos;m <span className="text-gradient-accent italic">proud of</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-black border border-[#7C3AED]/35 rounded-2xl overflow-hidden card-glow transition-all duration-180 hover:-translate-y-1"
            >
              <div className="h-48 flex items-center justify-center text-white bg-[#2A1848] group-hover:bg-[#3B2463] transition-colors duration-500">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="btn-portfolio px-2 py-1 rounded text-[10px] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C084FC] transition-colors duration-180">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="btn-portfolio inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-widest transition-all duration-180 hover:scale-[1.01]"
                  >
                    <ExternalLink size={14} className="text-white" />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="btn-portfolio inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-widest transition-all duration-180 hover:scale-[1.01]"
                  >
                    <Code size={14} className="text-white" />
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
