import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from '../src/pages/games.js'; 
import Home from '../src/pages/home.js'; 
import MathGame from '../src/pages/mathgame.js'; 

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/mathgame" element={<MathGame/>}/>
        </Routes>
    </Router>

  );
}

export default App;