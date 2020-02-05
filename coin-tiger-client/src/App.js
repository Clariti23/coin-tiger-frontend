import React, { useState } from "react";
import NavBar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState("");

  let handleUserSignup = user => {
    if (user.jwt) {
      setCurrentUserId(user.user.user.id);
      console.log(user.user.user.id);
      setCurrentUser(user.user.user.name);
      localStorage.setItem("name", user.user.user.name);
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
