import React from 'react';

import Corgi from '../../corgi/corgi';
import Dialogue from '../dialogue/dialogue';

const CreationSingle = (props) => {
    return (
        <div style={{
            backgroundColor: props.backgroundColor,
            borderRadius: "10px",
            padding: "20px",
            display: "inline-block"
        }}>
            <Dialogue des={props.des} color={props.color} />
            <Corgi
                color={props.color}
                sausage={props.sausage} />
        </div>
    )
}

export default CreationSingle