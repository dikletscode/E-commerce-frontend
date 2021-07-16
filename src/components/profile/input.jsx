import React from "react";

import { getUserid } from "../../helper/user";
import user from "../../services/user.service";
const changeFullName = (data, e) => {
  user.updateProfileData(getUserid(), data);
};

export const EdiProfile = (props) => {
  return (
    <form action="" onSubmit={() => changeFullName(props.data)}>
      <input
        type="text"
        id={props.id}
        onChange={props.change}
        value={props.value}
      />
      <input type="submit" />
    </form>
  );
};
export const HandleImage = (props) => {
  const formData = new FormData();
  const handleSubmit = () => {
    formData.append("images", props.value);
    user.uploadImg(getUserid(), formData);
  };

  return (
    <form action="" onSubmit={() => handleSubmit()}>
      <input
        name="images"
        type="file"
        id={props.id}
        accept="image/"
        onChange={props.change}
      />
      <button type="submit">submit</button>
    </form>
  );
};
