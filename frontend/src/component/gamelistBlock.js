import React from "react";
import MathGame from '../pages/mathgame'
import { Link } from 'react-router-dom';
const GameListBlock = ({ imageUrl, caption,pageLink}) => {
  const blockStyle = {
    width: "400px",
    height: "400px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "hidden",
    display: "inline-block"
  };

  const imageStyle = {
    width: "100%",
    height: "calc(100% - 20px)", // Adjusted height to accommodate the caption
    objectFit: "cover",
  };

  const captionStyle = {
    padding: "10px",
    backgroundColor: "#f4f4f4",
    borderTop: "1px solid #ccc",
    textAlign: "center",
  };

  return (
    <div style={blockStyle}>
      <Link to={pageLink}>
      <img src={imageUrl} alt="Game" style={imageStyle}/>
      </Link> 
      <div style={captionStyle}>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default GameListBlock;
