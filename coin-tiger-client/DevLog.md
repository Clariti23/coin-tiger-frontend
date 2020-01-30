Day 0: The models for the project are baskets, users, and coins.

A user has many baskets, baskets belong to users.
There are some public baskets: Majors, DeFi, Centralized Exchange, and Eth K!ll3r\$.
A basket is constructed as follows.
A basket can have up to 10 coins. For each component item of a new basket, there must be a certain number of coints, Quantity, and initial price. Summing together the combined market capitalization provides an Initial Basket Value, α . The basket's value at point t can be calculated by summing the number of coins initially specified at their new current price, all summed together. The current basket value can be denoted β . To calculate Basket Performance, do: (β - α) / a, \* 100 %.

The MAJORS basket is simply a 50%/50% split of Bitcoin and Etherum as of January 1, 2020. https://www.coingecko.com/api/documentations/v3#/coins/get_coins__id__history.

The price of Bitcoin on this date can be obtained through a GET request to "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-01-2020&localization=false".

From here, we want to access the BTC/USD rate, specifically, market_data.current_price.usd, which is 7195.153895430029.

To get the price data from a given _historical_ date of January 01 2020, we GET from the /coins/{id}/history?data=01-01-2020&localization=false API route.

The Ethereum price from market_data.current_price.usd: 129.18638529253852.

Let's suppose a \$10,000 budget. To allocate a 50/50 bitcoin/Ethereum basket, we'll see what quantity 5,0000 gets us at January prices.

BTC Quantity Allocation = (Budget = 5000)/( BTCUSD Price = 7195.15)
BTC Quantity = 0.694912545256

ETH Quantity = 5000/(ETHUSD Price = 129.18638529253852)
ETH Quantity = 38.7037688892

THEREFORE THE 2020 MAJORS BASKET = 0.6949 BTC + 38.07 ETH at even 50/50 split starting on January 01, 2020. Initial Basket Value, α, = 10,000.

To Calculate β, we need to measure BTC Quantity _ Current Price (CPBTC) and ETH Quantity _ Current Price (CPETH).

CPBTC = 8925.03
8925.03 accessed from the json object at market_data.current_price.usd, through the API URL: "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false%20&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"

CPETH = 171.16
CPETH accessed from the same path, except swap ethereum for bitcoin.

β = ( 0.694912545256 _ 8925.03 ) + ( 38.70 _ 171.16)

β = 12826.0073138

Current Basket Performance = (( β - α )/α) _ 100
Current Basket Performance = ((12826.0073138 - 10000.00) / 10000 ) _ 100
2020 MAJORS Performance = 28.26%.

---

2020 DeFi Basket || Initial Basket Data: 01-01-2020
Project | Weightage
1, ChainLink (LINK) | 20.00%
2, MakerDAO (MKR) | 20.00%
3, Synthetix (SNX) | 20.00%
4, KyberNetwork (KNC) | 15.00%
5, Republic Protocol (REN) | 10.00%
6, Loopring (LRC) | 7.50%
7, ThorChain (RUNE) | 7.50%

For an Initial Basket Value of \$10,000:

LINK, $2,000.00, P(LINK) Q = 1.7628, Q = 1132.63
MKR, $2,000.00, P(MKR) = 434.6841, Q = 4.60
KNC, $1,500.00, P(KNC) = 0.1843, Q = 8138.90
REN, $1,000.00, P(REN) = 0.0308, Q = 32467.53
LRC, $750.00, P(LRC) = 0.0216, Q = 34722.22
RUNE, $750.00, P(RUNE) = 0.07014 Q = 10692.89

Current Basket Value (As of 01-28-2020): \$11,220.37

LINK, $2956.16, CP(LINK) = 2.61, Q(LINK) = 1132.63
MKR, $2374.24, CP(MKR) = 516.14, Q(MKR) = 4.60
KNC, $2289.47, CP(KNC) = 0.2813, Q(KNC) = 8138.90
REN, $1402.59, CP(REN) = 0.0432, Q(REN) = 32467.53
LRC, $934.02, CP(LRC) = 0.0269, Q(LRC) = 34722.22
RUNE, $1263.89 CP(RUNE) = 0.1182, Q(RUNE) = 10692.89

2020 DeFi Performance = 12.20% = (((11,220.37 - 10,000) / 10,000) \* 100)

---

2020 Ethereum K1ll3rs (Also known as Ethereum Killers, see more here from Chris Burniske of Placeholder Capital: https://www.placeholder.vc/blog/2019/10/22/fire-before-growth-the-likely-fate-of-ethereum-killers)

Initial Basket Value = \$10,000 (Indexing Data January 01 2020)

Cardano, ADA, $2,000.00, P(ADA)= 0.0329, Q(ADA) = 60790.27
Eos, EOS, $2,000.00, P(EOS) = 2.5862, Q(EOS) = 773.33
Tezos, XTZ, $2,000.00, P(XTZ) = 1.3518, Q(XTZ) = 1479.50
Algorand, ALGO, $2,000.00, P(ALGO) = 0.2169, Q(ALGO) = 9220.83
Hashgraph, HBAR, \$2,000.00, P(HBAR) = 0.01022, Q(HBAR) = 195694.71

Current Basket Value (As of 01-28-2020): 11019.83

ADA, $3173.25, P(ADA) = 0.0522, Q(ADA) = 60790.27
EOS, $3124.25, P(EOS) = 4.04, Q(EOS) = 773.33
XTZ, $2278.43, P(XTZ) = 1.54, Q(XTZ) = 1479.50
ALGO, $2212.99, P(ALGO) = 0.24, Q(ALGO) = 9220.83
HBAR, \$2230.91 P(HBAR) = 0.0114, Q(HBAR) = 195694.71

2020 Eth Killerz Performance = 10.19% ((( 11019.83 - 10000.00)/10000)\*100)

Day 1: Set up models and associations with Rails API. Initialized both the backend and front-end repos.
Day 2, a.m.: Worked on Controllers, posting and persisting users with salted passwords.
