import React from 'react';

import Corgi from '../../../tokens/corgi/corgi';
import Dialogue from './dialogue/dialogue';
import './creation.css';

const Creation = (props) => {
    return (
        <div className="creation">
            <div style={{
                backgroundColor: props.backColor,
                borderRadius: "10px",
                width: "40%",
                padding: "1%",
                margin: "1%"
            }}>
                <Dialogue className="dialogue" des={props.des} color={props.color} />
                <Corgi color={props.color} sausage={props.sausage} height="50%" />
            </div>
            <p className="dogname">{props.corgiName}</p>
            <p className="address">Created by <span className="orange">@{props.accountName}</span></p>
        </div>
    )
}

export default Creation