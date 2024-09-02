import React from "react";
import Typewriter from "../components/Typewriter";

const Home: React.FC = () => {
  return (
    <div className='bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen p-4'>
      <Typewriter
        text={[
          "This is the first line",
          "And here is the second line",
          "Finally, this is the last word",
        ]}
        speed={100}
        highlightColor='red'
      />
      <h1 className='text-4xl'>Welcome to My Portfolio</h1>
      <p className='mt-4'>This is a sample text to show light and dark mode.</p>
    </div>
  );
};

export default Home;
