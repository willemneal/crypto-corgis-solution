import React, { Component } from 'react';

import Poster from './poster/poster'
import Creations from './creations/creations'

import './home.css';
class Home extends Component {
    render() {
        let { login, load, requestSignIn, history } = this.props
        if (login && load) { history.push("/account") }
        return (
            <div className="home">
                <Poster requestSignIn={requestSignIn} load={load} />
                <Creations />
            </div>
        )
    }
}

export default Home