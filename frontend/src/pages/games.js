import List from '../component/list'
import NavigationBar from '../navigationBar/navigationBar';
import Footer from '../component/footer.js'

function Games() {
    const gameListStyle = {
        marginLeft:"50px"

    }
    return (
        <>
        <NavigationBar />
        <br></br>
        <div style={gameListStyle}> Games List</div>
        <List />
        <Footer />
        </>

    );
}
export default Games;