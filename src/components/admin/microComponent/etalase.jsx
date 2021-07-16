import React, { useEffect } from "react";
import { styles } from "./style/etalase.style";
import AddProduct from "./addProduct";

export const Etalase = ({ product }) => {
  return (
    <>
      <div style={styles.bigContainer}>
        {product.map((item) => {
          console.log(item.images, "asu");
          return (
            <div style={styles.container}>
              <div style={styles.content}>
                <img src={item.images} alt="" style={styles.image} />
                <div style={styles.desc}>
                  <p>{item.productName}</p>
                  <small>{item.price}</small>
                  <small>{item.fullName}</small>
                </div>
                <div style={styles.desc}>
                  <p>{item.productName}</p>
                  <small>{item.price}</small>
                  <small>{item.fullName}</small>
                </div>

                <div style={{ textAlign: "start" }}>
                  <i className="fa fa-star" style={{ color: "yellow" }}></i>5
                </div>
              </div>
            </div>
          );
        })}
        <AddProduct />
      </div>
    </>
  );
};
