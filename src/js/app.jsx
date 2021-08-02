/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../css/styles.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: undefined,
      rate: undefined,
      term: undefined,
      output: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(e) {
    // console.log(e.target);
    // console.log(e.target.name);
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  calculate(s) {
    // eslint-disable-next-line prefer-destructuring
    const balance = this.state.balance;
    const rateInPercent = this.state.rate;
    const monthRate = ((rateInPercent / 100) / 12);
    const term = this.state.term;
    const monthsToPay = (term * 12);
    let output = this.state.output;

    const numerator = (monthRate * Math.pow((1 + monthRate), monthsToPay));
    const denominator = ((Math.pow((1 + monthRate), monthsToPay)) - 1);
    let newOutput = (balance * (numerator / denominator)).toFixed(2);
    newOutput = `Your monthly payment will be $${newOutput}.`
  

    this.setState({
      output: newOutput
    });

    console.log(newOutput);
  }

  render() {
    return (
      <div className='container'>
        <div className='row col-md-12 text-center pt-5'>
          <h1>Mortgage Calculator</h1>
        </div>

        <div className='row pt-5'>
          <div className='col-md-4'>
            <input
              type='number'
              name='balance'
              placeholder='Balance'
              value={ this.state.balance }
              onChange={ this.handleChange }
              id='balance'
            />
          </div>
          <div className='col-md-4'>
            <input
              type='number'
              name='rate'
              placeholder='Rate (in percentage)'
              value={ this.state.rate }
              onChange={ this.handleChange }
              step='0.01'
              id='rate'
              className='row'
            />
          </div>
          <div id='selectEl' className='col-md-4'>
            <label htmlFor='term' className='row'>Term Length (in years)</label>
            <select name='term' className='row' onChange={ this.handleChange }>
              <option value='15'>15</option>
              <option value='30'>30</option>
            </select>
          </div>
        </div> 
        <div className='row col-md-12 text-center'>
          <button name='submit' className='btn btn-primary' type='button' onClick={ () => this.calculate() }>Calculate</button>
        </div>
        <div className='row col-md-12 text-center pt-5'>
          <div name='output' value={ this.state.output } id='output' className='row'>{this.state.output}</div>
        </div>
      </div>
    );
  }
}
