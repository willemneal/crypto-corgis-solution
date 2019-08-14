import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Info from './info/info'
import Screen from './screen/screen'

import './generation.css'

class Generation extends Component {
    render() {
        let {login} = this.props
        if(!login) {return <Redirect to="/" />}
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