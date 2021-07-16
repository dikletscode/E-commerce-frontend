import React from "react";
import { logout } from "../services/auth.service";
import img from "./assets/1.jpg";

export const Card = () => {
  const destroy = () => {
    logout();
    window.location.href = "login";
  };
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <p style={{ fontSize: "2em" }}>Your Store Has Been Successfuly Created</p>

      <button
        onClick={destroy}
        style={{ backgroundColor: "red", color: "white" }}
      >
        <p style={{ fontSize: "1.4em" }}>Please Relogin</p>
      </button>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
