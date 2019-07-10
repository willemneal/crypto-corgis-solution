import React from 'react';
import corgifull from '../../../../assets/corgi-full.png';
import Speaking from './speakingSVG/speakingSVG';
import './corgiFull.css';

const CF = () => (
    <div className="corgiFull">
        <div className="svg">
            <Speaking className="speaking" />
        </div>
        <img className="img" src={corgifull} />
        
    </div>
)

export default CF
