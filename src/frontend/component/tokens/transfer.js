import React from 'react';
import Button from '../common/Button/Button';
{/* <TransferCorgi
  trigger={this.props.trigger} signin
  contract={this.props.contract}
  corgiDNA={this.props.dna}
  handleChange={this.handleChange} /> */}


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
    let { handleChange, contract,dna } = this.props
    let { recipient } = this.state
    e.preventDefault();
    handleChange({ name: "loading", value: true })
    console.log(dna, recipient);
    contract.transfer({
      to: recipient,
      tokenId: dna
    })
      .then(res => {
        handleChange({name:"loading", value: false})
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    let { handleChange } = this.props
    let { recipient, message } = this.state
    return (
      <div>
        <lable>To:</lable>
        <input id="recipient"
          type="text"
          placeholder="Corgi recipient"
          onChange={this.handleNameChange}
          value={recipient} />
        {/* <lable>Message</lable>
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

export default TransferCorgi