import React from 'react';

import Corgi from '../../corgi/corgi';
import Dialogue from '../dialogue/dialogue';
import '../creation.css';

//miss icon for sending and share
const CreationAccount = ({color, backgroundColor, corgiName, quote, sausage, rate}) => {
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
            <p className="address blue">§ {rate}</p>
        </div>
    )
}

export default CreationAccount