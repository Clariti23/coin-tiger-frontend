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
  const CoinGecko = require("coingecko-api");
  const CoinGeckoClient = new CoinGecko();

  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [indexDate, setIndexDate] = React.useState("");
  const [initialBasketValue, setInitialBasketValue] = React.useState("");

  const [currency1, setCurrency1] = React.useState("");
  const [currency1API, setCurrency1API] = React.useState("");
  const [currency1Q, setCurrency1Q] = React.useState("");
  const [currency1Amount, setCurrency1Amount] = React.useState("");

  const [currency2, setCurrency2] = React.useState("");
  const [currency2API, setCurrency2API] = React.useState("");
  const [currency3, setCurrency3] = React.useState("");
  const [currency3API, setCurrency3API] = React.useState("");
  const [currency4, setCurrency4] = React.useState("");
  const [currency4API, setCurrency4API] = React.useState("");
  const [currency5, setCurrency5] = React.useState("");
  const [currency5API, setCurrency5API] = React.useState("");
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
    userFavorites.map(f => collected.push([f.symbol, f.coin_gecko_id]));
    setWatchlist(collected);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleDateChange = event => {
    setIndexDate(event.target.value);
  };

  const handleAmountOne = event => {
    setCurrency1Amount(event.value.target);
  };

  const handleChange1 = async event => {
    const items = event.target.value.split(",");
    console.log(items);
    setCurrency1(items[0]);
    setCurrency1API(items[1]);

    // await fetch(
    //   `https://api.coingecko.com/api/v3/coins/${items[1]}/history?date=${indexDate}&localization=false%20`
    // )
    //   .then(resp => resp.json())
    //   .then(data => quantityConversion(data.market_data.current_price.usd));

    // const quantityConversion = historicalPrice => {
    //   let quantity = currency1Amount / historicalPrice;
    //   setCurrency1Q({ quantity }, () => console.log(currency1Q));
    // };
  };

  console.log(currency1);
  const handleChange2 = event => {
    setCurrency2(event.target.value);
    setCurrency2API(event.target.id);
  };
  const handleChange3 = event => {
    setCurrency3(event.target.value);
    setCurrency3API(event.target.id);
  };
  const handleChange4 = event => {
    setCurrency4(event.target.value);
    setCurrency4API(event.target.id);
  };
  const handleChange5 = event => {
    setCurrency5(event.target.value);
    setCurrency5API(event.target.id);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let data = {
      name: name,
      initialBasketValue: 10000,
      indexDate: indexDate,
      coinOne: currency1,
      coin_1_q: "placeholder",
      coinOneId: currency1API,
      coinTwo: currency2,
      coin_2_q: "placeholder",
      coinTwoId: currency2API,
      coinThree: currency3,
      coin_3_q: "placeholder",
      coinThreeId: currency3API,
      coinFour: currency4,
      coin_4_q: "placeholder",
      coinFourId: currency4API,
      coinFive: currency5,
      coin_5_q: "placeholder",
      coinFiveId: currency5API,
      user_id: UID
    };

    // fetch(FavoritesAPI, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    //   },
    //   body: JSON.stringify(data)
    // }).then(response => console.log("post request sent", response));
  };

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={event => handleSubmit(event)}
      >
        <TextField
          id="name"
          label="Basket Name"
          required
          onChange={event => {
            handleNameChange(event);
          }}
        />
        <TextField
          id="standard-helperText"
          label="Starting date"
          required
          defaultValue=""
          helperText="Ex. 01-01-2020"
          onChange={event => {
            handleDateChange(event);
          }}
        />
        <TextField
          id="initial-basket-value"
          label="Initial Basket Value"
          defaultValue="$10,000"
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          id="amount1"
          label="Amount 1"
          variant="filled"
          type="number"
          onChange={event => {
            handleAmountOne(event);
          }}
          InputLabelProps={{
            shrink: true
          }}
        />
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
              <option key={option.value} id={option[1]} value={option}>
                {option[0]}
              </option>
            ))}
          </TextField>
        </div>
        <br></br>
        <TextField
          id="amount2"
          label="Amount 2"
          variant="filled"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
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
              <option key={option.value} id={option[1]} value={option[0]}>
                {option[0]}
              </option>
            ))}
          </TextField>
        </div>
        <br></br>
        <TextField
          id="amount3"
          label="Amount 3"
          variant="filled"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
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
              <option key={option.value} id={option[1]} value={option[0]}>
                {option[0]}
              </option>
            ))}
          </TextField>
        </div>
        <br></br>
        <TextField
          id="amount4"
          label="Amount 4"
          variant="filled"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
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
              <option key={option.value} id={option[1]} value={option[0]}>
                {option[0]}
              </option>
            ))}
          </TextField>
        </div>
        <br></br>
        <TextField
          id="amount5"
          label="Amount 5"
          variant="filled"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
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
              <option key={option.value} id={option[1]} value={option[0]}>
                {option[0]}
              </option>
            ))}
          </TextField>
        </div>
      </form>
    </div>
  );
}
