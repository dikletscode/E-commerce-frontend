import React, { useState } from "react";
import "../assets/profile.css";
import { EdiProfile } from "./input";

import StoreRegister from "../../../page/storeRegister";

const StartSelling = ({ profile }) => {
  const [display, setDisplay] = useState("none");
  const [isAdmin, setAdmin] = useState(false);
  const [isEditing, setIsEditing] = useState({
    noKtp: false,
    storeAddress: false,
  });
  const [data, setData] = useState(profile[0]);
  // console.log(data, "data");
  const checkAdmin = () => {
    for (let a in data) {
      if (data[a] === null) {
        console.log(data[a], a);
        setAdmin(false);
        break;
      } else {
        setAdmin(true);
      }
    }
  };

  const handleChange = (e) => {
    const dataOnChange = { ...data };
    dataOnChange[e.target.id] = e.target.value;
    setData(dataOnChange);
  };
  const changeState = () => {
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  console.log(isAdmin, "tes");
  const klik = {
    ktp: () => setIsEditing({ noKtp: true }),
    store: () => setIsEditing({ storeAddress: true }),
  };
  return (
    <>
      {profile.map((info) => {
        return (
          <>
            <div className="info-data">
              <div className="foto">
                <img
                  src={`http://localhost:3000/uploads/${info.images}`}
                  className="avatar-seller"
                />
              </div>
              <div className="mydata">
                <p>Lengkapi data seluruhnya untuk menyelesaikan pendaftaran</p>
                <table>
                  <tr>
                    <td>No KTP </td>
                    {isEditing.noKtp ? (
                      <td>
                        :
                        <EdiProfile
                          value={data.noKtp}
                          change={(e) => handleChange(e)}
                          id="noKtp"
                          data={data}
                        />
                      </td>
                    ) : (
                      <td>: {info.noKtp}</td>
                    )}
                    <td>
                      <button onClick={klik.ktp}>edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Store Address </td>
                    {isEditing.storeAddress ? (
                      <td>
                        :
                        <EdiProfile
                          value={data.storeAddress}
                          change={(e) => handleChange(e)}
                          id="storeAddress"
                          data={data}
                        />
                      </td>
                    ) : (
                      <td>: {info.storeAddress}</td>
                    )}
                    <td>
                      <button onClick={klik.store}>edit</button>
                    </td>
                  </tr>
                </table>
              </div>
              <StoreRegister
                profile={profile}
                display={display}
                close={() => setDisplay("none")}
                isAdmin={isAdmin}
              />
            </div>
            <div onClick={() => changeState()} style={{ textAlign: "center" }}>
              <button onClick={() => checkAdmin()} className="button-seller">
                START SELLING
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};
export default StartSelling;
