import React, { Component } from "react";

import "./Home.css";
import Navbar from "../Navbar/Navbar";
import ShortBreak from "../Breaks/ShortBreak";
import LongBreak from "../Breaks/LongBreak";
import Timer from "../Timer/Timer";
import StartButton from "../Productive/StartButton";
import ResetButton from "../Productive/ResetButton";
import Footer from "../Footer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <ShortBreak />
        <LongBreak />
        <Timer />
        <ResetButton />
        <StartButton />
        <Footer />
      </div>
    );
  }
}

export default Home;
