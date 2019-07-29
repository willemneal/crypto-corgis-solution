import React from 'react'
import Button from '../../common/Button/Button'
{/* <TransferCorgi
  trigger={this.props.trigger}
  contract={this.props.contract}
  corgiDNA={this.props.dna}
  handleChange={this.handleChange} /> */}

class TransferCorgi extends Component {
    constructor(props) {
      super(props);
      this.state = {
        recipient: "",
        loading: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.transferCorgi = this.transferCorgi.bind(this);
    }
  
    transferCorgi(e) {
      e.preventDefault();
      this.setState({ loading: true });
      console.log(this.props.corgiDNA, this.state.recipient);
      this.props.contract.transfer({
        to: this.state.recipient,
        tokenId: this.props.corgiDNA
      })
        .then(res => {
          this.props.trigger();
          this.setState({ loading: false });
        }).catch(err => {
          console.log(err);
        })
    }
  
    handleChange(e) {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  
    render() {
      return (
        <div>
          {!this.state.loading ?
            <React.Fragment>
              <input id="recipient"
                type="text"
                placeholder="Corgi recipient"
                onChange={this.handleChange}
                value={this.state.recipient} />
              <Button action={this.transferCorgi} description="Transfer" />
            </React.Fragment>
            : "Loading..."}
        </div>
      )
    }
  }

  export default TransferCorgi