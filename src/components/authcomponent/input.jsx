import React from "react";
import PropTypes from "prop-types";
import { styles } from "./style/form.style";

const container = {};

export const Input = (props) => {
  return (
    <div style={styles.label}>
      <label htmlFor={props.id}>{props.name}</label>
      <br />
      <input
        style={styles.inputValue}
        type={props.type}
        id={props.id}
        value={props.value}
        name={props.name}
        onChange={props.change}
      />
    </div>
  );
};

Input.protoTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  change: PropTypes.func,
};
