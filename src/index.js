import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const font = "'Roboto', sans-serif";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff8f00"
    },
    secondary: {
      main: "#ffcc80"
    }
  },
  fontFamily: font
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
