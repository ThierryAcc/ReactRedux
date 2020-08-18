import React, { useContext } from "react";
import CityContext from "./CityContext";
import { CardChildren } from "./CardChildren";

export const Card = () => {
  const [state, setState] = useContext(CityContext);

  return (
    <div>
      <h3>Card</h3>
      <p>City is {state.city}</p>
      <CardChildren />
    </div>
  );
};
