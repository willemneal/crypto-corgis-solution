import React from 'react';

import Corgi from '../../corgi/corgi';
import Dialogue from '../dialogue/dialogue';

const CreationSingle = ({backgroundColor,color,quote,sausage}) => {
    return (
        <div style={{
            backgroundColor: backgroundColor,
            borderRadius: "10px",
            padding: "20px",
            display: "inline-block"
        }}>
            <Dialogue quote={quote} color={color}/>
            <Corgi
                color={color}
                sausage={sausage} />
        </div>
    )
}

export default CreationSingle