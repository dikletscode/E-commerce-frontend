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
  let datas = data;

  return (
    <>
      <Loading />
      <div style={styles.bigContainer}>
        {datas.map((item) => {
          return (
            <div style={styles.container}>
              <div style={styles.content}>
                <img src={item.images} alt="" style={styles.image} />
                <div style={{ color: "yellow" }}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star "></i>
                </div>
                <div style={styles.desc}>
                  <p>{item.productName}</p>
                  <small>{item.price}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
