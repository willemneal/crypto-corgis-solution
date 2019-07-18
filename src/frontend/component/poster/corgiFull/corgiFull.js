import React from 'react';
import corgifull from '../../../../assets/corgi-full.png';
import Speaking from './speakingSVG/speakingSVG';
import './corgiFull.css';

const CorgiPosterImage = () => (
    <div className="corgiFull">
        <div className="svg">
            <Speaking className="speaking" />
        </div>
        <img style={{
            width: '100%',
            height: '100%'
            }} src={corgifull} />

    </div>
)

export default CorgiPosterImage
