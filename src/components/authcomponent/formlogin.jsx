import React, { useState } from "react";
import { Input } from "./input";
import { styles } from "./style/form.style";
import { Additional } from "./additional";

export const Form = (props) => {
  const [data, setData] = useState({
    userId: "",
    userName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const dataOnChange = { ...data };
    dataOnChange[e.target.id] = e.target.value;
    setData(dataOnChange);
  };
  return (
    <div style={styles.container}>
      <form action="">
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
  );
};
