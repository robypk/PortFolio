import React from "react";

const Education = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] shadow-xl w-full max-w-lg border border-white/10 hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-black text-white mb-4 uppercase tracking-widest flex items-center gap-2">
        <span className="text-3xl">🎓</span> Education
      </h2>
      <div className="space-y-4">
        <div className="relative pl-4 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-white leading-tight">
            Bachelor's Degree in<br/>Electrical and Electronics
          </h3>
          <p className="text-emerald-400 font-bold text-sm tracking-wide mt-2 bg-green-500/20 inline-block px-2 py-1 rounded">
            2016
          </p>
          <p className="text-gray-300 mt-2">
            Bishop Jerome Institute, Kollam, Kerala
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
