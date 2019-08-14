import React, { Component } from 'react';

import Button from '../../common/Button/Button';
import ImageLoader from '../../common/ImageLoad/ImageLoad';

import corgiFull from '../../../../assets/corgi-full.png';
import "./poster.css";

class Poster extends Component {
    componentDidMount(){
        console.log("[post.js] front", this.props.front)
    }
    render(){
        let {requestSignIn,load, front, accountId} = this.props
        let showButton = "loading";
        if (load && !front) {showButton = <Button description="Login with NEAR" action={requestSignIn}/> }
        else if (load && front) {showButton = <div className="show">Logged In {accountId}</div>}
        return (
            <div className="backup">
                <div className="textPoster" >
                    <p className="text1">Create your own </p>
                    <p className="text1">one-of-the-kind</p>
                    <p className="text1">Corgi today</p>
                    <p className="text2">create, collect, send, or trade</p>
                    {showButton}
                </div>
                <div className="imagePoster">
                    <ImageLoader image={corgiFull} style={{width:'100%'}} />
                </div>
            </div>
        )
    }
}

export default Poster