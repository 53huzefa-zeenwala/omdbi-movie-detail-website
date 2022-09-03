import React from "react";
import '../styles/Header.css'



const Header = ({backgroundImage,title ,content}) => {
  const background = {
    backgroundImage: `url(${backgroundImage})`
  }
  return (
    <h1 style={background} className="header">
      <span>{title} </span>
      {content}
    </h1>
  );
};

export default Header;
