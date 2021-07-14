import axios from "axios";
import { Redirect } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response.status == 401) {
      return Promise.reject(error.response.data.msg);
    } else if (error.response.status == 403) {
      localStorage.removeItem("data");
      window.location.href = "/accessdenied";
      return Promise.reject(error.response.data.msg);
    } else {
      return Promise.reject(error.response.data.msg);
    }
  }
);
instance.interceptors.request.use((req) => {
  req.withCredentials = true;
  return req;
});

export default instance;
