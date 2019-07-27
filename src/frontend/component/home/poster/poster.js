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
                    <h3 className="text1">Create your own </h3>
                    <h3 className="text1">one-of-the-kind</h3>
                    <h3 className="text1">Corgi today</h3>
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