import React, { useContext } from "react";
import error from "./assets/error.png";

import { GlobContext } from "../App";

export const ErrorPage = () => {
  const { stateAuth, dispatchAuth } = useContext(GlobContext);
  console.log(stateAuth, "err");
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "80px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={error}
        style={{ width: "40%", height: "auto", margin: "auto" }}
      />
      <p style={{ color: "purple", fontSize: "50px" }}>403 FORBIDEN</p>
    </div>
  );
};
