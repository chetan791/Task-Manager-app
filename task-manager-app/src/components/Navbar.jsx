import React from "react";
import "../css/Navbar.css";
import { useSelector } from "react-redux";
import logo from "../assets/tasQ.png";

export const Navbar = () => {
  const { isAuthenticated, name } = useSelector((store) => store.auth);

  console.log(isAuthenticated, name);

  return (
    <nav id="navbar">
      <img src={logo} alt="" />
      <ul>
        {isAuthenticated ? <li>{`( ${name} ) Logout`}</li> : <li>Login</li>}
      </ul>
    </nav>
  );
};
