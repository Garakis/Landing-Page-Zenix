import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategicPositioning from './components/StrategicPositioning';
import Differentiators from './components/Differentiators';
import TechPlatform from './components/TechPlatform';
import Footer from './components/Footer';
import LeadGeneration from './components/LeadGeneration';

function App() {
  return (
    <div className="bg-mesh min-h-screen text-gray-200 selection:bg-zenix-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <StrategicPositioning />
        <Differentiators />
        <TechPlatform />
        <LeadGeneration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
