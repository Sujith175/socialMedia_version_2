import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileMode/ProfiileModal";
const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpen(true)}
          />
          <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>In Relationship </span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>India</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>IBM</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
