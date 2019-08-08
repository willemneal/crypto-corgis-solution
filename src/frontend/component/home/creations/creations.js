import React from 'react';
import Creation from '../../creation/creation';
import SampleH from '../../common/sample/sample_h';
import './creations.css'

// fake creation
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

let corgiArray = [{
    backgroundColor: BACKGROUNDCOLOR.green,
    color: COLOR.green,
    sausage: "20px",
    corgiName: "J.Corg",
    accountName: "jstutz",
    des: "Does this color make me look fat?"
}, {
    backgroundColor: BACKGROUNDCOLOR.purple,
    color: COLOR.blue,
    sausage: "10px",
    corgiName: "Squatty Blu Doggy",
    accountName: "icerove",
    des: "I like a lot of things subjects and things about things..."
}, {
    backgroundColor: BACKGROUNDCOLOR.blue,
    color: COLOR.orange,
    sausage: "50px",
    corgiName: "Squatty Blu Doggy",
    accountName: "icerove",
    des: "We know what we are, but know not what we may be"
},{
    backgroundColor: BACKGROUNDCOLOR.blue,
    color: COLOR.orange,
    sausage: "50px",
    corgiName: "Squatty Blu Doggy",
    accountName: "icerove",
    des: "test,test,test"
}]

const Creations = () => {
    let Corgis = corgiArray.map(corgi => {
        return (<Creation
            backgroundColor={corgi.backgroundColor}
            color={corgi.color}
            sausage={corgi.sausage}
            corgiName={corgi.corgiName}
            accountName={corgi.accountName}
            des={corgi.des} />)
    })
    return (
        <div className="creations">
            <div className="pop">
                <h2 className="title">Latest Creations</h2>
                <SampleH className="sample"/>
            </div>
            <div style={{width: "100%"}}>{Corgis}</div> 
            
        </div>)
}

export default Creations

// Future Work to create real Corgi display