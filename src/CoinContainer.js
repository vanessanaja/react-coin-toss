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
      currentCoint: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0
    };
    this.handleclick = this.handleclick.bind(this);
  }
  flipCoin(){

  }
  handleclick(e){
    this.flipCoin()
  }
  render(){
    return (
      <div className="CoinContainer">
        <h2>Flip the Coin!</h2>
        <p>Out of {this.state.numFlips} flips there have been {this.state.numHeads} heads and {this.state.numTails} tails.</p>
        <button onClick={this.handleClick}>Flip Coin</button>
      </div>
    )
  }
}

export default CoinContainer;