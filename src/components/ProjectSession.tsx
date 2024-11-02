import React from "react";

import { FiArrowUpRight } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { PROJECTS, SHORT_EXPLANATION_ABOUT_PROJECT } from "../constants";

const ProjectSession: React.FC = React.memo(() => {
  return (
    <section className="px-10 lg:px-32">
      <h3 className="div-h1">Projects</h3>
      <p className="text-md leading-8 text-gray-600 max-w-5xl mx-auto text-center">
        {SHORT_EXPLANATION_ABOUT_PROJECT}
      </p>
      {PROJECTS.map((project, index) => {
        return (
          <div className="project-div " key={index}>
            <div>
              <h2 className="project-h2">
                #{index + 1} : {project.title}
              </h2>
              <p className="project-p">{project.description}</p>
              <div className="flex gap-2">
                {
                    project?.liveLink && (
                      <a
                        className="mb-5 flex w-fit button-style"
                        href={project?.liveLink}
                        target="_blank"
                      >
                        view live
                        <FiArrowUpRight className="ml-1" />
                      </a>
                    )
                }
                <a
                  href={project.gitLink}
                  target="_blank"
                  className="project-button-no-bg"
                  key={index}
                >
                  Github
                  <AiFillGithub className="text-lg ml-1" />
                </a>
              </div>
            </div>
            <div className="relative   hover:scale-105   transition-transform duration-300 ease-in-out">
<img
                src={project.img}
                alt="ecampus project"
                className="project-img"
              />
              {project?.liveLink && (
                <a
                  href={project?.liveLink}
                  target="_blank"
                  className="hidden absolute top-0 group-hover:flex  items-center justify-center w-full h-full bg-gray-500 rounded-md bg-opacity-25"
                >
                  <div className="button-style flex">
                    View Live
                    <FiArrowUpRight className="ml-1" />
                  </div>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
})

export default ProjectSession;
