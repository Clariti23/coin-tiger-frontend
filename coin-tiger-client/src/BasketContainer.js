import React, { Component } from "react";

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
      .then(data => this.basketsFilter(data));
  }

  basketsFilter = data => {
    let userBasket = data.filter(b => b.user_id === parseInt(this.state.UID));
    this.setState({ basket: userBasket }, () => console.log);
  };

  render() {
    return (
      <div>
        <p>Basket Container</p>
      </div>
    );
  }
}
