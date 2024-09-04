import React from "react";
import TitlesTypewriter from "../components/TitlesTypeWriter";
import ProjectCard from "../components/ProjectCard";
import race4life from "../assets/images/race4life.jpeg";
import recipe from "../assets/images/recipe.png";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Race4Life",
      linkTo: "https://github.com/fmbicalho/race4life",
      image: race4life,
    },
    {
      title: "Recipe App",
      linkTo: "https://github.com/patr-silva/recipe-app-client",
      image: recipe,
    },
  ];

  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em]'>
      <article className='inter-regular-text text-justify mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <TitlesTypewriter text='Projects' />
        <div className='flex flex-wrap my-[-5%] '>
          {projects.map((elem) => {
            return (
              <div className='px-4 xl:w-1/2 md:w-1/2 w-full'>
                <ProjectCard
                  title={elem.title}
                  linkTo={elem.linkTo}
                  image={elem.image}
                />
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Projects;
