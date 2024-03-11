// Quiz.js
import React, { useState } from "react";
import Question from "./Question";
import Confetti from "react-confetti/";

function Quiz({ questions }) {
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [showAnswers, setShowAnswers] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleAnswerSelect = (index, answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleGetAnswers = () => {
    // Check if all answers are selected
    const count = selectedAnswers.filter(
      (answer, index) => answer === questions[index].correct_answer
    ).length;
    setCorrectAnswersCount(count);
    const allAnswersSelected = selectedAnswers.every(
      (answer) => answer !== null
    );
    if (allAnswersSelected) {
      setShowAnswers(true);
    } else {
      alert("Please select answers for all questions before getting answers.");
    }
  };
  const handlePlayAgain = () => {
    window.location.reload();
  };
  return (
    <div className="quiz-body">
      {showAnswers && <Confetti className="confetti" />}
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          selectedAnswer={selectedAnswers[index]}
          isSelected={selectedAnswers[index] !== null}
          isCorrect={
            showAnswers && selectedAnswers[index] === question.correct_answer
          }
          isIncorrect={
            showAnswers && selectedAnswers[index] !== question.correct_answer
          }
          onAnswerSelect={(answer) => handleAnswerSelect(index, answer)}
          showAnswers={showAnswers}
        />
      ))}
      {showAnswers && (
        <div className="btn-section">
          <p className="results">You have scored {correctAnswersCount}/10</p>
          <button className="open-btn home-btn" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      )}
      {!showAnswers && (
        <button className="open-btn home-btn" onClick={handleGetAnswers}>
          Mark Quiz
        </button>
      )}
    </div>
  );
}

export default Quiz;
