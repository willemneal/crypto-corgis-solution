import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Account extends Component {
    componentDidMount(){
        console.log("account sucess!")
    }
    render(){
        return(
            <div>This is Account Page!</div>
        )
    }
}

export default Account