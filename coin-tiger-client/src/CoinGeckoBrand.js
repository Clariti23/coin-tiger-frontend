import React from "react";
import CoinGeckoLogo from "./CoinGeckoLogo.png";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function CoinGeckoBrand() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Powered by "}
      <Link
        color="inherit"
        href="https://www.coingecko.com/en/api"
        underline="hover"
      >
        CoinGecko{" "}
      </Link>{" "}
      <img
        src={CoinGeckoLogo}
        alt="CoinGecko logo"
        width="15"
        height="15"
      ></img>
    </Typography>
  );
}
