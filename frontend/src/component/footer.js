import React from "react";

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; SpecSquad</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
};

export default Footer;