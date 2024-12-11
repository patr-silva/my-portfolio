import React from "react";
import "animate.css";
import "./Contacts.css";

const Contacts: React.FC = () => {
  const listItemsStyle =
    "underline-animation text-4xl font-medium cursor-pointer";

  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em] animate__animated animate__slideInRight'>
      <article className='inter-regular-text text-justify mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <h1 className='text-6xl text-left font-bold dark:text-neutral-200'>
          Get in touch
        </h1>
        <div className='grid grid-cols-8'>
          <ul className='mt-16 space-y-6 list-none'>
            <li className={listItemsStyle}>
              <a
                href='https://www.linkedin.com/in/patr-silva/'
                target='_blank'
                rel='noreferrer'
              >
                Linkedin
              </a>
            </li>

            <li className={listItemsStyle}>
              <a
                href='https://github.com/patr-silva'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>

            <li className={listItemsStyle}>
              <a
                href='mailto:patriciaresende.s92@gmail.com?subject=Hello%20there&body=I%20would%20like%20to%20get%20in%20touch.'
                className={listItemsStyle}
              >
                Email
              </a>
            </li>

            <li className={listItemsStyle}>
              <a href='/cv.pdf' download='cv.pdf' className={listItemsStyle}>
                CV
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Contacts;
