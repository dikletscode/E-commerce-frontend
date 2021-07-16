import React, { useEffect, useState, useContext } from "react";
import user from "../../../services/user.service";
import { getUserid } from "../../../helper/user";
import { Profile } from "./profile";
import { Loading } from "../../loading/loading";
import StartSelling from "./startSelling";

const DataFetch = ({ name }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    user
      .getPersonalInfo(getUserid())
      .then(async (res) => {
        setProfile(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Active = () => {
    if (name == "seller") {
      return <StartSelling profile={profile} />;
    } else {
      return <Profile profile={profile} />;
    }
  };
  if (profile.length) {
    return <Active />;
  } else {
    return <Loading display="block" />;
  }
};

export default DataFetch;
