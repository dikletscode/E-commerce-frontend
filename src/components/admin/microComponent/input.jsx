import React from "react";
import { styles } from "./style/add.style";
import PropTypes from "prop-types";

export const Input = (props) => {
  return (
    <div style={styles.label}>
      <label htmlFor={props.id}>{props.name}</label>
      <br />
      <input
        style={props.style}
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
  label: PropTypes.string,
  style: PropTypes.object,
};

Input.defaultProps = {
  style: styles.inputValue,
};
