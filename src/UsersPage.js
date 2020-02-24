import React from "react";
import Button from "@material-ui/core/Button";
import Signin from "./Signin";
import Signup from "./Signup";

export default function UsersPage(props) {
  console.log(props.loggedIn);

  const handleClick = () => {
    props.handleUserLogOut();
  };

  return (
    <div>
      {localStorage.getItem("JWT").length > 1 ? (
        props.loggedIn === true ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClick}
            display="flex"
            justify-content="center"
            align-items="center"
          >
            Sign Out{" "}
          </Button>
        ) : (
          <div>
            <Signin handleUserLogIn={props.handleUserLogIn}></Signin>
          </div>
        )
      ) : (
        <div>
          <Signup handleUserLogIn={props.handleUserLogIn}></Signup>
        </div>
      )}
    </div>
  );
}
