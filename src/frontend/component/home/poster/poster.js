import React, { Component } from 'react';

import Button from '../../Button/Button'
import ImageLoader from '../../ImageLoad/ImageLoad'

import corgiFull from '../../../../assets/corgi-full.png'
import "./poster.css";

class Poster extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="backup">
                <div className="textPoster" >
                    <p className="text1">Create your own one-of-the-kind Corgi today</p>
                    <p className="text2">create, collect, send, or trade</p>
                    <Button description="Login with NEAR" />
                </div>
                <div className="imagePoster">
                    <ImageLoader image={corgiFull} style={{width:'100%'}} />
                </div>
            </div>
        )
    }
}

export default Poster