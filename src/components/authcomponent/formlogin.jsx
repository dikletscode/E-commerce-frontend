import React, { useContext, useState } from "react";
import { Input } from "./microComponent/input";
import { styles } from "./style/form.style";
import { Additional } from "./microComponent/additional";
import auth from "../../services/auth.service";
import { GlobContext } from "../../App";
import { Redirect } from "react-router-dom";

export const Form = () => {
  const { stateAuth, dispatchAuth } = useContext(GlobContext);
  const [isLogin, setLogin] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const hangleLogin = (e) => {
    e.preventDefault();
    auth
      .login(data.email, data.password)
      .then((res) => {
        setLogin(true);
        localStorage.setItem("data", JSON.stringify(res.data));
        dispatchAuth({ type: "LOGIN_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatchAuth({ type: "LOGIN_ERROR", payload: err });
      });
  };

  const handleChange = (e) => {
    const dataOnChange = { ...data };
    dataOnChange[e.target.id] = e.target.value;
    setData(dataOnChange);
  };
  console.log(stateAuth);
  return (
    <>
      {stateAuth.auth.isLogin == true ? (
        <Redirect to="/" />
      ) : (
        <div style={styles.container}>
          <form onSubmit={(e) => hangleLogin(e)}>
            <div style={styles.input}>
              <p>Login</p>
              <Input
                name="email : "
                type="email"
                id="email"
                value={data.email}
                change={(e) => handleChange(e)}
              />
              <Input
                name="password : "
                type="password"
                id="password"
                value={data.password}
                change={(e) => handleChange(e)}
              />
              <Additional />
            </div>
          </form>
        </div>
      )}
    </>
  );
};
