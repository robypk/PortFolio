import React from "react";

interface HeroSectionProps {
  // props definition
}

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white h-screen flex items-center justify-center">
      <div className=" text-center  z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Roby</h1>
        <p className="text-lg md:text-xl mb-8">
          Game Developer | Creative Mind
        </p>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white">
          View Portfolio
        </button>
      </div>

      <div className="absolute top-40 md:top-1/2 md:right-6 transform -translate-y-1/2">
        <div className=" w-52  h-52 rounded-full overflow-hidden border-4 border-white  shadow-black shadow-2xl md:w-96 md:h-96">
          <img
            src="mypic.jpg" // Replace with the path to your photo
            alt="Your Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
