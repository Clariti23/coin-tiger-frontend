import React, { Component } from "react";
import Basket from "./Basket";

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
        {this.state.baskets.map(basket => (
          <Basket key={basket.id} basket={basket}></Basket>
        ))}
      </div>
    );
  }
}
