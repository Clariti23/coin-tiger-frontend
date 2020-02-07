import React, { Component } from "react";

export default class BasketContainer extends Component {
  BASKET_API = "http://localhost:3000/baskets";

  componentDidMount() {
    fetch(this.BASKET_API)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>My Baskets</h1>
        <h3>BASKET NAME:</h3>
        <h3>INDEXING DATE: </h3>
        <h4>COMPONENT 1:</h4>
        <h4>COMPONENT 1 QUANTITY:</h4>
        <h4>COMPONENT 2:</h4>
        <h4>COMPONENT 2 QUANTITY:</h4>
      </div>
    );
  }
}
