import React from 'react';
import apple from '../img/apple.png'
import banana from '../img/banana.png'
import NavigationBar from "../navigationBar/navigationBar";
import Footer from "../component/footer";

// Define an array of objects containing words and their associated images
const words = [
  { word: 'A P P L E', image: apple, audio: 'audio/apple.mp3' },
  { word: 'B A N A N A', image: banana, audio: 'audio/banana.mp3' },
  // Add more words here
];


  // Function to speak the word using the Web Speech API
const WordLearn = () => {
const speakWord = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Change to the appropriate language code if needed
    window.speechSynthesis.speak(utterance);
  };

    return (
      <div>
        <NavigationBar/>
        <h1>Words Aloud</h1>
        <div>
          {words.map((item, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <img src={item.image} alt={item.word} style={{ marginRight: '10px' }} />
              <span>{item.word}</span> <br></br>
              <button onClick={() => speakWord(item.word)} style={{ marginLeft: '10px' }}>
                Speak Word
              </button> <br></br>
              <audio src={item.audio} controls style={{ marginLeft: '10px' }} />
            </div>
          ))}
             <br></br>
        </div>
        <br></br>
        <Footer/>
      </div>
    );
}

export default WordLearn;
