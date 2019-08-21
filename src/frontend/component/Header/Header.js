import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ImageLoader from '../common/ImageLoad/ImageLoad';
import Button from '../common/Button/Button';
import Nav from './Nav/nav'

import logo from '../../../assets/logo.png';
import Spinner from '../common/spinner/spinner';


import './Header.css';

class Header extends Component {
    render() {
        let { login, load, requestSignIn, requestSignOut ,accountId, length, clicked } = this.props
        let show = <Spinner />
        if (login && load) {
            show = <Nav  
                        accountName={accountId} 
                        number={length} 
                        requestSignOut={requestSignOut}
                        login={login} 
                         />
        } else if (load) {
            show = <Button description="Get Started" action={requestSignIn}/>
        }
        return (
            <div className="header">
                <NavLink exact to="/" style={{textAlign: "left"}} onClick={clicked}><ImageLoader image={logo} style={{ minWidth:"100px", width: "70%", height: "100%" }} /></NavLink>
                {show}
            </div>
        )
    }

}

export default Header
