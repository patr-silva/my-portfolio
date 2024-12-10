import React from "react";
import "animate.css";

const About: React.FC = () => {
  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em] animate__animated animate__slideInRight'>
      <article className='inter-regular-text text-justify mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <h1 className='text-6xl font-bold dark:text-neutral-200'>About</h1>
        <h2 className='text-3xl italic font-semibold dark:text-neutral-200 mt-7'>
          I'm Patrícia. A developer, builder, and lifelong learner.
        </h2>

        <p className='text-lg dark:text-neutral-200 mt-7'>
          {" "}
          I’m passionate about crafting{" "}
          <span className='font-bold'>
            accessible, intuitive, and performant user interfaces
          </span>{" "}
          that seamlessly combine thoughtful design with robust engineering. I
          love working at the{" "}
          <span className='font-bold'>
            intersection of design and development
          </span>
          , creating experiences that not only look great but are built for
          usability and inclusivity.
        </p>

        <p className='mt-5 text-lg dark:text-neutral-200'>
          Currently, I’m looking for my first role as a software developer. My
          journey into tech has been fueled by{" "}
          <span className='font-bold'>
            curiosity and a commitment to continuous learning
          </span>
          , which I’ve honed through personal projects and intensive training.
          These experiences have equipped me with a solid foundation in building
          <span className='font-bold'> fullstack applications</span> and a deep
          appreciation for creating solutions that make a real impact.
        </p>

        <p className='mt-5 text-lg dark:text-neutral-200'>
          I’m excited to contribute to projects where I can{" "}
          <span className='font-bold'>
            grow, collaborate, and help bring meaningful ideas to life.
          </span>
        </p>
      </article>
    </div>
  );
};

export default About;
