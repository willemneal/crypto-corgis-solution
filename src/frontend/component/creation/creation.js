import React from 'react';

import Corgi from '../corgi/corgi';
import Dialogue from './dialogue/dialogue';
import './creation.css';

const Creation = (props) => {
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
            <p className="address">Created by <span className="orange">@{props.accountName}</span></p>
        </div>
    )
}

export default Creation