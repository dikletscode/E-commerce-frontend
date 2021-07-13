import axios from "../axiosInstance";
import { v4 as uuidv4 } from "uuid";

const signUp = (username, email, password) => {
  return new Promise((resolve, reject) => {
    axios.post({
      userId: uuidv4(),
      userName: username,
      email: email,
      passwords: password,
    });
  });
};

const login = async (email, password) => {
  return axios.post("/login", {
    email: email,
    passwords: password,
  });
};

export default {
  signUp,
  login,
};
