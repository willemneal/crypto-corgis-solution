import React from 'react';

import ImageLoader from '../ImageLoad/ImageLoad';
import Button from '../Button/Button';

import logo from '../../../assets/logo.png';
import Account from './accountSVG/';


import './logo.css';

//state login
//dispatch change login true false

const Logo = () => {
    return (
        <div className="Logo">
            <ImageLoader image={logo} style={{ width: "20%" }} />
            <Account />
            <Button description="Get Started" />

        </div>
    )

}

export default Logo
