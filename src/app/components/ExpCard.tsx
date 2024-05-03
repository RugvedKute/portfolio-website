import React from "react";
import Clip from "./Clip";

interface expCardProps {
  companyDetails: String;
  duration: String;
  bulletPoints: String[];
  techStack: String[];
}

export default function ExpCard({
  companyDetails,
  duration,
  bulletPoints,
  techStack,
}: expCardProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-10 shadow-md">
      <div className="flex justify-between text-xl font-bold">
        <span>{companyDetails}</span>
        <span className="text-slate-600">{duration}</span>
      </div>
      <ul className="mt-4 flex flex-col gap-2 font-light">
        {bulletPoints?.map((point: any) => {
          return (
            <li key={point} className="list-disc">
              {point}
            </li>
          );
        })}
      </ul>
      <div className="mt-4 flex items-center gap-2 flex-wrap">
        {techStack?.map((stack: any) => {
          return <Clip key={stack} title={stack}></Clip>;
        })}
      </div>
    </div>
  );
}
