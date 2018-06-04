import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { getSettings, setSettings } from "../../actions/settingsActions";
import PropTypes from "prop-types";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoro: null,
      shortBreak: null,
      longBreak: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      pomodoro: this.props.settings.pomodoro,
      shortBreak: this.props.settings.shortBreak,
      longBreak: this.props.settings.longBreak
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
    console.log(this.state);
    return (
      <Form>
        <Form.Field>
          <label>Pomodoro</label>
          <input
            value={this.state.pomodoro || 0}
            type="number"
            min={0}
            name="pomodoro"
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Short Break</label>
          <input
            value={this.state.shortBreak || 0}
            type="number"
            min={0}
            name="shortBreak"
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Long Break</label>
          <input
            value={this.state.longBreak || 0}
            type="number"
            min={0}
            name="longBreak"
            onChange={this.onChange}
          />
        </Form.Field>
        <Link to="/">
          <Button color="blue">Save</Button>
        </Link>
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

export default connect(mapStateToProps, { getSettings, setSettings })(
  withRouter(Settings)
);
