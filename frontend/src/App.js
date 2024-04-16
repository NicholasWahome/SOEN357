import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from '../src/pages/games.js'; 
import Home from '../src/pages/home.js'; 
import MathGame from '../src/pages/mathgame.js'; 
import WordLearn from "./pages/wordlearn.js";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/mathgame" element={<MathGame/>}/>
          <Route path="/wordlearn" element={<WordLearn/>}/>
        </Routes>
    </Router>

  );
}

export default App;