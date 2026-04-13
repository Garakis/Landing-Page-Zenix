import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ModulesSection from './components/ModulesSection';
import Methodology from './components/Methodology';
import LeadGeneration from './components/LeadGeneration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-mesh min-h-screen text-gray-200 selection:bg-zenix-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <ModulesSection />
        <Methodology />
        <LeadGeneration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
