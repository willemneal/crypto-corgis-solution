import React from 'react'

import Logo from '../component/logo/logo';
import Poster from '../component/poster/poster';
import Creation from '../component/creations/creationDisplay/creation';
import Footer from '../component/footer/footer';

import './home.css';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="home">
                <Poster contract={this.props.contract} wallet={this.props.wallet} />
                <Creation />
            </div>
        )
    }
}