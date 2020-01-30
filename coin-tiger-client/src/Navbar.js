import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import { NavLink } from 'react-router-dom';

// import { createMuiTheme } from '@material-ui/core/styles';
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavBar() {
  const classes = useStyles();

  //   let handleClick = () => {
  //     props.handleLogout();
  //   };
  //   let handleIconClick = () => {
  //     props.handleCardClick();
  //   };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton onClick={() => handleIconClick()}>
            <HomeOutlinedIcon />
          </IconButton> */}
          {/* <Typography variant="h6" className={classes.title}>
            {props.currentName}
          </Typography> */}
          <Typography variant="h6" className={classes.title}>
            Coin Tiger
          </Typography>

          {/* {props.loggedIn === true ? (
            <Button onClick={() => handleClick()} color="inherit">
              Logout
            </Button>
          ) : (
            <div></div>
          )} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
