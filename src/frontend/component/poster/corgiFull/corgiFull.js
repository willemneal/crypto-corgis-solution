import React from 'react';
import corgifull from '../../../../assets/corgi-full.png';
import Speaking from './speakingSVG/speakingSVG';
import './corgiFull.css';

const CF = () => (
    <div className="corgiFull">
        <Speaking className="speaking" />
        <img className="img" src={corgifull} />
        
    </div>
)

export default CF
