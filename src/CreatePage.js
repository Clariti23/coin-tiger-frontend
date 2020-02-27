import React from "react";
import BasketForm from "./BasketForm";
import CoinGeckoBrand from "./CoinGeckoBrand";
import Copyright from "./Copyright";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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
      <Box textAlign="center" fontStyle="oblique">
        <Typography align="center" fontStyle="oblique">
          You must be signed in to create a basket
        </Typography>
      </Box>
      <Box mt={8}>
        <CoinGeckoBrand />
        <Copyright />
      </Box>
    </div>
  );
}
