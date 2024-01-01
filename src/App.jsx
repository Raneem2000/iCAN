import React, { useState, useEffect } from "react";
import Header from "./Pages/Header";
import Landing from "./Pages/Landing";
import Stats from "./Pages/Stats";
import Swipper from "./Pages/Swipper";
import Contact from "./Pages/Contact"
import Footer from "./Pages/Footer";
import TimeLine from "./Pages/TimeLine";
import Splash from "./Pages/Splash";

function App() {
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous task, such as loading data or animations
    const delay = setTimeout(() => {
      setShowComponents(true);
    }, 4000); // Adjust the time as needed

    return () => clearTimeout(delay);
  }, []); // Run this effect only once when the component mounts

  return (
    <>
      {showComponents ? (
        <div className="view">
          <div className="Home">
            <Header />
            <Landing />
          </div>
          <TimeLine />
          <Swipper />
          <Contact />
          <Footer />
        </div>
      ) : (
        <Splash />
      )}
    </>
  );
}

export default App;
