import React from "react";
import { style } from "../../../page/style/signup.style";
import { Input } from "./input";
import { styles } from "./style/add.style";

const AddProduct = () => {
  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <form action="">
          <div style={styles.input}>
            <Input
              name="email : "
              type="email"
              id="email"
              style={styles.align}
              // value={data.email}
              // change={(e) => handleChange(e)}
            />
            <Input
              name="email : "
              type="email"
              id="email"
              style={styles.align}
              // value={data.email}
              // change={(e) => handleChange(e)}
            />
            <Input
              name="email : "
              type="email"
              id="email"
              // value={data.email}
              // change={(e) => handleChange(e)}
            />
            <Input
              name="email : "
              type="email"
              id="email"
              // value={data.email}
              // change={(e) => handleChange(e)}
            />
            <Input
              name="email : "
              type="email"
              id="email"
              // value={data.email}
              // change={(e) => handleChange(e)}
            />
            <Input
              name="email : "
              type="email"
              id="email"
              // value={data.email}
              // change={(e) => handleChange(e)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
