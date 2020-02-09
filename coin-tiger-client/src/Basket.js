import React, { Component } from "react";

export default class Basket extends Component {
  coinOneId = this.props.basket.coinOneId;
  coinTwoId = this.props.basket.coinTwoId;
  coinThreeId = this.props.basket.coinThreeId;
  coinFourId = this.props.basket.coinFourId;
  coinFiveId = this.props.basket.coinFiveId;

  coinOneQ = this.props.basket.coin_1_q;
  coinTwoQ = this.props.basket.coin_2_q;
  coinThreeQ = this.props.basket.coin_3_q;
  coinFourQ = this.props.basket.coin_4_q;
  coinFiveQ = this.props.basket.coin_5_q;

  state = {
    coinOnePrice: null,
    coinTwoPrice: null,
    coinThreePrice: null,
    coinFourPrice: null,
    coinFivePrice: null
  };

  CoinGecko = require("coingecko-api");
  CoinGeckoClient = new this.CoinGecko();

  async componentDidMount() {
    console.log(this.props);

    await this.CoinGeckoClient.simple
      .price({
        ids: [
          this.coinOneId,
          this.coinTwoId,
          this.coinThreeId,
          this.coinFourId,
          this.coinFiveId
        ],
        vs_currency: "usd"
      })
      .then(data => this.setPrices(data));
  }

  setPrices = data => {
    console.log(data);
    let usdVals = Object.values(data.data);

    let prices = [];
    usdVals.forEach(row => prices.push(row.usd));

    this.setState(
      {
        coinOnePrice: prices[0],
        coinTwoPrice: prices[1],
        coinThreePrice: prices[2],
        coinFourPrice: prices[3],
        coinFivePrice: prices[4]
      },
      () => console.log(this.state)
    );
  };

  //   const initialBasketValue = this.props.basket.initialBasketValue
  //   const currentBasketValue =

  //   const basketPerformance = (((CurrentValue - InitialBbasketValue)/InitialBbasketValue)*100)

  render() {
    return (
      <div>
        <p>
          Basket Number: {this.props.basket.id}
          <br></br>
          Basket Name: {this.props.basket.name}
          <br></br>
          Basket Component 1: {this.props.basket.coinOne}
          <br></br>
          Basket Component 2: {this.props.basket.coinTwo}
          <br></br>
          Date of Basket Creation: {this.props.basket.indexDate}
          <br></br>
          Initial Basket Value: {`$${this.props.basket.initialBasketValue}`}
          <br></br>
        </p>
      </div>
    );
  }
}
