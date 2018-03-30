import React from 'react';
import Home from './containers/Home/Home';
import Settings from './containers/Settings/Settings';
import Graphics from './containers/Graphics/Graphics';

import {
    BrowserRouter as Router,
    Route, 
    Link,
    Redirect,
    Switch,
  } from 'react-router-dom';

const App = () => (
    <Router>
        <Home/>
        <Route exact path ='/' render = {Home}/>
        <Route path = '/settings' render = {Settings}/>
        <Route path = '/graphics' render = {Graphics}/>
    </Router>
);

export default App;