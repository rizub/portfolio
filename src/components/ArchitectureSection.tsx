import React, { useState } from 'react';
import { Layers, Server, Shield, Network, Cpu, Database, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ArchitectureSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const getLayerIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Shield className="w-5 h-5 text-cyan-400" />;
      case 1: return <Network className="w-5 h-5 text-indigo-400" />;
      case 2: return <Server className="w-5 h-5 text-purple-400" />;
      case 3: return <Activity className="w-5 h-5 text-emerald-400" />;
      case 4: return <Cpu className="w-5 h-5 text-pink-400" />;
      default: return <Database className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="architecture" className="py-24 bg-[#0B0F17]/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Infrastructure Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Cloud-Native Multi-Node Cluster Topology
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A production-proven distributed topology joining multi-cloud VPS nodes into an autonomous K3s Kubernetes cluster, zero-quota-leak CI/CD pipelines, and enterprise-grade integration bridges.
          </p>
        </div>

        {/* Interactive Architecture Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left List of Layers */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {portfolioData.architectureLayers.map((layer, idx) => {
              const isSelected = activeLayer === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`text-left p-4 rounded-xl transition-all duration-200 border flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-purple-500/50 shadow-md shadow-purple-500/10 translate-x-1'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-purple-500/20 border border-purple-500/40' : 'bg-slate-800'}`}>
                    {getLayerIcon(idx)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">
                      {layer.layer}
                    </div>
                    <div className={`text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {layer.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Details Panel */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                  {portfolioData.architectureLayers[activeLayer].layer}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {portfolioData.architectureLayers[activeLayer].title}
                </h3>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                {getLayerIcon(activeLayer)}
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {portfolioData.architectureLayers[activeLayer].description}
            </p>

            {/* Tags */}
            <div className="mb-8">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Key Components & Protocols:
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.architectureLayers[activeLayer].tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Infrastructure Specs Pill */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-400 flex flex-col gap-2">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-cyan-400">$ cluster.verifyNodeHealth()</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 100% HEALTHY
                </span>
              </div>
              <div className="text-slate-500 text-[11px] leading-relaxed">
                Control Plane: vn-core-prod-02 (Tailscale 100.81.101.117) | Workers: vn-core-prod-01, pd-proc-prod-01 | Ingress: Nginx LoadBalancer | Logging: VictoriaLogs
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
