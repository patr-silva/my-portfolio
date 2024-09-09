import React from "react";
import Typewriter from "../components/Typewriter";
import ProjectCard from "../components/ProjectCard";
import race4life from "../assets/images/race4life.jpeg";
import recipe from "../assets/images/recipe.png";
import nimbus from "../assets/images/nimbus.png";
import bistro from "../assets/images/bistro.png";
import mapeditor from "../assets/images/mapeditor.png";
import callOfEManuel from "../assets/images/callOfEmanuel.png";
import sneakers from "../assets/images/sneakers.png";
import goGreen from "../assets/images/gogreen.png";

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
    {
      title: "Nimbus",
      linkTo: "https://github.com/patr-silva/nimbus",
      image: nimbus,
    },
    {
      title: "Bistro Café",
      linkTo: "https://github.com/patr-silva/bistro-cafe",
      image: bistro,
    },
    {
      title: "Sneakers Store",
      linkTo: "https://github.com/patr-silva/Sneakers-Store",
      image: sneakers,
    },
    {
      title: "MapEditor",
      linkTo: "https://github.com/patr-silva/MapEditor",
      image: mapeditor,
    },
    {
      title: "Call of Emanuel",
      linkTo: "https://github.com/patr-silva/ShootingGame",
      image: callOfEManuel,
    },
    {
      title: "GoGreen",
      linkTo: "https://github.com/patr-silva/GoGreen",
      image: goGreen,
    },
  ];

  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em]'>
      <article className='inter-regular-text text-justify mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <Typewriter
          text={["Projects"]}
          speed={100}
          highlightColor='#000'
          height='h-32'
        />
        <div className='flex flex-wrap my-[-5%]'>
          {projects.map((elem, index) => {
            return (
              <div className='px-4 xl:w-1/2 md:w-1/2 w-full' key={index}>
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
