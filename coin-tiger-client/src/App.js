import React from "react";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CoinTable from "./CoinTable";
const App = props => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/coins" component={CoinTable} />
        {/* <Route exact path="/baskets" component={Baskets} />
        <Route exact path="/basket/new" component={BasketForm} /> */}{" "}
        */}
      </div>
    </Router>
  );
};

export default App;
