import React, { useState } from "react";
import NavBar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  let handleUserSignup = user => {
    if (user.jwt) {
      let userID = user.user.user.id;
      setCurrentUser(user.user.user.name);
      setCurrentUserId(userID);
      setLoggedIn(true);
      localStorage.setItem("name", user.user.user.name);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("UID", userID);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Router>
      <div>
        <NavBar
          handleUserSignup={handleUserSignup}
          currentUser={currentUser}
          currentUserId={currentUserId}
        />
      </div>
    </Router>
  );
};

export default App;
