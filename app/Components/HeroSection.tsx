"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ThreeDScene to avoid SSR issues with R3F
const ThreeDScene = dynamic(() => import("./ThreeDScene"), { ssr: false });

const HeroSection = () => {
  const handleDownload = () => {
    const pdfUrl = "Roby_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Roby_Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-24 bg-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>

       {/* Text Content */}
      <div className="w-full md:w-1/2 z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-6 animate-in slide-in-from-left-10 duration-1000 fade-in">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900">
          HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-800">ROBY</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-600 flex items-center gap-2">
          <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse shadow-[0_0_10px_#16a34a]" />
          GAME DEVELOPER
        </h2>
        <p className="text-gray-600 max-w-lg leading-relaxed text-lg md:text-xl">
          Crafting immersive worlds and high-octane interactive experiences. 
          Specialized in <span className="text-green-700 font-semibold">Unity</span>, <span className="text-green-700 font-semibold">C#</span>, and <span className="text-green-700 font-semibold">3D Graphics</span>.
        </p>
        
        <button
          onClick={handleDownload}
          className="mt-8 group relative px-8 py-4 bg-white border-2 border-green-600/20 text-green-700 font-bold uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-green-500/30 rounded-sm overflow-hidden"
        >
          <span className="relative z-10">Initialize Resume</span>
          <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {/* 3D Scene */}
      <div className="w-full md:w-1/2 h-[500px] md:h-[700px] relative z-0 flex items-center justify-center">
         <div className="w-full h-full relative z-10">
            <ThreeDScene />
         </div>
      </div>
    </section>
  );
};

export default HeroSection;
