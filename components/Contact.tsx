'use client';

import { Send, Mail, Code, Globe } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
    { icon: <Code size={20} />, href: 'https://github.com/jolorupido15', label: 'GitHub' },
    { icon: <Globe size={20} />, href: 'https://www.facebook.com/angelo.rupido', label: 'Facebook' },
    { icon: <Mail size={20} />, href: 'mailto:jolo15rupido@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="contact"
      className="section-alt relative py-24 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 section-label text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <div className="w-8 h-[1px] divider-gradient" />
            Get In Touch
            <div className="w-8 h-[1px] divider-gradient scale-x-[-1]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.2] overflow-visible pb-1">
            Let&apos;s build something <br />
            <span className="text-gradient-accent italic">amazing together</span>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
            Whether you have a project in mind, a question, or just want to say hello — my inbox is always open.
          </p>
        </div>

        <div className="bg-black border border-[#7C3AED]/35 rounded-3xl p-8 md:p-12 backdrop-blur-sm card-glow">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/70 ml-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none border-gradient-focus transition-all duration-180"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/70 ml-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="from_email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none border-gradient-focus transition-all duration-180"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-white/70 ml-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none border-gradient-focus transition-all duration-180"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/70 ml-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none border-gradient-focus transition-all duration-180 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 btn-portfolio px-8 py-4 rounded-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-180 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : (
                <><Send size={18} /> Send Message ✦</>
              )}
            </button>

            {status === 'success' && (
              <div className="text-center text-[#C084FC] text-sm font-medium">
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="text-center text-red-400 text-sm font-medium">
                Something went wrong. Please try again.
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
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/40 text-white/70 hover:text-[#C084FC] hover:border-[#7C3AED] hover:shadow-[0_0_16px_rgba(124,58,237,0.35)] transition-all duration-180 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
