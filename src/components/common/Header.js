import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/cards" activeStyle={activeStyle}>
        Cards
      </NavLink>
      {" | "}
      <NavLink to="/books" activeStyle={activeStyle}>
        Books
      </NavLink>
      {" | "}
      <NavLink to="/creditcards" activeStyle={activeStyle}>
        Creditcards
      </NavLink>
      {" | "}
      <NavLink to="/useRef" activeStyle={activeStyle}>
        useRef
      </NavLink>
    </nav>
  );
};

export default Header;
