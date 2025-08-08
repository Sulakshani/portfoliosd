import React from "react";
import { IconType } from "react-icons";

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
      <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md hover:bg-blue-950/30 hover:scale-[1.02] transform-gpu">
        
        <div className="flex-1">
          {date && (
            <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold">
              {date}
            </h1>
          )}
          <h1 className="text-gray-200 text-xl sm:text-2xl font-semibold mb-2">
            {role}
          </h1>
          
          {school && (
            <h2 className="text-cyan-300 text-lg sm:text-xl font-medium mb-3 flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              {school}
            </h2>
          )}
          
          {results && (
            <div className="mb-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg backdrop-blur-sm">
                <span className="text-cyan-300 font-semibold text-sm mr-2">Results:</span>
                <span className="font-bold text-base bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {results}
                </span>
              </div>
            </div>
          )}
          
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
