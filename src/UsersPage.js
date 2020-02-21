import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";

export default function UsersPage(props) {
  return (
    <div>
      <Signin handleUserLogIn={props.handleUserLogIn}></Signin>
      <Signup handleUserLogIn={props.handleUserLogIn}></Signup>
    </div>
  );
}
