import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import DeepDive from './components/DeepDive';
import Footer from './components/Footer';
import LeadGeneration from './components/LeadGeneration';

function App() {
  return (
    <div className="bg-mesh min-h-screen text-gray-200 selection:bg-[#5D26D6] selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <DeepDive />
      <LeadGeneration />
      <Footer />
    </div>
  );
}

export default App;
