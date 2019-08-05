import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ImageLoader from '../common/ImageLoad/ImageLoad';
import Button from '../common/Button/Button';

import logo from '../../../assets/logo.png';
import Account from './accountSVG/accountSVG';


import './Header.css';

class Header extends Component {    
    clickToAccountHandler = () => {
        this.props.history.push('/account')
    }

    clickToGenerationHandler = () => {
        this.props.history.push('./generation')
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        let { login, load, requestSignIn, accountId, length } = this.props
        let show = "loading"
        if (login && load) {
            show = <Account  
                        accountName={accountId} 
                        number={length}  
                        toAccount={this.clickToAccountHandler}
                        toGeneration={this.clickToGenerationHandler} />
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
