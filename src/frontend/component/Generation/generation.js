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
    }

    render() {
        return (
            <div className="generation">
                <h1 className="head">Create a Corgi</h1>
                <div className="content">
                    <Info handleChange={this.handleChange} {...this.state} />
                    <Screen {...this.state} />
                </div>
            </div>
        )
    }
}

export default Generation