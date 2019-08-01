import React , {Component} from 'react';
import { Redirect } from 'react-router-dom';

import Poster from './poster/poster'
import Creations from './creations/creations'

import './home.css';
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        // if (true) { return <Redirect to="/account" /> }
        return (
            <div className="home">
                <Poster />
                <Creations />
            </div>
        )
    }
}

export default Home