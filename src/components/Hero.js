import React from "react";
// import {FaArrowDown} from "react-icons/fa"
import "./HeroStyles.css";

// import heroimage from '../assest/banner-img1.png'

function hero() {
  function gotomore() {
    window.scrollBy(0, 800);
  }

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="left">
          <h1>
            We <br />
            Design <br />
            for <br />
            Robots
          </h1>
          <div className="hero_content">
            <p>
              "Level up your gaming prowess with our cutting-edge computer
              gaming equipment - where victory meets innovation!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
