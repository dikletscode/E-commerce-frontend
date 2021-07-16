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
    auth.regisStore(getUserid(), agree).then((res) => {
      if (res.data.isAdmin == true) {
        window.location.href = "/success";
      }
    });
    e.preventDefault();
  };
  console.log(agree);

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
          <div className="check-agree">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              onChange={handleChange}
              value={agree}
            />
            <label for="agree" className="label" style={{ fontSize: "24px" }}>
              By signing up, you agree to Helio's terms of Service and Privacy
              Policy
            </label>
            <br />
          </div>
          <br />
          <div>
            <input type="submit" className="submit-agree" />
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
