import React, { useContext, useState } from "react";
import { Profile } from "./profile";
import "./assets/profile.css";
import StartSelling from "./startSelling";
import DataFetch from "./DataFetch";
import { useLocation, Link } from "react-router-dom";

const Personal = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  return (
    <>
      <div className="info">
        <div className="info-transac">
          <img alt="" style={{ height: "80px", borderRadius: "100px" }} />
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
                <li>
                  <Link to="profile?tab=bio">change personal information</Link>
                </li>
                <li>
                  <Link to="profile?tab=seller"> Start Selling</Link>
                </li>
                <li>transaction</li>
                <li>set new address</li>
                <li>Bank ACcount</li>
              </ul>
            </nav>
          </div>

          <DataFetch name={query.get("tab")} />
        </div>
      </div>
    </>
  );
};
export default Personal;
