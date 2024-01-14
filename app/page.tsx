import CircularProgressBar from "./Components/CircularProgressBar";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="  flex items-center justify-center">
        <CircularProgressBar progress={17} />
        <CircularProgressBar progress={67} />
      </div>
      <div>Roby</div>
    </>
  );
}
