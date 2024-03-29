import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import Skill from "./Components/Skill";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-white to-green-300">
        <HeroSection />
      </div>
      <div className="p-5">
        <Projects />
      </div>
      <div className=" p-5">
        <Skill />
      </div>
    </>
  );
}
