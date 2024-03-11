// AnswerButton.js
import React from "react";

function AnswerButton({ answer, isSelected, isCorrect, isIncorrect, onClick }) {
  const background = () => {
    if (isSelected && isCorrect) {
      return { backgroundColor: "#91ce9f" }; // Highlight selected and correct answer with light green color
    } else if (isCorrect) {
      return { backgroundColor: "#91ce9f" }; // Highlight correct answer with light green color
    } else if (isSelected && isIncorrect) {
      return { backgroundColor: "#e8ced6" }; // Highlight selected and incorrect answer with charcoal red color
    } else if (isSelected) {
      // Highlight selected and incorrect answer with charcoal red color
      return { backgroundColor: "#d2d4f1" };
    }
  };

  return (
    <div
      style={background()}
      onClick={onClick}
      disabled={isCorrect || isIncorrect} // Disable button if it's already checked
    >
      {answer}
    </div>
  );
}

export default AnswerButton;
