import React, { Component } from 'react';

import Button from '../../common/Button/Button'
import ImageLoader from '../../common/ImageLoad/ImageLoad'

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
                    <h2 className="text1">Create your own </h2>
                    <h2 className="text1">one-of-the-kind</h2>
                    <h2 className="text1">Corgi today</h2>
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