import React, { useState } from "react";
import Profile from "./assets/error.png";
import "./store.css";
import auth from "../services/auth.service";
import { getUserid } from "../helper/user";
import { role } from "../helper/role";

const StoreRegister = (props) => {
  const [agree, setAggree] = useState(false);

  const handleChange = (e) => {
    setAggree(e.target.checked);
  };
  const handleSubmit = (e) => {
    auth
      .regisStore(agree, getUserid())
      .then((res) => {
        setAdmin(res.data.msg);
      })
      .catch((err) => {
        setAdmin(err.msg);
      });
    e.preventDefault();
  };

  return (
    <div className="popup" style={{ display: props.display }}>
      <div style={{ textAlign: "end" }}>
        <i
          className="fa fa-times"
          style={{ fontSize: "50px" }}
          onClick={props.close}
        ></i>
      </div>
      {props.isAdmin ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              onChange={handleChange}
              value={agree}
            />
            <label for="vehicle1" style={{ fontSize: "20px" }}>
              I agree to the terms
            </label>
            <br />
          </div>
          <div style={{ textAlign: "center" }}>
            <input type="submit" />
          </div>
        </form>
      ) : (
        <p>
          Lengkapi Informasi anda di profile untuk melanjutkan ke proses
          selanjutnya
        </p>
      )}
    </div>
  );
};
export default StoreRegister;
