import React from "react";
import TitlesTypewriter from "../components/TitlesTypeWriter";

const About: React.FC = () => {
  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em]'>
      <article className='inter-regular-text text-justify mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <TitlesTypewriter text='About me' />

        <p className='text-lg dark:text-neutral-200 mt-6'>
          👋 <span className='font-semibold'> Hey there!</span> I'm Patrícia, a
          former lawyer who recently transitioned into the exciting world of
          full-stack development. My journey from the courtroom to coding is
          fueled by a deep passion for problem-solving and a relentless drive
          for continuous learning.
        </p>

        <p className='mt-4 text-lg dark:text-neutral-200'>
          💻 <span className='font-semibold'>From Law to Code:</span> You might
          wonder how I moved from practicing law to becoming a developer. It all
          began with my love for tackling complex challenges and the thrill of
          finding solutions that make a real impact. Coding has allowed me to
          channel these passions into creating innovative software solutions.
        </p>

        <p className='mt-4 text-lg dark:text-neutral-200'>
          💪 <span className='font-semibold'>Collaboration is Key:</span> One of
          the aspects I find most fulfilling in software development is the
          collaborative environment. Teamwork is not just essential for
          delivering successful projects; it's also a vital part of personal and
          professional growth. I believe that working together with diverse
          minds leads to innovative outcomes and a richer learning experience.
        </p>

        <p className='mt-4 text-lg dark:text-neutral-200'>
          🤝 <span className='font-semibold'>A Unique Perspective:</span> My
          legal background gives me a distinctive approach to software
          development. I bring a strong sense of client empathy and a keen
          understanding of their needs, enabling me to craft solutions that
          address real-world challenges effectively. This unique perspective
          allows me to bridge the gap between technical requirements and user
          expectations.
        </p>
      </article>
    </div>
  );
};

export default About;
