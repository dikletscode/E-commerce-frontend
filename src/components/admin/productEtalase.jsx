import React, { useEffect, useState } from "react";
import { getUserid } from "../../helper/user";
import axiosInstance from "../../services/admin.service";
import { Loading } from "../loading/loading";
import { Etalase } from "./microComponent/etalase";

export const ProductEtalase = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(getUserid());
    axiosInstance
      .getProductEtalase(getUserid())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {data.length ? <Etalase product={data} /> : <Loading display="block" />}
    </>
  );
};
