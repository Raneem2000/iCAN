import React from "react";

const Header = () => {
  return (
    <div class="header" id="header">
      <div class="container">
        <a href="#" class="logo">
          <img src="/ican.png"/>
          <span>i</span>CAN
        </a>
        <ul class="main-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
