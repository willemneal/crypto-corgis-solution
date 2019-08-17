import React from 'react';

import Corgi from '../corgi/corgi';
import Dialogue from './dialogue/dialogue';
import './creation.css';

const Creation = ({backgroundColor, color, corgiName, owner, quote, sausage}) => {
    return (
        <div className="creation">
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
            <p className="dogname">{corgiName}</p>
            <p className="address">Created by <span className="orange">@{owner}</span></p>
        </div>
    )
}

export default Creation