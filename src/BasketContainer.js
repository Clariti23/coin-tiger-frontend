import React, { Component } from "react";
import Basket from "./Basket";
import Grid from "@material-ui/core/Grid";

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
        <div>
          <h4>My Baskets</h4>
          <Grid container="true" display="flex" flexWrap="wrap" xs={12}>
            {this.state.baskets.map(basket => (
              <Grid item xs={12} sm={6}>
                <Basket key={basket.id} basket={basket}></Basket>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}
