import React from 'react';

import './backdrop.css';

const backdrop = ({backDrop, clicked}) => (
    backDrop ? <div className="Backdrop" onClick={clicked}></div> : null
);

export default backdrop;