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
  ///For some reason, the coinId is BTC but is getting assigned the Ethereum price, and vice versa.
  //This was the last bug.
  setPrices = data => {
    let usdVals = Object.values(data.data);

    let prices = [];
    usdVals.forEach(row => prices.push(row.usd));

    this.setState(
      {
        coinOnePrice: prices[1],
        coinTwoPrice: prices[0],
        coinThreePrice: prices[2],
        coinFourPrice: prices[3],
        coinFivePrice: prices[4]
      },
      () => this.currentBasketValue()
    );
  };

  //need to check for type errors here

  currentBasketValue = () => {
    let valueOne = parseFloat(this.state.coinOnePrice * this.coinOneQ);
    let valueTwo = parseFloat(this.state.coinTwoPrice * this.coinTwoQ);
    let valueThree = parseFloat(this.state.coinThreePrice * this.coinThreeQ);
    let valueFour = parseFloat(this.state.coinFourPrice * this.coinFourQ);
    let valueFive = parseFloat(this.state.coinFivePrice * this.coinFiveQ);

    let vals = [valueOne, valueTwo, valueThree, valueFour, valueFive];
    let currentBasketValue = 0;

    for (let i = 0; i < vals.length; i++) {
      if (vals[i] >= 0) {
        currentBasketValue += vals[i];
      }
    }

    console.log(currentBasketValue);

    this.setState(
      {
        marketValue: currentBasketValue
      },
      () => console.log(this.state)
    );
  };

  calculatePerformance = () => {
    let initialBasketValue = this.props.basket.initialBasketValue;
    let currentBasketValue = this.state.marketValue;

    return (
      100 * ((currentBasketValue - initialBasketValue) / initialBasketValue)
    );
  };

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
          <br></br>
          Performance to Date: {`${this.calculatePerformance()}%`}
        </p>
      </div>
    );
  }
}
