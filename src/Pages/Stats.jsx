import React, { useEffect, useState } from "react";
import "../components/Css/stats.css";
import CountUp from "react-countup";

function Stats() {
  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const { top } = document.getElementById("stats").getBoundingClientRect();
      if (top <= window.innerHeight && !startCount) {
        console.log("Reached");
        setStartCount(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll",handleScroll)
  },[startCount]);
  return (
    <div class="stats" id="stats">
      <h2 class="main-title">Projects</h2>
      <div class="container">
        <div class="box-">
          <i class="icon- far fa-user fa-2x fa-fw"></i>
          <span class="number">
          <CountUp start={0} end={startCount ? 30 : 0}/>

          </span>
          <span class="text">Clients</span>
        </div>
        <div class="box-">
          <i class="icon- fas fa-code fa-2x fa-fw"></i>
          <span class="number">
            <CountUp start={0} end={startCount ? 150 : 0}/>
          </span>
          <span class="text">Projects</span>
        </div>
        <div class="box-">
          <i class="icon- fas fa-globe-asia fa-2x fa-fw"></i>
          <span class="number">
          <CountUp start={0} end={startCount ? 10  : 0}/>

          </span>
          <span class="text">Countries</span>
        </div>
        <div class="box-">
          <i class="icon- far fa-money-bill-alt fa-2x fa-fw"></i>
          <span class="number">
          <CountUp start={0} end={startCount ? 20 : 0}/>

          </span>
          <span class="text">Money</span>
        </div>
      </div>
    </div>
  );
}

export default Stats;
