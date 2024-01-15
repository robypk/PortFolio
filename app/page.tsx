import HeroSection from "./Components/HeroSection";
import Skill from "./Components/Skill";
import VideoCard from "./Components/VideoCard";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-white to-green-300">
        <HeroSection />
      </div>
      <div className="bg-gradient-to-t to-white from-green-300">
        <Skill />
      </div>
      <VideoCard URL="https://firebasestorage.googleapis.com/v0/b/portfolio-63940.appspot.com/o/G-runner.mp4?alt=media&token=5887396a-a050-454e-8536-51595a6d6678"></VideoCard>
    </>
  );
}
