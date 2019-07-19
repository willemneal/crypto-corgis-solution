import React from 'react';
import logo from '../../../assets/logo.png';
import ImageLoader from '../component/ImageLoad/ImageLoad';

import logo from '../../assets/logo.png';
import './logo.css';

const Logo = () => (
    <div className="Logo">
        <ImageLoader image={logo} />
    </div>
)

export default Logo
