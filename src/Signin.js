import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CoinGeckoBrand from "./CoinGeckoBrand";
import Copyright from "./Copyright";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleEmailChange = event => {
    setEmail(event.target.value);
  };
  let handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const API = "https://cointiger-backend.herokuapp.com/login";

  let handleSubmit = event => {
    event.preventDefault();
    console.log(`${email}, ${password}`);

    let user = {
      email: email,
      password: password
    };

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data => props.handleLogIn(data));
    alert(`Welcome back to CoinTiger, ${email}!`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          onSubmit={event => handleSubmit(event)}
          className={classes.form}
          noValidate
        >
          <TextField
            onChange={event => {
              handleEmailChange(event);
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={event => {
              handlePasswordChange(event);
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          {/* <Grid container>
            {/* <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> 
            </Grid>*/}
        </form>
      </div>
      <Box mt={8}>
        <CoinGeckoBrand />
        <Copyright />
      </Box>
    </Container>
  );
}
