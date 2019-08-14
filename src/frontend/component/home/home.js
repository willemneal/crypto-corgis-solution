import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import Poster from './poster/poster'
import Creations from './creations/creations'

import './home.css';
class Home extends Component {
    render() {
        let { login, load, requestSignIn, front, accountId } = this.props
        if (login && load && !front) { return <Redirect to="/account" /> }
        return (
            <div className="home">
                <Poster requestSignIn={requestSignIn} load={load} front={front} accountId={accountId} />
                <Creations />
            </div>
        )
    }
}

export default Home