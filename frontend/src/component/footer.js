import React from "react";

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; SpecSquad</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: "#9de0ad",
    color: "#594f4f",
    textAlign: "center",
    padding: "10px 0",
    width: "100%",
};

export default Footer;