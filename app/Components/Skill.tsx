import React from "react";

interface StatBarProps {
  value: number;
  label: string;
  maxValue?: number;
}

const StatBar: React.FC<StatBarProps> = ({ value, label, maxValue = 100 }) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="w-32 text-right shrink-0">
        <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#f5e6c8' }}>
          {label}
        </span>
      </div>
      <div className="flex-1 gow-stat-bar">
        <div 
          className="gow-stat-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="w-12 text-right">
        <span className="text-sm font-bold gow-text-gold">{value}%</span>
      </div>
    </div>
  );
};

interface SkillProps {}

const Skill: React.FC<SkillProps> = ({}) => {
  return (
    <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="gow-header text-4xl md:text-5xl mb-4">
            Technical Arsenal
          </h2>
          <div className="gow-divider w-48 mx-auto" />
        </div>

        {/* Stats Panel */}
        <div className="gow-panel gow-hover-glow p-8 md:p-12 space-y-12">
          
          {/* Game Engines */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center text-2xl" 
                style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid #8b7355' }}>
                🎮
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#c9a227' }}>
                Game Engines
              </h3>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <StatBar value={85} label="Unity 3D" />
              <StatBar value={55} label="Godot" />
              <StatBar value={65} label="Unreal Engine" />
            </div>
          </div>

          <div className="gow-divider" />

          {/* Programming */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center text-2xl"
                style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid #8b7355' }}>
                💻
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#c9a227' }}>
                Programming
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <StatBar value={85} label="C#" />
              <StatBar value={70} label="C++" />
              <StatBar value={60} label="Python" />
              <StatBar value={65} label="TypeScript" />
            </div>
          </div>

          <div className="gow-divider" />

          {/* 3D Web Development */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center text-2xl"
                 style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid #8b7355' }}>
                🌐
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#c9a227' }}>
                3D Web Development
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <StatBar value={80} label="Next.js" />
              <StatBar value={70} label="Three.js" />
              <StatBar value={60} label="AWS" />
              <StatBar value={65} label="MongoDB" />
            </div>
          </div>

          <div className="gow-divider" />

          {/* 3D Development */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center text-2xl"
                 style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid #8b7355' }}>
                🧊
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#c9a227' }}>
                3D Development
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <StatBar value={65} label="Modelling" />
              <StatBar value={60} label="Texturing" />
              <StatBar value={85} label="Animation" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skill;
