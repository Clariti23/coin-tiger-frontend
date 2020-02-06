import React from "react";
import { useState } from "react";
import SliderBar from "./SliderBar";

export default function BasketForm() {
  const [basketValue, setBasketValue] = useState(10000);

  let handleValueChange = value => {
    setBasketValue(basketValue - value);
    if (basketValue === 0) {
      console.log("Max limit hit");
    } else {
      console.log(basketValue);
    }
  };

  return (
    <div>
      <SliderBar handleValueChange={handleValueChange}></SliderBar>
      <SliderBar handleValueChange={handleValueChange}></SliderBar>
      <SliderBar handleValueChange={handleValueChange}></SliderBar>
      <SliderBar handleValueChange={handleValueChange}></SliderBar>
      <SliderBar handleValueChange={handleValueChange}></SliderBar>
      <SliderBar handleValueChange={handleValueChange}></SliderBar>
      <SliderBar handleValueChange={handleValueChange}></SliderBar>
    </div>
  );
}
