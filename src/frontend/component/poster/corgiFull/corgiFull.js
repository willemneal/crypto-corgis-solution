import React from 'react';
import corgifull from '../../../../assets/corgi-full.png';
import Speaking from './speakingSVG/speakingSVG';
import './corgiFull.css';

const CF = () => (
    <div className="corgiFull">
        
        <img className="img" src={corgifull} />
        <Speaking className="speaking" />
    </div>
)

export default CF
