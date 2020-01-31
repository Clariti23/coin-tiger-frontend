import React from "react";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Signup";
const App = props => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="signup" component={Signup} />
      </div>
    </Router>
  );
};

export default App;
