"use client";
import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import Bio from "./Components/Bio";
import WorkExperience from "./Components/WorkExperience";
import Skills from "./Components/Skill";
import Projects from "./Components/Projects";
import ContactInfo from "./Components/ContactInfo";
import Education from "./Components/Education";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Armory" },
  { id: "about", label: "Profile" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <main className="w-full min-h-screen overflow-x-hidden" style={{ background: '#0a0a0a' }}>
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
        style={{ 
          background: 'linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.9) 100%)',
          borderBottom: '1px solid #8b7355'
        }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl font-bold tracking-wider" 
            style={{ color: '#c9a227', fontFamily: "'Cinzel Decorative', 'Cinzel', serif" }}>
            ROBY
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                style={{ 
                  color: activeSection === item.id ? '#c9a227' : '#8b7355',
                  borderBottom: activeSection === item.id ? '2px solid #c9a227' : '2px solid transparent'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            style={{ color: '#c9a227' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 py-4 px-4"
            style={{ 
              background: 'linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(26,26,26,0.98) 100%)',
              borderBottom: '1px solid #8b7355'
            }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 text-sm font-bold uppercase tracking-widest text-left transition-all duration-300"
                  style={{ 
                    color: activeSection === item.id ? '#c9a227' : '#8b7355',
                    borderLeft: activeSection === item.id ? '3px solid #c9a227' : '3px solid transparent',
                    background: activeSection === item.id ? 'rgba(201,162,39,0.1)' : 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Sections */}
      <section id="hero">
        <HeroSection />
      </section>

      <section id="experience">
        <WorkExperience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <Bio />
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <ContactInfo />
      </section>
    </main>
  );
}
