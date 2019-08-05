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
        let { login, load, requestSignIn } = this.props
        let show = "loading"
        if (login && load) {
            show = <Account accountName="loaded.potato" number="5" />
        } else if (load) {
            show = <Button description="Get Started" action={requestSignIn} />
        }
        return (
            <div className="header">
                <ImageLoader image={logo} style={{ width: "25%", height: "100%" }} />
                {show}
            </div>
        )
    }

}

export default Header
