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

  setPrices = async data => {
    const a = await data.data[this.coinOneId].usd;
    const b =
      data.data[this.coinTwoId] !== undefined
        ? data.data[this.coinTwoId].usd
        : "";
    const c =
      data.data[this.coinThreeId] !== undefined
        ? data.data[this.coinThreeId].usd
        : "";
    const d =
      data.data[this.coinFourId] !== undefined
        ? data.data[this.coinFourId].usd
        : "";
    const e =
      data.data[this.coinFiveId] !== undefined
        ? data.data[this.coinFiveId].usd
        : "";

    this.setState(
      {
        coinOnePrice: a,
        coinTwoPrice: b,
        coinThreePrice: c,
        coinFourPrice: d,
        coinFivePrice: e
      },
      () => this.currentBasketValue()
    );
  };

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

    let percentageReturn =
      100 * ((currentBasketValue - initialBasketValue) / initialBasketValue);

    let performance = percentageReturn.toString().slice(0, 5);
    return parseFloat(performance);
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
          Basket Component 3: {this.props.basket.coinThree}
          <br></br>
          Basket Component 4: {this.props.basket.coinFour}
          <br></br>
          Basket Component 5: {this.props.basket.coinFive}
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
