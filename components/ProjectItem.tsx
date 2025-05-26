"use client";

import React from "react";

interface ProjectItemProp {
  imageUrl: string;
  title: string;
  description: string;
  projectUrl: string;
  disabled: boolean;
}

function ProjectItem(prop: ProjectItemProp) {
  return (
    <div className="p-4 @container">
      <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start h-full">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
          style={{ backgroundImage: `url("${prop.imageUrl}")` }}
        ></div>
        <div className="flex w-full h-full min-w-72 flex-col justify-between gap-1 py-4 @xl:px-4">
          <div className="flex flex-col gap-1">
            <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              {prop.title}
            </p>
            <div className="flex items-end gap-3 justify-between">
              <p className="text-[#9cabba] text-base font-normal leading-normal">
                {prop.description}
              </p>
            </div>
          </div>
          <button
            className={`flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-8 px-4 text-white text-sm font-medium leading-normal ${
              prop.disabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#0c7ff2] hover:bg-[#095ea0] cursor-pointer"
            }`}
            disabled={prop.disabled}
          >
            {prop.disabled ? (
              <span className="truncate">Code not available yet!</span>
            ) : (
              <a
                href={prop.projectUrl}
                className="truncate "
                onClick={(event) => {
                  if (prop.disabled) {
                    event.preventDefault();
                  }
                }}
                style={{ pointerEvents: prop.disabled ? "none" : "auto" }}
              >
                View Project
              </a>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
