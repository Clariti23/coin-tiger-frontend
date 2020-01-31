import React from "react";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
    </Router>
  );
};

export default App;
