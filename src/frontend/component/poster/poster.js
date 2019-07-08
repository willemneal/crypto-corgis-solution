import React, { Component} from 'react';
import Tokens from '../tokens/corgi.jsx';
import CI from './corgiFull/corgiFull';
import "./poster.css";

export default class Poster extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="backup">
                <div className="text-poster" >
                    <p className="text1">Create your own one-of-the-kind Corgi today</p>
                    <p className="text2">create, collect, send, or trade</p>
                    <Tokens contract={this.props.contract} wallet={this.props.wallet}/>
                </div>
                <div className="image-poster">
                    <CI />
                </div>
            </div>
        )
    }
}