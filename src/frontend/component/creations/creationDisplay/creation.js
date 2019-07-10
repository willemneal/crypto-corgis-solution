import React from 'react';
import DogGreen from './dog/dog';
import DogBlue from './dog/dog2';
import DogOrange from './dog/dog3';
import Dialogue from './dialogue/dialogue';
import './creation.css';

const COLOR = {
    green: "rgba(237,241,133,0.50)",
    purple: "rgba(130,117,175,0.50)",
    blue: "rgba(150,228,221,0.50)",
}

const Creation = () => {
    return (
        <div>
            <h2 className="title">Latest Creations</h2>
            <div className="creation">
                <div style={{
                    backgroundColor: COLOR.green,
                    borderRadius: "10px",
                    width: "30%",
                    height: "15%",
                    padding: "2%",
                    margin: "1%"
                }}>
                    <Dialogue className="dialogue" des1="Does this color make " des2="me look fat?" />
                    <DogGreen />
                    <p className="author">J. Corg</p>
                    <p className="address">Created by <span className="orange">@jstutzman</span></p>
                </div>
                <div style={{
                    backgroundColor: COLOR.purple,
                    borderRadius: "10px",
                    width: "30%",
                    height: "15%",
                    padding: "2%",
                    margin: "1%"
                }}>
                    <Dialogue className="dialogue" des1="I like you!" />
                    <DogBlue />
                    <p className="author">Squatty Blu Doggy</p>
                    <p className="address">Created by <span className="orange">@icerove</span></p>
                </div>
                <div style={{
                    backgroundColor: COLOR.blue,
                    borderRadius: "10px",
                    width: "30%",
                    height: "15%",
                    padding: "2%",
                    margin: "1%"
                }}>
                    <Dialogue className="dialogue" des1="I like a lot of things " des2="subjects and things about things..." />
                    <DogOrange />
                    <p className="author">Long John</p>
                    <p className="address">Created by <span className="orange">@loaded.potato</span></p>
                </div>
            </div>
        </div>
    )
}

export default Creation