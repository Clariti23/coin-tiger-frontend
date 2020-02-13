import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// import DeleteIcon from "@material-ui/icons/Delete";

export default class WatchlistContainer extends Component {
  state = {
    watchList: [],
    name: "",
    UID: null
  };

  API = "http://localhost:3000/favorites";

  componentDidMount() {
    const name = localStorage.getItem("name");
    const UID = localStorage.getItem("UID");
    this.setState({ name, UID });
    console.log(localStorage);
    fetch(this.API)
      .then(res => res.json())
      .then(data => this.filterFavorites(data));
  }

  filterFavorites = data => {
    let accumulator = [];
    let userFavorites = data.filter(
      favorite => favorite.user_id === parseInt(this.state.UID)
    );
    userFavorites.map(element => accumulator.push(element.symbol));
    this.setState(
      {
        watchList: accumulator
      },
      () => console.log(this.state)
    );
  };

  // deleteFromWatchlist = event => {
  //   console.log(event.target.);
  // fetch(API, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json"
  //   },

  // }
  //   )
  // }
  // };

  useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    }
  }));

  render() {
    return (
      <div>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Watch List</Typography>
          <div>
            <List>
              {this.state.watchList.map((x, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <AttachMoneyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>{x.slice(0, 4)}</ListItemText>
                  {/* <ListItemSecondaryAction>
                    <IconButton
                      onClick={event => this.deleteFromWatchlist(event)}
                      edge="end"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction> */}
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </div>
    );
  }
}
