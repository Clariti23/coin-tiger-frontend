import React from "react";
import Button from "@material-ui/core/Button";
import Signin from "./Signin";
// import DummyLogin from "./DummyLogin";
// import Signup from "./Signup";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function UsersPage(props) {
  console.log(props.loggedIn);

  const handleClick = () => {
    props.handleUserLogOut();
  };

  return props.loggedIn === true ? (
    <div display="flex" justify-content="center" align="center">
      <Box mt="8">
        <Typography variant="body1" align="center">
          {
            "You are now logged in! You can add coins to your watchlist, view your baskets, or create a new basket."
          }
        </Typography>

        <Button variant="contained" color="secondary" onClick={handleClick}>
          Sign Out{" "}
        </Button>
      </Box>
    </div>
  ) : (
    <div>
      <Signin handleUserLogIn={props.handleUserLogIn}></Signin>
    </div>
  );
}
