import React from "react";
import { useColor } from "./useColor";

export const CustomHookUser2 = () => {
  // the custom hook to use
  const { color, changeColor } = useColor();

  return (
    <div style={{ color: color }}>
      Color is: {color} <br></br>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};
