import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  const [currency1Q, setCurrency1Q] = React.useState(0);
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
    setCurrency1Amount(event.target.value);
  };

  const handleChange1 = event => {
    const items = event.target.value.split(",");
    setCurrency1(items[0]);
    setCurrency1API(items[1]);
  };

  const handleChange2 = event => {
    const items = event.target.value.split(",");
    setCurrency2(items[0]);
    setCurrency2API(items[1]);
  };
  const handleChange3 = event => {
    const items = event.target.value.split(",");
    setCurrency3(items[0]);
    setCurrency3API(items[1]);
  };

  const handleChange4 = event => {
    const items = event.target.value.split(",");
    setCurrency4(items[0]);
    setCurrency4API(items[1]);
  };
  const handleChange5 = event => {
    const items = event.target.value.split(",");
    setCurrency5(items[0]);
    setCurrency5API(items[1]);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const quantityConversion = price => {
      const q = currency1Amount / price;
      console.log(q);
      setCurrency1Q(q);
    };
    console.log(currency1Q);
    await fetch(
      `https://api.coingecko.com/api/v3/coins/${currency1API}/history?date=${indexDate}&localization=false%20`
    )
      .then(resp => resp.json())
      .then(data => quantityConversion(data.market_data.current_price.usd));
  };

  // let data = {
  //   name: name,
  //   initialBasketValue: 10000,
  //   indexDate: indexDate,
  //   coinOne: currency1,
  //   coin_1_q: "placeholder",
  //   coinOneId: currency1API,
  //   coinTwo: currency2,
  //   coin_2_q: "placeholder",
  //   coinTwoId: currency2API,
  //   coinThree: currency3,
  //   coin_3_q: "placeholder",
  //   coinThreeId: currency3API,
  //   coinFour: currency4,
  //   coin_4_q: "placeholder",
  //   coinFourId: currency4API,
  //   coinFive: currency5,
  //   coin_5_q: "placeholder",
  //   coinFiveId: currency5API,
  //   user_id: UID
  // };

  // fetch(FavoritesAPI, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json"
  //   },
  //   body: JSON.stringify(data)
  // }).then(response => console.log("post request sent", response));
  //};

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
            label={currency1}
            value={currency1}
            onChange={handleChange1}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
          >
            {watchList.map((option, index) => (
              <option key={index} value={option}>
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
            label={currency2}
            value={currency2}
            onChange={handleChange2}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
          >
            {watchList.map((option, index) => (
              <option key={index} value={option}>
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
            label={currency3}
            value={currency3}
            onChange={handleChange3}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
          >
            {watchList.map((option, index) => (
              <option key={index} value={option}>
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
            label={currency4}
            value={currency4}
            onChange={handleChange4}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
          >
            {watchList.map((option, index) => (
              <option key={index} value={option}>
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
            label={currency5}
            value={currency5}
            onChange={handleChange5}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
          >
            {watchList.map((option, index) => (
              <option key={index} value={option}>
                {option[0]}
              </option>
            ))}
          </TextField>
          <Button type="submit" color="primary" variant="contained">
            CREATE BASKET
          </Button>
        </div>
      </form>
    </div>
  );
}
