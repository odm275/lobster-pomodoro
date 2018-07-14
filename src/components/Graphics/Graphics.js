import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "./Chart";
import DropDownInput from "./DropdownInput";
import { getCounts } from "../../actions/timerActions";

class Graphics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
    this.setRange = this.setRange.bind(this);
  }
  componentDidMount() {
    this.props.getCounts();
  }
  componentWillReceiveProps(nextProps) {
    const dataFormat = localStorageToChart(nextProps.counts.pomodoroCount);
    const data = dataFormat.map(
      day => (Array.isArray(day) && day.length ? day.length : 0)
    );
    const labels = generateLabels(dataFormat);
    this.getChartData(labels, data);
  }
  getChartData(labels, data) {
    this.setState({
      chartData: {
        labels: labels,
        datasets: [
          {
            label: "Lobster Count",
            data: data,
            borderColor: "#F85F73",
            fill: false
          }
        ]
      }
    });
  }
  setRange(range) {
    const rangeLabels = this.state.chartData.labels;
    const rangeData = this.state.chartData.datasets.data;
  }

  render() {
    const timeRange = [
      {
        text: "Last 7 Days",
        value: 1
      }
    ];
    return (
      <div className="graphics">
        <h1>Lobster Stats</h1>
        <DropDownInput range={timeRange} onClick={this.setRange} />
        <Chart
          chartData={this.state.chartData}
          displayTitle="Lobster Count"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counts: state.counts
});

export default connect(
  mapStateToProps,
  { getCounts }
)(Graphics);

function localStorageToChart(str) {
  // String -> Array of Dates
  const arr = str.split(",");
  const toDates = arr.map(date => new Date(parseInt(date, 10)));

  return fillInGaps(arrangeData(toDates));
}
// @desc [d1,d2,...,dN] -> [[d1,d2],[d3], [d4,d5,d6,d7]...Dn]
// Array of dates -> Arrays of arrays of dates of the same day.
function arrangeData(arr) {
  const datesByDay = arr.reduce((acc, d1) => {
    const pomDayCount = arr.filter(d2 => sameDay(d1, d2));
    const length = acc.length;
    if (length === 0 || !acc[length - 1].includes(d1)) {
      acc.push(pomDayCount);
      return acc;
    }
    return acc;
  }, []);

  return datesByDay;
}

function fillInGaps(arr) {
  const day = 1000 * 60 * 60 * 24;
  console.log(arr);
  const arrWGaps = arr.reduce((acc, d1) => {
    const day = d1[0];
  }, []);

  return arr;
}

function generateLabels(data) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return data.map(date => {
    if (Array.isArray(date) && date.length) {
      const day = date[0].getDate();
      const monthIndex = date[0].getMonth();
      const year = date[0].getFullYear();
      return `${day}-${monthNames[monthIndex]}-${year}`;
    }

    const dateObject = new Date(date);
    const day = dateObject.getDate();
    const monthIndex = dateObject.getMonth();
    const year = dateObject.getFullYear();
    return `${day}-${monthNames[monthIndex]}-${year}`;
  });
}

function sameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}
