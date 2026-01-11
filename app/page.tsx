"use client";
import React from "react";
import HeroSection from "./Components/HeroSection";
import Bio from "./Components/Bio";
import WorkExperience from "./Components/WorkExperience";
import Skills from "./Components/Skill";
import Projects from "./Components/Projects";
import ContactInfo from "./Components/ContactInfo";
import Education from "./Components/Education";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About & Education Section */}
      <section className="min-h-screen w-full flex flex-col justify-center items-end p-10 md:p-24 bg-black">
        <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl max-w-xl border border-white/10 mb-12">
          <h2 className="text-6xl font-black text-white mb-6 -ml-6 tracking-tighter">About</h2>
          <p className="text-gray-300 text-xl leading-relaxed font-medium">
            Experienced Game Developer with <span className="text-green-400 font-bold">4+ years</span> of industry expertise. 
            I specialize in crafting immersive storytelling experiences and 
            mastering new tools swiftly.
          </p>
        </div>
        <Education />
      </section>

      {/* Bio Section */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-black">
        <Bio />
      </section>

      {/* Work Experience Section */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-black">
        <WorkExperience />
      </section>

      {/* Skills Section */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-black">
        <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl w-full max-w-7xl border border-white/10">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-black">
        <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl w-full max-w-7xl border border-white/10">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-black">
        <ContactInfo />
      </section>
    </main>
  );
}
