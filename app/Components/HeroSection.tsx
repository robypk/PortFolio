"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  const handleDownload = () => {
    const pdfUrl = "Roby_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Roby_Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-32 pb-12 md:p-24 relative overflow-hidden gap-12"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)' }}>
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)' }}
      />

      {/* Text Content */}
      <div className="w-full max-w-2xl z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
        
        {/* Main Title */}
        <div className="space-y-4">
          <p className="text-sm md:text-base tracking-[0.5em] uppercase"
            style={{ color: '#8b7355' }}>
            Game Developer • Immersive Specialist
          </p>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tight leading-none gow-header"
            style={{ fontFamily: "'Cinzel Decorative', 'Cinzel', serif" }}>
            ROBY
          </h1>
          
          <div className="gow-divider w-64 lg:mx-0 mx-auto" />
        </div>

        {/* Tagline Panel */}
        <div className="gow-panel p-8 max-w-2xl">
          <p className="text-lg md:text-xl leading-relaxed"
            style={{ color: '#f5e6c8' }}>
            Crafting immersive digital experiences with{" "}
            <span className="gow-text-gold font-bold">5+ years</span> of industry expertise
            in game development and interactive storytelling.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-8">
          <div className="text-center lg:text-left">
            <div className="text-4xl font-black gow-text-gold">8+</div>
            <div className="text-xs uppercase tracking-widest" style={{ color: '#8b7355' }}>Years Total</div>
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#c9a227] to-transparent" />
          <div className="text-center lg:text-left">
            <div className="text-4xl font-black gow-text-gold">5+</div>
            <div className="text-xs uppercase tracking-widest" style={{ color: '#8b7355' }}>Game Dev</div>
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#c9a227] to-transparent" />
          <div className="text-center lg:text-left">
            <div className="text-4xl font-black gow-text-gold">20+</div>
            <div className="text-xs uppercase tracking-widest" style={{ color: '#8b7355' }}>Projects</div>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="gow-button mt-8 group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume
          </span>
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative w-full max-w-md lg:w-[500px] lg:h-[600px] z-10 order-1 lg:order-2 flex justify-center items-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-full lg:h-full">
           {/* Decorative Frame */}
           <div className="absolute -inset-4 border-2 border-[#8b7355] rounded-full opacity-30 animate-pulse" />
           <div className="absolute -inset-8 border border-[#c9a227] rounded-full opacity-20" />
           
           {/* Image Container */}
           <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#c9a227] shadow-[0_0_50px_rgba(201,162,39,0.3)]">
             <Image 
               src="/Roby_Pic.jpg" 
               alt="Roby"
               fill
               className="object-cover"
               priority
             />
             
             {/* Gradient Overlay for blending */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
