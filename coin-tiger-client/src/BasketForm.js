import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  root2: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function BasketForm() {
  const classes = useStyles();
  const [currency1, setCurrency1] = React.useState("");
  const [currency2, setCurrency2] = React.useState("");
  const [currency3, setCurrency3] = React.useState("");
  const [currency4, setCurrency4] = React.useState("");
  const [currency5, setCurrency5] = React.useState("");

  const [watchList, setWatchlist] = React.useState([]);
  const FavoritesAPI = "http://localhost:3000/favorites";
  const UID = localStorage.getItem("UID");

  useEffect(() => {
    fetch(FavoritesAPI)
      .then(res => res.json())
      .then(data => collectFavorites(data));
  }, []);

  const collectFavorites = data => {
    let collected = [];
    let userFavorites = data.filter(
      favorite => favorite.user_id === parseInt(UID)
    );
    userFavorites.map(f => collected.push(f.symbol));
    setWatchlist(collected);
  };
  console.log(watchList);

  const handleChange1 = event => {
    setCurrency1(event.target.value);
  };
  const handleChange2 = event => {
    setCurrency2(event.target.value);
  };
  const handleChange3 = event => {
    setCurrency3(event.target.value);
  };
  const handleChange4 = event => {
    setCurrency4(event.target.value);
  };
  const handleChange5 = event => {
    setCurrency5(event.target.value);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="amount1" label="Amount 1" variant="filled" />
        <div className={classes.root2}>
          <TextField
            id="component 1"
            select
            value={currency1}
            onChange={handleChange1}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
          >
            {watchList.map(option => (
              <option key={option.value} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </div>
        <br></br>
        <TextField id="amount2" label="Amount 2" variant="filled" />
        <div className={classes.root2}>
          <TextField
            id="component 2"
            select
            value={currency2}
            onChange={handleChange2}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
          >
            {watchList.map(option => (
              <option key={option.value} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </div>
        <br></br>
        <TextField id="amount3" label="Amount 3" variant="filled" />
        <div className={classes.root2}>
          <TextField
            id="component 3"
            select
            value={currency3}
            onChange={handleChange3}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
          >
            {watchList.map(option => (
              <option key={option.value} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </div>
        <br></br>
        <TextField id="amount4" label="Amount 4" variant="filled" />
        <div className={classes.root2}>
          <TextField
            id="component 4"
            select
            value={currency4}
            onChange={handleChange4}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
          >
            {watchList.map(option => (
              <option key={option.value} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </div>
        <br></br>
        <TextField id="amount5" label="Amount 5" variant="filled" />
        <div className={classes.root2}>
          <TextField
            id="component 5"
            select
            value={currency5}
            onChange={handleChange5}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
          >
            {watchList.map(option => (
              <option key={option.value} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </div>
      </form>
    </div>
  );
}
