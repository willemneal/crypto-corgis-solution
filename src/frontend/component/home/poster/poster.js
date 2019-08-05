import React, { Component } from 'react';

import Button from '../../common/Button/Button'
import ImageLoader from '../../common/ImageLoad/ImageLoad'

import corgiFull from '../../../../assets/corgi-full.png'
import "./poster.css";

class Poster extends Component {

    render(){
        let {requestSignIn,load} = this.props
        return (
            <div className="backup">
                <div className="textPoster" >
                    <p className="text1">Create your own </p>
                    <p className="text1">one-of-the-kind</p>
                    <p className="text1">Corgi today</p>
                    <p className="text2">create, collect, send, or trade</p>
                    {load ? <Button description="Login with NEAR" action={requestSignIn}/> : "loading"}
                </div>
                <div className="imagePoster">
                    <ImageLoader image={corgiFull} style={{width:'100%'}} />
                </div>
            </div>
        )
    }
}

export default Poster