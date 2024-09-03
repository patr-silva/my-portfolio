import React, { useState, useEffect } from "react";

interface TitlesTypewriterProps {
  text: string;
  speed?: number;
  textColor?: string;
}

const TitlesTypewriter: React.FC<TitlesTypewriterProps> = ({
  text,
  speed = 100,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        setTimeout(type, speed);
      }
    };

    type();

    return () => {
      index = text.length;
    };
  }, [text, speed]);

  return (
    <div
      className='typewriter inter-regular mb-10 text-5xl font-bold text-black dark:text-white sm:mt-3'
    >
      {displayedText}
    </div>
  );
};

export default TitlesTypewriter;
