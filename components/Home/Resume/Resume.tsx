import React from "react";
import ResumeCard from "./ResumeCard";
import { FaGraduationCap, FaUniversity, FaCertificate, FaSchool } from "react-icons/fa";

const Resume = () => {
  const educationData = [
    {
      
      role: "GCE Ordinary Level",
      date: "2018",
      school: "Kegalu Balika Vidyalaya",
      description: "Completed GCE Ordinary Level examination with Information and Communication Technology, Business Studies and Accounting, and English Literature as basket subjects in english medium. This helped me to make a good base for my future advanced studies in technology.",
      results: "8A's B",
    },
    {
      
      role: "GCE Advanced Level",
      date: "2021",
      school: "Kegalu Balika Vidyalaya",
      results: "ABB",
      description: "Completed Advanced Level examination in Physical Science stream. Gained strong analytical and problem-solving skills through learning Combined mathematics, physics, and chemistry."
    },
    {
      
      role: "Certificate in Digital Marketing",
      date: "Jan 2016 - Dec 2019",
      school: "Digital Institute",
      results: "Distinction",
      description: "Gained expertise in digital marketing strategies, social media management, and online brand development with top performance."
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto">
        {/* EDUCATION HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My educational journey and qualifications that shaped my career in technology
          </p>
        </div>

        {/* EDUCATION TIMELINE - VERTICAL LINE WITH ANIMATIONS */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 h-full opacity-30"></div>
          
          {/* Animated Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 h-0 animate-pulse transition-all duration-[3000ms] ease-out" 
               style={{
                 animation: 'grow-height 3s ease-out forwards'
               }}></div>

          <div className="space-y-16">
            {educationData.map((education, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 300}
                data-aos-duration="800"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                  <div 
                    className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-white shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay={index * 300 + 200}
                    style={{
                      animation: `timeline-dot 0.8s ease-out ${index * 0.3 + 0.5}s forwards`,
                      transform: 'scale(0)',
                      opacity: '0'
                    }}
                  ></div>
                </div>

                {/* Card Container */}
                <div
                  className={`flex ${index % 2 === 0 ? 'justify-start pr-4 md:pr-8' : 'justify-end pl-4 md:pl-8'}`}
                >
                  <div 
                    className={`w-full md:w-[45%] relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 300 + 100}
                    data-aos-duration="800"
                  >
                    {/* Connection Line to Timeline */}
                    <div 
                      className={`hidden md:block absolute ${index % 2 === 0 ? 'right-0 top-6' : 'left-0 top-6'} w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 z-5`}
                      data-aos="fade"
                      data-aos-delay={index * 300 + 400}
                    ></div>
                    
                    <ResumeCard
                      
                      role={education.role}
                      date={education.date}
                      school={education.school}
                      description={education.description}
                      results={education.results}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes grow-height {
          from { height: 0%; }
          to { height: 100%; }
        }
        
        @keyframes timeline-dot {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
