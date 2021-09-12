import React, { useState } from "react";
import Button from "./Button";
import "./buttons.css";

const WORDS = ["French", "Toast", "Chiken", "Nuggies"];

const ButtonsContainer = () => {
  const [currentWord, setCurrentWord] = useState(
    "Click a button to change the word"
  );

  return (
    <>
      {currentWord}
      <span className="buttons">
        {WORDS.map(word => {
          return <Button key={word} word={word} changeWord={setCurrentWord} />;
        })}
      </span>
    </>
  );
};

export default ButtonsContainer;
