import React , {Component} from 'react'

import Poster from './poster/poster'
import Creations from './creations/creations'

import './home.css';
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="home">
                <Poster />
                <Creations />
            </div>
        )
    }
}

export default Home