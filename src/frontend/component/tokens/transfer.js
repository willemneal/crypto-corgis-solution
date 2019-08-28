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
    let { loadingHandler, contract, dna, history, handleChange, accountId } = this.props
    let { recipient, message } = this.state
    e.preventDefault();
    loadingHandler()
    contract.transfer({
      to: recipient,
      tokenId: dna,
      message,
      sender: accountId
    })
      .then(response => {
        console.log("[transfer.js] corgis", response.len)
        let newCorgis = response.corgis
        handleChange({ name: "corgis", value: newCorgis })
        loadingHandler()
        history.push("/account")
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    let { recipient, message } = this.state
    let styleSender = {
      display: "inline",
      marginLeft: "5px",
      background: "#FFFFFF",
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.50)",
      borderRadius: "5px",
      color: "#4A4F54",
      letterSpacing: "0",
      textAlign: "start",
      width: "50%"
    }
    let styleMes = {
      display: "inline",
      marginLeft: "5px",
      background: "#FFFFFF",
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.50)",
      borderRadius: "5px",
      color: "#4A4F54",
      letterSpacing: "0",
      textAlign: "start",
      width: "80%"
    }
    return (
      <div>
        <form onSubmit={this.transferCorgi}>
          <div style={{ textAlign: "left", marginBottom:"3px" }}>
            <label>To: </label>
            <input
              required
              id="recipient"
              type="text"
              placeholder="Corgi recipient"
              onChange={this.handleNameChange}
              value={recipient}
              style={styleSender}
            />
          </div>
          <div style={{ textAlign: "left"}}>
            <label>Text: </label>
            <textarea
              id=""
              type="text"
              placeholder="(Optional)Best wish to your friend!"
              onChange={this.handleMessageChange}
              value={message}
              style={styleMes}
              maxLength="140"
            />
          </div>
          <div style={{marginTop:"5px", marginBottom: "10px"}}>
            <Button description="Send" style={{ display: "block" }} />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(TransferCorgi)