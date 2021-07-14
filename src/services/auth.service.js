import axios from "../axiosInstance";
import { v4 as uuidv4 } from "uuid";

export const logout = () => {
  localStorage.removeItem("data");
};

const signUp = (username, email, password) => {
  return axios.post("/signup", {
    userId: uuidv4(),
    userName: username,
    email: email,
    passwords: password,
  });
};

const login = async (email, password) => {
  return axios
    .post("/login", {
      email: email,
      passwords: password,
    })
    .then((res) => {
      localStorage.setItem("data", JSON.stringify(res.data));
    });
};

export default {
  signUp,
  login,
};
