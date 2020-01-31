import React, { Component } from "react";
import CoinRow from "./CoinRow";
export default class Coin extends Component {
  render() {
    return (
      <div>
        {this.props.coins.map(coin => (
          <CoinRow key={coin.id} coin={coin} />
        ))}
      </div>
    );
  }
}
