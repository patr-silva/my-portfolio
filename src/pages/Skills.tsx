import React from "react";
import Typewriter from "../components/Typewriter";
import JavaIcon from "../assets/icons/JavaIcon";
import JsIcon from "../assets/icons/JsIcon";
import HtmlIcon from "../assets/icons/HtmlIcon";
import CssIcon from "../assets/icons/CssIcon";
import TypescriptIcon from "../assets/icons/TypescriptIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import NextIcon from "../assets/icons/NextIcon";
import TailwindIcon from "../assets/icons/TailwindIcon";
import Bootstrap from "../assets/icons/Bootstrap";
import SpringIcon from "../assets/icons/SpringIcon";
import HibernateIcon from "../assets/icons/HibernateIcon";
import NodeIcon from "../assets/icons/NodeIcon";
import ExpressIcon from "../assets/icons/ExpressIcon";
import SqlIcon from "../assets/icons/SqlIcon";
import MongoIcon from "../assets/icons/MongoIcon";

const Skills: React.FC = () => {
  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em]'>
      <article className='inter-regular-text text-justify mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <h1 className='text-6xl font-bold dark:text-neutral-200'>Skills</h1>

        <div className='mt-16'>
          <div className='grid md:grid-cols-5 sm:grid-cols-3'>
            <JsIcon />
            <JavaIcon />
            <HtmlIcon />
            <CssIcon />
            <TypescriptIcon />
            <ReactIcon />
            <NextIcon />
            <TailwindIcon />
            <Bootstrap />
            <SpringIcon />
            <HibernateIcon />
            <NodeIcon />
            <ExpressIcon />
            <SqlIcon />
            <MongoIcon />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Skills;
