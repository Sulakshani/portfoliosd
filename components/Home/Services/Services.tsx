import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      
      <div className="relative z-10">
        <h2 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold text-white mb-4">
          My Personal Information
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Get to know more about me and my background
        </p>
        
        {/* Single Wide Card Container */}
        <div className="w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
          <div data-aos="fade-up" data-aos-delay="200">
            <ServiceCard
              icon="/images/s1.png"
              name="Personal Details"
              description="Comprehensive information about my background, skills, and contact details for potential collaboration opportunities."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
