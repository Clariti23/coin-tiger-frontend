import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";

export default function UsersPage(props) {
  return (
    <div>
      <Signin handleLogIn={props.handleLogIn}></Signin>
      <Signup handleLogIn={props.handleLogIn}></Signup>
    </div>
  );
}
