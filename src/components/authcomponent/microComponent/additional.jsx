import React from "react";
import { styles } from "../style/form.style";

export const Additional = () => {
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
      <div style={{ textAlign: "center" }}>
        <p>
          have an account? <a href="/login">LOGIN</a>
        </p>
      </div>
    </>
  );
};
