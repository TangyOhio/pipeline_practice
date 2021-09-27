import React, { useState } from "react";
import Button from "./Button";
import "./buttons.css";

const ButtonsContainer = ({ words }) => {
  const [currentWord, setCurrentWord] = useState(
    "Click a button to change the word"
  );

  return (
    <>
      {currentWord}
      <span className="buttons">
        {words.map(word => {
          return <Button key={word} word={word} changeWord={setCurrentWord} />;
        })}
      </span>
    </>
  );
};

export default ButtonsContainer;
