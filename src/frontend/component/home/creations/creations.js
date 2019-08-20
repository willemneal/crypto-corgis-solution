import React from 'react';
import Creation from '../../creation/creationHome';

// fake creation
const BACKGROUNDCOLOR = {
    green: "rgba(237,241,133,0.50)",
    purple: "rgba(130,117,175,0.50)",
    blue: "rgba(150,228,221,0.50)",
    pink: "#ffb8c6"
}

const COLOR = {
    green: "rgb(90, 179, 121)",
    blue: "rgb(81, 169, 220)",
    orange: "rgb(224, 100, 58)",
    gray: "#004739"
}

let corgiArray = [{
    backgroundColor: BACKGROUNDCOLOR.green,
    color: COLOR.green,
    sausage: "20",
    corgiName: "J.Corg",
    owner: "jstutz",
    quote: "Does this color make me look fat?"
}, {
    backgroundColor: BACKGROUNDCOLOR.purple,
    color: COLOR.blue,
    sausage: "0",
    corgiName: "Squatty Blu Doggy",
    owner: "icerove",
    quote: "I like a lot of things subjects and things about things..."
}, {
    backgroundColor: BACKGROUNDCOLOR.blue,
    color: COLOR.orange,
    sausage: "50",
    corgiName: "Squatty Blu Doggy",
    owner: "potato",
    quote: "We know what we are, but know not what we may be"
}, {
    backgroundColor: BACKGROUNDCOLOR.pink,
    color: COLOR.gray,
    sausage: "200",
    corgiName: "Potato",
    owner: "icerove",
    quote: "Do you want me? I am rare corgi and have a cool name!"
}]

const Creations = () => {
    let Corgis = corgiArray.map(corgi => {
        return (<Creation
            key={corgi.quote}
            backgroundColor={corgi.backgroundColor}
            color={corgi.color}
            sausage={corgi.sausage}
            corgiName={corgi.corgiName}
            owner={corgi.owner}
            quote={corgi.quote} />)
    })
    return (
        <div className="creations">
            {Corgis}
        </div>)
}

export default Creations

// Future Work to create real Corgi display