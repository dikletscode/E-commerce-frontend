import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../style/form.style";

const Aggreement = () => {
  return (
    <>
      <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1" style={{ fontSize: "20px" }}>
          I agree to the terms
        </label>
        <br />
      </div>
      <div style={{ textAlign: "center" }}>
        <input type="submit" style={styles.button} />
      </div>
    </>
  );
};

export const AdditionalSignup = () => {
  return (
    <>
      <Aggreement />
      <div style={{ textAlign: "center" }}>
        <p>
          have an account? <Link to="/login">LOGIN</Link>
        </p>
      </div>
    </>
  );
};
export const AdditionalLogin = () => {
  return (
    <>
      <Aggreement />
      <div style={{ textAlign: "center" }}>
        <p>
          don't have an account? <Link to="/signup">SIGNUP</Link>
        </p>
      </div>
    </>
  );
};
