"use client";
import React from "react";

const HeroSection = () => {
  const handleDownload = () => {
    const pdfUrl = "Roby_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Roby_Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24 bg-black overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Text Content */}
      <div className="w-full max-w-4xl z-10 flex flex-col items-center text-center space-y-6">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-none">
          HELLO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-600">
            I&apos;M ROBY
          </span>
        </h1>
        <div className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl max-w-lg">
          <p className="text-xl md:text-2xl text-gray-200 font-light">
            Game Developer &<br/>Immersive Specialist
          </p>
          <p className="text-sm font-bold tracking-widest uppercase text-green-400 mt-4 flex items-center justify-center gap-2">
            Scroll to Explore <span className="animate-bounce text-lg">↓</span>
          </p>
        </div>
        
        <button
          onClick={handleDownload}
          className="mt-8 group relative px-8 py-4 bg-white/10 border-2 border-green-600/30 text-green-400 font-bold uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-green-500/30 rounded-sm overflow-hidden"
        >
          <span className="relative z-10">Initialize Resume</span>
          <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
