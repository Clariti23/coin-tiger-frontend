import React from "react";
// import { useState } from "react";
import NavBar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = props => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = e => {
    console.log("app.js hit!");
  };

  return (
    <Router>
      <div>
        <NavBar handleSubmit={handleSubmit} />
      </div>
    </Router>
  );
};

export default App;
