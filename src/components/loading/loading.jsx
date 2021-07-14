import React, { useContext } from "react";
import "./loading.css";
import load from "./load.gif";
import { GlobContext } from "../../App";

export const Loading = () => {
  const { stateAuth, dispatchAuth } = useContext(GlobContext);
  let isLoading = stateAuth.auth.loading ? "flex" : "none";
  return (
    <>
      <div
        style={{
          display: isLoading,
          paddingLeft: "400px",
          paddingTop: "150px",
        }}
      >
        <img src={load} alt="" />
      </div>
    </>
  );
};
