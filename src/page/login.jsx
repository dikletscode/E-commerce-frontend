import React, { useContext } from "react";
import { Form } from "../components/authcomponent/formlogin";
import Logo from "./assets/images.jpeg";
import { style } from "./style/signup.style";
import { Loading } from "../components/loading/loading";
import { GlobContext } from "../App";

export const Login = () => {
  const { stateAuth, dispatchAuth } = useContext(GlobContext);
  return (
    <main style={style.main}>
      {stateAuth.auth.loading == true ? (
        <Loading />
      ) : (
        <>
          <div className="descr">
            <p>
              Butuh barang secepatnya dengan harga semurah murahnya?belanja
              dengan Hellio aja..
            </p>
            <img src={Logo} alt="" style={style.icon} />
          </div>
          <Form />
        </>
      )}
    </main>
  );
};
