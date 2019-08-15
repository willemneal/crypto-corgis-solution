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
        let { contract, dna, handleChange, backgroundColor, color, sausage, des, backDrop, backdropCancelHandler } = this.props
        return (
            this.state.loading
                ? <Modal backDrop={backDrop} backdropCancelHandler={backdropCancelHandler}>
                    <h3>Send a Corgi</h3>
                    <div>
                        <Corgi
                            backgroundColor={backgroundColor}
                            color={color}
                            sausage={sausage}
                            des={des} />
                        <p>Corgi Name</p>
                        <hr />
                        <p>RARITY</p>
                        <p>LOGO</p>
                    </div>
                    <Transfer contract={contract} dna={dna} handleChange={handleChange} />
                </Modal>
                : "loading"
        )
    }
}

export default SendPage
