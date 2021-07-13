import axios from "../axiosInstance";
import JwtValidity from "../helper/verify";

const getProduct = async () => {
  return await axios.get("/", { headers: JwtValidity() });
};
export default {
  getProduct,
};
