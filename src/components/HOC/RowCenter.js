import React from 'react';

const RowCenter = (props) => (
    <div style={{display:'flex', justifyContent:'center',}}>
        {props.children}
    </div>
);

export default RowCenter;