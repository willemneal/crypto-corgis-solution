import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Spinner from '../common/spinner/spinner';
import Info from './info/info'
import Screen from './screen/screen'

import './generation.css'

class Generation extends Component {
    render() {
        let {login, load} = this.props
        if (!load) {return <Spinner />}
        if (load && !login) {return <Redirect to="/" />}
        return (
            <div className="generation">
                <h1 className="head">Create a Corgi</h1>
                <div className="content">
                    <Info {...this.props} />
                    <Screen {...this.props} />
                </div>
            </div>
        )
    }
}

export default Generation