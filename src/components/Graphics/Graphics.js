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
  }
  componentDidMount() {
    this.props.getCounts();
  }
  componentWillReceiveProps(nextProps) {
    const dataFormat = localStorageToChart(nextProps.counts.pomodoroCount);
    const labels = generateLabels(dataFormat);
    const data = dataFormat.map(day => day.length);
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

  render() {
    const timeRange = [
      {
        text: "Last 7 Days",
        value: 1
      },
      {
        text: "Last 2 Weeks",
        value: 1
      },
      {
        text: "Last Month",
        value: 1
      },
      {
        text: "",
        value: 1
      },
      {
        text: "1 Week",
        value: 1
      }
    ];
    return (
      <div className="graphics">
        <h1>Lobster Stats</h1>
        <DropDownInput range={timeRange} />
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
  const arr = str.split(",");
  const toDates = arr.map(date => new Date(parseInt(date, 10)));
  //plot: Arrays of arrays with each
  //pomodoro occurances from each equivalent day
  const dataFormat = arrangeData(toDates);
  return dataFormat;
}
function generateLabels(data) {
  var monthNames = [
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
    const day = date[0].getDay();
    const monthIndex = date[0].getMonth();
    const year = date[0].getFullYear();
    return `${day}-${monthNames[monthIndex]}-${year}`;
  });
}
function arrangeData(arr) {
  let result = [];
  let array = arr;
  let arrayLength;
  let differenceLength;
  array.forEach(d1 => {
    const day = arr.reduce((acc, d2) => {
      if (sameDay(d1, d2)) {
        acc.push(d2);
      }
      return acc;
    }, []);
    arrayLength = array.length;
    array = difference(array, day);
    differenceLength = array.length;
    if (arrayLength !== differenceLength) {
      result.push(day);
    }
  });
  return result;
}
function difference(arr1, arr2) {
  return arr1.filter(x => !arr2.includes(x));
}

function sameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}
