import React, { useState, useEffect } from "react";
import "./Typewriter.css";

interface TypewriterProps {
  text: string[];
  speed?: number;
  highlightColor?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  highlightColor = "red",
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (currentLineIndex < text.length) {
        const currentLine = text[currentLineIndex];
        if (currentCharIndex < currentLine.length) {
          setDisplayedText((prev) => {
            const newText = [...prev];
            if (!newText[currentLineIndex]) newText[currentLineIndex] = "";
            newText[currentLineIndex] += currentLine[currentCharIndex];
            return newText;
          });
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setCurrentCharIndex(0);
          setCurrentLineIndex((prev) => prev + 1);
        }
      }
    };

    const timeout = setTimeout(type, speed);
    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentLineIndex, text, speed]);

  return (
    <div className='typewriter'>
      {displayedText.map((line, index) => {
        const isLastLine = index === text.length - 1;
        const isLastWord = isLastLine && line === text[text.length - 1];
        return (
          <div key={index} style={{ whiteSpace: "pre-wrap" }}>
            {line.split(" ").map((word, wordIndex) => {
              const isLastWordInLine =
                isLastWord && wordIndex === line.split(" ").length - 1;
              return (
                <span
                  key={wordIndex}
                  style={
                    isLastWordInLine ? { color: highlightColor } : undefined
                  }
                >
                  {word + " "}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Typewriter;
