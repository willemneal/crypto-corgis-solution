import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import Poster from './poster/poster'
import Creations from './creations/creations'
import Spinner from '../common/spinner/spinner';

import './home.css';
class Home extends Component {
    render() {
        let { login, load, requestSignIn, front, accountId,length } = this.props
        if (!load) {return <Spinner />}
        if (login && load && !front) { return <Redirect to="/account" /> }
        if (length === 0) {return <Redirect to="/generation"/>}
        return (
            <div className="home">
                <Poster 
                    requestSignIn={requestSignIn} 
                    load={load} 
                    login={login} 
                    front={front} 
                    accountId={accountId} />
                <Creations />
            </div>
        )
    }
}

export default Home