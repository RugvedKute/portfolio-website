import React from "react";
import Image from "../../../node_modules/next/image";

export default function About() {
  return (
    <div className="container max-w-screen-lg mx-auto grid grid-cols-1 gap-10 items-center sm:grid-cols-2">
      <div className="h-full w-full">
        <Image
          width={250}
          height={250}
          className="max-h-[400px] w-full object-cover"
          src={"/images/Rugved.jpeg"}
          alt="Rugved Image"
        ></Image>
      </div>
      <div className="text-white">
        <h3 className="text-xl font-bold text-yellow-400">About Me</h3>
        <p className="mt-5">
          Hey, my name is Rugved Kute. I'm 2023 grad, I have completed my
          engineering in Computer Science, I love building new things with code.
          I am looking for opportunities where I can grow myself as a person and
          as a developer and subsequently, learn from my peers. And with
          completed projects over multiple domains, I'm able to apply my skills
          across multiple problem statements to find innovative solutions.
        </p>

        <p className="mt-4 text-yellow-400">
          Tech Stack: React, Angular, Node js, Express js, Next js, Tailwind
          Css, Docker, Aws, Cloudflare, Turborepos, HTML, JavaScript,
          Typescript, Python, Java.
        </p>
      </div>
    </div>
  );
}
