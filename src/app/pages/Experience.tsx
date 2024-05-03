import React from "react";
import ExpCard from "../components/ExpCard";

export default function Experience() {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <h2 className="text-xl font-bold text-slate-600">EXPERIENCE</h2>
      <div className="mt-5 flex flex-col gap-5">
        <ExpCard
          companyDetails={
            "Revolux Solutions - Onsite | Software Engineer Intern"
          }
          duration={"Dec 2023 - Jan 2024"}
          bulletPoints={[
            `Integrated a Product Review Component into our web store, managed complex API requests using HttpClient, and
revamped the product page UI with the SCSS framework for improved aesthetics`,
            `Exploring mobile app conversion, I utilized the Ionic Framework to seamlessly turn the website into a
cross-platform application. The resulting solution is responsive, offers a native-like experience, and is
well-documented for future scalability.`,
          ]}
          techStack={["Angular js", "Tailwind css", "Node js"]}
        ></ExpCard>
        <ExpCard
          companyDetails={
            "Sankey Business Solution - Onsite | Solution Analyst"
          }
          duration={"July 2023 - Nov 2023"}
          bulletPoints={[
            `In web development, I played a key role in both Django backend and Angular frontend projects. On the Django
side, I developed core APIs with authentication services and WebSocket connections, seamlessly integrating them
with an Angular App. Microservice orchestration further enhanced backend capabilities.
          `,
            `In Angular, I optimized code for performance, implemented advanced state management with ngrx, and styled
pages using SCSS`,
            `Notably, I led the creation of an Employee Evaluation System in Angular, following best practices and
incorporating features like Auth Guard, Lazy Loading, and robust error handling for improved performance.
Adherence to coding standards with ESLint ensured a clean and maintainable codebase.`,
          ]}
          techStack={[
            "Angular",
            "Node js",
            "Typescript",
            "Docker",
            "Clean code",
          ]}
        ></ExpCard>

        <ExpCard
          companyDetails={"Faclon Labs - Onsite | Data Science Intern"}
          duration={"July 2023 - Nov 2023"}
          bulletPoints={[
            `I developed the IoSense Python library, designed to seamlessly extract data through APIs. This library has been
published on PyPi with comprehensive and self-explanatory documentation, ensuring ease of use for developers. To
enhance its capabilities, I integrated various time series models, including LSTM and Multivariate LSTM, and
encapsulated them within Docker containers for hassle-free execution on any system.
          `,
            `In Angular, I optimized code for performance, implemented advanced state management with ngrx, and styled
pages using SCSS`,
            `Notably, I led the creation of an Employee Evaluation System in Angular, following best practices and
incorporating features like Auth Guard, Lazy Loading, and robust error handling for improved performance.
Adherence to coding standards with ESLint ensured a clean and maintainable codebase.`,
          ]}
          techStack={[
            "Python",
            "LLM",
            "FAST API",
            "Azure",
            "Clean Code",
            "Docker",
          ]}
        ></ExpCard>
      </div>
    </div>
  );
}
