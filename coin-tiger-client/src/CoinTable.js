import React, { Component } from "react";

export default class CoinTable extends Component {
  CoinGecko = require("coingecko-api");
  CoinGeckoClient = new this.CoinGecko();

  state = {
    coins: []
  };

  componentDidMount() {
    this.CoinGeckoClient.coins
      .markets({
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
        sparkline: false,
        price_change_percentage: "24h"
      })
      .then(data => this.setState({ coins: data.data }));
  }

  render() {
    return (
      <div>
        <h3>COIN TABLE GOES HERE</h3>
      </div>
    );
  }
}
