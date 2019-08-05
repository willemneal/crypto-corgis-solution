import React from 'react';

import Corgi from '../../corgi/corgi';
import Dialogue from '../dialogue/dialogue';
import '../creation.css';

//miss icon for sending and share
const CreationAccount = (props) => {
    return (
        <div className="creation">
            <div style={{
                backgroundColor: props.backColor,
                borderRadius: "10px",
                padding: "20px",
                display: "inline-block"
            }}>
                <Dialogue className="dialogue" des={props.des} color={props.color} />
                <Corgi 
                    color={props.color} 
                    sausage={props.sausage} />
            </div>
            <p className="dogname">{props.corgiName}</p>
            <p className="address blue">§ {props.rate}</p>
        </div>
    )
}

export default CreationAccount