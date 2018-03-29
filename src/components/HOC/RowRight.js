import React from 'react';

function RowRight (props){
    return(
        <div style={{display: 'flex', justifyContent:'flex-end'}}>
            {props.children}
        </div>
    );
}

export default RowRight;