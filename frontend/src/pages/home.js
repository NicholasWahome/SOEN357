
import NavigationBar from '../navigationBar/navigationBar';
import Footer from '../component/footer.js'

function Home() {
    const paragraphStyle = {
        maxWidth: "800px", // Adjust the width as needed
        margin: "0 auto", // Center the slideshow horizontally
        padding: "20px",

    }

    return (
        <div>  
            <NavigationBar/>
            <p style={paragraphStyle}>
                <strong>SpecSquad</strong> is a special online place made just for kids who are looking for fun ways to learn online. We know that sometimes it's hard to find things that work well for you. That's why we created <strong>SpecSquad</strong>!
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

            <Footer />
        </div>

    );
}
export default Home;