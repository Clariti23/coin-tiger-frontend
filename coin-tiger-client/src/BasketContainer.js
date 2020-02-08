import React, { Component } from "react";
import Basket from "./Basket";
export default class BasketContainer extends Component {
  state = {
    basket: [],
    UID: null
  };
  BASKET_API = "http://localhost:3000/baskets";

  componentDidMount() {
    const UID = localStorage.getItem("UID");
    this.setState({ UID });

    fetch(this.BASKET_API)
      .then(response => response.json())
      .then(data => this.basketCalculate(data));
  }

  basketCalculate = data => {
    let userBasket = data.filter(b => b.user_id === parseInt(this.state.UID));
    this.setState({ basket: userBasket }, () => console.log(this.state.basket));
  };

  render() {
    return (
      <div>
        <Basket basket={this.state.basket}></Basket>
      </div>
    );
  }
}
