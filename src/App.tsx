import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/homepage/Jumbotron";
import Homepage from "./components/homepage/Homepage";
import { Transition, CSSTransition } from "react-transition-group";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
    Aos.init({ duration: 500, delay: 50 });
  }, []);

  return (
    <>
      <CSSTransition in={inProp} timeout={500} classNames="transition-1">
        <Navbar />
      </CSSTransition>
      <main>
        <Homepage />
      </main>
    </>
  );
}

export default App;
