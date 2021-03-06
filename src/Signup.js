import React from "react";
import { useState } from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import SignIn from "./Signin";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  //API STRINGS
  // const LOCAL_TEST_API = "http://localhost:3000";
  const PRODUCTION_API = "https://gentle-wildwood-07928.herokuapp.com";
  const API = PRODUCTION_API + "/users";

  let handleSubmit = event => {
    event.preventDefault();
    console.log(`${name}, ${email}, ${password}`);
    let user = { name: name, email: email, password: password };

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data => props.handleUserLogIn(data));
    alert(
      `Welcome to Coin Tiger, ${name}! Now that you've made an account, feel free to add coins to your watchlist, or monitor a portfolio by creating a basket!`
    );
  };

  let handleNameChange = event => {
    setName(event.target.value);
  };
  let handleEmailChange = event => {
    setEmail(event.target.value);
  };
  let handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          onSubmit={event => handleSubmit(event)}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={event => {
                  handleNameChange(event);
                }}
                autoComplete="name"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={event => {
                  handleEmailChange(event);
                }}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={event => {
                  handlePasswordChange(event);
                }}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          {/* <Grid container justify="flex-end"> */}
          {/* <Grid item>
              <Link
                to="/signin"
                variant="body2"
                render={() => {
                  SignIn();
                }}
              >
                Returning User? Sign in
              </Link> */}
          {/* </Grid> */}
          {/* </Grid> */}
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
