import React, { useState } from "react";
import NavBar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import CoinTable from "./CoinTable";

const App = props => {
  const [currentUser, setCurrentUser] = useState(null);

  let handleUserSignup = user => {
    if (user.jwt) {
      setCurrentUser(user.user.user.name);
      localStorage.setItem("name", user.user.user.name);
    }
  };

  console.log(currentUser);
  return (
    <Router>
      <div>
        <NavBar handleUserSignup={handleUserSignup} currentUser={currentUser} />
      </div>
    </Router>
  );
};

export default App;
