import React, { Component } from "react";
import EnhancedTable from "./EnhancedTable";

export default class CoinTable extends Component {
  CoinGecko = require("coingecko-api");
  CoinGeckoClient = new this.CoinGecko();

  state = {
    rows: [],
    pageUp: false
  };

  async componentDidMount() {
    await this.CoinGeckoClient.coins
      .markets({
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 70,
        page: 1,
        sparkline: false,
        price_change_percentage: "24h"
      })
      .then(data => this.organize(data));
  }

  organize(all) {
    all.data.forEach(coin => {
      this.state.rows.push([
        coin.name,
        coin.symbol.toUpperCase(),
        Number.parseFloat(coin.current_price),
        Number.parseFloat(coin.price_change_percentage_24h),
        Number.parseInt(coin.market_cap),
        coin.id
      ]);
      this.setState({ pageUp: true });
    });
  }

  render() {
    return (
      <div>
        <EnhancedTable
          rows={this.state.rows}
          currentUserId={this.props.currentUserId}
        ></EnhancedTable>
      </div>
    );
  }
}
