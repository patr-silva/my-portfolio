import React, { useState, useEffect } from "react";
import "./Typewriter.css";

interface TypewriterProps {
  text: string[];
  speed?: number;
  highlightColor?: string;
  height?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text = [],
  speed = 100,
  highlightColor = "#F15B5B",
  height = "h-30",
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const handleTyping = () => {
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

  useEffect(() => {
    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentLineIndex, text, speed]);

  const highlightWord = (word: string) => {
    const cleanedWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
    return (
      cleanedWord.startsWith("S") ||
      cleanedWord.startsWith("D") ||
      cleanedWord.startsWith("P")
    );
  };

  return (
    <div className={`typewriter inter-regular ${height}`}>
      {displayedText.map((line, index) => (
        <div
          key={index}
          style={{ whiteSpace: "pre-wrap" }}
          className='leading-tight'
        >
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              style={
                highlightWord(word) ? { color: highlightColor } : undefined
              }
            >
              {word + " "}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};


export default Typewriter;
