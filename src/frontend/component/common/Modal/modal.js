import React, { Component } from 'react';

import './modal.css';
import Backdrop from '../Backdrop/backDrop';

class Modal extends Component {
    render () {
        let { backDrop, backdropCancelHandler, children} = this.props
        return (
            <div>
                <Backdrop backDrop={backDrop} clicked={backdropCancelHandler} />
                <div
                    className="Modal"
                    style={{
                        transform: backDrop ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: backDrop ? '1' : '0'
                    }}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Modal;