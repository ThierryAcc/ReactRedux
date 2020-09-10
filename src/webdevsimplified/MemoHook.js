import React, { useState, useMemo } from "react";

export const MemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const doubleNumber = slowFunction(number); // without memo -> reruns the slowFunction on each render
  const doubleNumber = useMemo(() => slowFunction(number), [number]); // with memo -> caches the value, only reruns if number changes. if it is the same value don't rerender this part of the component

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        ChangeTheme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

const slowFunction = (num) => {
  console.log("Calling slow function");
  for (let index = 0; index < 1000000000; index++) {
    /**/
  }
  return num * 2;
};
