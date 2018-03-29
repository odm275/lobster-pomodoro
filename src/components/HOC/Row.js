import React from 'react';

function Row(props) {
    return(
        <div style={{display: 'flex', justifyContent:'space-around'}}>
           {props.children}
        </div>
    );
}

export default Row;