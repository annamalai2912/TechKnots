import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import AboutSection from './components/AboutSection';
import ValueAddedCoursesSection from './components/ValueAddedCoursesSection';
import BenefitsSection from './components/BenefitsSection';
import FeatureSection from './components/FeatureSection';
import ContactSection from './components/ContactSection';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <main className="pt-16">
        <HeroSection />
        <MissionSection />
        <AboutSection />
        <ValueAddedCoursesSection />
        <BenefitsSection />
        <FeatureSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;