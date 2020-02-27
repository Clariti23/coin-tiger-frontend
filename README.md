

## About

CoinTiger is a project I built as part of my passion to learn more about Bitcoin, Ethereum and cryptocurrency markets. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

CoinTiger is an investment management tool for building baskets of cryptoassets and gaining the capability to view how these baskets perform over time. This tool is ideally suited for a thesis-driven investor who wants to be able to compare how different investment theses play out with objective metrics. 

For example, the 2020Majors Basket is a simple mixture of 50% Bitcoin and 50% Ether with an indexing date set at January 01 2020. Suppose an initial basket value of $10,000. CoinTiger caluclates the quantity of Bitcoin $5,000 would have bought on January 1, then it calculates the quantity of Ether $5,000 would have bought. To find the real-time performance of a basket, CoinTiger takes the initial quantities and multiplies it by market prices of those coins, then adds together these values to get Current Basket Value.

The primary performance metric calculated by CoinTiger is percentage change in basket value:

Performance: ((CurrentBasketValue - InitialBasketValue) / InitialBasketValue) * 100%.

## Demo

__________

## Technologies 
CoinTiger's front-end is Single Page Application built with React.js, React Hooks, [Material UI](https://material-ui.com/), and JavaScript. CoinTiger uses [CoinGecko's API](https://www.coingecko.com/en/api) for getting market data. The application makes calls directly to public endpoints and also uses the [CoinGecko API Client for Node.js](https://github.com/miscavage/CoinGecko-API).

## Link to Web App 
CoinTiger is alive and roaring at https://cointiger.herokuapp.com/. 



