import React, { useState } from "react";
import NavBar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUserLogIn = user => {
    if (user.jwt) {
      let userID = user.user.user.id;
      setCurrentUser(user.user.user.name);
      setCurrentUserId(userID);
      setLoggedIn(true);
      localStorage.setItem("name", user.user.user.name);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("UID", userID);
      localStorage.setItem("JWT", user.jwt);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleUserLogOut = () => {
    setCurrentUser(null);
    setCurrentUserId(null);
    setLoggedIn(false);
    localStorage.setItem("name", null);
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("UID", null);
  };

  return (
    <Router>
      <div>
        <NavBar
          handleUserLogIn={handleUserLogIn}
          handleUserLogOut={handleUserLogOut}
          currentUser={currentUser}
          currentUserId={currentUserId}
          loggedIn={loggedIn}
        />
      </div>
    </Router>
  );
};

export default App;
