import React, { useState } from "react";
import ColorContext from "./ColorContext";

export const ColorProvider = (props) => {
  const [state, setState] = useState({ color: "red" });

  return (
    <ColorContext.Provider value={[state, setState]}>
      {props.children}
    </ColorContext.Provider>
  );
};
