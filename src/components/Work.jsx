import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Participation bootcamp educamas",
    duration: "6 months",
    details:
      "Knowledge of programming languages, html, css, javascript, react library, node js and mongodb database",
  },
  {
    year: 2021,
    title: "work callcenter",
    duration: "6 months",
    details:
      "customer service, answering calls, customer retention area and inbound and outbound call answering",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1440px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]"> Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
