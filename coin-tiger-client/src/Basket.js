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
    coinOnePrice: 0,
    coinTwoPrice: 0,
    coinThreePrice: 0,
    coinFourPrice: 0,
    coinFivePrice: 0,
    marketValue: 0
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
      () => this.currentBasketValue()
    );
  };

  //   const initialBasketValue = this.props.basket.initialBasketValue
  currentBasketValue = () => {
    // console.log(typeof this.state.coinOnePrice);
    // console.log(typeof this.coinOneQ);
    let valueOne = this.state.coinOnePrice * this.coinOneQ;
    let valueTwo = this.state.coinTwoPrice * this.coinTwoQ;
    // let valueThree = this.state.coinThreePrice * this.coinThreeQ;
    // let valueFour = this.state.coinFourPrice * this.coinFourQ;
    // let valueFive = this.state.coinFivePrice * this.coinFiveQ;

    let currentBasketValue = valueOne + valueTwo;
    this.setState({
      marketValue: currentBasketValue
    });
  };

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
          Initial Value: {`$${this.props.basket.initialBasketValue}`}
          <br></br>
          Current Market Value: {`$${this.state.marketValue}`}
        </p>
      </div>
    );
  }
}
