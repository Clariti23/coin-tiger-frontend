import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import CoinGeckoBrand from "./CoinGeckoBrand";
import Copyright from "./Copyright";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      width: 525,
      margin: "auto"
    }
  },
  root2: {
    "& .MuiTextField-root": {
      width: 525
    }
  },
  paper: {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justify: "center"
  },
  form: {
    width: "100%",
    flexWrap: "wrap",
    marginTop: theme.spacing(1),
    alignItems: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function BasketForm() {
  // const CoinGecko = require("coingecko-api");
  // const CoinGeckoClient = new CoinGecko();

  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [indexDate, setIndexDate] = React.useState("");

  const [currency1, setCurrency1] = React.useState("");
  const [currency1API, setCurrency1API] = React.useState("");
  const currency1Q = 0;

  const [currency1Amount, setCurrency1Amount] = React.useState("");

  const [currency2, setCurrency2] = React.useState("");
  const [currency2API, setCurrency2API] = React.useState("");
  const [currency2Amount, setCurrency2Amount] = React.useState("");
  const currency2Q = 0;

  const [currency3, setCurrency3] = React.useState("");
  const [currency3API, setCurrency3API] = React.useState("");
  const [currency3Amount, setCurrency3Amount] = React.useState("");
  const currency3Q = 0;

  const [currency4, setCurrency4] = React.useState("");
  const [currency4API, setCurrency4API] = React.useState("");
  const [currency4Amount, setCurrency4Amount] = React.useState("");
  const currency4Q = 0;

  const [currency5, setCurrency5] = React.useState("");
  const [currency5API, setCurrency5API] = React.useState("");
  const [currency5Amount, setCurrency5Amount] = React.useState("");
  const currency5Q = 0;

  const [watchList, setWatchlist] = React.useState([]);

  // API STRINGS
  //CHANGE THESE SERVER ENDPOINTS @ DEPLOYMENT
  const FavoritesAPI = "http://localhost:3000/favorites";
  const BasketsAPI = "http://localhost:3000/baskets";

  const UID = localStorage.getItem("UID");
  const basket = {
    name: name,
    initialBasketValue: 10000,
    indexDate: indexDate,
    coinOne: currency1,
    coin_1_q: currency1Q,
    coinOneId: currency1API,
    coinTwo: currency2,
    coin_2_q: currency2Q,
    coinTwoId: currency2API,
    coinThree: currency3,
    coin_3_q: currency3Q,
    coinThreeId: currency3API,
    coinFour: currency4,
    coin_4_q: currency4Q,
    coinFourId: currency4API,
    coinFive: currency5,
    coin_5_q: currency5Q,
    coinFiveId: currency5API,
    user_id: UID
  };
  useEffect(() => {
    fetch(FavoritesAPI)
      .then(res => res.json())
      .then(data => collectFavorites(data));
  });

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

  const handleAmountTwo = event => {
    setCurrency2Amount(event.target.value);
  };

  const handleAmountThree = event => {
    setCurrency3Amount(event.target.value);
  };

  const handleAmountFour = event => {
    setCurrency4Amount(event.target.value);
  };

  const handleAmountFive = event => {
    setCurrency5Amount(event.target.value);
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

  const getQuantities = async event => {
    const quantity1Conversion = price => {
      let q = currency1Amount / price;
      // console.log(q);
      basket.coin_1_q = q;
    };
    let string =
      "https://api.coingecko.com/api/v3/coins/" +
      currency1API +
      "/history?date=" +
      indexDate +
      "&localization=false";
    await fetch(string)
      .then(resp => resp.json())
      .then(data => quantity1Conversion(data.market_data.current_price.usd));

    if (currency2API !== "") {
      const quantity2Conversion = price => {
        const q = currency2Amount / price;
        basket.coin_2_q = q;
      };
      let string =
        "https://api.coingecko.com/api/v3/coins/" +
        currency2API +
        "/history?date=" +
        indexDate +
        "&localization=false";
      await fetch(string)
        .then(resp => resp.json())
        .then(data => quantity2Conversion(data.market_data.current_price.usd));
    }

    if (currency3API !== "") {
      const quantity3Conversion = price => {
        const q = currency3Amount / price;
        // console.log(q);
        basket.coin_3_q = q;
      };
      let string =
        "https://api.coingecko.com/api/v3/coins/" +
        currency3API +
        "/history?date=" +
        indexDate +
        "&localization=false";
      await fetch(string)
        .then(resp => resp.json())
        .then(data => quantity3Conversion(data.market_data.current_price.usd));
    }

    if (currency4API !== "") {
      const quantity4Conversion = price => {
        const q = currency4Amount / price;
        // console.log(q);
        basket.coin_4_q = q;
      };
      let string =
        "https://api.coingecko.com/api/v3/coins/" +
        currency4API +
        "/history?date=" +
        indexDate +
        "&localization=false";
      await fetch(string)
        .then(resp => resp.json())
        .then(data => quantity4Conversion(data.market_data.current_price.usd));
    }

    if (currency5API !== "") {
      const quantity5Conversion = price => {
        const q = currency5Amount / price;
        console.log(q);
        basket.coin_5_q = q;
      };
      let string =
        "https://api.coingecko.com/api/v3/coins/" +
        currency5API +
        "/history?date=" +
        indexDate +
        "&localization=false";
      await fetch(string)
        .then(resp => resp.json())
        .then(data => quantity5Conversion(data.market_data.current_price.usd));
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await getQuantities(event);

    fetch(BasketsAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ basket })
    }).then(console.log(basket));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Build Your Basket
        </Typography>
        <Box mx="auto">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={event => handleSubmit(event)}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  label="Basket Name"
                  fullWidth
                  required
                  onChange={event => {
                    handleNameChange(event);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-helperText"
                  label="Starting date"
                  fullWidth
                  required
                  defaultValue=""
                  helperText="DD-MM-YYYY"
                  onChange={event => {
                    handleDateChange(event);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="initial-basket-value"
                  label="Initial Basket Value"
                  fullWidth
                  defaultValue="$10,000"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
            </Grid>
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
            <TextField
              id="amount2"
              label="Amount 2"
              variant="filled"
              type="number"
              onChange={event => {
                handleAmountTwo(event);
              }}
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
              onChange={event => {
                handleAmountThree(event);
              }}
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
              onChange={event => {
                handleAmountFour(event);
              }}
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
              onChange={event => {
                handleAmountFive(event);
              }}
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
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.submit}
              >
                CREATE
              </Button>
            </div>
          </form>
        </Box>
      </div>
      <Box mt={8}>
        <CoinGeckoBrand />
        <Copyright />
      </Box>
    </Container>
  );
}
