import React, { Container } from 'react';

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
    }
    
  }
}

export default CoinContainer;