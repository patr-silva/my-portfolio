import React from "react";
import Typewriter from "../components/Typewriter";

const About: React.FC = () => {
  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em]'>
      <article className='inter-regular-text text-justify mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <Typewriter text={["About"]} speed={100} highlightColor='#f15b5b' />

        <h2 className='text-xl dark:text-neutral-200 mt-10'>
          I'm Patrícia. A developer, builder, and lifelong learner.
        </h2>

        <p className='text-lg dark:text-neutral-200 mt-5'>
          {" "}
          I’m passionate about crafting accessible, intuitive, and performant
          user interfaces that seamlessly combine thoughtful design with robust
          engineering. I love working at the intersection of design and
          development, creating experiences that not only look great but are
          built for usability and inclusivity.
        </p>

        <p className='mt-5 text-lg dark:text-neutral-200'>
          Currently, I’m looking for my first role as a software developer. My
          journey into tech has been fueled by curiosity and a commitment to
          continuous learning, which I’ve honed through personal projects and
          intensive training. These experiences have equipped me with a solid
          foundation in building full-stack applications and a deep appreciation
          for creating solutions that make a real impact.
        </p>

        <p className='mt-5 text-lg dark:text-neutral-200'>
          I’m excited to contribute to projects where I can grow, collaborate,
          and help bring meaningful ideas to life.
        </p>
      </article>
    </div>
  );
};

export default About;
