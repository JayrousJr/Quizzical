import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import axios from "axios";
import Open from "./components/Open";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [startGame, setStartgame] = useState(false);
  // setting the questions from an API to the
  const [questions, setQuestions] = useState([]);
  // Get quesstions from an API
  useEffect(() => {
    const getQuestions = async () => {};
    axios
      .get("https://opentdb.com/api.php?amount=10&category=18")
      .then((response) => {
        setQuestions(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
    getQuestions();
  }, []);
  const startingGame = () => {
    setStartgame((prevState) => !prevState);
  };
  return (
    <main className="App">
      {!startGame && <Open game={startingGame} />}
      {startGame && <Quiz questions={questions} />}
    </main>
  );
}

export default App;
