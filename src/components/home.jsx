import Homelist from "./Homelist";
import Navbar from "./Navbar";

const Home = () => {
    return (

        <>
        <Navbar/>
        
        <div className="main-bg">
          
        <Homelist/>
            <div className="landing">
                <h1>THERE'S NO SHORTAGE OF REMARKABLE IDEAS,</h1><h3>WHAT'S MISSING IS THE WILL TO EXECUTE THEM</h3>
            </div>
            </div>
        </>




    );
}

export default Home;

