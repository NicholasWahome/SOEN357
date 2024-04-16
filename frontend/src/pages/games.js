import List from '../component/list'
import NavigationBar from '../navigationBar/navigationBar.js';
import Footer from '../component/footer.js'



function Games() {
    const gameListStyle = {
        marginLeft:"50px"

    }
    return (
            <>
                <NavigationBar />
                <br />
                <div style={gameListStyle}>
                    <strong>Games List</strong>
                </div>
                <p style={{ color: 'blue', marginLeft:"50px"}}>
                    Click on any of the below games to start playing & learning!
                </p>
                <List />
                <Footer />
            </>

    );
}
export default Games;