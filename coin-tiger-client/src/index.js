import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import { createMuiTheme } from "@material-ui/core/styles";

// const theme = () => {
//   return createMuiTheme({
//     spacing: 4,
//     palette: {
//       common: {
//         black: "rgba(0, 0, 0, 1)",
//         white: "#fff"
//       },
//       background: {
//         paper: "#fff",
//         default: "rgba(200, 193, 193, 1)"
//       },
//       primary: {
//         light: "rgba(118, 111, 105, 1)",
//         main: "rgba(65, 68, 77, 1)",
//         dark: "rgba(135, 133, 131, 1)",
//         contrastText: "#fff"
//       },
//       secondary: {
//         light: "rgba(240, 168, 48, 1)",
//         main: "rgba(233, 112, 14, 1)",
//         dark: "rgba(247, 158, 10, 1)",
//         contrastText: "#fff"
//       },
//       error: {
//         light: "#e57373",
//         main: "#f44336",
//         dark: "#d32f2f",
//         contrastText: "#fff"
//       },
//       text: {
//         primary: "rgba(0, 0, 0, 0.87)",
//         secondary: "rgba(0, 0, 0, 0.54)",
//         disabled: "rgba(0, 0, 0, 0.38)",
//         hint: "rgba(0, 0, 0, 0.38)"
//       }
//     }
//   });
// };

ReactDOM.render(<App />, document.getElementById("root"));
