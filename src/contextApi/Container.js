import React from "react";
import "../components/App.css";
import ChildContainer from "./ChildContainer";

const Container = () => {
  return (
    <div>
      Container <br />
      <ChildContainer />
    </div>
  );
};

export default Container;
