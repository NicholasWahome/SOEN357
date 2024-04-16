import React from "react";
import GameListBlock from "./gamelistBlock";
import MathGame from '../pages/mathgame';
import { Link } from 'react-router-dom';
import mathimg from '../img/math_game.png'

const List = () => {
  return (
    <ul>
   <GameListBlock pageLink={"/mathgame"} imageUrl={mathimg}></GameListBlock>
      <GameListBlock />
      <GameListBlock />
      <GameListBlock />
      <Link to="/mathgame">Math</Link>
    </ul>
  );
};

export default List;
