import React from 'react';

import Corgi from '../../corgi/corgi';
import Dialogue from '../dialogue/dialogue';

const CreationSingle = ({backgroundColor,color,des,sausage}) => {
    return (
        <div style={{
            backgroundColor: backgroundColor,
            borderRadius: "10px",
            padding: "20px",
            display: "inline-block"
        }}>
            <Dialogue des={des} color={color} />
            <Corgi
                color={color}
                sausage={sausage} />
        </div>
    )
}

export default CreationSingle