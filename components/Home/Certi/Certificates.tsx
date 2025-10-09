import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  skills: string[];
  description: string;
};

export default function Certificates() {
  const [page, setPage] = useState(0);
  const certificates: Certificate[] = [
    {
      title: "CodeRally 6.0 - Champion",
      issuer: "IEEE Computer Society Student Branch Chapter of IIT",
      date: "Sep 2025",
      image: "/images/image1.jpg",
      skills: ["Problem Solving", "Team Work"],
      description: "Champion of the Final 24-Hour Hackathon of Corally 6.0, organized by the IEEE Computer Society Student Branch Chapter of IIT"
    },
    {
      title: "Web Design for Beginners",
      issuer: "Faculty of Information Technology, University of Moratuwa",
      date: "Dec 2023",
      image: "/images/webdesigner.jpeg",
      skills: ["HTML", "CSS", "Java Script"],
      description: "Certified for web development."
    },
    {
      title: "Python for Beginners",
      issuer: "Faculty of Engineering, University of Moratuwa",
      date: "Aug 2024",
      image: "/images/pythonbeginer.jpeg",
      skills: ["Python"],
      description: "Certified for Python."
    },
    {
      title: "CSS (Basic)",
      issuer: "Hackerank",
      date: "Apr 2024",
      image: "/images/css(basic).jpeg",
      skills: ["CSS"],
      description: "Certified for CSS."
    },
    {
      title: "Java (Basic)",
      issuer: "Hackerank",
      date: "Sep 2024",
      image: "/images/Java(basic).png",
      skills: ["Java"],
      description: "topics in Java language such as classes, data structures, inheritance, exception handling, etc."
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "Hackerank",
      date: "July 2025",
      image: "/images/problemsolving.png",
      skills: ["Java"],
      description: "topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching)"
    },
    {
      title: "Python (Basic)",
      issuer: "Hackerank",
      date: "July 2024",
      image: "/images/python.png",
      skills: ["Python"],
      description: "Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes"
    },
    {
      title: "Problem Solving (Intermediate)",
      issuer: "Hackerank",
      date: "July 2025",
      image: "/images/problemsolving2.png",
      skills: ["Java"],
      description: "topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions)"
    },
    {
      title: "Data Engineering on AWS",
      issuer: "AWS Training and Certification",
      date: "July 2025",
      image: "/images/aws.png",
      skills: ["AWS"],
      description: "In a Data Engineering on AWS Foundation Course, you learn how to collect, store, process, and analyze data using AWS tools like S3, Glue, Redshift, and QuickSight to build basic cloud data pipelines."
    },
  ];

        const certificatesPerPage = 3;
        const totalPages = Math.ceil(certificates.length / certificatesPerPage);

        const goToPage = (newPage: number) => {
          if (newPage >= 0 && newPage < totalPages) setPage(newPage);
        };

        return (
          <div className="relative w-full py-6">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-8">
              My <span className="text-cyan-300">Certificates</span>
            </h1>
            <div className="flex flex-col items-center gap-4">
              {/* Certificates Row - show 3 at a time, no scrollbar */}
              <div className="flex items-center gap-2">
                {/* Left Button */}
                <button
                          onClick={() => goToPage(page - 1)}
                          className="absolute bg-gray-200 rounded-full shadow hover:bg-gray-300 transition disabled:opacity-50 flex items-center justify-center w-10 h-10 z-10 px-3"
                          style={{ left: '6rem', top: '50%', transform: 'translateY(-50%)' }}
                          disabled={page === 0}
                          aria-label="Previous experiences"
                        >
                          <FaChevronLeft size={24} className="text-gray-700" />
                        </button>
                <div
                  className="flex space-x-6 px-4"
                  style={{ width: '1100px', maxWidth: '100%' }}
                >
                  {certificates.slice(page * certificatesPerPage, page * certificatesPerPage + certificatesPerPage).map((cert, index) => (
                    <div
                      key={index}
                      className="bg-[#0f172a] min-w-[350px] max-w-[350px] rounded-xl p-4 shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition flex-shrink-0"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={350}
                        height={160}
                        className="rounded-lg object-cover"
                      />
                      <div className="mt-3">
                        <h1 className="text-lg font-semibold text-cyan-300">
                          {cert.title}
                        </h1>
                        <p className="text-white/70 text-sm">{cert.issuer}</p>
                        <span className="bg-gray-700 text-white text-xs px-2 py-0.5 rounded-full mt-1 inline-block">
                          {cert.date}
                        </span>
                        <p className="pt-2 text-white/80 text-sm">{cert.description}</p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {cert.skills.map((skill, i) => (
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
                </div>
                {/* Right Button */}
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
              <div className="flex justify-center mt-2 gap-2">
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
      </div>
    );
  }