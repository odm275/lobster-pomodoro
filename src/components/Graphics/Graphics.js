import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "./Chart";
import { Dropdown } from "semantic-ui-react";
import { getCounts } from "../../actions/timerActions";
import moment from "moment";
import {
  arrangeData,
  fillInGaps,
  addDays
} from "../../helpers/localStorageToChart";

class Graphics extends Component {
  constructor(props) {
    super(props);
    this.arrDates = null;
    this.state = {
      chartData: {},
      value: 1
    };
    this.setRange = this.setRange.bind(this);
  }
  componentDidMount() {
    this.props.getCounts();
  }
  componentWillReceiveProps(nextProps) {
    const dateStrings = nextProps.counts.pomodoroCount;
    this.arrDates = dateStrings
      .split(",")
      .map(date => new Date(parseInt(date, 10)));

    this.setRange();
  }

  calculateDateMap(arrDates) {
    const dataFormat = fillInGaps(arrangeData(arrDates));
    if (dataFormat[dataFormat.length - 1].length > 1) {
      dataFormat[dataFormat.length - 1].pop();
    } else {
      dataFormat[dataFormat.length - 1] = dataFormat[dataFormat.length - 1][0];
    }

    const data = dataFormat.map(
      day => (Array.isArray(day) && day.length ? day.length : 0)
    );
    const labels = generateLabels(dataFormat);
    return { data: data, labels: labels };
  }

  setRange(e, { value } = 1) {
    let upperRange;
    let lowerRange;
    const val = value || 1;
    switch (val) {
      case 2: // Current Week
        lowerRange = moment()
          .startOf("week")
          .toDate();
        upperRange = moment()
          .endOf("week")
          .toDate();
        this.setPlot(upperRange, lowerRange, val);
        break;
      default:
        // Last 7 Days
        upperRange = new Date();
        lowerRange = addDays(upperRange, -6);
        this.setPlot(upperRange, lowerRange, val);
        break;
    }
  }

  setPlot(upperRange, lowerRange, value) {
    const range = [...this.arrDates, upperRange, lowerRange]
      .sort((a, b) => a - b)
      .filter(date => date > lowerRange);

    const { labels, data } = this.calculateDateMap(range);
    this.plotChart(labels, data, value);
  }

  plotChart(labels, data, value) {
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
      },
      value: value
    });
  }

  render() {
    const timeRange = [
      { key: 1, text: "Last 7 Days", value: 1 },
      { key: 2, text: "Current Week", value: 2 }
    ];
    return (
      <div
        className="graphics"
        style={{
          width: "90%"
        }}
      >
        <h1>Lobster Stats</h1>
        <Dropdown
          fluid
          options={timeRange}
          onChange={this.setRange}
          value={this.state.value}
        />
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
