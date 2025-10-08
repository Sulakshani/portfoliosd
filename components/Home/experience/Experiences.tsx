import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // More interactive chevrons

const Experiences = () => {

  const experiences = [
    {
      role: "Committee Member",
      location: "University of Moratuwa",
      type: "IEEE RAS Student Branch Chapter",
      description:
        "As part of the IEEE RAS Student Chapter, I worked on Careerly, a web-based platform designed to bridge the gap between students and companies by providing opportunities for hiring.",
      image: "/images/exp1.png",
      link: "#",
      skills: [],
      imageHalf: true, // custom flag to show half image
    },
    {
      role: "Program Lead - Hackelite 2.0 ",
      location: "University of Moratuwa",
      type: "IEEE WIE Student Branch Affinity Group",
      description:
        "Served as a Program Lead for Radiance '25, an event conducted by the IEEE WIE Student Branch Affinity Group at the University of Moratuwa.",
      image: "/images/wie2..png",
      link: "#",
      skills: [],
    },
    {
      role: "Committee Member-MoraXtreme9.0 ",
      location: "University of Moratuwa",
      type: "IEEE Student Branch Chapter",
      description:
        "Served as a member of Finance Committee Member for MoraXtreme 9.0, an event conducted by the IEEE WIE Student Branch Affinity Group at the University of Moratuwa.",
      image: "/images/moraxtreme.png",
      link: "#",
      skills: [],
    },
    {
      role: "Finance Committee Member - Radiance '24 ",
      location: "University of Moratuwa",
      type: "IEEE WIE Student Branch Affinity Group",
      description:
        "Served as a member of Finance Committee for Radiance '25, an event conducted by the IEEE WIE Student Branch Affinity Group at the University of Moratuwa.",
      image: "/images/wie2..png",
      link: "#",
      skills: [],
    },
    {
      role: "Organizing Committee Member - FestX ",
      location: "University of Moratuwa",
      type: "IEEE WIE Student Branch Affinity Group",
      description:
        "Served as an organizing committee member for FestX, an event conducted by the IEEE WIE Student Branch Affinity Group at the University of Moratuwa.",
      image: "/images/wie2..png",
      link: "#",
      skills: [],
    },
    {
      role: "Program Committee Member - Enginuity 2.0",
      location: "University of Moratuwa",
      type: "IEEE WIE Student Branch Affinity Group",
      description:
        "Worked as a program committee member of Enginuity 2.0, organized by the IEEE WIE Student Branch Affinity Group, University of Moratuwa.",
      image: "/images/wie2..png",
      link: "#",
      skills: [],
    },
  ];

  // Pagination state
  const [page, setPage] = useState(0);
  const experiencesPerPage = 3;
  const totalPages = Math.ceil(experiences.length / experiencesPerPage);
  const goToPage = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) setPage(newPage);
  };

  // Removed scrollRef and scroll logic (no longer needed)

  return (
    <div className="pt-16 pb-16 relative">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-8">
        My <span className="text-cyan-300">Experiences</span>
      </h1>

      {/* Experience Cards with Pagination and Arrows */}
  <div className="flex justify-center items-center gap-6 px-12 relative" style={{ minHeight: '260px', alignItems: 'center' }}>
        {/* Left Arrow */}
        <button
          onClick={() => goToPage(page - 1)}
          className="absolute bg-gray-200 rounded-full shadow hover:bg-gray-300 transition disabled:opacity-50 flex items-center justify-center w-10 h-10 z-10 px-3"
          style={{ left: '6rem', top: '50%', transform: 'translateY(-50%)' }}
          disabled={page === 0}
          aria-label="Previous experiences"
        >
          <FaChevronLeft size={24} className="text-gray-700" />
        </button>
        {/* Experience Cards */}
        {experiences.slice(page * experiencesPerPage, page * experiencesPerPage + experiencesPerPage).map((exp, index) => (
          <div
            key={index}
            className="bg-[#0f172a] min-w-[350px] max-w-[350px] rounded-xl p-4 shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition flex-shrink-0"
          >
            <Image
              src={exp.image}
              alt={exp.role}
              width={350}
              height={160}
              className="rounded-lg object-cover"
            />
            <div className="mt-3">
              <h1 className="text-lg font-semibold text-cyan-300">
                {exp.role}
              </h1>
              <p className="text-white/70 text-sm">{exp.location}</p>
              <span className="bg-gray-700 text-white text-xs px-2 py-0.5 rounded-full mt-1 inline-block">
                {exp.type}
              </span>
              <p className="pt-2 text-white/80 text-sm">{exp.description}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {exp.skills && exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-cyan-900 text-cyan-200 text-[10px] px-2 py-0.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* Right Arrow */}
        <button
          onClick={() => goToPage(page + 1)}
          className="absolute bg-gray-200 rounded-full shadow hover:bg-gray-300 transition disabled:opacity-50 flex items-center justify-center w-10 h-10 z-10 px-3"
          style={{ right: '6rem', top: '50%', transform: 'translateY(-50%)' }}
          disabled={page === totalPages - 1}
          aria-label="Next experiences"
        >
          <FaChevronRight size={24} className="text-gray-700" />
        </button>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`w-3 h-3 rounded-full transition border-2 ${page === i ? 'bg-cyan-400 border-cyan-400' : 'bg-gray-400 border-gray-300'} focus:outline-none`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
