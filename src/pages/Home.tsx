import React from "react";
import Typewriter from "../components/Typewriter";

const Home: React.FC = () => {
  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen px-8 py-9 2xl:mt-12 2xl:ml-10'>
      <Typewriter
        text={[
          "Hey there!",
          "My name is Patrícia",
          "and",
          "I'm a",
          "Fullstack Developer!",
        ]}
        speed={100}
        highlightColor='#f15b5b'
      />
    </div>
  );
};

export default Home;
