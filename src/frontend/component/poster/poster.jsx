import React, { Component} from 'react';

export default class Poster extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="backup">
                <div className="text-poster" >Create</div>
                <div className="image-poster">Corgi</div>
            </div>
        )
    }
}