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
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
       
        <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-5 px-2 text-center sm:text-4xl font-medium"
            >
            <h2 className="text-sm sm:text-4xl">I'm Sulakshani Dissanayake,</h2>
            <h2 className="text-sm sm:text-3xl inline-flex whitespace-nowrap">
                 A Passionate{" "}
                <span className="text-cyan-200 font-bold">
                <Typewriter
                    options={{
                    strings: ["IT undergraduate"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    wrapperClassName: "pl-2",
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
