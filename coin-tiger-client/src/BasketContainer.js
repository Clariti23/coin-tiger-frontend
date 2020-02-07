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
      .then(data => this.basketCalculate(data));
  }

  basketCalculate = data => {
    let userBasket = data.filter(b => b.user_id === parseInt(this.state.UID));
    this.setState({ basket: userBasket }, () => console.log(this.state));

    // //Store Coin Components
    // let coinOneSymbol = this.state.basket.coinOne;
    // let coinTwoSymbol = this.state.basket.coinTwo;
    // let coinThreeSymbol = this.state.basket.coinThree;
    // let coinFourSymbol = this.state.basket.coinFour;
    // let coinFiveSymbol = this.state.basket.coinFive;

    // //Initial quantites of each coin
    // let coinOneQ = this.state.basket.coin_1_q;
    // let coinTwoQ = this.state.basket.coin_2_q;
    // let coinThreeQ = this.state.basket.coin_3_q;
    // let coinFourQ = this.state.basket.coin_4_q;
    // let coinFiveQ = this.state.basket.coin_5_q;

    // let basketValue = this.state.
  };

  render() {
    return (
      <div>
        <p>Basket Container</p>
      </div>
    );
  }
}
