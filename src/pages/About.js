import React from "react";
import "../styles/About.css";
import {FaInstagram , FaWhatsapp} from 'react-icons/fa'

const About = ({ theme }) => {
  return (
    <div className="About-page" data-theme={theme}>
      <div className="heading-detail">
        <h2>About Us</h2>
      </div>
      <div className="paragraph">
        <p>
          This Is A Complete Movies And Tv Shows Collection. <br/> You Can Search Your Favorite Movies And Tv Shows Here Or Find Next Movie And Tv Shows  Watch Here
        </p>
        <p>
          Well This App Is Created With React And <span>themoviebd api</span> ,
          Hope You Like It .
        </p>
        <h2>You Can Find Me Here
        <FaInstagram className="icon"/>
        <FaWhatsapp className="icon"/></h2>
      </div>
      <div className="image-div">
        <img
          src={theme === 'light' ? require("../images/about-poster.jpg") : require("../images/about-poster.webp")}
          alt="Avenger poster"
        />
      </div>
    </div>
  );
};

export default About;
