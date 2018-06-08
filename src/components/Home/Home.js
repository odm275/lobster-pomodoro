import React, { Component } from "react";

import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Timer from "../Timer/Timer";
import Footer from "../Footer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Timer />
        <Footer />
      </div>
    );
  }
}

export default Home;
