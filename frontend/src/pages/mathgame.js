import React, { useState, useEffect } from "react";
import NavigationBar from "../navigationBar/navigationBar";
import Footer from "../component/footer";
const MathGame = () => {
  const [score, setScore] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateNumbers();
    loadScore();
  }, []);

  const generateNumbers = () => {
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    setNum1(number1);
    setNum2(number2);
    setCorrectAnswer(number1 + number2);
  };

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
      setMessage("Correct!");
    } else {
      setMessage("Incorrect. Try again!");
    }
    setUserAnswer("");
    generateNumbers();
  };

  const saveScore = () => {
    localStorage.setItem("mathGameScore", score);
  };
  const gameBlockStyle =  {
    margin:"0 auto",
    padding: "20px",
  }
  
  const loadScore = () => {
    const savedScore = localStorage.getItem("mathGameScore");
    if (savedScore) {
      setScore(parseInt(savedScore));
    }
  };

  return (
    <div>
    <NavigationBar/>
    <div style={gameBlockStyle}>
      <h1>Math Game</h1>
      <p>Score: {score}</p>
      <form onSubmit={handleSubmit}>
        <p>
          {num1} + {num2} ={" "}
          <input
            type="number"
            value={userAnswer}
            onChange={handleChange}
            required
          />
        </p>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      <button onClick={saveScore}>Save Score</button>
      </div>
      <Footer/>
    </div>
  );
};

export default MathGame;
