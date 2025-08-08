import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Certificates() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const certificates = [
    {
      title: "HackerRank Java (Basic)",
      issuer: "HackerRank",
      date: "Oct 2024",
      image: "/certificates/java-basic.png",
      skills: ["Java", "OOP", "Basic Algorithms"],
      description: "Certified for basic Java programming skills.",
      link: "https://www.hackerrank.com/certificates/java-basic"
    },
    {
      title: "Google IT Automation with Python",
      issuer: "Google",
      date: "Jun 2024",
      image: "/certificates/google-python.png",
      skills: ["Python", "Automation", "IT Support"],
      description: "Completed Google IT Automation with Python.",
      link: "https://www.coursera.org/professional-certificates/google-it-automation"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS",
      date: "Apr 2024",
      image: "/certificates/aws-cloud.png",
      skills: ["AWS", "Cloud", "Fundamentals"],
      description: "AWS Cloud Practitioner certification.",
      link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
    },
    // Add more certificates here...
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 400 : -400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-6">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-8">
        My <span className="text-cyan-300">Certificates</span>
      </h1>
      <div className="flex justify-center items-center gap-2">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Certificates Row */}
        <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-6 px-12 scrollbar-hide items-center justify-center"
            >
              {certificates.map((cert, index) => (
                <div
                key={index}
                className="bg-[#0f172a] min-w-[350px] max-w-[350px] rounded-xl p-4 shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition flex-shrink-0"
                >
                <img
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
                  {cert.link && (
                    <a
                    href={cert.link}
                    className="mt-3 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 rounded-full text-white text-xs font-medium hover:opacity-90"
                    >
                    View More
                    </a>
                  )}
                </div>
                </div>
              ))}
            </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}