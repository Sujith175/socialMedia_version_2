import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import Setting from "../../img/settings.png";
import TrendCard from "../TrendCard/TrendCard";
const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="navIcon">
        <img src={Home} alt="" />
        <img src={Setting} alt="" />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />
      <button className="button r-button">Share</button>
    </div>
  );
};

export default RightSide;
