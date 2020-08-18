import { useContext } from "react";
import ColorContext from "./ColorContext";

export const useColor = () => {
  const [state, setState] = useContext(ColorContext);

  const changeColor = () => {
    setState({ color: state.color === "green" ? "red" : "green" });
  };
  return {
    changeColor,
    color: state.color,
  };
};
