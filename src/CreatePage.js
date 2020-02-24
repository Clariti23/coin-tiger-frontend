import React from "react";
import BasketForm from "./BasketForm";
import CoinGeckoBrand from "./CoinGeckoBrand";
import Copyright from "./Copyright";
import Box from "@material-ui/core/Box";

export default function CreatePage(props) {
  console.log("props", props);
  return props.loggedIn === true ? (
    <div>
      <BasketForm></BasketForm>
    </div>
  ) : (
    <div
      display="flex"
      flex-direction="column"
      justify-content="center"
      align-items="center"
      height="100vh"
    >
      <h2> You must be signed in to create a basket</h2>
      <Box mt={8}>
        <CoinGeckoBrand />
        <Copyright />
      </Box>
    </div>
  );
}
