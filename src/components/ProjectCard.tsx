import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  image: string;
  linkTo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, linkTo }) => {
  return (
    <Link to={linkTo}>
      <div className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24'>
        <img
          src={image}
          alt={title}
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-200/40'></div>
        <h3 className='z-10 mt-3 text-3xl font-bold text-black'>{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
