import React from 'react';
import logo from '../../../assets/logo.png';
import ImageLoader from '../ImageLoad/ImageLoad';

import './logo.css';

const Logo = () => (
    <div className="Logo">
        <ImageLoader image={logo} />
    </div>
)

export default Logo
