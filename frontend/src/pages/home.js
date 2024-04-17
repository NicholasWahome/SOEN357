
import NavigationBar from '../navigationBar/navigationBar';
import Footer from '../component/footer.js'
import bubbles from '../img/bubbles.png'
import React, { useState, useEffect } from 'react';

function Home() {
    const paragraphStyle = {
        maxWidth: "800px", 
        margin: "0 auto", 
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
    const bulletPointStyle = {
        margin: '10px 0',
      };

    return (
    
        <div>  
            <CookieWarning/>
            <NavigationBar/>
            <div>
            <p style={paragraphStyle}>
                <strong>Welcome to SpecSquad!</strong>
            </p>
            <ul style={bulletPointStyle}>
                <li style={paragraphStyle}>
                SpecSquad is a special online learning platform made just for kids with ASD or who exhibit symptoms of Autism Spectrum Disorder who are looking for fun ways to learn online. We know that sometimes it's hard to find things that work well for you. That's why we created <strong>SpecSquad</strong>!
                </li>
            </ul>

            <ul style={bulletPointStyle}>
                <li style={paragraphStyle}>
                Our website is all about helping kids like you have a great time while learning new things. We've made sure everything is easy to use and understand, with lots of colors and simple words.
                </li>
            </ul>

            <ul style={bulletPointStyle}>
                <li style={paragraphStyle}>
                At <strong>SpecSquad</strong>, you can explore and learn in a way that feels right for you. Whether it's reading stories, solving puzzles, or learning new skills, there's something here for everyone.
                </li>
            </ul>

            <ul style={bulletPointStyle}>
                <li style={paragraphStyle}>
                We've worked really hard to make <strong>SpecSquad</strong> a friendly and welcoming place for kids like you. And with your help, we can make it even better!
                </li>
            </ul>

            <ul style={bulletPointStyle}>
                <li style={paragraphStyle}>
                Come join the fun at <strong>SpecSquad</strong> and let's learn together!
                </li>
            </ul>
            </div>
            <img src={bubbles} style={{margin: 'auto', display: 'block', padding: '10px', backgroundSize: 'cover'}} />
            <Footer />
        </div>

    );
}
export default Home;