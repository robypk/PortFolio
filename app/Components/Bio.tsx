import React from "react";

const Bio = () => {
  return (
    <section className="py-20 px-4" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="gow-header text-4xl md:text-5xl mb-4">
            Character Profile
          </h2>
          <div className="gow-divider w-48 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            
            {/* About Me */}
            <div className="gow-panel gow-hover-glow p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid #8b7355' }}>
                  🎯
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#c9a227' }}>
                  About Me
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>
                Senior Game Developer with 5+ years in games and 8+ years total engineering experience. Transitioned from Electrical Engineering to follow a passion for interactive worlds. Currently leading simulation projects at Amrita Vishwa Vidyapeetham. Expert in Unity, C#, and realtime systems – fueled by curiosity and the joy of creating meaningful experiences.
              </p>
            </div>

            {/* Strengths / Abilities */}
            <div className="gow-panel gow-hover-glow p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid #8b7355' }}>
                  ⚔️
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#c9a227' }}>
                  Abilities
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Communication", "Confidence", "Determination", "Critical Thinking", "Team Work", "Documentation"].map((item, i) => (
                  <div key={i} className="px-4 py-2 text-center text-sm font-bold"
                    style={{ 
                      background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                      border: '1px solid #8b7355',
                      color: '#f5e6c8'
                    }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Past Experience */}
            <div className="gow-panel gow-hover-glow p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid #8b7355' }}>
                  📜
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#c9a227' }}>
                  Past Work
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { role: "MEP Engineer", company: "Hi-Tech Medical Gas Solutions", period: "2019-2020" },
                  { role: "MEP Instructor", company: "Career Tech Institute", period: "2018-2019" },
                  { role: "Electrical Maint. Engineer", company: "Techno Grade Services", period: "2017-2018" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-1 h-full min-h-[40px] rounded" style={{ background: '#c9a227' }} />
                    <div>
                      <div className="font-bold" style={{ color: '#f5e6c8' }}>{item.role}</div>
                      <div className="text-xs uppercase tracking-wide" style={{ color: '#8b7355' }}>
                        {item.company} | {item.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Favorite Games */}
            <div className="gow-panel gow-hover-glow p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid #8b7355' }}>
                  🎮
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#c9a227' }}>
                  Favorites
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Mafia: Definitive Edition", 
                  "God of War 4", 
                  "Uncharted 4: A Thief's End", 
                  "GTA 5", 
                  "Tomb Raider: 2013",
                  "Assassin's Creed II",
                  "Batman: Arkham Knight",
                  "Detroit: Become Human"
                ].map((game, i) => (
                  <span key={i} className="px-4 py-2 text-sm font-bold"
                    style={{ 
                      background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                      border: '1px solid #8b7355',
                      color: '#f5e6c8'
                    }}>
                    {game}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="gow-panel gow-hover-glow p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid #8b7355' }}>
                  ✨
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#c9a227' }}>
                  Hobbies
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Gaming", "Travel", "Movies", "Music"].map((hobby, i) => (
                  <span key={i} className="px-6 py-3 font-bold"
                    style={{ 
                      background: 'linear-gradient(145deg, #8b7355, #c9a227)',
                      color: '#0a0a0a'
                    }}>
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            {/* Equipment Style Quote */}
            <div className="gow-panel p-6 relative overflow-hidden"
              style={{ borderColor: '#c9a227', boxShadow: '0 0 30px rgba(201,162,39,0.2)' }}>
              <div className="absolute -top-0 right-6 px-3 py-1 text-xs font-bold tracking-widest"
                style={{ background: '#c9a227', color: '#0a0a0a' }}>
                LEGENDARY
              </div>
              <h4 className="text-lg font-bold mb-3" style={{ color: '#c9a227' }}>
                Creed of Development
              </h4>
              <p className="text-sm italic leading-relaxed" style={{ color: '#a0a0a0' }}>
                &quot;Every pixel placed with purpose, every line of code a step toward mastery. 
                The craft demands patience, the art demands passion.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
