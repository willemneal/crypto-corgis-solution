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
                    width: "30%",
                    height: "15%",
                    padding: "2%",
                    margin: "1%"
                }}>
                    <Dialogue className="dialogue" des={props.des} />
                    <Corgi color={props.color} sausage={props.sausage} />
                    <p className="author">{props.corgiName}</p>
                    <p className="address">Created by <span className="orange">@{props.accountName}</span></p>
                </div>
            </div>
    )
}

export default Creation