import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
    let { loadingHandler, contract, dna, history, handleChange } = this.props
    let { recipient } = this.state
    e.preventDefault();
    loadingHandler()
    contract.transfer({
      to: recipient,
      tokenId: dna,
      message
    })
      .then(response => {
        console.log("[transfer.js] corgis", response)
        let newCorgis = response
        handleChange({ name: "corgis", value: newCorgis })
        loadingHandler()
        history.push("/account")
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    let { recipient, message } = this.state
    let style = {
      display: "block",
      margin: "auto",
      background: "#FFFFFF",
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.50)",
      borderRadius: "5px",
      color: "#4A4F54",
      letterSpacing: "0",
      textAlign:"start",
      marginBottom: "5px"
    }
    return (
      <div>
        <form onSubmit={this.transferCorgi}>
          <label style={{ display: "block" }}>To:</label>
          <input
            required
            id="recipient"
            type="text"
            placeholder="Corgi recipient"
            onChange={this.handleNameChange}
            value={recipient}
            style={style}
          />
          <label style={{ display: "block" }}>Message:</label>
          <input
            id=""
            type="text"
            placeholder="(Optional)Best wish to your friend with corgi!"
            onChange={this.handleMessageChange}
            value={message}
            style={style}
          />
          <Button description="Transfer" style={{ display: "block" }} />
        </form>
      </div>
    )
  }
}

export default withRouter(TransferCorgi)