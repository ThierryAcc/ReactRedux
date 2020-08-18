import React, { useState, useContext } from "react";
import CityContext from "../useContext/CityContext";

// 1. Pass a child to CityProvider
export const CityProvider = (props) => {
  const [state, setState] = useState({ city: "Zurich" });

  return (
    // 2. Context provides the state / setState to all children
    // 3. props.children will be CityChanger
    <CityContext.Provider value={[state, setState]}>
      {props.children}
    </CityContext.Provider>
  );
};

// 4. Can use setState from CityProvider
export const CityChanger = () => {
  const [state, setState] = useContext(CityContext);

  //   5. use the setState
  const switchCity = () => {
    setState({ city: "Bangkok" });
  };

  return (
    <>
      <button onClick={switchCity}>Switch City</button>
      <div>{state.city}</div>
    </>
  );
};

export const AnotherUseContextComponent = () => {
  const [state, setState] = useContext(CityContext);

  return (
    <>
      <div>{state.city}</div>
    </>
  );
};
