"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/s12.png"
          alt="heroimage"
          width={200}
          height={200}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
       
        <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-5 px-2 font-medium text-center sm:text-left"
            >
            {/* Line 1: Hello, I'm Sulakshani */}
            <h2 className="text-sm sm:text-5xl">
                Hello, I'm Sulakshani
            </h2>

            {/* Line 2: A Passionate IT undergraduate */}
            <h2 className="text-sm sm:text-5xl  mt-2">
                
                <span
                className="text-cyan-200 font-bold inline-block align-middle min-w-[200px]"
                >
                <Typewriter
                    options={{
                    strings: ["Third Year undergraduate","Full Stack Developer"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    }}
                />
                </span>
            </h2>
            </div>
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
        >
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
