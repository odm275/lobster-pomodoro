import React from 'react';
import Home from './containers/Home/Home';
import Settings from './containers/Settings/Settings';
import Graphics from './containers/Graphics/Graphics';

import { Route, Switch } from 'react-router-dom';

const App = () => (
        <Switch>
            <Route exact path ='/' component = {Home}/>
            <Route path = '/settings' component = {Settings}/>
            <Route path = '/graphics' component = {Graphics}/>
        </Switch>
);

export default App;