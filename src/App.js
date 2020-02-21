import React, { useState } from "react";
import NavBar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  let handleUserLogIn = user => {
    console.log(user);
    // if (user) {
    //   let userID = user.user.user.id;
    //   setCurrentUser(user.user.user.name);
    //   setCurrentUserId(userID);
    //   setLoggedIn(true);
    //   localStorage.setItem("name", user.user.user.name);
    //   localStorage.setItem("isLoggedIn", true);
    //   localStorage.setItem("UID", userID);
    // } else {
    //   alert("Invalid username or password");
    // }
  };

  let handleLogout = () => {
    setCurrentUser(null);
    setCurrentUserId(null);
    setLoggedIn(false);
    localStorage.setItem("name", "");
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("UID", null);
  };

  return (
    <Router>
      <div>
        <NavBar
          handleUserLogIn={handleUserLogIn}
          currentUser={currentUser}
          currentUserId={currentUserId}
          loggedIn={loggedIn}
          handleLogout={handleLogout}
        />
      </div>
    </Router>
  );
};

export default App;
