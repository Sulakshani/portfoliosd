"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ClientReview from "./ClientReview/ClientReview";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Experiences from "./experience/Experiences";
import Certificates from "./Certi/Certificates";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <Experiences />
      <Certificates />
      <ClientReview />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
