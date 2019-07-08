import React, { Component } from 'react';
import Tokens from '../component/tokens/corgi.jsx';
import Logo from '../component/logo/logo.jsx';
import Poster from '../component/poster/poster.jsx';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="App">
                {/* <Logo /> */}
                <Poster />
                <Tokens contract={this.props.contract} wallet={this.props.wallet}/>
            </div>
        )
    }
}

