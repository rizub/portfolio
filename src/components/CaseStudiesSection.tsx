import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { CaseStudy } from '../data/portfolioData';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'AI & OCR', 'Enterprise ERP & MES', 'Cloud & K8s', 'Middleware & DevEx', 'Full-Stack'];

  const filteredStudies: CaseStudy[] = selectedCategory === 'All'
    ? portfolioData.caseStudies
    : portfolioData.caseStudies.filter((s) => s.category === selectedCategory);

  return (
    <section id="cases" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Enterprise Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Enterprise Case Studies & Delivered Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world mission-critical platforms engineered across manufacturing, commercial real estate, logistics, legal tech, and cloud automation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Metric */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300">
                    {study.badge}
                  </span>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {study.metrics.value}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      {study.metrics.label}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2.5 line-clamp-2">
                  {study.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {study.summary}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{study.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Modal trigger */}
                <button
                  onClick={() => setActiveModalStudy(study)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 group-hover:text-white group-hover:border-purple-500/40 group-hover:bg-purple-600/10 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>View Architecture & Impact</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Case Study Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0f172a] border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-6">
              <div className="inline-block px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-purple-500/20 text-purple-300 mb-2">
                {activeModalStudy.category} • {activeModalStudy.badge}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeModalStudy.title}
              </h3>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-rose-500/20">
                <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1.5">
                  Business Problem
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {activeModalStudy.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/20">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1.5">
                  Engineered Solution
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {activeModalStudy.solution}
                </p>
              </div>
            </div>

            {/* Architecture Steps */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                System Workflow & Architecture Flow:
              </div>
              <div className="space-y-2">
                {activeModalStudy.architecture.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300 font-mono">
                    <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                Measurable Impact & ROI:
              </div>
              <div className="space-y-2">
                {activeModalStudy.impact.map((imp, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{imp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Tech Stack */}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Tech Stack:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeModalStudy.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800 border border-slate-700 text-purple-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
