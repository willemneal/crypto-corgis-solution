import React, { Component } from 'react';
import Tokens from '../component/tokens/corgi';
import Logo from '../component/logo/logo';
import Poster from '../component/poster/poster';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="App">
                <Logo />
                <Poster contract={this.props.contract} wallet={this.props.wallet} />
            </div>
        )
    }
}

