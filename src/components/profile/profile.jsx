import React from "react";
import foto from "./assets/1.png";
import "./assets/profile.css";

export const Profile = () => {
  return (
    <div className="info">
      <div className="info-transac">
        <img
          src={foto}
          alt=""
          style={{ height: "80px", borderRadius: "100px" }}
        />
        <p>Isyana</p>
        <div>
          <p>kotak masuk</p>
          <p>Chat</p>
          <p>Ulasan</p>
          <p>Pesanan Dikomplain</p>
        </div>
      </div>

      <div className="info-personal">
        <div>
          <nav className="nav-litle">
            <ul>
              <li>change personal information</li>
              <li>transaction</li>
              <li>set new address</li>
              <li>Bank ACcount</li>
            </ul>
          </nav>
        </div>
        <div className="info-data">
          <div className="foto">
            <img src={foto} style={{ height: "200px" }} />
          </div>
          <div className="mydata">
            <h3> change your information</h3>
            <p>Username :</p>
            <p>Full Name :</p>
            <p>Address :</p>
            <p>No Telepon :</p>
          </div>
        </div>
      </div>
    </div>
  );
};
