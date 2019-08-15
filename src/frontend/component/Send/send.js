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
        this.setState({loading: !state})
    }

    render() {
        let { contract,name, dna, backgroundColor, color, sausage, des, backDrop, backdropCancelHandler,accountId } = this.props
        return (
            <Modal backDrop={backDrop} backdropCancelHandler={backdropCancelHandler}>
                {!this.state.loading
                    ? <div>
                        <h3>Send a Corgi</h3>
                        <div>
                            <Corgi
                                backgroundColor={backgroundColor}
                                color={color}
                                sausage={sausage}
                                des={des} />
                            <p>{name}<span style={{color: "orange",marginLeft: "10em"}}>RARE</span></p>
                            <hr />
                            {/* <p>LOGO</p> */}
                        </div>
                        <Transfer contract={contract} dna={dna} loadingHandler={this.loadingHandler} accountId={accountId}/>
                    </div>
                    : "loading"}
            </Modal>
        )
    }
}

export default SendPage
