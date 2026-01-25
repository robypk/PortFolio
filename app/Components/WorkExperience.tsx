import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Lead Developer",
      company: "Amrita Vishwa Vidyapeetham",
      period: "Dec 2024 - Present",
      location: "Kollam, Kerala",
      rarity: "legendary",
      description: [
        "Leading a team of 7 developers in Ministry of Education funded PSSCIVE projects.",
        "Developing immersive Virtual Labs for Vocational Higher Secondary students.",
        "Overseeing full development lifecycle and driving innovation in Unity-based simulations."
      ]
    },
    {
      role: "Senior Game Developer",
      company: "Improvement Interactive",
      period: "March 2024 – Dec 2024",
      location: "Tucson, AZ",
      rarity: "epic",
      description: [
        "Optimized visuals & performance for 'Smash Your Fitness' (Windows/Mac).",
        "Implemented Unity Addressables to reduce load times & enhance asset management.",
        "Developed custom features like looping terrains and dynamic road generation."
      ]
    },
    {
      role: "Unity Developer",
      company: "Olive Group",
      period: "April 2022 – Feb 2024",
      location: "Dublin, Ireland",
      rarity: "epic",
      description: [
        "Designed gameplay for 'Ocado Group Induction' (WebXR onboarding platform).",
        "Developed interactive features for Microsoft DreamSpace educational platform.",
        "Programmed immersive VR simulations: Electric Circuit Simulator & Building Construction VR.",
        "Served as gameplay programmer for Rugby Tactics Builder (WebXR)."
      ]
    },
    {
      role: "Game Developer (R&D)",
      company: "Genrobotics Innovations",
      period: "Jan 2021 - April 2022",
      location: "Kerala, India",
      rarity: "rare",
      description: [
        "Developed 'G-Runner' endless runner for G-Gaiter medical robot recovery training.",
        "Handled full pipeline: Level Design, Modeling, Texturing, Animation & UI in Godot.",
        "Integrated sensors using Python (pyserial, socket) for patient input.",
        "Optimized 3D assets and drawcalls for smooth performance."
      ]
    },
  ];

  const getRarityStyles = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return { border: '#c9a227', glow: 'rgba(201,162,39,0.3)', label: 'LEGENDARY', labelBg: '#c9a227' };
      case "epic":
        return { border: '#8b7355', glow: 'rgba(139,115,85,0.2)', label: 'EPIC', labelBg: '#8b7355' };
      default:
        return { border: '#4a4a4a', glow: 'rgba(74,74,74,0.2)', label: 'RARE', labelBg: '#4a4a4a' };
    }
  };

  return (
    <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="gow-header text-4xl md:text-6xl mb-4">
            Experience
          </h2>
          <div className="gow-divider w-48 mx-auto" />
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => {
            const styles = getRarityStyles(exp.rarity);
            return (
              <div
                key={index}
                className="gow-panel gow-hover-glow p-6 md:p-8 relative"
                style={{ borderColor: styles.border, boxShadow: `0 0 20px ${styles.glow}` }}
              >
                {/* Rarity Label */}
                <div 
                  className="absolute -top-3 right-6 px-3 py-1 text-xs font-bold tracking-widest"
                  style={{ background: styles.labelBg, color: '#0a0a0a' }}
                >
                  {styles.label}
                </div>

                {/* Period Badge */}
                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid #8b7355', color: '#c9a227' }}>
                  {exp.period}
                </div>

                {/* Role */}
                <h3 className="text-2xl font-black mb-2" style={{ color: '#f5e6c8' }}>
                  {exp.role}
                </h3>

                {/* Company */}
                <p className="text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2"
                  style={{ color: '#c9a227' }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: '#c9a227' }} />
                  {exp.company}, {exp.location}
                </p>

                {/* Description */}
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>
                      <span className="shrink-0 mt-1" style={{ color: '#c9a227' }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
