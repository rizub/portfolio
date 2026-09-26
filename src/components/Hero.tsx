import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % portfolioData.profile.subtitles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects - pure CSS, zero GPU lag */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-8 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-200">{portfolioData.profile.status}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]">
            Engineering Resilient <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Cloud Infrastructure
            </span> & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Multi-Agent AI
            </span> Systems
          </h1>

          {/* Dynamic Rotating Subtitle */}
          <div className="h-8 my-5 flex items-center justify-center">
            <div className="text-sm sm:text-lg font-mono font-medium text-purple-300/90 transition-all duration-500">
              <span className="text-slate-500 mr-2">$</span>
              {portfolioData.profile.subtitles[subtitleIndex]}
              <span className="animate-pulse ml-1 text-cyan-400">_</span>
            </div>
          </div>

          {/* Bio text */}
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed mb-10">
            {portfolioData.profile.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            <a
              href="#cases"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold text-sm shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
            >
              <span>Explore Enterprise Case Studies</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#architecture"
              className="px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Cluster Architecture</span>
            </a>

            <a
              href="#terminal"
              className="px-5 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 font-mono text-sm transition-all flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Simulate CLI</span>
            </a>
          </div>

          {/* High-Impact Metric Cards */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl">
            {portfolioData.stats.map((stat, i) => (
              <div
                key={i}
                className="glass-panel p-5 rounded-2xl border border-slate-800/80 text-left relative overflow-hidden group hover:border-purple-500/40 transition-colors"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors pointer-events-none"></div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-snug">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
