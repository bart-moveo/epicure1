import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/homepage/Jumbotron";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Homepage />
      </main>
    </>
  );
}

export default App;
