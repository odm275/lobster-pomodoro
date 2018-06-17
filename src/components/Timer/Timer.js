import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { getSettings } from "../../actions/settingsActions";
import { increaseCount } from "../../actions/timerActions";
import logo from "../../lobster.svg";
import "./Timer.css";
class Timer extends Component {
  constructor() {
    super();
    this.t = null;
    this.state = {
      minutes: "0",
      seconds: "0"
    };
  }
  componentDidMount() {
    this.props.getSettings();
  }
  setTimer(time, type) {
    //  If there's already a timer running, stop it.
    if (this.t) {
      clearInterval(this.t);
    }
    let present = new Date().getTime();
    let plus = parseInt(time, 10) * 1000 * 60;
    const future = new Date(present + plus).getTime();
    const interval = 100;
    this.t = setInterval(() => {
      present = new Date().getTime();
      let distance = future - present;
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.t);
        this.props.increaseCount(type);
        return;
      }
      this.setState({
        minutes,
        seconds
      });
    }, interval);
  }
  resetTimer() {
    clearInterval(this.t);
    this.setState({
      minutes: "0",
      seconds: "0"
    });
  }
  render() {
    const { pomodoro, shortBreak, longBreak } = this.props.settings;
    const { minutes, seconds } = this.state;

    return (
      <div>
        <div>
          <Button
            name="shortBreak"
            onClick={this.setTimer.bind(this, shortBreak, "shortBreakCount")}
          >
            Short Break
          </Button>
        </div>
        <Button
          name="longBreak"
          onClick={this.setTimer.bind(this, longBreak, "longBreakCount")}
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
            onClick={this.setTimer.bind(this, pomodoro, "pomodoroCount")}
          >
            <img src={logo} className="lobster-logo" alt="lobster-logo" />
          </Button>
        </div>
        <div>
          <Button
            name="reset"
            color="yellow"
            onClick={this.resetTimer.bind(this)}
          >
            Reset
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
  { getSettings, increaseCount }
)(Timer);
