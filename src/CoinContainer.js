import React, { Component } from 'react';

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
  }
  render(){
    return (
      <div className="CoinContainer">
        <h2>Flip the Coin!</h2>
        <p>Out of {this.state.numFlips} flips there have been {this.state.numHeads} heads and {this.state.numTails} tails.</p>
      </div>
    )
  }
}

export default CoinContainer;