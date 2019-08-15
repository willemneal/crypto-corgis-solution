import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Button from '../common/Button/Button';

//message needs to be added
class TransferCorgi extends Component {
  state = {
    recipient: "",
    message: ""
  }

  handleNameChange = (event) => {
    let value = event.target.value;
    this.setState({ recipient: value })
  }

  handleMessageChange = (event) => {
    let value = event.target.value;
    this.setState({ message: value })
  }

  transferCorgi = (e) => {
    let { loadingHandler, contract, dna, history, accountId } = this.props
    let { recipient } = this.state
    e.preventDefault();
    loadingHandler()
    contract.transfer({
      to: recipient,
      tokenId: dna
    })
      .then(res => {
        console.log("[transfer,js] response", res)
        loadingHandler()
        history.push("/account")
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    let { recipient, message } = this.state
    return (
      <div>
        <label>To:</label>
        <input
          required
          id="recipient"
          type="text"
          placeholder="Corgi recipient"
          onChange={this.handleNameChange}
          value={recipient} />
        {/* <label>Message</label>
        <input
          type="text"
          placeholder="(Optional)Best wish to your friend  with corgi"
          onChange={this.handleMessageChange}
          value={message}
        /> */}
        <Button action={this.transferCorgi} description="Transfer" />
      </div>
    )
  }
}

export default withRouter(TransferCorgi)