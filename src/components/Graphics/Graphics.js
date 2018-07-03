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
  const fillDataFormat = fillInGaps(dataFormat);
  return fillDataFormat;
}
function fillInGaps(dataFormat) {
  const day = 1000 * 60 * 60 * 24;
  let gap = [];
  let dataFormatWGaps = [];

  let countToFuture = (past, future, index) => {
    if (sameDay(new Date(past), new Date(future))) {
      insertGaps(gap, index);
      gap = [];
      return;
    }
    past += day;
    gap.push(past); //Right here ... Should we push past before adding to past?
    countToFuture(past, future, index);
  };

  let insertGaps = (gap, index) => {
    //  Put gaps inside our dataFormat array
    if (gap.length > 1) {
      //  gap is going be between index and index+1 in the dataFormat array.
      const slice1 = dataFormat.slice(0, index + 1);
      const slice2 = dataFormat.slice(index + 1, dataFormat.length);
      const gapMinusExtra = gap.slice(0, gap.length - 1);
      dataFormatWGaps = slice1.concat(gapMinusExtra, slice2);
    } else {
      dataFormatWGaps = dataFormat;
    }
  };

  let generateGaps = () => {
    dataFormat.forEach((val, index) => {
      //If we're not out of bounds
      if (index + 1 < dataFormat.length) {
        countToFuture(
          dataFormat[index][0].getTime(),
          dataFormat[index + 1][0].getTime(),
          index
        );
      }
    });
  };
  generateGaps();
  return dataFormatWGaps;
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
