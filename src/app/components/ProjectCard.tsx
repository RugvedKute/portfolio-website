import React from "react";
import Clip from "./Clip";
import Image from "../../../node_modules/next/image";

interface ProjectCardProps {
  inverted?: boolean;
  projectTitle: string;
  projectDescription: string[];
  techStack: string[];
  imgUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  inverted = false,
  projectTitle,
  projectDescription,
  techStack,
  imgUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="p-10 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold">{projectTitle}</h2>

      <div className="mt-4 grid grid-cols-3 gap-10 items-center max-sm:grid-cols-2">
        {inverted ? (
          <>
            <div className="flex flex-col gap-5 col-span-1 max-sm:col-span-2">
              {projectDescription?.map((desc, index) => (
                <p key={index} className="text-sm">
                  {desc}
                </p>
              ))}
              <div className="mt-5 flex items-center gap-2 flex-wrap">
                {techStack?.map((tech, index) => (
                  <Clip key={index} title={tech} />
                ))}
              </div>
              <button className="mt-5 w-full bg-black py-2 px-1 text-white rounded-md">
                Check it Out
              </button>
            </div>
            <div className="w-full h-full col-span-2 rounded-md mt-5">
              <Image
                src={imgUrl}
                className="object-cover h-full w-full rounded-md"
                alt={projectTitle}
              ></Image>
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-full col-span-2 rounded-md">
              <Image
                src={imgUrl}
                className="object-cover h-full w-full rounded-md"
                alt={projectTitle}
              ></Image>
            </div>
            <div className="col-span-1 max-sm:col-span-2">
              {projectDescription?.map((desc, index) => {
                return (
                  <p key={index} className="mt-5 font-light">
                    {desc}
                  </p>
                );
              })}
              <div className="mt-5 flex items-center gap-2 flex-wrap">
                {techStack?.map((tech, index) => {
                  return <Clip key={index} title={tech} />;
                })}
              </div>
              <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <button className="mt-5 w-full bg-black py-2 px-1 text-white rounded-md ">
                  {" "}
                  Check it Out
                </button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
