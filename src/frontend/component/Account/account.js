import React, {Component} from 'react';
import Button from '../common/Button/Button';
import CreationAccount from '../creation/creationAccount/creationAccount'
// import 'account.css';

//fake display
const BACKGROUNDCOLOR = {
    green: "rgba(237,241,133,0.50)",
    purple: "rgba(130,117,175,0.50)",
    blue: "rgba(150,228,221,0.50)",
}

const COLOR = {
    green: "rgb(90, 179, 121)",
    blue: "rgb(81, 169, 220)",
    orange: "rgb(224, 100, 58)"
}

const RATE = {
    common: "COMMON",
    uncommon: "UNCOMMON",
    rare: "RARE",
    veryRare: "VERYRARE"
}

let corgiArray = [{
    backColor: BACKGROUNDCOLOR.green,
    color: COLOR.green,
    sausage: "20px",
    corgiName: "J.Corg",
    accountName: "jstutz",
    des: "Does this color make me look fat?",
    rate: RATE.uncommon
}, {
    backColor: BACKGROUNDCOLOR.purple,
    color: COLOR.blue,
    sausage: "10px",
    corgiName: "Squatty Blu Doggy",
    accountName: "icerove",
    des: "I like a lot of things subjects and things about things...",
    rate: RATE.common
}, {
    backColor: BACKGROUNDCOLOR.blue,
    color: COLOR.orange,
    sausage: "50px",
    corgiName: "Squatty Blu Doggy",
    accountName: "icerove",
    des: "We know what we are, but know not what we may be",
    rate: RATE.rare
}]
class Account extends Component {
    componentDidMount(){
        console.log("account sucess!")

    }
    
    render(){
        let Corgis = corgiArray.map(corgi => {
            return (<CreationAccount
                backColor={corgi.backColor}
                color={corgi.color}
                sausage={corgi.sausage}
                corgiName={corgi.corgiName}
                des={corgi.des}
                rate={corgi.rate} />)
        })
        return(
            <div>
                <div>
                    <h1 className="head">Your Pack</h1>
                    <p>Create,collect,send or trade</p>
                </div>
                <div>{Corgis}</div>
            </div>
        )
    }
}

export default Account