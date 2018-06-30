import React from "react";
import { Line } from "react-chartjs-2";

const Chart = props => (
  <div className="chart">
    <Line
      data={props.chartData}
      options={{
        title: {
          display: props.displayTitle,
          fontSize: 25
        },
        legend: {
          display: true,
          position: props.legendPosition
        }
      }}
    />
  </div>
);

export default Chart;
