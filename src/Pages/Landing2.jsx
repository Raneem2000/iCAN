import React from "react";
import '../components/Css/landing2.css';

function Landing2() {
    
  gsap.from(".img-1", 1.2, { opacity: 0, y: 150, delay: 0.6 });
  gsap.from(".img-2", 1.2, { opacity: 0, y: 150, delay: 0.75 });
  gsap.from(".img-3", 1.2, { opacity: 0, y: 150, delay: 0.9 });
  gsap.from(".img-4", 1.2, { opacity: 0, y: 150, delay: 1.05 });
  gsap.from(".img-5", 1.2, { opacity: 0, y: 150, delay: 1.20 });
  gsap.from(".img-6", 1.2, { opacity: 0, y: 150, delay: 1.35 });
  gsap.from("h1", 1.2, { opacity: 0, y: -80, delay: 1.4 });
  gsap.from("p", 1.2, { opacity: 0, y: -80, delay: 1.25 });
  gsap.from("button", 1.2, { opacity: 0, y: -80, delay: 1 });

//   const menu= document.querySelector('.menu');
//   const toggle = document.getElementById('toggle');

//   toggle.onclick = function() {
//     menu.classList.toggle('active');
//   }
  return (
    <>
      <header>
        <div className="logo">logo</div>
        <nav>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <i className="fa-solid fa-bars" id="toggle"></i>
        </nav>
      </header>
      <section className="home">
        <div className="home-content">
          <h1>Adventure</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            pariatur aperiam officia error ea reiciendis laborum, sapiente a
            similique quam dolores blanditiis animi cupiditate minima nulla
            cumque quae exercitationem earum.
          </p>
          <button>Learn More</button>
        </div>
        <div className="images">
          <div className="img-7"></div>
          <div className="img-6"></div>
          <div className="img-5"></div>
          <div className="img-4"></div>
          <div className="img-3"></div>
          <div className="img-2"></div>
          <div className="img-1"></div>
        </div>
      </section>
    </>
  );
}

export default Landing2;
