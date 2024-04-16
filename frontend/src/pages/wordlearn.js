import React, { useState, useEffect } from 'react';
import apple from '../img/apple.png';
import banana from '../img/banana.png';
import cherry from '../img/cherry.png';
import watermelon from '../img/watermelon.png';
import orange from '../img/orange.png';
import grapes from '../img/grapes.png';
import lemon from '../img/lemon.png';
import strawberry from '../img/strawberry.png';
import pineapple from '../img/pineapple.png';
import mango from '../img/mango.png';
import kiwi from '../img/kiwi.png';
import NavigationBar from "../navigationBar/navigationBar";
import Footer from "../component/footer";

const words = [
  { word: 'APPLE', image: apple, audio: 'audio/apple.mp3' },
  { word: 'BANANA', image: banana, audio: 'audio/banana.mp3' },
  { word: 'CHERRY', image: cherry, audio: 'audio/cherry.mp3' },
  { word: 'WATERMELON', image: watermelon, audio: 'audio/watermelon.mp3' },
  { word: 'ORANGE', image: orange, audio: 'audio/orange.mp3' },
  { word: 'GRAPES', image: grapes, audio: 'audio/grapes.mp3' },
  { word: 'LEMON', image: lemon, audio: 'audio/lemon.mp3' },
  { word: 'STRAWBERRY', image: strawberry, audio: 'audio/strawberry.mp3' },
  { word: 'PINEAPPLE', image: pineapple, audio: 'audio/pineapple.mp3' },
  { word: 'MANGO', image: mango, audio: 'audio/mango.mp3' },
  { word: 'KIWI', image: kiwi, audio: 'audio/kiwi.mp3' }
];

const WordLearn = () => {
  const [typedWords, setTypedWords] = useState({});
  const [score, setScore] = useState(0);
  const [successWords, setSuccessWords] = useState({});

  useEffect(() => {
    const storedScore = localStorage.getItem('score');
    if (storedScore) {
      setScore(parseInt(storedScore));
    }
    const storedSuccessWords = localStorage.getItem('successWords');
    if (storedSuccessWords) {
      setSuccessWords(JSON.parse(storedSuccessWords));
    }
  }, []);

  const speakWord = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const checkWord = (word) => {
    const typedWord = typedWords[word];
    const correctWord = words.find(item => item.word === word);
    if (typedWord && correctWord && typedWord.toUpperCase() === correctWord.word) {
      return true;
    }
    return false;
  };

  const handleInputChange = (word, event) => {
    setTypedWords({ ...typedWords, [word]: event.target.value });
  };

  const updateScore = (word) => {
    if (checkWord(word)) {
      const newScore = score + 1;
      setScore(newScore);
      localStorage.setItem('score', newScore);
      setSuccessWords({ ...successWords, [word]: true });
      localStorage.setItem('successWords', JSON.stringify({ ...successWords, [word]: true }));
    }
  };

  return (
     <>
      <NavigationBar />
      <div style={{ textAlign: 'center', backgroundColor: '#f0f0f0', padding: '20px' }}>
      
      <h1 style={{ color: 'blue' }}>Words Aloud</h1>
      <div>
        <p>
          <span style={{ color: 'purple' }}>Type</span> the word, then <span style={{ color: 'orange' }}>speak</span> it out loud and <span style={{ color: 'green' }}>check</span> your answer
        </p>
        <p>Score: {score}</p>
        {words.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px', display: 'inline-block' }}>
            <img src={item.image} alt={item.word} style={{ marginRight: '10px', width: '100px', height: '100px' }} />
            <br />
            <button onClick={() => speakWord(item.word)} style={{ backgroundColor: '#FF8C00', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', marginTop: '10px' }}>
              Speak
            </button>
            <br />
            <input
              type="text"
              placeholder="Type the word here"
              value={typedWords[item.word] || ''}
              onChange={(e) => handleInputChange(item.word, e)}
              style={{ marginTop: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button onClick={() => updateScore(item.word)} style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', marginTop: '10px', marginLeft: '5px' }}>
              Check
            </button>
            {successWords[item.word] && <p style={{ color: 'green', marginTop: '10px' }}>Success!</p>}
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
    </>
  );
}

export default WordLearn;

