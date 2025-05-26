// ProjectsSection.js
import React from "react";
import ProjectItem from "./ProjectItem";

const projectsData = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVfke1M5tMxNseVMK4yxGTOCFNTJKcvocHDkxI7V0_3ZXT91ZVb1q70mDk4h1kx87SrrbYBn9qW-zzJUg4awHHYUC5LneDAHKxtSLdl-H-t-DmRVPtcE3XAdl13hgJu9_F4AJ-iW93QGbQ0yehdQC6-fkguR3OBd0Pcab2cTgpc8RxmREIPd1CCnEKkk2zF5xjvYuVlGlUxII3LRTYypEmWmMyK4o6bPO5pS3LKvYOgXTH0ESKgw9MVIyqyj5TPItBpxdwthwB7qHx",
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
