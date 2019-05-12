import React, { Component } from 'react';
import { choice } from './helpers';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg" }, 
      {side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  constructor(props){
    super(props);
    this.state = {
      currCoin: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin(){
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return{
        ...st,
        currCoin: newCoin,
        numFlips: st.numFlips + 1,
        numHeads: st.numHeads + (newCoin.side === 'heads' ? 1 : 0),
        numTails: st.numTails + (newCoin.side === 'tails' ? 1 : 0)
      };
    });
  }
  handleClick(e){
    this.flipCoin();
  }
  render(){
    return (
      <div className="CoinContainer">
        <h2>Flip the Coin!</h2>
        <button onClick={this.handleClick}>Flip Coin</button>
        <p>Out of {this.state.numFlips} flips there have been {this.state.numHeads} heads and {this.state.numTails} tails.</p>
      </div>
    )
  }
}

export default CoinContainer;