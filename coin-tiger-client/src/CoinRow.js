import React from "react";

export default function CoinRow(props) {
  return (
    <div>
      <p>
        {props.coin.name}{" "}
        <span>
          {"||"} {props.coin.current_price}
          {"||"} {props.coin.price_change_percentage_24h}
          {"%"} {"||"} {props.coin.market_cap} {"||"}
        </span>
      </p>
    </div>
  );
}
