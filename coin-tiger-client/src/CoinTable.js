import React, { Component } from "react";
import EnhancedTable from "./EnhancedTable";

export default class CoinTable extends Component {
  CoinGecko = require("coingecko-api");
  CoinGeckoClient = new this.CoinGecko();

  state = {
    coins: []
  };

  rows = [];

  async componentDidMount() {
    await this.CoinGeckoClient.coins
      .markets({
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
        sparkline: false,
        price_change_percentage: "24h"
      })
      .then(data => this.setState({ coins: data.data }, () => this.organize()));
  }

  async organize(x) {
    this.state.coins.map(coin => {
      this.rows.push([
        coin.name,
        coin.symbol.toUpperCase(),
        Number.parseFloat(coin.current_price),
        Number.parseFloat(coin.price_change_percentage_24h),
        Number.parseInt(coin.market_cap)
      ]);
    });
  }

  render() {
    return (
      <div>
        <EnhancedTable rows={this.rows}></EnhancedTable>
      </div>
    );
  }
}
