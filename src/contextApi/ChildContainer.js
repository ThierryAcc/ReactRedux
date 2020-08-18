import React from "react";
import ThemeContext from "./ThemeContext";

const ChildContainer = () => {
  return (
    <>
      Child Container
      <ThemeContext.Consumer>
        {(theme) => {
          return (
            <span>
              {" "}
              + Theme: {theme} (passed through ThemeContext.Consumer)
            </span>
          );
        }}
      </ThemeContext.Consumer>
    </>
  );
};

export default ChildContainer;
