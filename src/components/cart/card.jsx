import React from 'react';
import Cards from 'react-credit-cards';
import {
  FormControl,
  Typography,
  Input,
  Button,
} from '@material-ui/core';
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('🚀 ~ file: card.jsx ~ line 19 ~ PaymentForm ~ value', value);

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm"  >
        <FormControl style={{marginRight:'60px'}}>
          <Typography>
            <h2>Billing Address</h2>
          </Typography>
          <Input
            placeholder="Full Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Input
            placeholder="Address"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Input
            placeholder="City"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

        </FormControl>
        <FormControl>
          <Typography>
            <h2>Payment Details</h2>
          </Typography>
          <Input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Input
            type="tel"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Input
            type="date"
            name="expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Button onClick={()=>{
            alert('Thank You')
          }} variant='contained' color='primary'>Place Your Order</Button>
        </FormControl>
        <Cards style={{margin:'0'}}
          cvc={this.state.cvc}
          expiry={this.state.expiry.split('-').reverse().splice(1, 2).join('')}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
      </div>
    );
  }
}
