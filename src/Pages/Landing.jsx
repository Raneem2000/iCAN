import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../components/Css/button.css";
import "../components/Css/socialLink.css"
// import img from "./s.svg";
const Landing = () => {
  return (
    <div className="hero">
      <div className="container">
        <div class="heroAreaText">
          <h1>
            <TypeAnimation
              sequence={["iCAN", 3000, "Softwear Company", 3000]}
              wrapper="h1"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p>In order to achieve your future vision...we are the best</p>
          <a href="" class="btn">
            <button class="glow-on-hover" type="button">
              See more
            </button>
          </a>
          <ul className="social-links">
            <li>
              <a href="#">
                <i class="fab fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
{/* 
        <div class="heroImg">
          <img src="/ii.svg" />
        </div> */}
      </div>
    </div>
  );
};

export default Landing;
