// ProjectsSection.js
import React from "react";
import ProjectItem from "./ProjectItem";

const projectsData = [
  {
    imageUrl: "/images/job_board.png",
    title: "A Good F*cking Job Board",
    description:
      "A job board that allows users to track jobs from their favourite companies. ",
  },
  {
    imageUrl: "/images/nba_predictor.png",
    title: "NBA Predictor",
    description: `A CLI project that uses logistic regression model trained on historical 
                  NBA data to predict NBA games. I was able to achieve 70% accuracy on game winner
                  and 57% accuracy on spread predictions. One of the most fun projects I worked on
                  after my first internship to apply what I learned about data modeling 
                  and ORMs.`,
  },
  {
    imageUrl: "/images/yt_captions_translator.png",
    title: "YouTube Captions Translator",
    description:
      "A Google Chrome extension that auto-translates video captions in real-time to your preferred language.",
  },
];

function ProjectsSection() {
  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Projects
      </h2>
      {projectsData.map((project, index) => (
        <ProjectItem
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
        />
      ))}
    </>
  );
}

export default ProjectsSection;
