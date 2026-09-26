import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: string[];
  isError?: boolean;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'pm status',
      output: portfolioData.terminalPresets[0].output
    }
  ]);
  const [copied, setCopied] = useState(false);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'help') {
      setHistory(prev => [
        ...prev,
        {
          command: cmdStr,
          output: [
            "Available Commands:",
            "  pm status           - Inspect multi-agent daemon & active worker pool",
            "  k3s cluster-status  - View distributed 3-node cluster & runner fleet",
            "  po-pipeline --test  - Simulate live purchase order OCR & Lark Base sync",
            "  tech-stack --summary- Display primary architectural philosophy",
            "  cv / download-cv    - Download official executive engineering CV (PDF)",
            "  whoami              - Display active developer profile & background",
            "  clear               - Clear terminal screen"
          ]
        }
      ]);
      setInputVal('');
      return;
    }

    if (trimmed === 'cv' || trimmed === 'download-cv') {
      setHistory(prev => [
        ...prev,
        {
          command: cmdStr,
          output: [
            "[+] Official CV: Ubai_CV_Lead_Platform_Engineer.pdf",
            "[+] Target Role: Lead Platform & Systems Integration Engineer | Cloud Architect",
            "[+] Direct Link: https://ubai.kreatekode.tech/Ubai_CV_Lead_Platform_Engineer.pdf",
            ">> Triggering instant download..."
          ]
        }
      ]);
      const link = document.createElement('a');
      link.href = '/Ubai_CV_Lead_Platform_Engineer.pdf';
      link.download = 'Ubai_CV_Lead_Platform_Engineer.pdf';
      link.click();
      setInputVal('');
      return;
    }

    if (trimmed === 'whoami') {
      setHistory(prev => [
        ...prev,
        {
          command: cmdStr,
          output: [
            `Developer: ${portfolioData.profile.name} (${portfolioData.profile.nickname})`,
            `Role: ${portfolioData.profile.title}`,
            `Location: ${portfolioData.profile.location} | Organization: ${portfolioData.profile.organization}`,
            `Portfolio: ${portfolioData.profile.portfolioUrl}`,
            `Status: ${portfolioData.profile.status}`
          ]
        }
      ]);
      setInputVal('');
      return;
    }

    const matchedPreset = portfolioData.terminalPresets.find(
      p => p.cmd.toLowerCase() === trimmed
    );

    if (matchedPreset) {
      setHistory(prev => [
        ...prev,
        { command: cmdStr, output: matchedPreset.output }
      ]);
    } else {
      setHistory(prev => [
        ...prev,
        {
          command: cmdStr,
          output: [
            `bash: command not found: ${cmdStr}`,
            `Type 'help' or click any of the preset commands above to test.`
          ],
          isError: true
        }
      ]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const copyTerminalContent = () => {
    const text = history.map(h => `$ ${h.command}\n${h.output.join('\n')}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-24 bg-[#0B0F17]/95 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 uppercase tracking-wider mb-4">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive DevEx Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Simulate the Platform Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Test real operational commands from <code className="text-purple-300">pm-orchestrator</code>, the multi-node K3s cluster, and the AI PO extraction pipeline.
          </p>
        </div>

        {/* Preset Command Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-mono text-slate-500 mr-2">Click to Run:</span>
          {portfolioData.terminalPresets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => executeCommand(preset.cmd)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-800 text-xs font-mono text-purple-300 transition-all flex items-center gap-1.5"
            >
              <Play className="w-3 h-3 text-cyan-400 fill-cyan-400/20" />
              <span>{preset.cmd}</span>
            </button>
          ))}
          <button
            onClick={() => executeCommand('cv')}
            className="px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/40 hover:bg-purple-900/40 text-xs font-mono text-purple-200 transition-all flex items-center gap-1"
          >
            <Play className="w-3 h-3 text-purple-400 fill-purple-400/20" />
            <span>download-cv</span>
          </button>
          <button
            onClick={() => executeCommand('clear')}
            className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800 text-xs font-mono text-slate-400 transition-all flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>clear</span>
          </button>
        </div>

        {/* Terminal Window Container */}
        <div className="rounded-2xl border border-slate-800 bg-[#070b12] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Terminal Title Bar */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 text-xs text-slate-400 font-sans font-medium">
                ubai@vn-core-prod-02: ~ / pm-orchestrator
              </span>
            </div>

            <button
              onClick={copyTerminalContent}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 min-h-[340px] max-h-[480px] overflow-y-auto space-y-4">
            
            {/* Initial Welcome message */}
            <div className="text-slate-500 leading-relaxed">
              # Connected to Virtuenet K3s Control-Plane via Tailscale Mesh.<br />
              # Type '<span className="text-cyan-400">help</span>' or '<span className="text-purple-300">download-cv</span>' to test live simulations.
            </div>

            {/* Execution History */}
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-purple-400">
                  <span className="text-emerald-400">ubai@cluster:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className={`pl-4 border-l border-slate-800 space-y-0.5 ${item.isError ? 'text-rose-400' : 'text-slate-300'}`}>
                  {item.output.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className={
                        line.startsWith('[+]')
                          ? 'text-emerald-400'
                          : line.startsWith('[-]')
                          ? 'text-indigo-300'
                          : line.startsWith('>>')
                          ? 'text-cyan-300 font-semibold'
                          : line.startsWith('[*]')
                          ? 'text-amber-300'
                          : 'text-slate-300'
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 shrink-0">ubai@cluster:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command, 'help' or 'download-cv' and press Enter..."
                className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-600 font-mono text-xs sm:text-sm"
                autoFocus
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
