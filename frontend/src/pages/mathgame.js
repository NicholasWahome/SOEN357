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
  const loadScore = () => {
    const savedScore = localStorage.getItem("mathGameScore");
    if (savedScore) {
      setScore(parseInt(savedScore));
    }
  };
  const gameBlockStyle = {
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#F4F4F4", // Calming background color
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Soft shadow for contrast
  };

  const inputStyle = {
    fontSize: "18px", // Increased font size
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc", // Subtle border for input field
  };

  const buttonStyle = {
    fontSize: "20px", // Increased font size
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#007BFF", // Distinguished button color
    color: "#fff", // White text for contrast
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  };

  const messageStyle = {
    fontSize: "18px", // Increased font size
    marginTop: "10px",
  };

  return (
    <div>
      <NavigationBar />
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
              style={inputStyle}
              required
            />
          </p>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
        <p style={messageStyle}>{message}</p>
        <button onClick={saveScore} style={buttonStyle}>
          Save Score
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MathGame;
