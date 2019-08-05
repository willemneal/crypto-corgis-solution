import React, {Component} from 'react';
import Button from '../common/Button/Button';
import 'account.css';

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