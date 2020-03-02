import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import DeleteIcon from "@material-ui/icons/Delete";

export default class WatchlistContainer extends Component {
  state = {
    watchList: [],
    name: "",
    UID: null
  };
  //API STRINGS
  // LOCAL_TEST_API = "http://localhost:3000";
  PRODUCTION_API = "https://gentle-wildwood-07928.herokuapp.com";
  FavoritesAPI = this.PRODUCTION_API + "/favorites";
  // FavoritesAPI = this.LOCAL_TEST_API + "/favorites";

  componentDidMount() {
    const name = localStorage.getItem("name");
    const UID = localStorage.getItem("UID");
    this.setState({ name, UID });
    console.log(localStorage);
    this.fetchFavorites();
  }

  fetchFavorites = () => {
    fetch(this.FavoritesAPI)
      .then(res => res.json())
      .then(data => this.filterFavorites(data));
  };

  filterFavorites = data => {
    let userFavorites = data.filter(
      favorite => favorite.user_id === parseInt(this.state.UID)
    );
    this.setState(
      {
        watchList: userFavorites
      },
      () => console.log(this.state)
    );
  };

  deleteFromWatchlist = (id, e) => {
    e.preventDefault();

    e.persist();
    console.log(e);
    const FavoriteId = id;
    fetch(this.FavoritesAPI, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ id: FavoriteId })
    }).then(this.fetchFavorites);
  };

  useStyles = makeStyles(theme => ({
    root: {
      // flexGrow: 1,
      maxWidth: "33%"
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
      <div display="flex">
        <Grid container xs={4}>
          <Typography variant="h5">My Watch List</Typography>
          <div>
            <List>
              {this.state.watchList.map((item, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <AttachMoneyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>{item.symbol}</ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={event =>
                        this.deleteFromWatchlist(item.id, event)
                      }
                    >
                      <DeleteIcon currentTarget={item.id} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </div>
    );
  }
}
