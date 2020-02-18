import React, { Component } from "react";
import Basket from "./Basket";
import CoinGeckoLogo from "./CoinGeckoLogo.png";
import { Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";

export default class BasketContainer extends Component {
  state = {
    baskets: [],
    UID: null
  };
  BASKET_API = "http://localhost:3000/baskets";

  componentDidMount() {
    const UID = localStorage.getItem("UID");
    this.setState({ UID });

    fetch(this.BASKET_API)
      .then(response => response.json())
      .then(data => this.basketsFilter(data));
  }

  basketsFilter = data => {
    let userBaskets = data.filter(b => b.user_id === parseInt(this.state.UID));
    this.setState({ baskets: userBaskets }, () =>
      console.log(this.state.baskets)
    );
  };

  render() {
    return (
      <div>
        <Grid container="true" xs={6} md={6}>
          <h2>My Baskets</h2>
          {this.state.baskets.map(basket => (
            <Basket key={basket.id} basket={basket}></Basket>
          ))}
          <Link href="https://www.coingecko.com/en/api" underline="hover">
            Powered by CoinGecko API
            <img
              src={CoinGeckoLogo}
              alt="CoinGecko logo"
              width="25"
              height="25"
            ></img>
          </Link>
        </Grid>
      </div>
    );
  }
}
