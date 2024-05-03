import React from "react";
import Clip from "./Clip";

export default function ExpCard({
  companyDetails,
  duration,
  bulletPoints,
  techStack,
}) {
  return (
    <div className="bg-gray-100 rounded-lg p-10 shadow-md">
      <div className="flex justify-between text-xl font-bold">
        <span>{companyDetails}</span>
        <span className="text-slate-600">{duration}</span>
      </div>
      <ul className="mt-4 flex flex-col gap-2 font-light">
        {bulletPoints?.map((point: any) => {
          return <li className="list-disc">{point}</li>;
        })}
      </ul>
      <div className="mt-4 flex items-center gap-2 flex-wrap">
        {techStack?.map((stack: any) => {
          return <Clip title={stack}></Clip>;
        })}
      </div>
    </div>
  );
}
