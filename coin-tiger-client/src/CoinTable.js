import React, { Component } from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import EnhancedTable from "./EnhancedTable";

export default class CoinTable extends Component {
  CoinGecko = require("coingecko-api");
  CoinGeckoClient = new this.CoinGecko();

  state = {
    coins: []
  };
  rows = [];

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
      .then(data => this.setState({ coins: data.data }, () => this.organize()));
  }

  organize(x) {
    this.state.coins.map(coin => {
      this.rows.push([
        coin.name,
        coin.symbol,
        Number.parseFloat(coin.current_price),
        Number.parseFloat(coin.price_change_percentage_24h),
        Number.parseInt(coin.market_cap)
      ]);
    });
  }

  headCells = [
    { id: "name", numeric: false, disablePadding: true, label: "Coin" },
    { id: "symbol", numeric: false, disablePadding: false, label: "Symbol" },
    { id: "price", numeric: true, disablePadding: false, label: "Price" },
    { id: "change", numeric: true, disablePadding: false, label: "24h" },
    {
      id: "marketCap",
      numeric: true,
      disablePadding: false,
      label: "MarketCap"
    }
  ];

  useToolbarStyles = makeStyles(theme => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85)
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark
          },
    title: {
      flex: "1 1 100%"
    }
  }));

  useStyles = makeStyles(theme => ({
    root: {
      width: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    }
  }));

  render() {
    return (
      <div>
        <EnhancedTable rows={this.rows}></EnhancedTable>
      </div>
    );
  }
}
