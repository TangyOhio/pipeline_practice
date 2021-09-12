import React from "react";

const Button = ({ word, changeWord }) => {
  return <button onClick={() => changeWord(word)}>{word}</button>;
};

export default Button;
