import React, { Component } from 'react';

import './modal.css';
import Backdrop from '../Backdrop/backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log('[modal.js] WillUpdate');
    }

    render () {
        let { show, modalClosed, children} = this.props
        return (
            <div>
                <Backdrop show={show} clicked={modalClosed} />
                <div
                    className="Modal"
                    style={{
                        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: show ? '1' : '0'
                    }}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Modal;