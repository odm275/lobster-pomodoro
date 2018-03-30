import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Navbar = () => (
<div className="navbar">
    <Link to='/graphics'>
        <Icon name="area graph" size='big'/>
    </Link>
    <Link to='/settings'>
            <Icon  name='settings' size='big'/>
    </Link>
</div>
);

export default Navbar;