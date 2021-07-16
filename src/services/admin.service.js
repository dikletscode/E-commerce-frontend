import axios from "../axiosInstance";
import { v4 as uuidv4 } from "uuid";
import JwtValidity from "../helper/verify";

const getProductEtalase = (id) => {
  return axios.get(`/mystore/${id}`, { headers: JwtValidity() });
};

export default {
  getProductEtalase,
};
