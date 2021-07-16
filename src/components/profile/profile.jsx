import React, { useEffect, useState, useContext } from "react";

import foto from "./assets/3.png";
import "./assets/profile.css";
import { EdiProfile, HandleImage } from "./input";

export const Profile = ({ profile }) => {
  const [isEditing, setIsEditing] = useState({
    fullName: false,
    address: false,
    notelp: false,
  });
  const [data, setData] = useState(profile[0]);
  const [img, setImg] = useState(profile[0].images);

  const handleChange = (e) => {
    const dataOnChange = { ...data };
    dataOnChange[e.target.id] = e.target.value;
    setData(dataOnChange);
  };
  const imageOnChange = (e) => {
    setImg(e.target.files[0]);
  };
  const klik = {
    name: () => setIsEditing({ fullName: true }),
    address: () => setIsEditing({ address: true }),
    notelp: () => setIsEditing({ notelp: true }),
  };

  console.log(data);
  // console.log(state.auth.result[0] || null, "asep");
  return (
    <>
      {profile.map((info) => {
        return (
          <div className="info-data">
            <div className="foto">
              <label class="upload">
                <img
                  src={`http://localhost:3000/uploads/${info.images}`}
                  height="50px"
                />
                <HandleImage
                  change={(e) => imageOnChange(e)}
                  id="images"
                  value={img}
                />
                <br />
                Upload Image
              </label>
            </div>
            <div className="mydata">
              <h3> change your information</h3>
              <table>
                <tr>
                  <td>FullName </td>
                  {isEditing.fullName ? (
                    <td>
                      <EdiProfile
                        value={data.fullName}
                        change={(e) => handleChange(e)}
                        id="fullName"
                        data={data}
                      />
                    </td>
                  ) : (
                    <td>: {info.fullName}</td>
                  )}
                  <td>
                    <button onClick={klik.name}>edit</button>
                  </td>
                </tr>
                <tr>
                  <td>Username </td>
                  <td>: {info.username}</td>
                </tr>

                <tr>
                  <td>Address</td>
                  {isEditing.address ? (
                    <td>
                      <EdiProfile
                        value={data.address}
                        change={(e) => handleChange(e)}
                        id="address"
                        data={data}
                      />
                    </td>
                  ) : (
                    <td>: {info.address}</td>
                  )}
                  <td>
                    <button onClick={klik.address}>edit</button>
                  </td>
                </tr>
                <tr>
                  <td>No Telephone</td>
                  {isEditing.notelp ? (
                    <td>
                      <EdiProfile
                        value={data.notelp}
                        change={(e) => handleChange(e)}
                        id="notelp"
                        data={data}
                      />
                    </td>
                  ) : (
                    <td>: {info.notelp}</td>
                  )}
                  <td>
                    <button onClick={klik.notelp}>edit</button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
};
