import React from 'react';

import logo from '../../lobster.svg';
import { Button } from 'semantic-ui-react';

const StartButton = () => (
    <Button color = 'red' style={{width:'25%'}}>
        <img src={logo} style = {{width:'2rem'}} alt="lobster-logo"/>
    </Button>

);

export default StartButton;