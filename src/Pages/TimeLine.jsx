import React from "react";
import "../components/Css/time-line.css";

function TimeLine() {
  return (
    <>
      <div className="timeline">
        <h2 class="main-title">Projects</h2>
        <div className="container- left-container">
          <img src="/amazon.png" />
          <div className="text-box">
            <h2>Alhabet Inc.1</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              quod aspernatur. Non sint odit explicabo porro exercitationem
              magni quaerat repellendus. Nostrum architecto quaerat consequatur
              ab quo assumenda nobis. Reiciendis, illo!
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container- right-container">
          <img src="/amazon.png" />
          <div className="text-box">
            <h2>Alhabet Inc.2</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              quod aspernatur. Non sint odit explicabo porro exercitationem
              magni quaerat repellendus. Nostrum architecto quaerat consequatur
              ab quo assumenda nobis. Reiciendis, illo!
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container- left-container">
          <img src="/amazon.png" />
          <div className="text-box">
            <h2>Alhabet Inc.3</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              quod aspernatur. Non sint odit explicabo porro exercitationem
              magni quaerat repellendus. Nostrum architecto quaerat consequatur
              ab quo assumenda nobis. Reiciendis, illo!
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container- right-container">
          <img src="/amazon.png" />
          <div className="text-box">
            <h2>Alhabet Inc.4</h2>
            <small>2200 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              quod aspernatur. Non sint odit explicabo porro exercitationem
              magni quaerat repellendus. Nostrum architecto quaerat consequatur
              ab quo assumenda nobis. Reiciendis, illo!
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeLine;
