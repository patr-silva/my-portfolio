import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  image: string;
  linkTo: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  linkTo,
  techStack,
}) => {
  return (
    <Link to={linkTo}>
      <div className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 border-1 border-neutral-700'>
        <img
          src={image}
          alt={title}
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-200/40'></div>
        <h3 className='z-10 mt-3 text-3xl font-bold text-black'>{title}</h3>
        <div className='mt-4 flex flex-wrap gap-2 justify-center z-10'>
          {techStack.map((elem, index) => {
            return (
              <button className='px-3 py-1 text-sm font-medium text-white bg-red rounded-full' key={index}>
                {elem}
              </button>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
