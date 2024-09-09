import React from "react";
import Typewriter from "../components/Typewriter";

const Skills: React.FC = () => {
  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em]'>
      <article className='inter-regular-text text-justify mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <Typewriter text={["Skills"]} speed={100} highlightColor='#f15b5b' />

        <div className='mt-16'>
          <h2 className='inter-regular my-4 text-3xl'>Languages</h2>
          <div className='flex space-x-9 py-5 justify-center w-3/6 dark:bg-neutral-800 border-2 border-neutral-600 rounded-2xl'>
            <img
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg'
              alt='Java'
              title='Java'
              className='h-10 sm:h-12 md:h-10 lg:h-16'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg'
              alt='JavaScript'
              title='JavaScript'
            />

            <img
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg'
              alt='TypeScript'
              title='TypeScript'
              className='h-10 sm:h-12 md:h-10 lg:h-16'
            />
            <img
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg'
              alt='HTML'
              title='HTML'
              className='h-10 sm:h-12 md:h-10 lg:h-16'
            />
            <img
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg'
              alt='CSS'
              title='CSS'
              className='h-10 sm:h-12 md:h-10 lg:h-16'
            />
          </div>
        </div>

        <div className='py-5'>
          <h2 className='inter-regular my-4 text-3xl'>
            Frameworks & Libraries
          </h2>
          <div className='flex space-x-9 py-5 justify-center w-3/6 dark:bg-neutral-800 border-2 border-neutral-600 rounded-2xl'>
            <img
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg'
              alt='React'
              title='React'
              className='h-10 sm:h-12 md:h-10 lg:h-16'
            />
            <img
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
              alt='Next.js'
              title='Next.js'
              className='h-10 sm:h-12 md:h-10 lg:h-16'
            />
            <img
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
              alt='Tailwind CSS'
              title='Tailwind CSS'
              className='h-10 sm:h-12 md:h-10 lg:h-16'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg'
              alt='Bootstrap'
              title='Bootstrap'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg'
              alt='Ant Design'
              title='Ant Design'
            />
          </div>
        </div>

        <div className='py-5'>
          <h2 className='inter-regular my-4 text-3xl'>Backend Technologies</h2>
          <div className='flex space-x-9 py-5 justify-center w-3/6 dark:bg-neutral-800 border-2 border-neutral-600 rounded-2xl'>
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg'
              alt='Spring'
              title='Spring'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original-wordmark.svg'
              alt='Hibernate'
              title='Hibernate'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
              alt='Node.js'
              title='Node.js'
            />

            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png'
              alt='Express'
              title='Express'
            />
          </div>
        </div>

        <div className='py-5'>
          <h2 className='inter-regular my-4 text-3xl'>Databases</h2>
          <div className='flex space-x-9 py-5 justify-center w-1/3 dark:bg-neutral-800 border-2 border-neutral-600 rounded-2xl'>
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg'
              alt='MySQL'
              title='MySQL'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg'
              alt='mongoDB'
              title='mongoDB'
            />
          </div>
        </div>

        <div className='py-5'>
          <h2 className='inter-regular my-4 text-3xl'>Testing</h2>
          <div className='flex space-x-9 py-5 justify-center w-24 dark:bg-neutral-800 border-2 border-neutral-600 rounded-2xl'>
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg'
              alt='JUnit'
              title='JUnit'
            />
          </div>
        </div>

        <div className='py-5'>
          <h2 className='inter-regular my-4 text-3xl'>Tools</h2>
          <div className='flex space-x-9 py-5 justify-center w-4/6 dark:bg-neutral-800 border-2 border-neutral-600 rounded-2xl'>
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
              alt='Git'
              title='Git'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
              alt='GitHub'
              title='GitHub'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg'
              alt='Vim'
              title='Vim'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg'
              alt='IntelliJ'
              title='IntelliJ'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
              alt='Visual Studio Code'
              title='Visual Studio Code'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg'
              alt='Postman'
              title='Postman'
            />
          </div>
        </div>

        <div className='py-5'>
          <h2 className='inter-regular my-4 text-3xl'>Others</h2>
          <div className='flex space-x-9 py-5 justify-center w-1/3 dark:bg-neutral-800 border-2 border-neutral-600 rounded-2xl'>
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg'
              alt='Canva'
              title='Canva'
            />
            <img
              className='h-10 sm:h-12 md:h-10 lg:h-16'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg'
              alt='Tomcat'
              title='Tomcat'
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Skills;
