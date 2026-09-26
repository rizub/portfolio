import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureSection } from './components/ArchitectureSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { SkillsSection } from './components/SkillsSection';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0F17] bg-grid-pattern relative selection:bg-purple-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ArchitectureSection />
        <CaseStudiesSection />
        <InteractiveTerminal />
        <SkillsSection />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
