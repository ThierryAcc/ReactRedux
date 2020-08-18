import React, { useContext } from "react";
import CityContext from "./CityContext";

export const CardChildren = () => {
  const [state] = useContext(CityContext);

  return <div>CardChildren + {state.city}</div>;
};
