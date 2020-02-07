import React, { Component } from "react";

export default class BasketContainer extends Component {
  state = {
    data: [],
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
    let userBaskets = data.filter(
      basket => basket.user_id === parseInt(this.state.UID)
    );

    console.log("userBaskets", userBaskets);
  };

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
