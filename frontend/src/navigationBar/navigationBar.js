import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png'


const NavigationBar = () => {
  const navBarStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
  };

  const navListStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
  };

  const navItemStyle = {
    display: "inline",
    marginRight: "10px",
  };
  const logoStyle = {
    width: "100px",
    height: "100px",
  }

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    display: "inline-block"
  };

  return (
    <div style={navBarStyle}>
       <img src={logo} style ={logoStyle} />
      <ul style={navListStyle}>
        <li style={navItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/games" style={linkStyle}>Games</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;


