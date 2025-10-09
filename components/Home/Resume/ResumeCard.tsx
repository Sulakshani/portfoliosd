import React from "react";

type Props = {
  role: string;
  
  date?: string;
  school?: string;
  results?: string;
  description?: string;
};

const ResumeCard = ({  role, date, school, results, description }: Props) => {
  return (
    <div className="mb-6">
      <div className="bg-[#0f172a] p-6 rounded-xl shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex-1">
          {date && (
            <span className="bg-cyan-900 text-cyan-200 text-xs px-3 py-1 rounded-full font-medium">
              {date}
            </span>
          )}
          <h1 className="text-cyan-300 text-xl font-semibold mt-3 mb-2">
            {role}
          </h1>
          
          {school && (
            <h2 className="text-white text-lg font-medium mb-3 flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              {school}
            </h2>
          )}
          
          {results && (
            <div className="mb-4">
              <div className="inline-flex items-center px-3 py-1 bg-cyan-900 text-cyan-200 text-xs rounded-full">
                <span className="font-medium mr-2">Results:</span>
                <span className="font-semibold">{results}</span>
              </div>
            </div>
          )}
          
          <p className="text-white/80 text-sm leading-relaxed">
            {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
