import React from "react";
import Typewriter from "../components/Typewriter";

const About: React.FC = () => {
  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em]'>
      <article className='inter-regular-text text-justify mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <Typewriter text={["About me"]} speed={100} highlightColor='#f15b5b' />

        <p className='text-lg dark:text-neutral-200 mt-16'>
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
          💡{" "}
          <span className='font-semibold'>
            A Commitment to Lifelong Learning:
          </span>{" "}
          One of the things that drives me every day is the desire to constantly
          learn and grow. In the ever-evolving world of technology, there's
          always something new to explore, whether it's mastering a new
          framework, improving my coding skills, or learning from others. I
          believe that learning is not just an individual pursuit but a
          collaborative effort. Sharing knowledge and exchanging ideas with
          others not only helps me grow but also enriches the entire development
          process.
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
