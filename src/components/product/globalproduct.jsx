import React, { useEffect, useState, useContext } from "react";
import Profile from "../profile/assets/1.png";
import { Link } from "react-router-dom";
import auth from "../../services/product.service";
import { styles } from "./product.style";
import { GlobContext } from "../../App";
import axios from "../../axiosInstance";
import JwtValidity from "../../helper/verify";
import { Loading } from "../loading/loading";

export const GlobalProduct = () => {
  const [data, setData] = useState([]);
  const { stateAuth, dispatchAuth } = useContext(GlobContext);

  useEffect(() => {
    axios
      .get("/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <>
      {/* <Loading /> */}
      <div style={styles.bigContainer}>
        {data.map((item) => {
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
      </div>
    </>
  );
};
