import AnswerBtn from "./AnswerBtn";
import React from "react";
function Question({ question, selectedAnswer, onAnswerSelect, correct }) {
  // React.useEffect(()=>{})
  const {
    question: questionText,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
  } = question;
  // Shuffle function to randomize answer order
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  // Combine correct and incorrect answers and shuffle them
  const allAnswers = shuffleArray([...incorrectAnswers, correctAnswer]);

  const handleAnswerClick = (answer) => {
    onAnswerSelect(answer);
  };
  return (
    <div className="questions">
      <p className="quiz-question">{questionText}</p>
      <div className="answers">
        {allAnswers.map((answer, index) => (
          <AnswerBtn
            key={index}
            answer={answer}
            // correct={correct}.
            isSelected={selectedAnswer === answer}
            onClick={() => handleAnswerClick(answer)}
          />
        ))}
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Question;
