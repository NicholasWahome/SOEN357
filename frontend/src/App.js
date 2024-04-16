import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from '../src/pages/games.js'; 
import Home from '../src/pages/home.js'; 

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/games" element={<Games/>} />
        </Routes>
    </Router>

  );
}

export default App;