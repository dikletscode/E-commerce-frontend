import React from "react";
import { Form } from "../components/authcomponent/formlogin";
import Logo from "./assets/images.jpeg";
import { style } from "./style/signup.style";

export const Login = () => {
  return (
    <main style={style.main}>
      <div className="descr">
        <p>
          Butuh barang secepatnya dengan harga semurah murahnya?belanja dengan
          Hellio aja..
        </p>
        <img src={Logo} alt="" style={style.icon} />
      </div>
      <Form />
    </main>
  );
};
