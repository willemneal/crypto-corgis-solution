import React, { Component } from 'react';

import Corgi from '../creation/creationSingle/creationsingle';
import Modal from '../common/Modal/modal';
import Transfer from '../tokens/transfer';
// handlechange dna contract
class SendPage extends Component {
    state = {
        loading: false
    }

    loadingHandler = () => {
        let state = this.state.loading
        this.setState({ loading: !state })
    }

    render() {
        let { contract, name, dna, backgroundColor, color, sausage, rate, quote, backDrop, backdropCancelHandler, handleChange } = this.props
        return (
            <Modal show={backDrop} CancelHandler={backdropCancelHandler}>
                {!this.state.loading
                    ? <div>
                        <h3>Send a Corgi</h3>
                        <div>
                            <div style={{overflowX:"scroll"}}>
                                <Corgi
                                    backgroundColor={backgroundColor}
                                    color={color}
                                    sausage={sausage}
                                    quote={quote} />
                            </div>
                            <p>{name}<span style={{ color: "orange", marginLeft: "5rem" }}>{rate}</span></p>
                            <hr />
                            {/* <p>LOGO</p> */}
                        </div>
                        <Transfer
                            contract={contract}
                            dna={dna}
                            loadingHandler={this.loadingHandler}
                            handleChange={handleChange} />
                    </div>
                    : "loading"}
            </Modal>
        )
    }
}

export default SendPage
