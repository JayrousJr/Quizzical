// const newData = data.results.map((item) => {
//   // import all the incorrect answeres in an array
//   const allAnswers = item.incorrect_answers.map((ans) => ({
//     id: nanoid(),
//     text: ans,
//     isSelected: false,
//   }));
//   // add the correct answers with unique id in allAnswers array
//   allAnswers.push({
//     id: nanoid(),
//     text: item.correct_answer,
//     isSelected: false,
//   });
//   return {
//     ...item,
//     allAnswers: allAnswers,
//     id: nanoid(),
//     isAnswered: false,
//   };
// });

import InputGroupText from "react-bootstrap/esm/InputGroupText";

Quiz;
// function Quiz(props) {
//   const iterate = () => {
//     const answer = [];
//     for (let i = 0; i < props.item.incorrect_answers.length; i++) {
//       answer.push(<span key={i}>{props.item.incorrect_answers[i]}</span>);
//     }
//     answer.push(
//       <span key={props.item.incorrect_answers.length}>
//         {props.item.correct_answer}
//       </span>
//     );

//     return answer;
//   };
//   const shuffle = (array) => {
//     return array.sort(() => Math.random() - 0.5);
//   };
//   const shuffledArray = shuffle(iterate());
//   return (
//     <div className="quiz-body">
//       <p className="quiz-question">{props.item.question}</p>
//       <div className="answers">{shuffledArray}</div>
//     </div>
//   );
// }
// export default Quiz;

Appp;
// import React from "react";
// import Quiz from "./components/Quiz";
// import Open from "./components/Open";
// import data from "./data/trivia";
// import { nanoid } from "nanoid";
// import Confetti from "react-confetti";
// function App() {
//   const [startQuiz, setStartQuiz] = React.useState(false);
//   const [allQuestions, setAllQuestions] = React.useState(data.results);
//   // const [isAnswere, setisAnswered] = React.useState(false);
//   function startQuizHandler() {
//     setStartQuiz((prevState) => !prevState);
//     setAllQuestions((prevState) =>
//       prevState.map((item) => {
//         return {
//           ...item,
//           id: nanoid(),
//           isAnswered: false,
//         };
//       })
//     );
//   }
  function answeredQuestion(id) {
    setAllQuestions((oldState) =>
      oldState.map((item) => {
        return item.question === id
          ? {
              ...item,
              isSelected: !item.allAnswers.isSelected,
              isAnswered: !item.isAnswered,
            }
          : { ...item };
      })
    );
    allQuestions.map((item) => console.log(item));
//   }
//   const quizes = allQuestions.map((item) => (
//     <Quiz key={item.id} item={item} handleSelect={answeredQuestion} />
//   ));
//   return (
//     <div className="App">
//       {/* <Confetti className="confetti" /> */}
//       {!startQuiz && <Open quizHandler={startQuizHandler} />}
//       <main>{startQuiz && quizes}</main>
//     </div>
//   );
// }

// export default App;

// App Data Updated
import React from "react";
import Quiz from "./components/Quiz";
import Open from "./components/Open";
import data from "./data/trivia";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
function App() {
  const newData = data.results.map((item) => {
    // import all the incorrect answeres in an array
    const allAnswers = item.incorrect_answers.map((ans) => ({
      id: nanoid(),
      text: ans,
      isSelected: false,
    }));
    // add the correct answers with unique id in allAnswers array
    allAnswers.push({
      id: nanoid(),
      text: item.correct_answer,
      isSelected: false,
    });
    return {
      ...item,
      allAnswers: allAnswers,
      id: nanoid(),
      isAnswered: false,
    };
  });
  const [startQuiz, setStartQuiz] = React.useState(false);
  const [allQuestions, setAllQuestions] = React.useState(newData);
  // const [isAnswere, setisAnswered] = React.useState(false);
  function startQuizHandler() {
    setStartQuiz((prevState) => !prevState);
  }
  function answeredQuestion(questionid, answerId) {
    setAllQuestions((prevState) =>
      prevState.map((item) => {
        if (item.id === questionid) {
          const updatedArray = item.allAnswers.map((ans) => {
            return ans.id === answerId
              ? { ...ans, isSelected: !ans.isSelected }
              : { ...ans };
          });
          return { ...item, allAnswers: updatedArray };
        } else {
          return { ...item };
        }
      })
    );
  }
  const quizes = allQuestions.map((item) => (
    <Quiz
      key={item.id}
      item={item}
      handleSelect={() => answeredQuestion(item.id, item.allAnswers.id)}
    />
  ));
  return (
    <div className="App">
      {/* <Confetti className="confetti" /> */}
      {!startQuiz && <Open quizHandler={startQuizHandler} />}
      <main>{startQuiz && quizes}</main>
    </div>
  );
}

export default App;

// Quiz Data
import React from "react";

function Quiz(props) {
  let styles = props.item.allAnswers.map((item) => ({
    backgroundColor: item.isSelected ? "green" : "red",
  }));

  const quizElement = props.item.allAnswers.map((item) => (
    <span onClick={props.handleSelect}>
      {item.text}
      {item.isSelected}
      {console.log(item.isSelected)}
    </span>
  ));

  return (
    <div className="quiz-body">
      <p className="quiz-question">{props.item.question}</p>
      <div className="answers">{quizElement}</div>
      <div className="line"></div>
    </div>
  );
}
export default Quiz;

// App from gpt
    import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Open from "./components/Open";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  // Shuffle function
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const [questions, setQuestions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = await response.json();

        // Restructure data and add isSelected property
        const restructuredData = data.results.map((question) => ({
          ...question,
          id: nanoid(),
          isAnswered: false,
          allAnswers: [
            ...question.incorrect_answers.map((answer) => ({
              id: nanoid(),
              text: answer,
              isSelected: false,
            })),
            {
              id: nanoid(),
              text: question.correct_answer,
              isSelected: false,
            },
          ],
        }));
        // Shuffle answers within each question
        const shuffledData = restructuredData.map((question) => ({
          ...question,
          allAnswers: shuffleArray(question.allAnswers),
        }));
        // setting the state of data
        setQuestions(shuffledData);
        console.log(shuffledData);
        // return shuffleArray;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleAnswerSelect = (answerID, questionID) => {
    setQuestions((prevState) =>
      prevState.map((item) => {
        if (questionID === item.id) {
          if (answerID === item.allAnswers.id) {
            return { ...item };
          }
        } else {
          return { ...item };
        }
      })
    );
  };

  const quiz = questions.map((item) => {
    <Quiz key={item.id} item={item} handleAnswerSelect={handleAnswerSelect} />;
  });

  return <div className="App">{quiz}</div>;
}

export default App;

