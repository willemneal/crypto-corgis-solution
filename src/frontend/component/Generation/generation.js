import React, { Component } from 'react';

import Info from './info/info'

import './generation.css'

class Generation extends Component {
    state = {
        color: "#EF4F24",
        backgroundColor: "#84D0B5",
        newCorgiName: ''
    };


    handleChange = (event,{ name, value } ) => {
        this.setState({
            [name]: value
         })
        console.log("[generation.js] color, ", this.state.color)
        console.log("[generation.js] name, ", this.state.newCorgiName)
    }

    render() {
        return (
            <div className="generation">
                <h2 className="head">Create a Corgi</h2>
                <Info handleChange={this.handleChange} {...this.state} />
            </div>
        )
    }
}

export default Generation