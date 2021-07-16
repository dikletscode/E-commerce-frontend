import axios from "../axiosInstance";
import { getUserid } from "../helper/user";
import JwtValidity from "../helper/verify";

const getPersonalInfo = async (id) => {
  return await axios.get(`/profile/${id}`, { headers: JwtValidity() });
};

const updateProfileData = (id, objek) => {
  return axios.patch(`/profile/${id}`, objek, { headers: JwtValidity() });
};
const uploadImg = async (id, image) => {
  return await axios
    .patch(`/profile/upload/${id}`, image, {
      headers: JwtValidity(),
    })
    .then((res) => {
      console.log(res);
    });
};

export default {
  getPersonalInfo,
  updateProfileData,
  uploadImg,
};
