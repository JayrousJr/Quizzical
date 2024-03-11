// Question.js
import React from "react";
import AnswerButton from "./AnswerBtn";

function Question({
  question,
  selectedAnswer,
  isSelected,
  isCorrect,
  isIncorrect,
  onAnswerSelect,
  showAnswers,
}) {
  const [shuffledAnswers, setShuffledAnswers] = React.useState([]);
  const {
    question: questionText,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
  } = question;
  React.useEffect(() => {
    // Combine correct and incorrect answers and shuffle them
    const allAnswers = shuffleArray([...incorrectAnswers, correctAnswer]);
    setShuffledAnswers(allAnswers);
  }, [question]);

  // Shuffle function to randomize answer order
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswerClick = (answer) => {
    if (!showAnswers) {
      onAnswerSelect(answer);
    }
  };

  return (
    <div className="questions">
      <p className="quiz-question">{questionText}</p>
      <div className="answers">
        {shuffledAnswers.map((answer, index) => {
          // Dynamically calculate isCorrect and isIncorrect based on showAnswers
          const correct = showAnswers && answer === correctAnswer;
          const incorrect =
            showAnswers &&
            answer !== selectedAnswer &&
            answer !== correctAnswer;
          return (
            <AnswerButton
              key={index}
              answer={answer}
              isSelected={isSelected && selectedAnswer === answer}
              isCorrect={correct}
              isIncorrect={incorrect}
              onClick={() => handleAnswerClick(answer)}
            />
          );
        })}
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Question;
