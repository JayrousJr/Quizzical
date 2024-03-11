import React, { useState } from "react";
import Question from "./Question";

function Quiz({ questions }) {
  const [correctAnswers, setCorrectAnswers] = useState({});
  // initializing the empty array carring the Selecte answers questions
  const initialSelectedAnswers = questions
    ? Array.from({ length: questions.length }, () => null)
    : [];
  // state variable to initialize the selected anser with an empty state
  const [selectedAnswers, setSelectedAnsewer] = useState(
    initialSelectedAnswers
  );
  const handleAnswerSelect = (index, answer) => {
    const newselectedAnswers = [...selectedAnswers];
    newselectedAnswers[index] = answer;
    setSelectedAnsewer(newselectedAnswers);
  };
  //
  const handleGetAnswer = () => {
    const newCorrectAnswers = questions.map((question, index) => ({
      question: question.question,
      correct: selectedAnswers[index] === question.correct_answer,
    }));
    setCorrectAnswers(newCorrectAnswers);
  };
  //
  return (
    <div className="quiz-body">
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          // correct={
          //   correctAnswers.find(
          //     (answer) => answer.question === question.question
          //   )?.correct
          // }
          onAnswerSelect={(answer) => handleAnswerSelect(index, answer)}
          selectedAnswer={selectedAnswers[index]}
        />
      ))}
      <p className="results">You have scored 5/10</p>
      <button className="open-btn home-btn" onClick={handleGetAnswer}>
        Mark Quiz
      </button>
    </div>
  );
}

export default Quiz;
