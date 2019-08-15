import React, { Component } from 'react';

import Corgi from '../creation/creationSingle/creationsingle';
import Modal from '../common/Modal/modal';
import Transfer from '../tokens/transfer';
// handlechange dna contract
class SendPage extends Component {
    state = {
        loading: false
    }
    render() {
        return (
            this.state.loading
                ? <Modal>
                    <h3>Send a Corgi</h3>
                    <div>
                        <Corgi />
                        <p>Corgi Name</p>
                        <hr />
                        <p>RARITY</p>
                        <p>LOGO</p>
                    </div>
                    <Transfer />
                </Modal>
                    : "loading"
        )
    }
}

export default SendPage
