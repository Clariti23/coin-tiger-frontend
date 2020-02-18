import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
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

  classes = makeStyles({
    card: {
      minWidth: "50%"
    }
  });

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
      <Card className={this.classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h4" component="h4">
            Basket Name: {this.props.basket.name}
          </Typography>
          <Typography variant="h5" component="h5">
            Performance to Date: {`${this.calculatePerformance()}%`}
          </Typography>
          <Typography variant="p" component="p">
            Date of Basket Creation: {this.props.basket.indexDate}
          </Typography>
          <Typography variant="p" component="p">
            Current Market Value: {`$${this.state.marketValue}`}
          </Typography>
          <Typography variant="p" component="p">
            Initial Value: {`$${this.props.basket.initialBasketValue}`}
          </Typography>
          <Typography variant="p" component="p">
            Basket Component 1: {this.props.basket.coinOne}
          </Typography>
          <Typography variant="p" component="p">
            Basket Component 2: {this.props.basket.coinTwo}
          </Typography>
          <Typography variant="p" component="p">
            Basket Component 3: {this.props.basket.coinThree}
          </Typography>
          <Typography variant="p" component="p">
            Basket Component 4: {this.props.basket.coinFour}
          </Typography>
          <Typography variant="p" component="p">
            {" "}
            Basket Component 5: {this.props.basket.coinFive}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
