import React from 'react';
import '../css/styles.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 0,
      output: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  // calculate({ this.state.balance }, { this.state.rate }, { this.state.term }) {
  //   const balance = this.state.balance;
  //   const rate = this.state.rate;
  //   const term = this.state.term;
  //   const output = this.state.output;

  //   this.setState({
  //     output: (balance * ((rate(Math.pow((1 + rate), term)))
  //      / ((Math.pow((1 + rate), term)) - 1)))
  //   });
  //   console.log(output);
  // }

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Mortgage Calculator</h1>
        <input
          type='number'
          name='balance'
          value={ this.state.balance }
          onChange={ this.handleChange }
          id='balance'
          className='row'
        />
        <input
          type='number'
          name='rate'
          value={ this.state.rate }
          onChange={ this.handleChange }
          step='0.01'
          id='rate'
          className='row'
        />
        <select name='term' className='row'>
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <button name='submit' className='row' onClick={ this.calculate }>Calculate</button>
        <div name='output' value={ this.state.output } id='output' className='row' />
      </div>
    );
  }
}
