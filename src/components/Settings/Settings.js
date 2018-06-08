import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { getSettings, setSettings } from "../../actions/settingsActions";
import PropTypes from "prop-types";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoro: "",
      shortBreak: "",
      longBreak: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    this.props.getSettings();
  }
  componentWillReceiveProps(nextProps) {
    const { pomodoro, shortBreak, longBreak } = nextProps.settings;
    this.setState({
      pomodoro,
      shortBreak,
      longBreak
    });
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const settings = {
      pomodoro: this.state.pomodoro,
      shortBreak: this.state.shortBreak,
      longBreak: this.state.longBreak
    };
    this.props.setSettings(settings, this.props.history);
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Pomodoro</label>
          <input
            value={this.state.pomodoro}
            type="number"
            min={0}
            name="pomodoro"
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Short Break</label>
          <input
            value={this.state.shortBreak}
            type="number"
            min={0}
            name="shortBreak"
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Long Break</label>
          <input
            value={this.state.longBreak}
            type="number"
            min={0}
            name="longBreak"
            onChange={this.onChange}
          />
        </Form.Field>
        <Button color="blue" type="submit" onClick={this.onSubmit}>
          Save
        </Button>
        <Button color="red">Reset</Button>
      </Form>
    );
  }
}

Settings.propTypes = {
  getSettings: PropTypes.func.isRequired,
  setSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  settings: state.settings
});

export default connect(
  mapStateToProps,
  { getSettings, setSettings }
)(withRouter(Settings));
