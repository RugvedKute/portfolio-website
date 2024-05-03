import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <h2 className="text-xl font-bold text-slate-600">PROJECTS</h2>
      <div className="mt-5 flex flex-col gap-5">
        <ProjectCard
          projectTitle="Omnifood: Food Delivery App"
          techStack={["HTML", "CSS", "JavaScript"]}
          imgUrl={"/images/omnifood.png"}
          projectUrl={"https://magenta-blancmange-f428be.netlify.app/"}
          projectDescription={[
            "Omnifood is a food delivery app that allows users to order food from a variety of restaurants. The app is built using HTML, CSS, and JavaScript.",
            "The app is designed to be responsive and easy to use on different devices. The goal of creation of Omnifood was to gain hand's on experience in frontend Web development.",
          ]}
        />
        {/* Uncomment the following ProjectCard components if needed */}
        {/* <ProjectCard inverted={true} />
        <ProjectCard /> */}
      </div>
    </div>
  );
}
