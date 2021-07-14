import React, { useContext } from "react";
import "./Nav.css";
import { Menu } from "./menu";
import { Link, useHistory } from "react-router-dom";
import { isLogin } from "../../helper/isLogin";
import { logout } from "../../services/auth.service";

const li = Menu.map((item) => (
  <li>
    <a href={item.href} style={{ textDecoration: "none", color: "white" }}>
      {item.title}
    </a>
  </li>
));

const Nav = () => {
  let display = isLogin() ? "block" : "none";
  let display2 = !isLogin() ? "block" : "none";
  const handleClick = () => {
    logout();
    window.location.reload();
  };
  return (
    <nav className="nav-container">
      <ul className="item">
        <i
          class="fa fa-shopping-cart"
          style={{ fontSize: "30px", color: "white" }}
        ></i>
        {li}
        <li style={{ display: display }}>
          <Link to="/profile">
            <i className="fa fa-user" id="icon2"></i>
          </Link>
        </li>
        <li style={{ display: display, cursor: "progress" }}>
          <i className="fa fa-sign-out" id="icon3" onClick={handleClick}></i>
        </li>
        <li style={{ display: display2 }}>
          <Link to={"/login"}>
            <i className="fa fa-sign-in" id="icon"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
