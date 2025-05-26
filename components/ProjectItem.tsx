// ProjectItem.js
import React from "react";

interface ProjectItemProp {
  imageUrl: string;
  title: string;
  description: string;
}

function ProjectItem(prop: ProjectItemProp) {
  return (
    <div className="p-4 @container">
      <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
          style={{ backgroundImage: `url("${prop.imageUrl}")` }}
        ></div>
        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
          <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            {prop.title}
          </p>
          <div className="flex items-end gap-3 justify-between">
            <p className="text-[#9cabba] text-base font-normal leading-normal">
              {prop.description}
            </p>
            {/* <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#0c7ff2] text-white text-sm font-medium leading-normal">
              <span className="truncate">View Project</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
