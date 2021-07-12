import React from "react";
import { Form } from "../components/authcomponent/formsignup";
import Logo from "./assets/images.jpeg";
import { style } from "./style/signup.style";

export const Signup = () => {
  return (
    <main style={style.main}>
      <div className="desc">
        <p>
          Butuh barang secepatnya dengan harga semurah murahnya?belanja dengan
          Hello aja
        </p>
        <img src={Logo} alt="" style={style.icon} />
      </div>
      <Form />
    </main>
  );
};
