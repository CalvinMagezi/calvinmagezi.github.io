import Image from "next/image";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { ProjectType } from "../../../typings";

function SingleProject({ project }: { project: ProjectType }) {
  return (
    <div className="flex flex-col border-4 border-gray-600 bg-gray-800/40 w-full rounded-lg shadow-lg text-white group cursor-pointer transition duration-200">
      <div className="relative w-full rounded-t-lg h-80">
        <Image
          src={project.banner.url}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
          alt={project.title}
        />
        <div className="absolute z-10 w-full h-full transition duration-300 ease-in-out bg-black/40 rounded-t-lg group-hover:bg-black/80"></div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full space-y-3">
          <a href={project.linkToDemo} target="_blank" rel="noreferrer">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              <FaLink />
              <span>Live Preview</span>
            </button>
          </a>

          {project.isPrivate === false && (
            <a href={project.linkToRepo} target="_blank" rel="noreferrer">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors">
                <FaGithub />
                <span>Github Repo</span>
              </button>
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-bold tracking-wide my-4 text-center">
        {project?.title}
      </h3>
      <hr className="mb-4 border-gray-600" />

      <div className="flex flex-wrap items-center justify-center w-full">
        {project?.technologies.map((tech, index) => (
          <span 
            key={index}
            className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full m-2"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center w-full">
        {project.technologiesLogos.map((tech, index) => (
          <div
            key={index}
            className="w-12 h-12 rounded-full overflow-hidden m-2 bg-gray-600"
          >
            <Image
              src={tech.url}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              alt={`Technology ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <hr className="mb-4 border-gray-600" />

      <p className="p-3 text-gray-200">{project.description}</p>
    </div>
  );
}

export default SingleProject;