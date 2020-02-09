import React, { Component } from "react";

export default class Basket extends Component {
  componentDidMount() {
    console.log("props ", this.props);
  }

  // this.propsall.forEach(
  //  b =>
  // Basket name
  //   b.name
  // Coin Components
  // let coinOneSymbol = b.coinOne;
  // let coinTwoSymbol = b.coinTwo;
  // let coinThreeSymbol = b.coinThree;
  // let coinFourSymbol = b.coinFour;
  // let coinFiveSymbol = b.coinFive;

  // //Initial quantites of each coin
  // let coinOneQ = b.coin_1_q;
  // let coinTwoQ = b.coin_2_q;
  // let coinThreeQ = b.coin_3_q;
  // let coinFourQ = b.coin_4_q;
  // let coinFiveQ = b.coin_5_q;
  // );
  // let basketValue = this.state.

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
        </p>
      </div>
    );
  }
}
