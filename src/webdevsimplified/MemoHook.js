import React, { useState, useMemo, useEffect } from "react";

export const MemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const doubleNumber = slowFunction(number); // without memo -> reruns the slowFunction on each render
  const doubleNumber = useMemo(() => slowFunction(number), [number]); // with memo -> caches the value, only reruns if number changes. if it is the same value don't rerender this part of the component

  // without this useMemo the useEffect runs everytime because the object is not the same object (inmemory address)
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed " + themeStyles.backgroundColor);
  }, [themeStyles]);

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
