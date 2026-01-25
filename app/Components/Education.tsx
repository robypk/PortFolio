import React from "react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Electrical Engineering",
      institution: "Bishop Jerome Institute, Kollam, Kerala",
      period: "2012 - 2016",
      location: "Kollam, Kerala"
    }
  ];

  return (
    <section className="py-20 px-4" style={{ background: '#0a0a0a' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="gow-header text-3xl md:text-4xl mb-4">
            Knowledge Acquired
          </h2>
          <div className="gow-divider w-48 mx-auto" />
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="gow-panel gow-hover-glow p-6 flex items-center gap-6">
              
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center text-3xl shrink-0"
                style={{ 
                  background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                  border: '2px solid #8b7355'
                }}>
                📚
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1" style={{ color: '#f5e6c8' }}>
                  {edu.degree}
                </h3>
                <p className="font-bold" style={{ color: '#c9a227' }}>
                  {edu.institution}
                </p>
                <p className="text-sm mt-2" style={{ color: '#8b7355' }}>
                  {edu.period} • {edu.location}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="hidden md:block w-px h-16" 
                style={{ background: 'linear-gradient(180deg, transparent, #c9a227, transparent)' }} />
              
              <div className="hidden md:block text-right">
                <div className="text-xs uppercase tracking-widest" style={{ color: '#8b7355' }}>
                  Completed
                </div>
                <div className="text-lg font-bold" style={{ color: '#c9a227' }}>
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
