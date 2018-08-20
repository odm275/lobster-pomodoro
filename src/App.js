import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Graphics from "./components/Graphics/Graphics";

import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <title>Top Lobster Pomodoro</title>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route path="/graphics" component={Graphics} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
