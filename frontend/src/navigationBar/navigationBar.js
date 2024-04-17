import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png'
import "../styles/navbar.css"


const NavigationBar = () => {
  const navBarStyle = {
    backgroundColor: "#9de0ad",
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
    color: "#594f4f",
    textDecoration: "none",
    display: "inline-block",
  };

  const navm = {
    width: "120px",
    position: "relative",
    left: "900px"
  };

  return (
    <div style={navBarStyle}>
      <div style={navm}>
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
    </div>
  );
};

export default NavigationBar;


