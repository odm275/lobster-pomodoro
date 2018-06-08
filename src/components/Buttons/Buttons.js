import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import logo from "../../lobster.svg";
import "./Button.css";
class TimeButtons extends Component {
  render() {
    return (
      <div>
        <div>
          <Button>Short Break</Button>
        </div>
        <Button>Long Break</Button>
        <div>
          <p className="time">0:00</p>
        </div>
        <div>
          <Button color="red">
            <img src={logo} className="lobster-logo" alt="lobster-logo" />
          </Button>
        </div>
      </div>
    );
  }
}
export default TimeButtons;
