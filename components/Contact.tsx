'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_lfbj1ap',
      'template_338hzxk',
      e.target as HTMLFormElement,
      'CuqpFmOX-RJAEa-qM'
    ).then(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 5000);
    }).catch(() => {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  const socials = [
    { icon: <ExternalLink size={20} />, href: '#', label: 'GitHub' },
    { icon: <ExternalLink size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:jolo15rupido@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
          <div className="w-8 h-[1px] bg-accent" />
          Get In Touch
          <div className="w-8 h-[1px] bg-accent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Let's build something <br />
          <span className="text-accent italic">amazing together</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
          Whether you have a project in mind, a question, or just want to say hello — my inbox is always open.
        </p>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                Full Name
              </label>
              <input
                id="name"
                name="from_name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                Email Address
              </label>
              <input
                id="email"
                name="from_email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Project Inquiry"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 bg-accent text-[#0a0a0a] px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : (
              <><Send size={18} /> Send Message ✦</>
            )}
          </button>

          {status === 'success' && (
            <div className="text-center text-accent text-sm font-medium">
              🎉 Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="text-center text-red-400 text-sm font-medium">
              ❌ Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>

      <div className="flex justify-center gap-4 mt-16">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-accent hover:border-accent/30 transition-all"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section >
  );
};

export default Contact;