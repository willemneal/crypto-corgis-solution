import React, { Component } from 'react';

import ImageLoader from '../common/ImageLoad/ImageLoad';
import Button from '../common/Button/Button';

import logo from '../../../assets/logo.png';
import Account from './accountSVG/accountSVG';


import './Header.css';

//state login
//dispatch change login true false

class Header extends Component {
    render() {
        return (
            <div className="header">
                <ImageLoader image={logo} style={{ width: "25%", height: "100%" }} />
                {this.props.login ? <Account accountName="loaded.potato" number="5" /> : <Button description="Get Started" />}
            </div>
        )
    }

}

export default Header
