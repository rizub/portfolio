import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Terminal Demo', href: '#terminal' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0B0F17]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#overview" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-0.5 transition-transform group-hover:scale-105 duration-200">
              <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">U</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight text-white group-hover:text-purple-300 transition-colors">
                {portfolioData.profile.nickname} <span className="text-slate-500 font-normal">/ {portfolioData.profile.title.split('|')[0].trim()}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Infrastructure</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Social CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/Ubai_CV_Lead_Platform_Engineer.pdf"
              download="Ubai_CV_Lead_Platform_Engineer.pdf"
              className="px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-700/80 hover:border-purple-500/50 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
              title="Download Redesigned Engineering CV (PDF)"
            >
              <Download className="w-3.5 h-3.5 text-purple-400" />
              <span>Download CV</span>
            </a>

            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-sm shadow-purple-500/20 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="/Ubai_CV_Lead_Platform_Engineer.pdf"
              download="Ubai_CV_Lead_Platform_Engineer.pdf"
              className="px-2.5 py-1.5 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-300 text-xs font-medium flex items-center gap-1"
            >
              <Download className="w-3 h-3" /> CV
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-[#0B0F17]/95 border-b border-slate-800 backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Ubai_CV_Lead_Platform_Engineer.pdf"
              download="Ubai_CV_Lead_Platform_Engineer.pdf"
              className="w-full text-center py-2.5 text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg flex items-center justify-center gap-1.5 shadow-sm mt-1"
            >
              <Download className="w-3.5 h-3.5" /> Download Full Engineering CV (PDF)
            </a>
            <div className="flex gap-2 pt-2 border-t border-slate-800">
              <a
                href={portfolioData.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 text-xs bg-slate-900 border border-slate-800 text-slate-300 rounded-lg flex items-center justify-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 text-xs bg-slate-900 border border-slate-800 text-slate-300 rounded-lg flex items-center justify-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
