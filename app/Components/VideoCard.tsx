import React from "react";
import YouTube from "react-youtube";

interface VideoCardProps {
  URL: string;
  Name: string;
  Description: string;
  Tools: string;
  rarity?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ URL, Name, Description, Tools, rarity = "rare" }) => {
  const getRarityStyles = () => {
    switch (rarity) {
      case "legendary":
        return { border: '#c9a227', glow: 'rgba(201,162,39,0.3)', label: 'LEGENDARY', labelBg: '#c9a227' };
      case "epic":
        return { border: '#8b7355', glow: 'rgba(139,115,85,0.2)', label: 'EPIC', labelBg: '#8b7355' };
      default:
        return { border: '#4a4a4a', glow: 'rgba(74,74,74,0.2)', label: 'RARE', labelBg: '#4a4a4a' };
    }
  };

  const styles = getRarityStyles();

  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div 
      className="gow-panel gow-hover-glow relative overflow-hidden"
      style={{ borderColor: styles.border, boxShadow: `0 0 15px ${styles.glow}` }}
    >
      {/* Rarity Label */}
      <div 
        className="absolute top-3 right-3 z-10 px-2 py-1 text-xs font-bold tracking-widest"
        style={{ background: styles.labelBg, color: '#0a0a0a' }}
      >
        {styles.label}
      </div>

      {/* Video */}
      <div className="relative" style={{ borderBottom: `1px solid ${styles.border}` }}>
        <YouTube videoId={URL} opts={opts} className="w-full" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2" style={{ color: '#c9a227' }}>
          {Name}
        </h3>
        <p className="text-sm mb-4 line-clamp-3" style={{ color: '#a0a0a0' }}>
          {Description}
        </p>
        <div className="text-xs uppercase tracking-wide" style={{ color: '#8b7355' }}>
          {Tools.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
