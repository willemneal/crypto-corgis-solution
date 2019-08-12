import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Poster from './poster/poster'
import Creations from './creations/creations'

import './home.css';
class Home extends Component {
    render() {
        let { login, load, requestSignIn } = this.props
        if (login && load) { return <Redirect to="/account" /> }
        return (
            <div className="home">
                <Poster requestSignIn={requestSignIn} load={load} />
                <Creations />
            </div>
        )
    }
}

export default Home