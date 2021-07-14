import React from "react";
import PropTypes from "prop-types";

export const HandlingError = (props) => {
  let display = props.message == null ? "none" : "block";
  return (
    <p
      style={{
        textAlign: "center",
        backgroundColor: "#ff8fa3",
        fontSize: "1.3rem",
        display: display,

        padding: "1px",
      }}
    >
      {props.message}
    </p>
  );
};
