import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { getSettings } from "../../actions/settingsActions";
import logo from "../../lobster.svg";
import "./Timer.css";
class Timer extends Component {
  constructor() {
    super();
    this.counter = 0;
    this.state = {
      minutes: "0",
      seconds: "0"
    };
  }
  componentDidMount() {
    this.props.getSettings();
  }

  startTimer(time) {
    let present = new Date().getTime();
    const plus = parseInt(time, 10) * 1000 * 60;
    const future = new Date(present + plus).getTime();
    const interval = 1000;

    const t = setInterval(() => {
      present = new Date().getTime();
      let distance = future - present;
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        minutes,
        seconds
      });
      if (distance < 0) {
        clearInterval(t);
        alert("niggah!");
      }
    }, interval);
  }

  render() {
    const { pomodoro, shortBreak, longBreak } = this.props.settings;
    const { minutes, seconds } = this.state;

    return (
      <div>
        <div>
          <Button
            name="shortBreak"
            onClick={this.startTimer.bind(this, shortBreak)}
          >
            Short Break
          </Button>
        </div>
        <Button
          name="longBreak"
          onClick={this.startTimer.bind(this, longBreak)}
        >
          Long Break
        </Button>
        <div>
          <p className="time">{`${minutes}:${seconds}`}</p>
        </div>
        <div>
          <Button
            name="pomodoro"
            color="red"
            onClick={this.startTimer.bind(this, pomodoro)}
          >
            <img src={logo} className="lobster-logo" alt="lobster-logo" />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings
});

export default connect(
  mapStateToProps,
  { getSettings }
)(Timer);
