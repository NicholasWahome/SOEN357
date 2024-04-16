
import NavigationBar from '../navigationBar/navigationBar';
import Footer from '../component/footer.js'
import bubbles from '../img/bubbles.png'
import React, { useState, useEffect } from 'react';

function Home() {
    const paragraphStyle = {
        maxWidth: "800px", // Adjust the width as needed
        margin: "0 auto", // Center the slideshow horizontally
        padding: "20px",

    }
    const CookieWarning = () => {
        const [accepted, setAccepted] = useState(false);
    
        useEffect(() => {
            const isAccepted = localStorage.getItem('cookieAccepted');
            if (isAccepted) {
                setAccepted(true);
            }
        }, []);
    
        const acceptCookies = () => {
            localStorage.setItem('cookieAccepted', true);
            setAccepted(true);
        };
    
        if (!accepted) {
            return (
                <div style={{ textAlign: 'center' }}>
                <p>This website uses cookies to ensure you get the best experience on our website. By continuing to use this site, you agree to the use of cookies.</p>
                <button onClick={acceptCookies} style={{ 
                    backgroundColor: '#4CAF50', /* Green */
                    border: 'none',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    margin: '0 auto',
                    cursor: 'pointer',
                    borderRadius: '8px',
                }}>Accept</button>
            </div>
            );
        }
    
        return null;
    };

    return (
    
        <div>  
            <CookieWarning/>
            <NavigationBar/>

            <p style={paragraphStyle}>
                <strong>Welcome to SpecSquad!</strong> 
                <br></br>     <br></br>
                SpecSquad is a special online learning platform made just for kids with ASD or who exhibit symptoms of Autism Spectrum Disorder who are looking for fun ways to learn online. We know that sometimes it's hard to find things that work well for you. That's why we created <strong>SpecSquad</strong>!
            </p>

            <p style={paragraphStyle}>
                Our website is all about helping kids like you have a great time while learning new things. We've made sure everything is easy to use and understand, with lots of colors and simple words.
            </p>

            <p style={paragraphStyle}>
                At <strong>SpecSquad</strong>, you can explore and learn in a way that feels right for you. Whether it's reading stories, solving puzzles, or learning new skills, there's something here for everyone.
            </p>

            <p style={paragraphStyle}>
                We've worked really hard to make <strong>SpecSquad</strong> a friendly and welcoming place for kids like you. And with your help, we can make it even better!
            </p>

            <p style={paragraphStyle}>
                Come join the fun at <strong>SpecSquad</strong> and let's learn together!
            </p>
            <img src={bubbles} style={{margin: 'auto', display: 'block', padding: '10px'}} />
            <Footer />
        </div>

    );
}
export default Home;