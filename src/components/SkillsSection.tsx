import React from 'react';
import { Cpu, Cloud, Network, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Network': return <Network className="w-5 h-5 text-indigo-400" />;
      default: return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Core Competencies & Stack Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Battle-tested engineering toolchain honed through high-throughput production workloads and mission-critical enterprise systems.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-slate-500">
                      Production-Proven
                    </span>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="grid grid-cols-2 gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs font-medium ${
                        skill.highlight
                          ? 'bg-purple-900/15 border-purple-500/30 text-purple-200'
                          : 'bg-slate-900/50 border-slate-800 text-slate-300'
                      }`}
                    >
                      <span className="truncate mr-2 font-mono">{skill.name}</span>
                      <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded shrink-0 ${
                        skill.level === 'Expert'
                          ? 'bg-purple-500/20 text-purple-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
