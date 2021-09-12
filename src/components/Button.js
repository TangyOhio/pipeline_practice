import React from "react";

const Button = ({ word, changeWord }) => {
  return (
    <button key={word} onClick={() => changeWord(word)}>
      {word}
    </button>
  );
};

export default Button;
