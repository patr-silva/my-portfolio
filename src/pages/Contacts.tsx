import React from "react";
import Typewriter from "../components/Typewriter";
import "./Contacts.css";

const Contacts: React.FC = () => {
  const listItemsStyle =
    "underline-animation text-6xl font-medium cursor-pointer";
  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em]'>
      <article className='inter-regular-text text-justify mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <div className='my-20'>
          <Typewriter
            text={["Get in touch"]}
            speed={100}
            highlightColor='#f15b5b'
          />
        </div>

        <ul className='space-y-6 list-none'>
          <li className={listItemsStyle}>
            <a
              href='https://www.linkedin.com/in/patr-silva/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </li>
          <br />
          <li className={listItemsStyle}>
            <a
              href='https://github.com/patr-silva'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
          <br />
          <li className={listItemsStyle}>
            <a
              href='mailto:patriciaresende.s92@gmail.com?subject=Hello%20there&body=I%20would%20like%20to%20get%20in%20touch.'
              className={listItemsStyle}
            >
              Email
            </a>
          </li>

          <br />
          <li className={listItemsStyle}>
            <a href='/cv.pdf' download='cv.pdf' className={listItemsStyle}>
              CV
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Contacts;
