"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
//import RobotAnimation from "./RobotAnimation";

type AnimatedTextProps = {
  texts: string[];
  interval?: number;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, interval = 2000 }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return <span>{texts[index]}</span>;
};

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <ParticlesHero />
      <div className="relative z-20 w-full h-full flex flex-col sm:flex-row items-center justify-center">
        {/* Left: Text */}
        <div className="flex flex-col items-center justify-center h-full sm:h-auto sm:min-h-[500px]">
          <h2 className="text-sm sm:text-6xl whitespace-nowrap text-center">
            Hello, I'm Sulakshani
          </h2>
          <h2 className="text-sm sm:text-6xl mt-2 whitespace-nowrap text-center">
            <span className="text-cyan-200 font-bold inline-block align-middle min-w-[200px]">
              <AnimatedText
                texts={["IT Undergraduate", "Full Stack Developer"]}
                interval={2000}
              />
            </span>
          </h2>
          <div className="mt-4 flex justify-center w-full">
            <span
              className="bg-[#0f172a] min-w-[300px] sm:min-w-[600px] max-w-[600px] h-[120px] rounded-xl p-4 shadow-lg border border-white/10 shadow-cyan-500/20 transition flex-shrink-0 flex items-center mx-auto"
              style={{
                color: "#38bdf8", // cyan-400
                background: "linear-gradient(90deg, #0f172a 80%, #1e293b 100%)",
              }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Adaptable and quick to learn, with strong problem-solving and teamwork skills. Passionate about full-stack development, proactive in overcoming challenges, and eager to gain new knowledge to thrive in diverse environments."
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </div>
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium mx-auto"
          >
            <span>See my work</span>
            <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
          </button>
        </div>
        {/* Right: Photo */}
        <div className="sm:w-1/2 flex justify-center items-center mt-8 sm:mt-0">
          <Image
            src="/images/image.png" // Change to your actual photo path if needed
            alt="My Photo"
            width={320}
            height={320}
            className="rounded-full border-8 border-[#0c0c48aa] shadow-lg object-cover"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
