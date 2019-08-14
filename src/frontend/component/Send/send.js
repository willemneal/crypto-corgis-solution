import React from 'react';
import { Link } from 'react-router-dom';

import Corgi from '../creation/creationSingle/creationsingle'
import Modal from '../common/Modal/modal';

const SendPage = () => {
    return (
        <Modal>
            <h3>Send a Corgi</h3>
            <div>
                <Corgi />
                <p>Corgi Name</p>
                <hr />
                <p>RARITY</p>
                <p>LOGO</p>
            </div>
            <div>
                <form>
                    <lable>To: </lable>
                    <input type="text" />
                    <label>Message:</label>
                    <input type="text" />
                </form>
                
            </div>
        </Modal>
    )
}

export default SendPage
