import React from "react";
import WatchlistContainer from "./WatchlistContainer";
import BasketContainer from "./BasketContainer";
import Grid from "@material-ui/core/Grid";
import CoinGeckoBrand from "./CoinGeckoBrand";
import Copyright from "./Copyright";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function BasketPage(props) {
  return props.loggedIn === true ? (
    <div id="basketpageDiv" display="flex" flexWrap="wrap">
      <Grid container="true" display="flex" flexWrap="wrap" xs={12}>
        <Grid item xs={3}>
          <WatchlistContainer
            display="flex"
            currentUserId={props.currentUserId}
          ></WatchlistContainer>
        </Grid>
        <Grid item xs={9}>
          <BasketContainer></BasketContainer>
        </Grid>
      </Grid>
      <Box mt={8}>
        <CoinGeckoBrand />
        <Copyright />
      </Box>
    </div>
  ) : (
    <div>
      <Box textAlign="center" fontStyle="oblique">
        <Typography align="center" fontStyle="oblique">
          You must be singed in to view your watchlist and track your baskets
        </Typography>
      </Box>
      <Box mt={8}>
        <CoinGeckoBrand />
        <Copyright />
      </Box>
    </div>
  );
}
