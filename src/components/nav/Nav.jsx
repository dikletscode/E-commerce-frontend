import React, { useContext } from "react";
import "./Nav.css";
import { Menu } from "./menu";

const li = Menu.map((item) => <li>{item.title}</li>);
const Nav = () => {
  return (
    <nav className="nav-container">
      <ul className="item">
        <i
          class="fa fa-shopping-cart"
          style={{ fontSize: "30px", color: "white" }}
        ></i>
        {li}
        <i className="fa fa-sign-in" id="icon"></i>
      </ul>
    </nav>
  );
};
export default Nav;
