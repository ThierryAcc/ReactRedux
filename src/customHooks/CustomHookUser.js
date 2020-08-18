import React from "react";
import { useColor } from "./useColor";

export const CustomHookUser = () => {
  const { color, changeColor } = useColor();

  return (
    <div style={{ color: color }}>
      Color is: {color} <br></br>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};
