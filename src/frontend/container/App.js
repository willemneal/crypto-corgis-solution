import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Logo from '../component/logo/logo';
import Footer from '../component/footer/footer';

import './App.css';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="App">
                <Router>
                    <Logo />
                    <Switch>
                    {/* <Route path="/" component={} /> */}
                    {/* <Route path="/" component={} /> */}
                    </Switch>
                    <Footer />
                </Router>
                
            </div>
        )
    }
}

