import nthlogo from "../../assets/nth-logo.png";
import "./Home.css";
import { Link } from "react-router-dom";
// import Particles from 'react-particles-js'
import ctd from "../../assets/ctd.png"
const Home = () => {
  return (
    <div className="nth-home">
          <img src={nthlogo} ></img>
          <h3>Network Treasure Hunt</h3>
          <h5>Decrypt the Encrypted</h5>
          <Link to="/question/put_your_answer_here">
            <button className="mr-3 ml-2 mt-2 mb-2 hunt-button hunt-button-css">
              Start Hunting
            </button>
          </Link>
          {/* <div class="nes-container with-title">
            <span class="title">Text</span>
            <p>Hello world! this is a in nes.css</p>
            <button class="nes-btn is-primary">Button 1</button>
          </div> */}
      </div>

  );
};

export default Home;