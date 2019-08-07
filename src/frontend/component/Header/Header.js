import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ImageLoader from '../common/ImageLoad/ImageLoad';
import Button from '../common/Button/Button';
import Nav from './Nav/nav'

import logo from '../../../assets/logo.png';



import './Header.css';

class Header extends Component {
    render() {
        let { login, load, requestSignIn, accountId, length } = this.props
        let show = "loading"
        if (login && load) {
            show = <Nav  
                        accountName={accountId} 
                        number={length}  
                         />
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

export default withRouter(Header)
