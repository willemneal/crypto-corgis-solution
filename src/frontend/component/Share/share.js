import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CreationSingleSmall } from '../creation/creationSingle/creationsingle';
import Modal from '../common/Modal/modal';
// handlechange dna contract
class SharePage extends Component {
    render() {
        let { name, backgroundColor, color, sausage, rate, quote, back, backCancelHandler, location } = this.props
        let address = "https://corgis.nearprotocol.com" + location.pathname + location.hash
        return (
            <Modal show={back} CancelHandler={backCancelHandler}>
                <div style={{ width: "100%", height: "100%" }}>
                    <h3>Share a Corgi</h3>
                    <div>
                        <div style={{ overflowX: "scroll", width: "100%", height: "90%" }}>
                            <CreationSingleSmall
                                backgroundColor={backgroundColor}
                                color={color}
                                sausage={sausage}
                                quote={quote} />
                        </div>
                        <p style={{ margin: "0" }}>{name}</p>
                        <span style={{ color: "orange", fontSize: "0.7rem" }}>{rate}</span>
                        <hr />
                    </div>
                    <div style={{marginBottom:"10px"}}>
                        <p style={{ backgroundColor: "white", borderRadius: "5px", padding: "4px 2px", wordWrap: "break-word" }}>{address}</p>

                        <CopyToClipboard text={address}
                            onCopy={() => this.setState({ copied: true })}>
                            <button style={{ backgroundColor: "#4b4f53", color: "#999999", borderRadius: "5px", padding: "4px 2px", cursor: "alias" }}>Copy Link</button>

                        </CopyToClipboard>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default withRouter(SharePage)

// shareOnTwitter = () => {
//     // found on https://gist.github.com/McKinneyDigital/2884508#file-share-twitter-js
//     var url = "twitter.com";
//     let text = `${this.state.author} - ${this.state.text}`
//     window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
//   }