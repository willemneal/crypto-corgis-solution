import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Corgi from '../creation/creationSingle/creationsingle';
import Modal from '../common/Modal/modal';
// handlechange dna contract
class SharePage extends Component {
    
    render() {
        let { name, backgroundColor, color, sausage, des, back, backCancelHandler,location } = this.props
        let address = "http://www.cryptocorgis.com" + location.pathname + location.hash
        return (
            <Modal show={back} CancelHandler={backCancelHandler}>
                <div>
                    <h3>Share a Corgi</h3>
                    <div>
                        <Corgi
                            backgroundColor={backgroundColor}
                            color={color}
                            sausage={sausage}
                            des={des} />
                        <p>{name}<span style={{ color: "orange", marginLeft: "10em" }}>RARE</span></p>
                        <hr />
                    </div>
                    <div>
                        <p style={{backgroundColor:"white", borderRadius: "5px", padding: "4px 2px", wordWrap: "break-word"}}>{address}</p>
                        <span><button style={{backgroundColor: "#4b4f53", color: "#999999", borderRadius: "5px", padding: "4px 2px"}}>Copy Link</button></span>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default withRouter(SharePage)
