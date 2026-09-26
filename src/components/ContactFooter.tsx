import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="pt-20 pb-12 bg-[#080C14] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 text-center relative overflow-hidden mb-16 max-w-4xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-purple-500/10 blur-[90px] rounded-full pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Resilient Systems Together
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Interested in scaling cloud-native Kubernetes infrastructure, automating complex document pipelines, or integrating enterprise ERPs? Let's connect.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold text-sm shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-sm font-medium flex items-center gap-2 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : portfolioData.profile.email}</span>
            </button>

            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Bottom info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-8 border-t border-slate-900 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {portfolioData.profile.name}</span>
            <span>•</span>
            <span className="text-slate-400">{portfolioData.profile.portfolioUrl.replace('https://', '')}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400/90">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Ultra-lightweight edge deployment
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
