
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
         <p style={paragraphStyle}>SpecSquad is a special online place made just for kids who are <strong>autistic</strong>. We know that sometimes it's hard to find fun things to learn online that work well for you. That's why we created SpecSquad!</p>

        <p style={paragraphStyle}>Our website is all about helping kids like you have a great time while <strong>learning</strong> new things. We've made sure everything is easy to use and understand, with lots of colors and simple words. </p>

            <p style={paragraphStyle}>At SpecSquad, you can explore and learn in a way that feels right for you. Whether it's <strong>reading stories</strong>, <strong>solving puzzles</strong>, or <strong>learning new skills</strong>, there's something here for everyone.</p>

            <p style={paragraphStyle}>We've worked really hard to make SpecSquad a friendly and welcoming place for kids on the autism spectrum. And with your help, we can make it even better!</p>

            <p style={paragraphStyle}>Come join the fun at SpecSquad and let's learn together!</p>

         <Footer />
        </div>

    );
}
export default Home;