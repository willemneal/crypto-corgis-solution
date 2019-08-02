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


    handleChange = ({ name, value }) => {
        this.setState({
            [name]: value
        })
        console.log("[generation.js] color, ", this.state.color)
        console.log("[generation.js] backcolor, ", this.state.backgroundColor)
        console.log("[generation.js] name, ", this.state.newCorgiName)
    }

    render() {
        return (
            <div className="generation">
                <h2 className="head">Create a Corgi</h2>
                <div className="screen">
                    <Info className="info" handleChange={this.handleChange} {...this.state} />
                    <Screen className="scr" {...this.state} />
                </div>
            </div>
        )
    }
}

export default Generation