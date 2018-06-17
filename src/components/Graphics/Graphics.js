import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Graphics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: {
        labels: [],
        datasets: [
          {
            label: "Pomodoro Count",
            data: [],
            backgroundColor: []
          }
        ]
      }
    };
  }

  render() {
    return <div className="graphics" />;
  }
}

export default Graphics;
