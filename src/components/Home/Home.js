import React, { Component } from "react";

import "./Home.css";
import Navbar from "../Navbar/Navbar";
import TimeButtons from "../Buttons/Buttons";
import Footer from "../Footer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <TimeButtons />
        <Footer />
      </div>
    );
  }
}

export default Home;
