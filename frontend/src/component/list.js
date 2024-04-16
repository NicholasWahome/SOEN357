import React from "react";
import GameListBlock from "./gamelistBlock";
import { Link } from 'react-router-dom';
import mathimg from '../img/math_game.png'
import tapandsay from '../img/tap&say.png'
const List = () => {
  return (
    <ul>
   <GameListBlock pageLink={"/mathgame"} imageUrl={mathimg}></GameListBlock>
      <GameListBlock pageLink={"/wordLearn"} imageUrl={tapandsay} />
      <GameListBlock />
      <GameListBlock />
      <GameListBlock />
      <GameListBlock />
      <Link to="/mathgame">Math</Link>
    </ul>
  );
};

export default List;
