import React, { Component } from 'react';

import Info from './info/info'
import Screen from './screen/screen'

import './generation.css'

class Generation extends Component {
    state = {
        color: "#EF4F24",
        backgroundColor: "#84D0B5",
        newCorgiName: ''
    };

    render() {
        let {color, backgroundColor, newCorgiName, quote, handleChange, contract, corgis} = this.props
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