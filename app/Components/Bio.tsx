import React from "react";

const Bio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
      {/* COLUMN 1 */}
      <div className="space-y-8">
        {/* CAREER OBJECTIVE */}
        <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-wider flex items-center gap-2">
            <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🎯</span> Objective
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed font-medium">
            To work and practice my knowledge as a Game Developer and add to my
            overall experience by becoming a valued member of a growing company.
          </p>
        </div>

        {/* STRENGTHS */}
        <div className="group bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-lg border border-white/10 hover:shadow-green-500/20 transition-all duration-300">
          <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-wider flex items-center gap-2">
             <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">💪</span> Strengths
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            {["Communication Skill", "Confidence", "Determination", "Critical thinking", "Team work", "Documentation"].map((item, i) => (
                <li key={i} className="bg-white/10 rounded-full px-4 py-2 text-sm font-bold text-gray-200 text-center shadow-sm hover:bg-white/20 transition-colors">
                    {item}
                </li>
            ))}
          </ul>
        </div>
        
         {/* PAST WORK EXPOSURE */}
        <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-lg border border-white/10">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="text-3xl">🏗️</span> Past Work
            </h2>
             <ul className="text-gray-400 text-sm space-y-4 leading-relaxed">
                <li className="flex gap-3 items-start">
                    <span className="min-w-[4px] h-full bg-green-500 rounded-full"></span>
                    <div>
                        <strong className="block text-white text-base">MEP engineer</strong>
                        <span className="text-xs uppercase tracking-wide opacity-70">Hi-Tech Medical Gas Solutions | 2019-2020</span>
                    </div>
                </li>
                <li className="flex gap-3 items-start">
                    <span className="min-w-[4px] h-full bg-green-500 rounded-full"></span>
                    <div>
                        <strong className="block text-white text-base">MEP Instructor</strong>
                        <span className="text-xs uppercase tracking-wide opacity-70">Career Tech Institute | 2018-2019</span>
                    </div>
                </li>
                 <li className="flex gap-3 items-start">
                    <span className="min-w-[4px] h-full bg-green-500 rounded-full"></span>
                    <div>
                        <strong className="block text-white text-base">Electrical Maint. Engineer</strong>
                        <span className="text-xs uppercase tracking-wide opacity-70">Techno Grade Services | 2017-2018</span>
                    </div>
                </li>
            </ul>
        </div>
      </div>

      {/* COLUMN 2 */}
      <div className="space-y-8">
        {/* FAVORITE GAMES */}
        <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-lg border border-white/10 text-left">
           <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-wider flex items-center gap-2">
            <span className="text-3xl animate-pulse">🎮</span> Favorites
          </h2>
          <div className="flex flex-wrap gap-2">
             {["Tomb Raider (2013)", "Assassin's Creed II", "Mafia II", "God of War 4", "Batman: Arkham Knight"].map((game, i) => (
                 <span key={i} className="px-4 py-2 bg-white/10 rounded-xl text-gray-200 font-bold text-sm shadow-sm hover:bg-white/20 transition-colors cursor-default">
                     {game}
                 </span>
             ))}
          </div>
        </div>

        {/* HOBBIES */}
        <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-lg border border-white/10 text-left">
           <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-wider flex items-center gap-2">
            <span className="text-3xl hover:translate-x-2 transition-transform">✈️</span> Hobbies
          </h2>
           <div className="flex flex-wrap gap-3">
             {["Gaming", "Travel", "Movies", "Listening music"].map((hobby, i) => (
                 <span key={i} className="px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-700 text-white rounded-2xl font-bold shadow-md transform hover:-translate-y-1 transition-transform">
                     {hobby}
                 </span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
